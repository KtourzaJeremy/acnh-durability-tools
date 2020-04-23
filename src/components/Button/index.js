import React from "react";
import "./style.css";

export default function Button(props) {
  const { theme, type, children, ...others } = props;

  return (
    <button
      className={"Button Button-theme-" + theme + " Button-type-" + type}
      {...others}
    >
      <div>{children}</div>
    </button>
  );
}
