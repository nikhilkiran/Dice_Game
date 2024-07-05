import React, { useState } from "react";
import styled from "styled-components";
const Select_Number = ({ error, selectNumber, setSelectNumber }) => {
  const Numbers = [1, 2, 3, 4, 5, 6];
  console.log(selectNumber);
  return (
    <BoxContainer>
      <div className="error">{error}</div>
      <div className="box">
        {Numbers.map((vlaue, i) => (
          <Box
            isSelected={vlaue == selectNumber}
            key={i}
            onClick={() => {
              setSelectNumber(vlaue);
            }}
          >
            {vlaue}
          </Box>
        ))}
      </div>

      <div className="heading">SELECT NUMBER</div>
    </BoxContainer>
  );
};

export default Select_Number;

const BoxContainer = styled.div`
  .box {
    display: flex;
    gap: 15px;
  }
  .heading {
    font-weight: bold;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  border: 1px solid black;
  padding: 10px 15px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
