import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Card(props) {
  console.log("Card");

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2, type: "spring", delay: 1 }}
      className='h-80 w-72 m-6 select-none bg-slate-100 backdrop-blur-md backdrop-brightness-50 flex justify-center items-center flex-col rounded-2xl'
    >
      <div className='h-36 w-max flex flex-col justify-center items-center gap-5'>
        <div className='text-white font-extrabold text-4xl'>
          {props.subName}
        </div>
        <div className='text-white font-extrabold text-xl'>{props.title}</div>
        {props.year && (
          <div className='text-white font-extrabold text-lg'>{props.year}</div>
        )}
      </div>
      <div className='flex gap-x-10'>
        <Button variant='gradient' className='w-30'>
          Download
        </Button>
        <Button variant='outlined' className='w-30'>
          View
        </Button>
      </div>
    </motion.div>
  );
}
