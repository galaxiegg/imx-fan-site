import React from "react";
import ApplicationRouter from "./router/application-router";
import {FollowedProjectsProvider} from "./components/providers/followed-projects-provider";
import GlobalProviders from "./components/providers/global-providers";

function App() {
  return (
    <React.Fragment>
      <GlobalProviders>
        <ApplicationRouter />
      </GlobalProviders>
    </React.Fragment>
  );
}

export default App;
