import Auth from "@/components/auth";
import { ModeToggle } from "@/components/darkMode";
import { SearchIcon } from "lucide-react";
import React from "react";
import Categories from "./categories";

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  },
];
const SearchDashboard = ({
  searchState = "",
  onSearchInput,
}: {
  searchState: string;
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flex-row gap-2 mt-4 py-6 px-4 bg-white dark:bg-black rounded-md">
        <div className="flex  flex-col gap-2  ">
          <div className="flex border p-2  bg-white dark:bg-black   dark:border-white rounded-full gap-2">
            <SearchIcon className="h-5 w-5 dark:bg-black" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-black dark:text-white border-none"
              onChange={(e) => onSearchInput(e.target.value)}
              value={searchState}
            />
          </div>
        <Categories items={categories} />
        </div>

        
      </div>
    </div>
  );
};

export default SearchDashboard;
