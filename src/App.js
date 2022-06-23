import "./style.css" 
import React from "react"
import Header from "./components/Header"
import Destination from "./components/Destination";
import data from"./data"

function App() {
  const destinationData = data.map((destination) => {
    return <Destination
      key = {destination.key}
      {...destination}
    />
  })

  return (
    <div className="App">
      <Header />
      {destinationData}
    </div>
  );
}

export default App;
