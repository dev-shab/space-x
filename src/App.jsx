import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { useLoadDataToStore } from "./utils/useLoadDataToStore";

const App = () => {
  const { isLoading } = useLoadDataToStore();
  if (isLoading) return "Loading";
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
