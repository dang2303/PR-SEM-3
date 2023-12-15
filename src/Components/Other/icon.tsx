import React from "react";
import { Link } from "react-router-dom";
interface nameIcon {
  name: string;
}
function icon(props: nameIcon) {
  return (
    <Link to="/" className="btn btn-floating m-1" role="button">
      <i className={`"bi bi-${props.name}`}></i>
    </Link>
  );
}

export default icon;
