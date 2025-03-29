import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./getData";
import { addLaunches } from "./slices/launchesSlice";
import { addLaunchpads } from "./slices/launchpadsSlice";
import { addRockets } from "./slices/rocketsSlice";

export const useLoadDataToStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchLaunches = getData("launches");
  const fetchLaunchpads = getData("launchpads");
  const fetchRockets = getData("rockets");
  useEffect(() => {
    Promise.all([fetchLaunches, fetchLaunchpads, fetchRockets])
      .then(([launches, launchpads, rockets]) => {
        dispatch(addLaunches(launches));
        dispatch(addLaunchpads(launchpads));
        dispatch(addRockets(rockets));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch, fetchLaunches, fetchLaunchpads, fetchRockets]);

  return { isLoading };
};
