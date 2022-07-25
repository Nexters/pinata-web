import React from "react";

import NeedLogin from "components/event/NeedLogin";

const Event: React.FC = () => {
  const isLoggined = false;

  if (!isLoggined) {
    return <NeedLogin />;
  }

  return (
    <div className="App">
      <h1>Event Page</h1>
    </div>
  );
};

export default Event;
