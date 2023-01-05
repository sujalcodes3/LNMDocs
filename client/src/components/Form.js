import { useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";

export default function FormSelect(props) {
  const [value, setValue] = useState({
    subject: "",
    type: "",
    year: "",
  });
  const subjectChangeHandler = (value) => {
    console.log(value);
  }
  const typeChangeHandler = (value) => {
    console.log(value);
  }
  const yearChangeHandler = (value) => {
    console.log(value);
  }
  const subjects = ["COA", "M3"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });

  const types = ["Notes", "Previous-Year Papers"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });

  const years = ["2018", "2019", "2020", "2021"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });
  const animation =
  {
    mount: { y: 0 },
    unmount: { y: 25 },
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-10'>
      <div className='h-max w-max flex justify-evenly items-center gap-10'>
        <Select color="orange" label="Select Subject" animate={animation} onChange={subjectChangeHandler}>{subjects}</Select>
        <Select animate={animation} color="yellow" label="Select Type" onChange={typeChangeHandler}>{types}</Select>
        <Select animate={animation} color="green" label="Select Year" onChange={yearChangeHandler}>{years}</Select>
      </div>
      <Button variant='filled' className='w-48 m-auto my-4' disabled>
        Search
      </Button>
    </div>
  );
}
