import Button from "../UIHelpers/Button";
import { motion } from "framer-motion";

export default function ResultCard(props) {
  const id = props.shareLink.split("/")[5];

  const downloadLink = `https://drive.google.com/u/0/uc?id=${id}&export=download`;

  const linkOpener = (URL) => {
    window.open(URL, "_blank", "noopener, noreferrer");
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, type: "spring", delay: 1 }}
      className="h-[17rem] w-[20rem] select-none mt-4 bg-purpleAccent2 flex justify-center items-center gap-y-9 border-4 border-purpleAccent flex-col rounded-2xl"
    >
      <div className="h-36 w-max flex flex-col justify-center items-center gap-6">
        <div className="text-white text-center font-extrabold text-[100%] w-[15rem]">
          {props.subName}
        </div>
        <div className="text-white font-normal text-xl">{props.title}</div>
        {props.year && (
          <div className="text-white font-extrabold text-lg">{props.year}</div>
        )}
      </div>
      <div className="flex gap-x-4">
        <Button
          type="download"
          onClick={() => {
            linkOpener(downloadLink);
          }}
        >
          Download
        </Button>
        <Button
          onClick={() => {
            linkOpener(props.shareLink);
          }}
        >
          View
        </Button>
      </div>
    </motion.div>
  );
}
