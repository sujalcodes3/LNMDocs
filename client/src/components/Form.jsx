import { useContext } from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import LoadingContext from "../store/loading-context";
import DropdownMenu from "./DropDownMenu";
import FetchedlinksContext from "../store/fetchedlinks-context";
import Button from "./UI/Button";

const Form = (props) => {
  const fetchctx = useContext(FetchedlinksContext);
  const ctx = useContext(LoadingContext);
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  //const [fetchedLinks, setFetchedLinks] = useState(null);
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
  console.log(ctx);
  console.log(ctx.isLoading);
  //the submit handler
  const submitHandler = async () => {
    try {
      ctx.onLoading();
      ctx.loaderOn();
      const response = await fetch(
        "http://localhost:8080/data/get-link/" +
          enteredValue.subject +
          "/" +
          (enteredValue.type === "Previous-Year Papers" ? "papers" : "Notes") +
          "/" +
          enteredValue.year
      );
      if (!response) {
        throw new Error("Response Not Present");
      }
      const links = await response.json();
      console.log(links);
      fetchctx.onFetched(links);
      ctx.onLoaded();
      ctx.loaderOff();
      // props.subjectDataEntry(links);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex h-max w-92 p-10 flex-col justify-center items-center gap-y-10 rounded-lg bg-purpleAccent'>
      <div className='h-max w-max flex flex-col justify-evenly items-center gap-10'>
        <DropdownMenu
          ref={resetSubjectField}
          label='Select Subject'
          options={fetchedSubjects}
          handleChange={subjectChangeHandler}
        />
        <DropdownMenu
          ref={resetTypeField}
          label='Select Type'
          options={typesOptions}
          handleChange={typeChangeHandler}
        />
        <DropdownMenu
          ref={resetYearField}
          label='Select Year'
          options={yearsOptions}
          handleChange={yearChangeHandler}
        />
      </div>
      <div className='flex w-80 justify-around'>
        <Button
          type='submit'
          className='w-40 m-auto '
          variant='gradient'
          onClick={submitHandler}
        >
          Search
        </Button>
        <Button
          type='reset'
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
