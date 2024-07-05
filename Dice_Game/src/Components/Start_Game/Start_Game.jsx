import React from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";
const Start_Game = ({ isToggle }) => {
  return (
    <>
      <Container>
        <div>
          <img src={assets.dice} alt="" />
        </div>
        <div className="title">
          <h1>DICE GAME</h1>
          <Button onClick={isToggle}>PLAY NOW</Button>
        </div>
      </Container>
    </>
  );
};

export default Start_Game;
const Container = styled.div`
  height: 100vh;
  width: 1182px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .title h1 {
    font-size: 96px;
    font-weight: 900s;
    white-space: nowrap;
  }
`;
const Button = styled.button`
  height: 44px;
  width: 220px;
  background-color: black;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
