import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/navbar_logo.png";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className='flex justify-around h-max my-8'
    >
      <div className='flex items-center'>
        <img src={logo} alt='' className='h-8 w-8' />
        <div className='mx-4 text-white font-extrabold brightness-200 text-2xl drop-shadow-xl'>
          LNMDocs
        </div>
      </div>
      {/* <Button variant='gradient'>Admin Console</Button> */}
    </motion.nav>
  );
}

export default Navbar;
