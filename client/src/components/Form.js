import { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";

export default function FormSelect(props) {
  const [value, setValue] = useState({
    subject: "",
    type: "",
    year: "",
  });
  const [subjects, setSubjects] = useState([]);

  const subjectChangeHandler = (evalue) => {
    setValue((prevState) => {
      return {
        ...prevState,
        subject: evalue,
      };
    });
    console.log(value);
  };
  const typeChangeHandler = (evalue) => {
    setValue((prevState) => {
      return {
        ...prevState,
        type: evalue,
      };
    });
    console.log(value);
  };
  const yearChangeHandler = (evalue) => {
    setValue((prevState) => {
      return {
        ...prevState,
        year: evalue,

      };
    });
    setTimeout(() => {
      console.log(value);
    }, 5000);
  };
  const resetHandler = (event) => {
    setValue({
      subject: "",
      type: "",
      year: "",
    });
  };
  const fetchData = () => {
    fetch("http://localhost:8080/data/subjects")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setSubjects(data);
      })
    console.log("try");
  }
  useEffect(() => {
    fetchData();
    console.log("effecttest")
  }, []);
  console.log(value, "+test");
  const subjectOptions = subjects.map((ele) => {
    return (
      <Option className='font-semibold' value={ele.name}>
        {ele.name}
      </Option>
    );
  });
  const types = [
    {
      key: 1,
      name: "Notes",
    },
    {
      key: 2,
      name: "Previous-Year Papers",
    },
  ];

  const typesOptions = types.map((ele) => {
    return (
      <Option className='font-semibold' value={ele.name}>
        {ele.name}
      </Option>
    );
  });

  const years = ["2018", "2019", "2020", "2021"].map((ele) => {
    return (
      <Option className='font-semibold' value={ele}>
        {ele}
      </Option>
    );
  });
  const animation = {
    mount: { y: 0 },
    unmount: { y: 25 },
  };
  const yearEnable = value.type === "Notes" ? false : true;
  const submitEnable = !(
    value.subject &&
    value.type &&
    !yearEnable &&
    value.year
  );
  const submitEnabler = {
    disabled: submitEnable,
  };
  //
  // const yearEnabler = {
  //   disabled: yearEnable,
  // };

  return (
    <div className='flex h-max w-92 p-10 flex-col justify-center items-center gap-y-10 rounded-lg   bg-slate-100 backdrop-blur-sm backdrop-brightness-150'>
      <div className='h-max w-max flex flex-col justify-evenly items-center gap-10'>
        <Select
          value={value.subject}
          color='orange'
          label='Select Subject'
          animate={animation}
          onChange={subjectChangeHandler}
          className='brightness-200 w-72 shadow-sm shadow-indigo-900'
        >
          {subjectOptions}
        </Select>
        <Select
          value={value.type}
          animate={animation}
          color='yellow'
          label='Select Type'
          onChange={typeChangeHandler}
          className='brightness-200 w-72 shadow-sm shadow-indigo-900'
        >
          {typesOptions}
        </Select>
        {yearEnable && (
          <Select
            value={value.year}
            animate={animation}
            color='green'
            label='Select Year'
            onChange={yearChangeHandler}
            className='brightness-200 w-72 shadow-sm shadow-indigo-900'
          >
            {years}
          </Select>
        )}
      </div>
      <div className='flex gap-8'>
        <Button variant='gradient' className='w-40 m-auto ' {...submitEnabler}>
          Search
        </Button>
        <Button
          variant='outlined'
          className='w-24 m-auto'
          onClick={resetHandler}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
