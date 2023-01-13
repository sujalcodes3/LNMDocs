import { Button } from "@material-tailwind/react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropDownMenu";

const Form = (props) => {
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  const [enteredValue, setEnteredValue] = useState({
    subject: "",
    type: "",
    year: "",
  });
  console.log(enteredValue);
  const resetSubjectField = useRef();
  const resetTypeField = useRef();
  const resetYearField = useRef();

  const fetchSubjectData = () => {
    fetch("http://localhost:8080/data/subjects")
      .then((response) => response.json())
      .then((subjects) => {
        setFetchedSubjects(subjects);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSubjectData();
  }, []);
  const typesOptions = ["Notes", "Previous-Year Papers"];
  const yearsOptions = ["2018", "2019", "2020", "2021"];

  // Handlers
  const subjectChangeHandler = (entered) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        subject: entered,
      };
    });
  };
  const typeChangeHandler = (typeName) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        type: typeName,
      };
    });
  };
  const yearChangeHandler = (yearName) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        year: yearName,
      };
    });
  };
  //the reset handler
  const resetHandler = (event) => {
    resetSubjectField.current.clearInput();
    resetTypeField.current.clearInput();
    resetYearField.current.clearInput();
    setEnteredValue({
      subject: "",
      type: "",
      year: "",
    });
  };

  //the submit handler
  const submitHandler = () => {
    fetch(
      "http://localhost:8080/data/get-link/" +
        enteredValue.subject +
        "/" +
        enteredValue.type +
        "/" +
        enteredValue.year
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex h-max w-92 p-10 flex-col justify-center items-center gap-y-10 rounded-lg   bg-slate-100 backdrop-blur-sm backdrop-brightness-150">
      <div className="h-max w-max flex flex-col justify-evenly items-center gap-10">
        <DropdownMenu
          ref={resetSubjectField}
          label="Select Subject"
          options={fetchedSubjects}
          handleChange={subjectChangeHandler}
        />
        <DropdownMenu
          ref={resetTypeField}
          label="Select Type"
          options={typesOptions}
          handleChange={typeChangeHandler}
        />
        <DropdownMenu
          ref={resetYearField}
          label="Select Year"
          options={yearsOptions}
          handleChange={yearChangeHandler}
        />
      </div>
      <div className="flex gap-8">
        <Button
          className="w-40 m-auto "
          variant="gradient"
          onClick={submitHandler}
        >
          Search
        </Button>
        <Button
          className="w-24 m-auto"
          variant="outlined"
          onClick={resetHandler}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Form;
