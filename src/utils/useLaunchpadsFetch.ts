import { useEffect } from "react";
import { addLaunchpads } from "./launchesSlice";
import { useDispatch } from "react-redux";

const useLaunchpadsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLaunchpads = async () => {
      const data = await fetch("https://api.spacexdata.com/v4/launchpads");
      const json = await data.json();
      dispatch(addLaunchpads(json));
    };
    fetchLaunchpads();
  }, [dispatch]);
};

export default useLaunchpadsFetch;
