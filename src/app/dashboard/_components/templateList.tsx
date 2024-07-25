"use client";
import { contentTemplates } from "@/lib/contentTemplate";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }

    return () => {};
  }, [searchCategory]);

  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
    return () => {};
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5 ">
      {templateList.map((template) => {
        return (
          <div key={template.slug}>
            <Link
              href={`/dashboard/${template.slug}`}
              className="bg-white dark:bg-[#222831] w-full rounded-lg h-[200px] p-4 flex text-center flex-col justify-center"
            >
              <template.icon className="h-12 w-12 mx-auto"></template.icon>
              <h2 className="font-semibold mt-5">{template.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateList;
