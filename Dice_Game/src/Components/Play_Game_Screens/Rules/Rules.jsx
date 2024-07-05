import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <div className="text_container">
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RuleContainer>
  );
};

export default Rules;
const RuleContainer = styled.div`
  text-align: left;
  margin: 15px auto;
  background-color: #fbf1f1;
  width: 798px;
  height: 208px;
  gap: 5px;
  h1 {
    margin-bottom: 10px;
  }
  .text_container {
    margin: 15px;
    gap: 5px;
  }
`;
