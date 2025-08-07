import { useEffect } from "react";

export const useTitle = (location) => {
  useEffect(() => {
    document.title = `Xpacy | ${location}`;

    return () => {
      document.title = "Xpacy | Find Properties With Ease";
    };
  }, [location]);
};
