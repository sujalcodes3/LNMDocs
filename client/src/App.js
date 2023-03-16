import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/UIHelpers/Navbar.jsx";
import image from "./assets/left_png.png";
import useMediaQuery from "./hooks/useMediaQuery";
import FetchedlinksContext from "./store/fetchedlinks-context";
import { useContext } from "react";
import LoadingContext from "./store/loading-context";
import Resultlist from "./components/Results/Resultlist";
import { motion } from "framer-motion";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const fetchctx = useContext(FetchedlinksContext);
  const ctx = useContext(LoadingContext);
  const isDesktop = useMediaQuery("(min-width:800px)");

  const notesResults = fetchctx.fetchedLinks
    ? fetchctx.fetchedLinks.hasOwnProperty("notes") && (
        <div>
          <Resultlist
            data={fetchctx.fetchedLinks.notes}
            type="notes"
            subName={fetchctx.fetchedLinks.name}
          />
        </div>
      )
    : null;
  const paperResults = fetchctx.fetchedLinks
    ? !fetchctx.fetchedLinks.hasOwnProperty("notes") &&
      fetchctx.fetchedLinks.hasOwnProperty("etpaperData") && (
        <div className="w-[46rem] flex flex-wrap">
          <Resultlist
            data={fetchctx.fetchedLinks.etpaperData}
            title="End Term Paper"
            type="etpapers"
            subName={fetchctx.fetchedLinks.name}
          />
          <Resultlist
            data={fetchctx.fetchedLinks.mtpaperData}
            title="Mid Term Paper"
            type="mtpapers"
            subName={fetchctx.fetchedLinks.name}
          />
        </div>
      )
    : null;

  return (
    <div className="h-[calc(100vh-40px)]">
      <Navbar />
      <div
        className={` justify-evenly h-[calc(100vh-200px)] items-center ${
          isDesktop ? "flex" : ""
        }`}
      >
        {!fetchctx.isFetched && (
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <img src={image} alt="test" className="md:hidden" />9
          </motion.div>
        )}
        <div className="flex flex-col justify-center items-center gap-y-6">
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.3, type: "spring", stiffness: 100 }}
            className="text-blue-gray-100 font-bold text-4xl my-5 text-center w-96 drop-shadow-4xl z-1000 select-none"
          >
            All exam resources at your fingertips
          </motion.div>
          <Form />
        </div>
        <div className="flex justify-center items-center ">
          {ctx.loader && (
            <MutatingDots
              height="100"
              width="100"
              color="#fff"
              secondaryColor="#be6cf4"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
          {!ctx.isLoading && fetchctx.isFetched && notesResults}
          {!ctx.isLoading && fetchctx.isFetched && paperResults}
        </div>
      </div>
    </div>
  );
}

export default App;
