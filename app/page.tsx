import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from 'react';

export default function Home() {
  // Hardcoded data for the dashboard
  const dashboardData = {
    totalVisitors: 12000,
    activeUsers: 450,
    salesData: [
      { month: 'January', sales: 200 },
      { month: 'February', sales: 300 },
      // ... more data
    ],
    // ... other data fields
  };

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>CS361 Project</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Features to come
          </Balancer>
        </p>
      </div>
      <div>
        <DashboardComponent data={dashboardData} />
      </div>
    </>
  );
}

function DashboardComponent({ data }) {
  // Render your dashboard using the data
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Visitors: {data.totalVisitors}</p>
      <p>Active Users: {data.activeUsers}</p>
      <h3>Sales Data</h3>
      <ul>
        {data.salesData.map((item, index) => (
          <li key={index}>{item.month}: {item.sales}</li>
        ))}
      </ul>
      {/* Add more data displays as needed */}
    </div>
  );
}
