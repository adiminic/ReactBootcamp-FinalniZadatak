import { useContext } from "react";
import { GlobalContext } from "../context/Context";

export const useData = () => {
  const appContext = useContext(GlobalContext);
  return appContext;
};
