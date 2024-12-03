import { useEffect } from "react";
import { addRockets } from "./launchesSlice";
import { useDispatch } from "react-redux";

const useRocketsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRockets = async () => {
      const data = await fetch("https://api.spacexdata.com/v4/rockets");
      const json = await data.json();
      dispatch(addRockets(json));
    };
    fetchRockets();
  }, [dispatch]);
};

export default useRocketsFetch;
