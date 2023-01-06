import React from 'react';
import { Button } from '@material-tailwind/react';
import logo from '../assets/navbar_logo.png'

function Navbar() {

  return (
    <nav className="flex justify-around h-max my-8">
      <div className="flex items-center">
        <img src={logo} alt='' className="h-8 w-8" />
        <div className="mx-4 text-white font-extrabold brightness-200 text-2xl drop-shadow-xl">LNMDocs</div>
      </div>
      <Button variant='gradient' >
        Admin Console
      </Button>
      {/* <div className="mx-4 my-2 cursor-pointer">Admin Console</div> */}
    </nav >
  );
}

export default Navbar;
// text - slate - 800
// brightness-150