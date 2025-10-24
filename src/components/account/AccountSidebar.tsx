"use client";

import React from "react";
import { getUserInitials } from "@/utils/getUserInit";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface UserProfile {
  name: string;
  email?: string;
  avatar?: string;
}

interface AccountSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user?: UserProfile;
  menuItems?: MenuItem[];
}

const defaultUser: UserProfile = {
  name: "Dianne Russell",
};

const defaultMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "orders",
    label: "Lịch sử mua hàng",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    id: "accountInfo",
    label: "Thông tin cá nhân",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    id: "changePassword",
    label: "Đổi mật khẩu",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    id: "logout",
    label: "Logout",
    icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  },
];

export default function AccountSidebar({
  activeTab,
  setActiveTab,
  user = defaultUser,
  menuItems = defaultMenuItems,
}: AccountSidebarProps) {
  const renderIcon = (iconPath: string) => {
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={iconPath}
        />
      </svg>
    );
  };

  return (
    <div className="w-full lg:w-80 bg-white rounded-xl border border-gray-200 overflow-hidden h-fit">
      <div className="bg-nest-light-gray p-6 text-center border-b border-gray-200">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow-sm"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-nest-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 border-4 border-white shadow-sm">
            {getUserInitials(user.name)}
          </div>
        )}
        <h3 className="font-bold text-nest-dark text-lg">{user.name}</h3>
        {user.email && (
          <p className="text-sm text-nest-gray mt-1">{user.email}</p>
        )}
      </div>

      <nav className="p-2">
        {menuItems.map((item, index) => {
          const isLogout = item.id === "logout";
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full mt-2 flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? "bg-nest-primary/10 text-nest-primary font-semibold"
                  : isLogout
                  ? "text-nest-red hover:bg-nest-red/5"
                  : "text-nest-dark hover:bg-nest-light-gray"
              } ${
                index === menuItems.length - 1 && isLogout
                  ? "mt-2 border-t border-gray-200 pt-4"
                  : ""
              }`}
            >
              <span
                className={
                  isActive
                    ? "text-nest-primary"
                    : isLogout
                    ? "text-nest-red"
                    : "text-nest-gray"
                }
              >
                {renderIcon(item.icon)}
              </span>
              <span className="text-[15px]">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
