"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <ReactQuill
      className="h-[350px] pb-10 bg-white dark:bg-black dark:border-white whitespace-pre-wrap"
      value={value}
      theme="snow"
    ></ReactQuill>
  );
};

export default Editor;
