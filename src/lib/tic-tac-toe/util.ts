export enum Move {
  x = 'X',
  o = 'O',
  Empty = ''
}

export enum State {
  Playing,
  Draw,
  Won
}
export function init_board() {
  return [
    [Move.Empty, Move.Empty, Move.Empty],
    [Move.Empty, Move.Empty, Move.Empty],
    [Move.Empty, Move.Empty, Move.Empty]
  ];
}

export function check_winner(board: Move[][]) {
  for (const row of board) {
    if (row.every((v) => v === Move.x) || row.every((v) => v === Move.o)) {
      return row[0];
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }

  if (board[1][1] === Move.Empty) {
    return;
  }

  if (board[0][0] === board[1][1] && board[1][1] == board[2][2]) {
    return board[0][0];
  }

  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] == board[2][0]) {
    return board[0][2];
  }
}

export function get_state(winner: Move | undefined, board: Move[][]) {
  if (winner) {
    return State.Won;
  } else if (board.every((row) => row.every((col) => col !== Move.Empty))) {
    return State.Draw;
  } else {
    return State.Playing;
  }
}
