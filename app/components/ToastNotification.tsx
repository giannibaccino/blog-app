"use client";

import { useEffect, useRef } from "react";
import { showToast } from "nextjs-toast-notify";
import { useSearchParams } from "next/navigation";

export default function ToastNotification() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (success === "true" && !hasShownToast.current) {
      hasShownToast.current = true;
      showToast.success("Post created successfully!", {
        duration: 3000,
        progress: true,
        position: "top-center",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    }
  }, [success]);

  return null;
}
