"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie, destroyCookie } from "nookies";
import { toast } from "react-toastify";
import { clearUser } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/hooks";

const ReissuePasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const handlerReissuePassword = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/reissue-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, new_password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Cập nhật mật khẩu thành công");
        dispatch(clearUser());
        destroyCookie(null, "session_log_id", { path: "/" });
        router.push("/");
      } else {
        toast.error(data.error || "Đã có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Không thể cập nhật mật khẩu. Vui lòng thử lại sau.");
    }
  };

  useEffect(() => {
    const em = searchParams.get("em");
    const mk = searchParams.get("mk");

    if (em && mk) {
      handlerReissuePassword(em, mk);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return <div className="p-4 text-center">Đang xử lý yêu cầu của bạn...</div>;
};

export default ReissuePasswordPage;
