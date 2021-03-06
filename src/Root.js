import React from "react";
import Game from "./Game";
import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Root() {
  return (
    <StyledBackground>
      <Game />
    </StyledBackground>
  );
}

export default Root;
