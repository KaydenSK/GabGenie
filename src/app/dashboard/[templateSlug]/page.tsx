"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/contentTemplate";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import Editor from "./_components/editor";
import { chatSession } from "@/lib/gemini-ai";
import axios from "axios";

interface templateSlugProps {
  templateSlug: string;
}
const TemlatePage = ({ params }: { params: templateSlugProps }) => {
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const generateAiContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + SelectedPrompt;
      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result.response.text());

      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const onSubmit = async (formData: FormData) => {
    generateAiContent(formData);
  };
  return (
    <div className="mx-5 mt-1 py-2">
      <div className="mt-5 py-6 px-4 bg-white dark:bg-black rounded dark:border">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>

      <form action={onSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white  dark:bg-black">
          {selectedTemplate?.form?.map((ele) => (
            <div key={selectedTemplate.slug}>
              <label>{ele.label}</label>
              {ele.field === "input" ? (
                <div className="mt-5">
                  <Input name="title" className="dark:border-white" />
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" className="dark:border-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Button className="mt-5" type="submit">
          {isLoading ? (
            <Loader2Icon className="animate-spin h-5 w-5" />
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemlatePage;
