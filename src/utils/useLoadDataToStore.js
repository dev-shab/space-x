import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./getData";
import { addLaunches } from "./slices/launchesSlice";
import { addLaunchpads } from "./slices/launchpadsSlice";
import { addRockets } from "./slices/rocketsSlice";
import { addPayloads } from "./slices/payloadsSlice";

export const useLoadDataToStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchLaunches = getData("launches");
  const fetchLaunchpads = getData("launchpads");
  const fetchRockets = getData("rockets");
  const fetchPayloads = getData("payloads");
  useEffect(() => {
    Promise.all([fetchLaunches, fetchLaunchpads, fetchRockets, fetchPayloads])
      .then(([launches, launchpads, rockets, payloads]) => {
        dispatch(addLaunches(launches));
        dispatch(addLaunchpads(launchpads));
        dispatch(addRockets(rockets));
        dispatch(addPayloads(payloads));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch, fetchLaunches, fetchLaunchpads, fetchRockets, fetchPayloads]);

  return { isLoading };
};
