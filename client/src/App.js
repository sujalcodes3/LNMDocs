import React from "react";
import FormSelect from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[calc(100vh-40px)]">
      <Navbar />
      <FormSelect />
    </div>
  );
}

export default App;
