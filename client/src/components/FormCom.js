import { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";

export default function FormSelect(props) {
  const [fetchedSubjects, setFetchedSubjects] = useState([]);

  const [enteredValue, setEnteredValue] = useState({
    subject: "",
    type: "",
    year: "",
  });

  const fetchSubjects = async () => {
    const response = await fetch("http://localhost:8080/data/subjects");
    const list = await response.json();
    setFetchedSubjects(list);
  };

  useEffect(() => {
    console.log("Inside useEffect");
    fetchSubjects();
  }, []);

  const subjectChangeHandler = (enteredSubject) => {
    console.log(enteredSubject);
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        subject: enteredSubject,
      };
    });
    console.log(enteredValue);
  };

  const typeChangeHandler = (enteredType) => {
    console.log(enteredType);
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        type: enteredType,
      };
    });
    console.log(enteredValue);
  };
  const yearChangeHandler = (enteredYear) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        year: enteredYear,
      };
    });
  };

  const resetHandler = (event) => {
    setEnteredValue({
      subject: "",
      type: "",
      year: "",
    });
  };
  const subjectOptions = fetchedSubjects.map((ele, index) => {
    return (
      <Option className='font-semibold' key={index + 1} value={ele.name}>
        {ele.name}
      </Option>
    );
  });

  const types = ["Notes", "Previous-Year Papers"];

  const typesOptions = types.map((ele, index) => {
    return (
      <Option className='font-semibold' key={index + 1} value={ele}>
        {ele}
      </Option>
    );
  });

  const years = ["2018", "2019", "2020", "2021"].map((ele, index) => {
    return (
      <Option className='font-semibold' key={index + 1} value={ele}>
        {ele}
      </Option>
    );
  });

  const animation = {
    mount: { y: 0 },
    unmount: { y: 25 },
  };
  const yearEnable = enteredValue.type === "Notes" ? false : true;
  const submitEnable = !(
    enteredValue.subjecttest &&
    enteredValue.type &&
    !yearEnable &&
    enteredValue.year
  );
  const submitEnabler = {
    disabled: submitEnable,
  };
  return (
    <div className='flex h-max w-92 p-10 flex-col justify-center items-center gap-y-10 rounded-lg   bg-slate-100 backdrop-blur-sm backdrop-brightness-150'>
      <div className='h-max w-max flex flex-col justify-evenly items-center gap-10'>
        <Select
          value={enteredValue.subject}
          color='orange'
          label='Select Subject'
          animate={animation}
          onChange={subjectChangeHandler}
          className='brightness-200 w-72 shadow-sm shadow-indigo-900'
        >
          {subjectOptions}
        </Select>
        <Select
          value={enteredValue.type}
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
            value={enteredValue.year}
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
