"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPassForm from "@/components/auth/ForgotPassForm";
import { FORGOT_PAGE_CONFIG } from "@/constants/auth";

export default function Page() {
  return (
    <div className="bg-white">
      <AuthLayout
        title={FORGOT_PAGE_CONFIG.title}
        linkText={FORGOT_PAGE_CONFIG.linkText}
        linkLabel={FORGOT_PAGE_CONFIG.linkLabel}
        linkHref={FORGOT_PAGE_CONFIG.linkHref}
        imageSrc={FORGOT_PAGE_CONFIG.imageSrc}
        imageAlt={FORGOT_PAGE_CONFIG.imageAlt}
      >
        <ForgotPassForm
          submitButtonText={FORGOT_PAGE_CONFIG.submitButtonText}
          submittingButtonText={FORGOT_PAGE_CONFIG.submittingButtonText}
        />
      </AuthLayout>
    </div>
  );
}
