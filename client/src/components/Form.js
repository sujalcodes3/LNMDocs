import { Button, Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Form = (props) => {
  //we are maintaining the state for the subjects fetched by the data
  const [fetchedSubjects, setFetchedSubjects] = useState([]);

  //we will also maintain the state of the entered state by the user as an object of subject,type and year
  const [enteredValue, setEnteredValue] = useState({
    subject: "",
    type: "",
    year: "",
  });

  //let us now make a function that will fetch the subjects from the backend
  const fetchSubjects = () => {
    fetch("http://localhost:8080/data/subjects")
      .then((response) => response.json())
      .then((subjects) => {
        setFetchedSubjects(subjects.map((subject) => subject.name));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // now we need to make sure that when the page is loaded first we fetch the data from the backend, so we will use useEffect hook with no dependencies
  useEffect(() => {
    fetchSubjects();
  }, []);

  // now let us make arrays for the types and years for the dropdown options mapping
  const types = ["Notes", "Previous-Year Papers"];
  const years = ["2019", "2020", "2021", "2022"];

  //now let us map the three arrays, that are, fetchedsubjects(state), types, years to Option elements of the tailwind css material library

  const subjectOptions = fetchedSubjects.map((subject) => (
    <Option key={Math.random()} className='font-semibold' value={subject}>
      {subject}
    </Option>
  ));
  const typesOptions = types.map((type) => (
    <Option key={Math.random()} className='font-semibold' value={type}>
      {type}
    </Option>
  ));
  const yearsOptions = years.map((year) => (
    <Option key={Math.random()} className='font-semibold' value={year}>
      {year}
    </Option>
  ));
  //now we can render Select component

  // the subject change handler
  const subjectChangeHandler = (value) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        subject: value,
      };
    });
    console.log(enteredValue);
  };

  //the reset handler
  const resetHandler = (event) => {
    setEnteredValue({
      subject: "",
      type: "",
      year: "",
    });
  };

  //let us also define a uniform className for each select component
  const selectClass = "brightness-200 w-72 shadow-sm shadow-indigo-900";

  return (
    <div className='flex h-max w-92 p-10 flex-col justify-center items-center gap-y-10 rounded-lg   bg-slate-100 backdrop-blur-sm backdrop-brightness-150'>
      <div className='h-max w-max flex flex-col justify-evenly items-center gap-10'>
        <Select
          value={enteredValue.type}
          label='Select Type'
          className={selectClass}
        >
          {typesOptions}
        </Select>
        <Select
          value={enteredValue.subject}
          label='Select Subject'
          className={selectClass}
          onChange={subjectChangeHandler}
        >
          {subjectOptions}
        </Select>
        <Select
          value={enteredValue.year}
          label='Select Year'
          className={selectClass}
        >
          {yearsOptions}
        </Select>
      </div>
      <div className='flex gap-8'>
        <Button className='w-40 m-auto ' variant='gradient'>
          Search
        </Button>
        <Button
          className='w-24 m-auto'
          variant='outlined'
          onClick={resetHandler}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Form;
