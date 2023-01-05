import Select from "react-select";

export default function SelectBox(props) {
  return (
    <div className='w-48'>
      <Select options={props.options} />
    </div>
  );
}
