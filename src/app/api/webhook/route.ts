import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  if (!sig) {
    return new Response("Stripe signature missing", { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      {
        error: "invalid Signature",
      },
      {
        status: 400,
      }
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;

  if (event.type === "checkout.session.completed") {
    if (!userId) {
      return new NextResponse("Invalid Session", { status: 400 });
    }
    try {
      const findUserByUserId = await db.user.findUnique({
        where: {
          userId,
        },
      });

      if (!findUserByUserId) {
        await db.user.create({
          data: {
            userId,
            totalCredit: 10000 + 10000,
          },
        });
      } else {
        await db.user.update({
          where: {
            userId,
          },
          data: {
            totalCredit: findUserByUserId.totalCredit + 10000,
          },
        });
      }
    } catch (error) {
      return new NextResponse("User no authorized", { status: 500 });
    }
  } else {
    return new NextResponse("Invalid Event", { status: 200 });
  }

  return new NextResponse("Success", { status: 200 });
}
