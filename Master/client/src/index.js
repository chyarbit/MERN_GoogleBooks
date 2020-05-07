// require dependencies
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// render HTML page by referencing "root"
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
