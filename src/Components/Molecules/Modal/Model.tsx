import React, { useEffect } from "react";
import { createPortal } from "react-dom";
function Model({ children }: any) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return createPortal(
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-[#00000060]">
      <div className="overflow-y-auto rounded-xxl bg-white p-6">{children}</div>
    </div>,
    document.body
  );
}
export default Model;
