import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`text-white px-9 drop-shadow-md font-semibold py-2 rounded-lg  ${
        props.type === "submit" || props.type === "download"
          ? "bg-purpleButton hover:bg-purpleButtonLight"
          : "bg-transparent border-2 hover:border-purpleButton"
      }`}
    >
      {props.children}
    </button>
  );
}
