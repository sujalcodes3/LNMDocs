import React from "react";
import ResultCard from "./ResultCard";

export default function Resultlist(props) {
  let content;
  if (props.type === "notes") {
    content = props.data.map((ele) => (
      <ResultCard
        subName={props.subName}
        title={ele.name}
        key={Math.random()}
        shareLink={ele.link}
      />
    ));
  } else {
    content = props.data.map((ele) => (
      <ResultCard
        subName={props.subName}
        key={Math.random()}
        title={props.title}
        year={ele.year}
        shareLink={ele.link}
      />
    ));
  }
  return <React.Fragment>{content}</React.Fragment>;
}
