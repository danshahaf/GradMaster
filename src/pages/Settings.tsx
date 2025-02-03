import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="w-[60%] mx-auto py-8 mt-16 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Account Settings */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Account Information</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-md">Email: <strong>dan.shachaf@gmail.com</strong></span>
              <Button variant="outline" className="w-40">Change Email</Button>
            </div>
          </div>
        </Card>

        {/* Subscription Management */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Subscription Management</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-md">Current Plan: <strong>Premium</strong></span>
              <Button variant="outline" className="w-40">Change Plan</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md">Next Billing Date: <strong>March 15, 2025</strong></span>
              <Button variant="outline" className="w-40">View Billing</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md">Cancel Subscription</span>
              <Button variant="destructive" className="w-40">Cancel</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
