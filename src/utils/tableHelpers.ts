import { GridColDef } from "@mui/x-data-grid";
import { DateTime } from "luxon";

export const columns: GridColDef[] = [
  { field: "id", headerName: "No", width: 70 },
  { field: "date_utc", headerName: "Launched (UTC)", width: 330 },
  { field: "location", headerName: "Location", width: 230 },
  { field: "mission", headerName: "Mission", width: 330 },
  { field: "orbit", headerName: "Orbit", width: 130 },
  { field: "status", headerName: "Launch Status", width: 130 },
  { field: "rocket", headerName: "Rocket", width: 130 },
];

export const rows = (launches, launchpads, payloads, rockets) => {
  const rowData = launches.map((launch, index) => {
    return {
      id: index,
      date_utc: DateTime.fromISO(launch.date_utc).toLocaleString(
        DateTime.DATETIME_FULL
      ),
      location: launchpads.find(
        (launchpad) => launchpad.id === launch.launchpad
      )?.locality,
      mission: launch.name,
      orbit: payloads.find((payload) => payload.id === launch.payloads[0])
        ?.orbit,
      status: launch.success ? "success" : "failed",
      rocket: rockets.find((rocket) => rocket.id === launch.rocket)?.name,
    };
  });

  return rowData;
};
