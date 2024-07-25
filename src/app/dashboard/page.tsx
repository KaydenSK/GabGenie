"use client";
import React, { useState } from "react";
import SearchDashboard from "./_components/search-dashboard";
import TemplateList from "./_components/templateList";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div>
      <SearchDashboard
        onSearchInput={setSearchInput}
        searchState={searchInput}
      />
      <TemplateList searchInput={searchInput} />
    </div>
  );
};

export default Dashboard;
