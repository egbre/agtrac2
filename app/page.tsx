import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import React from 'react';
import DashboardComponent from './DashboardComponent';


export default function Home() {
  // Static dashboard data
  const [dashboardData, setDashboardData] = useState({
    totalVisitors: 12000,
    activeUsers: 450,
    salesData: [
      { month: 'January', sales: 200 },
      { month: 'February', sales: 300 },
      // ... more data
    ],
    usdaData: [], // Placeholder for dynamic data
  });

  // Function to fetch USDA data
  async function fetchUsdaData() {
    const url = "https://cs361-microservice-405022.uc.r.appspot.com/survey";
    const payload = {
      year: [2015, 2016, 2017],
      report: "Operator Household Income",
      state: "Georgia",
      farmtype: "Farm Operator Households",
      category_value: "All"
    };
    const headers = { 'Content-Type': 'application/json' };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Failed to retrieve data: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  // Function to process USDA data
  function processData(rawData) {
    let processedData = [];
    rawData.data.forEach(item => {
      if (item.variable_name === 'Estimated Adjusted Gross Income (AGI)') {
        processedData.push({ year: item.year, estimate: item.estimate || 0 });
      }
    });
    return processedData;
  }

  useEffect(() => {
    fetchUsdaData().then(data => {
      if (data && typeof data !== 'string') {
        const processedData = processData(data);
        setDashboardData(prevData => ({
          ...prevData,
          usdaData: processedData,
        }));
      }
    });
  }, []);

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        {/* Add your JSX here for the rest of the page */}
      </div>
      <div>
        <DashboardComponent data={dashboardData} />
      </div>
    </>
  );
}
