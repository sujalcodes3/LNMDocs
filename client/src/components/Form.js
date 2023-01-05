import SelectBox from "./SelectBox";
import { Button } from "@material-tailwind/react";

export default function FormSelect(props) {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-10'>
      <div className='h-max w-screen flex justify-evenly items-center'></div>
      <Button variant='outlined' className='w-48 m-auto my-4 '>
        Search
      </Button>
    </div>
  );
}
