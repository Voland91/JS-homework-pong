class BallUtilities {
  constructor(board, position, vector) {
    this.board = board;
    this.position = position;
    this.vector = vector;
  }

  borderCheck() {
    let x = this.position.x;
    let y = this.position.y;
    let xV = this.position.x + this.vector.x;
    let yV = this.position.y + this.vector.y;

    if (this.board[y][xV] === "X") {
      this.vector.x = -this.vector.x;
    }
    if (this.board[yV][x] === "X") {
      this.vector.y = -this.vector.y;
    }
    if (
      this.board[y][xV] === "0" &&
      this.board[yV][x] === "0" &&
      this.board[yV][xV] === "X"
    ) {
      this.vector.x = -this.vector.x;
      this.vector.y = -this.vector.y;
    }
  }

  rotator() {
    const randomVector = Math.random() > 0.5 ? 1 : -1;
    if (this.board[this.position.y][this.position.x] === "Y") {
      this.board[this.position.y][this.position.x] = "0";
      this.vector.y = randomVector;
      this.vector.x = randomVector;
    }
  }

  move() {
    this.rotator();
    this.borderCheck();
    if (this.board[this.position.y][this.position.x] === "1") {
      this.board[this.position.y][this.position.x] = "0";
    }

    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
    if (this.board[this.position.y][this.position.x] === "0") {
      this.board[this.position.y][this.position.x] = "1";
    }
  }
}

export default BallUtilities;
