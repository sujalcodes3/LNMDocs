import { useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";

export default function FormSelect(props) {
  const [value, setValue] = useState({
    subject: "",
    type: "",
    year: "",
  });
  const subjectChangeHandler = (value) => {
    setValue((prevState) => {
      return {
        ...prevState,
        subject: value,
      };
    });
    console.log(value);
  };
  const typeChangeHandler = (value) => {
    setValue((prevState) => {
      return {
        ...prevState,
        type: value,
      };
    });
    console.log(value);
  };
  const yearChangeHandler = (value) => {
    setValue((prevState) => {
      return {
        ...prevState,
        year: value,
      };
    });
    console.log(value);
  };
  const resetHandler = (event) => {
    setValue({
      subject: "",
      type: "",
      year: "",
    });
  };

  const subjects = ["COA", "M3"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });

  const types = ["Notes", "Previous-Year Papers"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });

  const years = ["2018", "2019", "2020", "2021"].map((ele) => {
    return <Option value={ele}>{ele}</Option>;
  });
  const animation = {
    mount: { y: 0 },
    unmount: { y: 25 },
  };

  const submitEnable = !(value.subject && value.type && value.year);
  const submitEnabler = {
    disabled: submitEnable,
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-10'>
      <div className='h-max w-max flex justify-evenly items-center gap-10'>
        <Select
          value={value.subject}
          color='orange'
          label='Select Subject'
          animate={animation}
          onChange={subjectChangeHandler}
        >
          {subjects}
        </Select>
        <Select
          value={value.type}
          animate={animation}
          color='yellow'
          label='Select Type'
          onChange={typeChangeHandler}
        >
          {types}
        </Select>
        <Select
          value={value.year}
          animate={animation}
          color='green'
          label='Select Year'
          onChange={yearChangeHandler}
        >
          {years}
        </Select>
      </div>
      <div className='flex gap-8'>
        <Button
          variant='filled'
          className='w-48 m-auto my-4'
          {...submitEnabler}
        >
          Search
        </Button>
        <Button
          variant='outlined'
          className='w-48 m-auto my-4'
          onClick={resetHandler}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
