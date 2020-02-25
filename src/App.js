import React from "react";
import NasaCard from "./components/NasaCard";
import AlertUser from "./components/AlertUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className = "App-header">
      <h1>NASA Photo of the Day</h1>
      </div>
      <div className = "App-body">
      <NasaCard />
      </div>
    </div>
  );
}

export default App;
