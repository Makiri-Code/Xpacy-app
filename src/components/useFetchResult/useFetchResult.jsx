import { useEffect } from "react";
export const useFetchResult = (
  currentPage,
  setData,
  purpose,
  fetchUrl,
  setIsLoading = () => {}
) => {
  // Get next page
  const url = fetchUrl
    ? fetchUrl
    : `https://app.xpacy.com/property/fetch-properties?purpose=${purpose}&page=${currentPage}`;
  useEffect(() => {
    const fetchNextPage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching property", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNextPage();
  }, [currentPage, setData]);
};
