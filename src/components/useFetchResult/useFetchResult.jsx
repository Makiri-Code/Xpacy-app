import { useEffect, useState } from "react";
export const useFetchResult = (
  currentPage,
  dispatch,
  purpose,
  disPatchType,
  fetchUrl
) => {
  const [isLoading, setIsLoading] = useState(true);
  // Get next page
  const url = fetchUrl
    ? fetchUrl
    : `https://app.xpacy.com/property/fetch-properties?purpose=${purpose}&page=${currentPage}`;
  useEffect(() => {
    const fetchNextPage = async () => {
      try {
        // setIsLoading();
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: disPatchType, payload: data });
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNextPage();
  }, [currentPage, url]);
  return [isLoading];
};
