import Button from "../UIHelpers/Button";
import { motion } from "framer-motion";

export default function ResultCard(props) {
  console.log("Card");

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, type: "spring", delay: 1 }}
      className='h-64 w-80 m-6 select-none bg-purpleAccent2 flex justify-center items-center gap-y-9 border-4 border-purpleAccent flex-col rounded-2xl'
    >
      <div className='h-36 w-max flex flex-col justify-center items-center gap-6'>
        <div className='text-white font-extrabold text-4xl'>
          {props.subName}
        </div>
        <div className='text-white font-normal text-xl'>{props.title}</div>
        {props.year && (
          <div className='text-white font-extrabold text-lg'>{props.year}</div>
        )}
      </div>
      <div className='flex gap-x-4'>
        <Button type='download'>Download</Button>
        <Button>View</Button>
      </div>
    </motion.div>
  );
}
