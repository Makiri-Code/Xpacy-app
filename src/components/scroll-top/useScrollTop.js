import { useEffect } from "react";

export const useScrollTop = (value) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [value]);
};
