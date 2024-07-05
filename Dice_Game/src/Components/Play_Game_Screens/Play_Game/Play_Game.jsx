import React, { useState } from "react";
import styled from "styled-components";
import Total_Score from "../Total_Score/Total_Score";
import Select_Number from "../Select_Number/Select_Number";
import Role_Dice from "../Role_Dice/Role_Dice";
import Rules from "../Rules/Rules";

const Play_Game = () => {
  const [selectNumber, setSelectNumber] = useState();
  const [role, setRole] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  const resetScore = () => {
    setScore(0);
  };
  const generateRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const DiceRole = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    } else {
      setError("");
    }
    const random = generateRandom(1, 7);
    setRole(random);
    if (selectNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNumber(undefined);
  };

  return (
    <>
      <NavContainer>
        <div>
          <Total_Score score={score} />
        </div>
        <div>
          <Select_Number
            error={error}
            selectNumber={selectNumber}
            setSelectNumber={setSelectNumber}
          />
        </div>
      </NavContainer>
      <div>
        <Role_Dice
          role={role}
          DiceRole={DiceRole}
          resetScore={resetScore}
          showRules={showRules}
          setShowRules={setShowRules}
        />
      </div>
    </>
  );
};

export default Play_Game;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  height: 200px;
  margin-top: 65px;
`;
