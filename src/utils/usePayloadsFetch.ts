import { useEffect } from "react";
import { addPayloads } from "./launchesSlice";
import { useDispatch } from "react-redux";

const usePayloadsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPayloads = async () => {
      const data = await fetch("https://api.spacexdata.com/v4/payloads");
      const json = await data.json();
      dispatch(addPayloads(json));
    };
    fetchPayloads();
  }, [dispatch]);
};

export default usePayloadsFetch;
