import { useContext } from "react";
import { StoreContext } from "./StoreContext";

const useSelector = (selector) => {
  const { state } = useContext(StoreContext);
  return selector(state);
};

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};

export { useSelector, useDispatch };
