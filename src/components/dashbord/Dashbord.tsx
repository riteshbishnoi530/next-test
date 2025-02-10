
"use client";
import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[200px] bg-black text-white p-5">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <div className="flex flex-col gap-6">
          <Link
            href="/calendly"
            className="text-white flex items-center justify-center bg-black font-medium text-base leading-6 border border-solid border-white rounded-xl p-4"
          >
            CalendarLibrary
          </Link>
          <Link
            href="/image-upload"
            className="text-white flex items-center justify-center bg-black font-medium text-base leading-6 border border-solid border-white rounded-xl p-4"
          >
            ImageUploader
          </Link>
          <Link
            href="/local-storage"
            className="text-white flex items-center justify-center bg-black font-medium text-base leading-6 border border-solid border-white rounded-xl p-4"
          >
            ValueBtn
          </Link>
          <Link
            href="/"
            className="text-white flex items-center justify-center bg-black font-medium text-base leading-6 border border-solid border-white rounded-xl p-4"
          >
            LogOut
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;