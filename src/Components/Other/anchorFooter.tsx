import React from "react";
interface type {
  name: string;
}
function anchorFooter(props: type) {
  return (
    <a
      type="button"
      href="#"
      className="px-2"
      style={{ textDecoration: "none", color: "black" }}
    >
      {props.name}
    </a>
  );
}

export default anchorFooter;
