import React from "react";
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

class Game extends React.Component {
  state = { board: ball.board, play: false };

  handleClick = () => {
    this.setState({ play: !this.state.play });

    const playGame = () => {
      ball.move();
      this.setState({ board: [...ball.board] });
      if (
        ball.position.x === ballEndPosition.x &&
        ball.position.y === ballEndPosition.y
      ) {
        ball.vector.x = 1;
        ball.vector.y = 1;
        clearInterval(speed);
        this.setState({ play: false });
      }
    };

    if (this.state.play) {
      var speed = setInterval(playGame, 100);
    }
  };

  render() {
    return (
      <StyledBoardWrapper>
        <Board ball={board} />
        <Button onClick={() => this.handleClick()}>START</Button>
      </StyledBoardWrapper>
    );
  }
}

export default Game;
