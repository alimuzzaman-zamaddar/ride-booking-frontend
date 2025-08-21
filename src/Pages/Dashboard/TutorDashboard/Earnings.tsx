import React, { useState } from "react";
import Button from "../../../components/Tags/Button/Button";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import { FaAngleLeft } from "react-icons/fa";
import EarningHistory from "./EarningHistory";
import TransactionHistory from "./TransactionHistory";

type SummaryCard = {
  label: string;
  amount: string;
  subtext: string;
  iconColor: string;
  textColor: string;
};

type MonthlyEarning = {
  month: string;
  lessons: number;
  hours: number;
  amount: string;
};

type PerformanceMetric = {
  label: string;
  value: number;
  color: string;
  textColor:string
};

const Earnings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Overview" | "Earning History" | "Transaction History"
  >("Overview");

  const summaryCards: SummaryCard[] = [
    {
      label: "This Month",
      amount: "$1,240",
      subtext: "+15% from last month",
      iconColor: "bg-green-200 text-green-600",
      textColor: "text-green-600",
    },
    {
      label: "Total Earned",
      amount: "$4,240",
      subtext: "Last 4 Months",
      iconColor: "bg-blue-200 text-blue-600",
      textColor: "text-blue-600",
    },
    {
      label: "Pending",
      amount: "$20",
      subtext: "3 payments pending",
      iconColor: "bg-yellow-200 text-yellow-600",
      textColor: "text-yellow-600",
    },
    {
      label: "Available Balance",
      amount: "$230",
      subtext: "Based on 12 lessons",
      iconColor: "bg-purple-200 text-purple-600",
      textColor: "text-purple-600",
    },
  ];

  const monthlyEarnings: MonthlyEarning[] = [
    { month: "December 2024", lessons: 31, hours: 31, amount: "$1,240" },
    { month: "November 2024", lessons: 31, hours: 31, amount: "$1,240" },
    { month: "October 2024", lessons: 31, hours: 31, amount: "$1,240" },
  ];

  const performanceMetrics: PerformanceMetric[] = [
    {
      label: "Lesson Completion Rate",
      value: 98,
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      label: "Student Retention",
      value: 85,
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      label: "Response Rate",
      value: 85,
      color: "bg-purple-500",
      textColor: "text-purple-500",
    },
  ];

  return (
    <div className="">
      <div className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="  border border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[14px] font-semibold duration-700 hover:text-text-white px-6 py-[14px] cursor-pointer text-secondary-black rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className=" 2xl:mx-[200px]">
        <div className="bg-primary-blue p-4 xl:p-8 rounded-xl mb-8 flex gap-4 flex-col xl:flex-row justify-between xl:items-center">
          <div className="">
            <Heading
              Variant="h2"
              Txt="Schedule Management"
              className="text-[24px] xl:text-[32px] text-text-white font-semibold mb-1"
            />
            <Paragraph
              className="text-secondary-white font-normal text-sm xl:text-[16px]  leading-[150%] "
              Txt="Manage your teaching schedule and availability"
            />
          </div>
          <div className="">
            <Button
              Txt="Withdraw"
              className="bg-secondary-blue py-2 xl:py-[14px] font-semibold px-3 xl:px-15 hover:bg-bg-white duration-500 cursor-pointer hover:text-secondary-blue rounded-md text-text-white"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {summaryCards.map((card, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-secondary-black font-normal">
                      {card.label}
                    </p>
                    <h3 className="text-[24px] xl:text-[32px] text-secondary-black font-bold">
                      {card.amount}
                    </h3>
                    <p className={`text-sm ${card.textColor}`}>
                      {card.subtext}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconColor}`}
                  >
                    <span className="text-lg xl:text-[20px] ">$</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 bg-bg-light-gray rounded-xl  p-2">
            {["Overview", "Earning History", "Transaction History"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-[16px] text-secondary-black px-10 py-1 xl:py-2 rounded-lg cursor-pointer font-semibold  ${
                  activeTab === tab
                    ? "bg-white shadow  text-secondary-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Monthly Earnings */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-[20px] xl:text-[24px] text-secondary-black font-semibold mb-4">
                  Monthly Earnings
                </h3>
                <div className="space-y-4">
                  {monthlyEarnings.map((entry, index) => (
                    <div
                      key={index}
                      className="flex flex-col xl:flex-row justify-between bg-gray-white p-4 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-[16px] text-secondary-black mb-1">
                          {entry.month}
                        </p>
                        <p className="text-sm  text-text-gray">
                          {entry.lessons} lessons • {entry.hours} hours
                        </p>
                      </div>
                      <p className="text-secondary-blue text-[20px] font-bold">
                        {entry.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-[20px] xl:text-[24px] text-secondary-black font-semibold mb-4">
                  Performance Metrics
                </h3>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="">
                      <div className="flex flex-col xl:flex-row justify-between mb-1">
                        <p className="text-[16px] text-alt-gray font-semibold">
                          {metric.label}
                        </p>
                        <p
                          className={`${metric.textColor} text-[16px] font-semibold`}
                        >
                          {metric.value}%
                        </p>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className={`${metric.color} h-2 rounded-full`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  {/* Average Rating */}
                  <div className="flex justify-between mt-4">
                    <p className="text-[16px] text-alt-gray font-semibold">
                      Average Rating
                    </p>
                    <p className="text-yellow-500 font-bold flex items-center">
                      ⭐ 4.9
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Earning History" && (
            <div className=" xl:w-3xl">
              <EarningHistory />
            </div>
          )}

          {activeTab === "Transaction History" && (
            <div className="xl:w-3xl">
              <TransactionHistory />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
