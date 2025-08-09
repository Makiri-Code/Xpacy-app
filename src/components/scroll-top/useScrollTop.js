import { useEffect } from "react";

export const useScrollTop = (value, additionalValue) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [value, additionalValue]);
};
