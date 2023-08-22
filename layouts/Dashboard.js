import { ActiveLink } from "@components/ui/common";
import { useRouter } from "next/router";
import React, { Children } from "react";

const DashboardLayout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <section className="flex">
      <div className="w-2/6  h-screen" style={{ backgroundColor: "#4338ca" }}>
        <div className="flex flex-col gap-5 p-16">
          <ActiveLink href="/dashboard">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard" && "bg-white"
              }`}
            >
              Overview
            </a>
          </ActiveLink>
          <ActiveLink href="/dashboard/performance">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard/performance" && "bg-white"
              }`}
            >
              Performance
            </a>
          </ActiveLink>
          <ActiveLink href="/dashboard/valuation">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard/valuation" && "bg-white"
              }`}
            >
              Valuation
            </a>
          </ActiveLink>
          <ActiveLink href="/dashboard/indicators">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard/indicators" && "bg-white"
              }`}
            >
              Indicators
            </a>
          </ActiveLink>
          <ActiveLink href="/dashboard/trends">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard/trends" && "bg-white"
              }`}
            >
              Trends
            </a>
          </ActiveLink>
          <ActiveLink href="/dashboard/analysis">
            <a
              className={`font-medium mr-8 text-white hover:text-gray-900 p-3 rounded ${
                pathname === "/dashboard/analysis" && "bg-white"
              }`}
            >
              Analysis
            </a>
          </ActiveLink>
        </div>
      </div>
      <div className="w-4/6 p-5">{children}</div>
    </section>
  );
};

export default DashboardLayout;
