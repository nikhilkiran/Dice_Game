import "./App.css";
import styled from "styled-components";
import Start_Game from "./Components/Start_Game/Start_Game";
import { useState } from "react";
import Play_Game from "./Components/Play_Game_Screens/Play_Game/Play_Game";
function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const isToggle = () => {
    setIsGameStart((knk) => !knk);
  };
  return (
    <>
      {isGameStart ? <Play_Game /> : <Start_Game isToggle={isToggle} />}
      {/* <Start_Game /> */}
    </>
  );
}

export default App;
