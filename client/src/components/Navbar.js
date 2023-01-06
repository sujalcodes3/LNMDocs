import React from 'react';
import { Button } from '@material-tailwind/react';

function Navbar() {

  return (
    <nav className="flex justify-around h-max my-8">
      <div className="flex items-baseline">
        <i className="fa-2x fa-regular fa-file  text-white" />
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