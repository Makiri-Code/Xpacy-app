import { useFetchResult } from "../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "../../components/scroll-top/useScrollTop";
import { useTitle } from "../../components/useTitle/useTitle";
import { Outlet } from "react-router-dom";
const Shortlet = () => {
  useTitle("Shortlet");

  return <Outlet />;
};

export default Shortlet;
