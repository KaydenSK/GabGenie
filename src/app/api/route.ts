import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { SiBabel } from "react-icons/si";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId)
      return new NextResponse("User not Authenticated", {
        status: 401,
      });

    const { title, description, templateUsed } = await req.json();

    const createNewOutput = await db.aIOutput.create({
      data: {
        userId,
        title,
        description,
        templateUsed,
      },
    });

    revalidatePath("/");
    return NextResponse.json(createNewOutput, { status: 200 });
  } catch (err) {
    return new NextResponse("Post AI geneate : new output generation error", {
      status: 500,
    });
  }
}
