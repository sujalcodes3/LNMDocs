import ResultCard from "./ResultCard";

export default function Resultlist(props) {
  console.log("ResultList");
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
    console.log("Papers type Checking");
    content = props.data.map((ele) => (
      <ResultCard
        subName={props.subName}
        key={Math.random()}
        title={props.title}
        year={ele.year}
      />
    ));
  }

  return <div className='flex w-max'>{content}</div>;
}
