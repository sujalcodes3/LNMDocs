import SelectBox from "./SelectBox";
import { Button } from "@material-tailwind/react";
export default function FormSelect(props) {
  const subjects = [
    { value: "COA", label: "COA" },
    { value: "M3", label: "M3" },
  ];
  const types = [
    { value: "Notes", label: "Notes" },
    { value: "Previous-Year Papers", label: "Previous-Year Papers" },
  ];
  const years = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
  ];

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-10'>
      <div className='h-max w-screen flex justify-evenly items-center'>
        <SelectBox options={subjects} />
        <SelectBox options={types} />
        <SelectBox options={years} />
      </div>
      <Button variant='outlined' className='w-48 m-auto my-4 '>
        Search
      </Button>
    </div>
  );
}
