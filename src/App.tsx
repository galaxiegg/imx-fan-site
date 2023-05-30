import React from "react";
import ApplicationRouter from "./router/application-router";
import {FollowedProjectsProvider} from "./components/providers/followed-projects-provider";

function App() {
  return (
    <React.Fragment>
      <FollowedProjectsProvider>
        <ApplicationRouter />
      </FollowedProjectsProvider>
    </React.Fragment>
  );
}

export default App;
