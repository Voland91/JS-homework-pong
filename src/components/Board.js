import React from "react";
import styled from "styled-components";
import { board } from "../BoardUtilities";
import Border from "../components/Border";
import Cell from "../components/Cell";
import Ball from "../components/Ball";
import Rotator from "../components/Rotator";

const StyledBoardWrapper = styled.div`
  display: flex;
  width: ${board[0].length * 50}px;
  height: ${board.length * 50}px;
  flex-wrap: wrap;
`;

const Board = ({ ball }) => (
  <StyledBoardWrapper>
    {ball.map((items) =>
      items.map(
        (item) =>
          (item === "X" && <Border />) ||
          (item === "0" && <Cell />) ||
          (item === "1" && <Ball />) ||
          (item === "Y" && <Rotator />)
      )
    )}
  </StyledBoardWrapper>
);

export default Board;
