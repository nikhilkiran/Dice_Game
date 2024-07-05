import styled from "styled-components";
import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import Rules from "../Rules/Rules";
const Role_Dice = ({ role, DiceRole, resetScore, showRules, setShowRules }) => {
  return (
    <DiceContainer>
      <div onClick={DiceRole} className="dice">
        <img src={assets[`dice_${role}`]} alt="" />
        <p>CLICK ON DICE TO ROLE</p>
      </div>
      <Button onClick={resetScore}>Reset Score</Button>
      <br />
      <Button onClick={() => setShowRules((prev) => !prev)}>
        {" "}
        {showRules ? "Hide" : "Show"} Rules
      </Button>
      {showRules && <Rules />}
    </DiceContainer>
  );
};

export default Role_Dice;
const DiceContainer = styled.div`
  text-align: center;

  .dice {
    cursor: pointer;
    display: inline;
  }
`;
const Button = styled.button`
  justify-content: center;
  padding: 10px 25px;
  background-color: black;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
