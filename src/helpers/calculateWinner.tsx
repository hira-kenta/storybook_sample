export const calculateWinner = (squares: string[]): {player: string, line: number[]} | null => {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for(let i = 0; i < lines.length; i++){
      const [a, b, c]: number[] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return validateSquares([squares[a], squares[b],squares[c]])
                ? {player: squares[a], line: [a, b, c]}
                : null;
      }
    }
    return null;
  }

const validateSquares = (squares: string[]): boolean => {
  return squares.includes('X') || squares.includes('O') ? true : false;
}
