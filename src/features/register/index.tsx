/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectIsAuthenticated } from "@/store/slices/userSlice";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import { REGISTER_PAGE_CONFIG } from "@/constants/auth";
import { getData } from "@/lib/getData";
import { GET_LOGIN } from "@/app/api/graphQL/getLogin";

export default function RegisterPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_LOGIN);

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
        title={REGISTER_PAGE_CONFIG.title}
        linkText={REGISTER_PAGE_CONFIG.linkText}
        linkLabel={REGISTER_PAGE_CONFIG.linkLabel}
        linkHref={REGISTER_PAGE_CONFIG.linkHref}
        imageSrc={REGISTER_PAGE_CONFIG.imageSrc}
        imageAlt={REGISTER_PAGE_CONFIG.imageAlt}
      >
        <RegisterForm
          submitButtonText={REGISTER_PAGE_CONFIG.submitButtonText}
          submittingButtonText={REGISTER_PAGE_CONFIG.submittingButtonText}
        />
      </AuthLayout>
    </div>
  );
}
