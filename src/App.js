import React from "react";
import NasaCard from "./components/NasaCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className = "header">
      <h1>NASA Photo of the Day</h1>
      </div>
      <NasaCard />
    </div>
  );
}

export default App;
