import React, { useState } from "react";
import styled from "styled-components";

const Total_Score = ({ score }) => {
  return (
    <ScoreCounter>
      <div className="score_count">
        <h1>{score}</h1>
      </div>
      <div className="score_heading">
        <p>TOTAL SCORE</p>
      </div>
    </ScoreCounter>
  );
};

export default Total_Score;

const ScoreCounter = styled.div`
  height: 50px;
  width: 135px;
  text-align: center;
  justify-content: space-between;
  .score_count {
    h1 {
      font-weight: 500;
      font-size: 100px;
    }
  }
  .score_heading {
    p {
      font-weight: bold;
    }
  }
`;
