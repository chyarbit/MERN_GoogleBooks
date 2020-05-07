// require dependencies
import React from "react";

// functional component called Card
// passing in icon, title, and children
function Card({ icon, title, children }) {
  // returning a Bootstrap card layout
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* displays icon/title passed in through props*/}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* passing the element body as children as element body has yet to be determined*/}
      <div className="card-body">{children}</div>
    </div>
  );
}

// export out as Card
export default Card;
