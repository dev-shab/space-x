import React from "react";
import { useSelector } from "react-redux";

const LaunchesTable = () => {
  const launches = useSelector((store) => store.launches);
  const launchpads = useSelector((store) => store.launchpads);
  const rockets = useSelector((store) => store.rockets);
  const payloads = useSelector((store) => store.payloads);

  console.log(launches);
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-3/4 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th>No:</th>
            <th>Launches(UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>
            <th>Launch Status</th>
            <th>Rocket</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch, index) => {
            return (
              <tr>
                <th>{index}</th>
                <td>{launch.date_utc}</td>
                <td>
                  {
                    launchpads.find(
                      (launchpad) => launchpad.id === launch.launchpad
                    )?.name
                  }
                </td>
                <td>{launch.name}</td>
                <td>
                  {
                    payloads.find((payload) => payload.launch === launch.id)
                      ?.orbit
                  }
                </td>
                <td>{launch.success ? "success" : "failed"}</td>
                <td>
                  {rockets.find((rocket) => rocket.id === launch.rocket).name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LaunchesTable;
