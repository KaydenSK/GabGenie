"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  { text: "100,000 words/purchase" },
  { text: "All template Access" },
  { text: "Retain All History" },
];

const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");

    // push user to stripe url;
    router.push(response.data.url);
  };
  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white dark:bg-black rounded">
        <h2 className="font-medium ">Upgrade Credit</h2>
      </div>
      <div className="mt-5 py-6 px-4 rounded  ">
        <Card className="w-[350px] flex flex-col mx-auto dark:bg-[#222831]">
          <CardHeader>
            <CardTitle>10$ One-Time Purchase</CardTitle>
            <CardDescription>10,000 AI Credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="">
              {features.map((feature, index) => (
                <p key={index} className="flex my-2 gap-2">
                  <Check />
                  {feature.text}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleOnClick}>Purchase</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
