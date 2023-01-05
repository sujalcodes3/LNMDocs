import Select from "react-select";

export default function SelectBox(props) {
  const selectedHandler = (selectedOption) => {
    console.log(selectedOption.value);
  };
  return (
    <div className='w-48'>
      <Select onChange={selectedHandler} options={props.options} />
    </div>
  );
}
