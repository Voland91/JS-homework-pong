import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BallUtilities from "./BallUtilities";
import { board, startVector, startPosition } from "./BoardUtilities";
import Button from "./components/Button";
import Board from "./components/Board";

const StyledBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ballEndPosition = { ...startPosition };
const ballInitialPosition = { ...startPosition };

const ball = new BallUtilities(board, ballInitialPosition, startVector);

const Game = () => {
  let [play, setPlay] = useState(false);
  let [speed, setSpeed] = useState(null);

  useEffect(() => {
    const playGame = () => {
      ball.move();
      if (
        ball.position.x === ballEndPosition.x &&
        ball.position.y === ballEndPosition.y
      ) {
        ball.vector.x = 1;
        ball.vector.y = 1;
        setPlay(false);
      }
    };

    if (play) {
      setSpeed(setInterval(playGame(), 2000));
    } else {
      clearInterval(speed);
    }
  }, [play, speed]);

  return (
    <StyledBoardWrapper>
      <Board ball={board} />
      <Button onClick={() => setPlay(!play)}>START</Button>
    </StyledBoardWrapper>
  );
};

export default Game;
