import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { columns, rows } from "../utils/tableHelpers";
import useLaunchpadsFetch from "../utils/useLaunchpadsFetch";
import useLaunchesFetch from "../utils/useLaunchesFetch";
import usePayloadsFetch from "../utils/usePayloadsFetch";
import useRocketsFetch from "../utils/useRocketsFetch";

const MainContainer = () => {
  useLaunchesFetch();
  useLaunchpadsFetch();
  usePayloadsFetch();
  useRocketsFetch();

  const { launches, launchpads, payloads, rockets } = useSelector(
    (store) => store.launchData
  );

  const paginationModel = { page: 0, pageSize: 12 };

  return (
    <div>
      <Paper>
        <DataGrid
          rows={rows(launches, launchpads, payloads, rockets)}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          sx={{ border: 1 }}
        />
      </Paper>
    </div>
  );
};

export default MainContainer;
