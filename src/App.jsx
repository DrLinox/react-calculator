import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/buttons/Button";
import "./App.css";
import Screen from "./components/screen/screen";

function App() {
  return (
    <div className="calculator-grid">
      <div className="screen">
        <Screen />
      </div>
      <Button />
    </div>
  );
}

export default App;
