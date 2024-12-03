import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLaunches } from "./launchesSlice";

const useLaunchesFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLaunches = async () => {
      const data = await fetch("https://api.spacexdata.com/v4/launches");
      const json = await data.json();
      dispatch(addLaunches(json));
    };
    fetchLaunches();
  }, [dispatch]);
};

export default useLaunchesFetch;
