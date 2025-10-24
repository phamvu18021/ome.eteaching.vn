/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectIsAuthenticated } from "@/store/slices/userSlice";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { LOGIN_PAGE_CONFIG } from "@/constants/auth";
import { getData } from "@/lib/getData";
import { GET_REGISTER } from "@/app/api/graphQL/getRegister";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_REGISTER);

        setData(data?.pageBy?.content || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <AuthLayout
        title={LOGIN_PAGE_CONFIG.title}
        linkText={LOGIN_PAGE_CONFIG.linkText}
        linkLabel={LOGIN_PAGE_CONFIG.linkLabel}
        linkHref={LOGIN_PAGE_CONFIG.linkHref}
        imageSrc={LOGIN_PAGE_CONFIG.imageSrc}
        imageAlt={LOGIN_PAGE_CONFIG.imageAlt}
      >
        <LoginForm
          submitButtonText={LOGIN_PAGE_CONFIG.submitButtonText}
          submittingButtonText={LOGIN_PAGE_CONFIG.submittingButtonText}
        />
      </AuthLayout>
    </div>
  );
}
