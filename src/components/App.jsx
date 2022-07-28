import React, { useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Gallary from "./Gallary/Gallary";
import Form from "../components/Form/Form";

function App() {
  const [showGallary, setShowGallary] = useState(false);
  const toggleGallary = () => {
    setShowGallary(!showGallary);
  };
  console.log(showGallary);
  return (
    <div>
      <Header toggleGallary={toggleGallary} />
      <div>{showGallary ? <Gallary /> : <Table />}</div>
    </div>
  );
}

export default App;
