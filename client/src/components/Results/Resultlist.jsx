import React from "react";
import ResultCard from "./ResultCard";

export default function Resultlist(props) {
  console.log("ResultList");
  console.log(props.data);
  let content;
  if (props.type === "notes") {
    console.log("Notes type Checking");
    content = props.data.map((ele) => (
      <ResultCard
        subName={props.subName}
        title={ele.name}
        key={Math.random()}
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
