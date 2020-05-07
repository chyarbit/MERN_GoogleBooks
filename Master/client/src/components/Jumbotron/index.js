// require dependecies
import React from "react";
import "./style.css";

// functional component called Jumbtron and passing in children
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

// export as Jumbotron
export default Jumbotron;
