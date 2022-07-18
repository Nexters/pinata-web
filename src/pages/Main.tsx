import ROUTE from "constants/route";
import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="App">
      <h1>Main Page</h1>
      <Link to={ROUTE.GIFTS}>
        Gift
      </Link>
      <Link to={ROUTE.EVENT.LIST}>
        Event List
      </Link>
    </div>
  );
};

export default Main;
