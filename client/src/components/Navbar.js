import React from "react";

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between h-20'>
        <div className='mx-16 my-7 text-orange-700 font-bold text-4xl drop-shadow-md'>
          LNMDocs
        </div>
        <div className='mx-16 my-9 text-lg cursor-pointer font-semibold text-orange-900'>
          Admin Console
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
