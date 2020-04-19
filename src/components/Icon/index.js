import React from "react";
import "./style.css";

export default function Icon(props) {
  const { name } = props;

  return <i className="material-icons">{name}</i>;
}
