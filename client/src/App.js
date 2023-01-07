import React from 'react'
import FormSelect from "./components/Form";
import Navbar from "./components/Navbar";
import image from './assets/left_png.png'
function App() {
  return (
    <div className="h-[calc(100vh-40px)]">
      <Navbar />
      <div className="flex justify-evenly h-[calc(100vh-150px)] items-center">
        <img src={image} alt="test" className="md:hidden" />
        <div className="flex flex-col justify-center items-center gap-y-6">
          <div className="text-blue-gray-100 font-bold text-4xl my-5 text-center w-96 drop-shadow-4xl">All exam resources at your fingertips</div>
          <FormSelect />
        </div>

      </div>

    </div>
  );
}

export default App;
