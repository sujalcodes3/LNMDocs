import Select from "@material-tailwind/react";

export default function SelectBox(props) {
  return (
    <div className='w-48'>
      <Select label={`"Select "  ${props.name}`}>{props.options}</Select>
    </div>
  );
}
