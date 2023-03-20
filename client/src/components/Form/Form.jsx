import { useContext } from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import LoadingContext from "../../store/loading-context";
import DropdownMenu from "./DropDownMenu";
import FetchedlinksContext from "../../store/fetchedlinks-context";
import Button from "../UIHelpers/Button";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const Form = (props) => {
  // contexts created : 1. state of fetching of results
  //                    2. state of loading of the results
  const fetchctx = useContext(FetchedlinksContext);
  const ctx = useContext(LoadingContext);
  const isDesktop = useMediaQuery("(min-width:800px)");

  // states : subjects fetched for the drop down menu and the second state is the state of the entered Value by the user
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  const [enteredValue, setEnteredValue] = useState({
    subject: "",
    type: "",
    year: "",
  });

  // refs are used to reset the field of the dropdown menu flawlessly
  const resetSubjectField = useRef();
  const resetTypeField = useRef();
  const resetYearField = useRef();

  // function to fetch the list of available subjects from the server and this function will further be used in a useEffect block as we want to call this function at the first mounting
  const fetchSubjectData = () => {
    fetch("https://lnmdocsserver.onrender.com/data/subjects")
      .then((response) => response.json())
      .then((subjects) => {
        setFetchedSubjects(subjects);
      })
      .catch((err) => {
        throw err;
      });
  };

  //the useEffect block
  useEffect(() => {
    fetchSubjectData();
  }, []);

  // dropdown menu options passed as array of options inside the DropDownMenu component
  const typesOptions = ["Notes", "Previous-Year Papers"];
  const yearsOptions = ["2018", "2019", "2020", "2021"];

  //enteredValue change Handlers
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
        year: typeName === "Notes" ? null : "",
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
    if (enteredValue.type === "Previous-Year Papers") {
      resetYearField.current.clearInput();
    }
    setEnteredValue({
      subject: "",
      type: "",
      year: enteredValue.type === "Notes" ? null : "",
    });
  };

  //the submit handler
  const submitHandler = async () => {
    try {
      // checking that whether all the options required are choosen our not
      if (
        !(
          enteredValue.subject &&
          enteredValue.type &&
          (enteredValue.type !== "Notes" ? enteredValue.year : true)
        )
      ) {
        throw new Error("Enter all details first");
      }
      // context state management
      ctx.onLoading();
      ctx.loaderOn();
      const LINK =
        "https://lnmdocsserver.onrender.com/data/get-link/" +
        enteredValue.subject +
        "/" +
        (enteredValue.type === "Previous-Year Papers" ? "papers" : "Notes") +
        "/" +
        (enteredValue.type === "Notes" ? null : enteredValue.year);
      console.log(LINK);
      const response = await fetch(LINK);

      if (!response) {
        throw new Error("Response Not Present");
      }
      const links = await response.json();
      fetchctx.onFetched(links);
      ctx.onLoaded();
      ctx.loaderOff();
      // props.subjectDataEntry(links);
    } catch (err) {
      throw err;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className={`${
        !isDesktop ? "px-4 py-10" : " p-10 "
      } flex h-max flex-col justify-center items-center gap-y-10 rounded-lg bg-purpleAccent border-4 border-purpleAccent2`}
    >
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
        {enteredValue.type !== "Notes" ? (
          <DropdownMenu
            ref={resetYearField}
            label="Select Year"
            options={yearsOptions}
            handleChange={yearChangeHandler}
          />
        ) : null}
      </div>
      <div className="flex w-80 justify-around">
        <Button
          type="submit"
          className="w-40 m-auto "
          variant="gradient"
          onClick={submitHandler}
        >
          Search
        </Button>
        <Button
          type="reset"
          className="w-24 m-auto"
          variant="outlined"
          onClick={resetHandler}
        >
          Reset
        </Button>
      </div>
    </motion.div>
  );
};

export default Form;
