"use client";

import { useState } from "react";
import AccountSidebar from "@/components/account/AccountSidebar";
import AccountDashboard from "@/components/account/AccountDashboard";
import OrdersHistory from "@/components/account/OrdersHistory";
import Logout from "@/components/account/Logout";
import { selectUser, clearUser } from "@/store/slices/userSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import AccountInfoForm from "@/components/account/AccountInfo";
import ChangePasswordForm from "@/components/account/ChangePassForm";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    // Clear user from Redux store
    dispatch(clearUser());
    router.push("/");
  };

  return (
    <div className="bg-white  ">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <AccountSidebar
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="flex-1 min-w-0">
            {activeTab === "dashboard" && <AccountDashboard />}
            {activeTab === "orders" && <OrdersHistory />}
            {activeTab === "accountInfo" && <AccountInfoForm />}
            {activeTab === "changePassword" && <ChangePasswordForm />}
            {activeTab === "logout" && <Logout onConfirm={handleLogout} />}
          </div>
        </div>
      </div>
    </div>
  );
}
