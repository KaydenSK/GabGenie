"use client";
import React from "react";
import { CategoryProps } from "./categories";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const CategoryItem = ({ name, value }: CategoryProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");

  const isSelected = currentCategory === value;
  const handleOnClick = () => {
    /* localhost:3000/dashboard/?category=Youtube */
    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: {
          category: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };
  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer dark:border-white",
        isSelected && "bg-primary text-white dark:text-black"
      )}
    >
      {name}
    </button>
  );
};

export default CategoryItem;
