import { useEffect } from "react";
export const useFetchResult = (
  currentPage,
  dispatch,
  purpose,
  disPatchType,
  fetchUrl
) => {
  // Get next page
  const url = fetchUrl
    ? fetchUrl
    : `https://app.xpacy.com/property/fetch-properties?purpose=${purpose}&page=${currentPage}`;
  useEffect(() => {
    const fetchNextPage = async () => {
      try {
        dispatch({ type: "setIsLoading", payload: true });
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: disPatchType, payload: data });
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        dispatch({ type: "setIsLoading", payload: false });
      }
    };
    fetchNextPage();
  }, [currentPage, url]);
};
