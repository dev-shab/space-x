import React from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const launches = useSelector((store) => store.launches);
  const launchPads = useSelector((store) => store.launchpads);
  const rockets = useSelector((store) => store.rockets);

  return <div>Body</div>;
};

export default Body;
