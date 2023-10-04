import { calculateWinner } from "../../helpers/calculateWinner";
import Square from "../Square/Square";

type Props = {
  /** 次はXの番かを判定するフラグ */
  xIsNext: boolean,
  /** マスにセットされたOX。  
   * 初期表示時はすべて空文字がセットされている。
  */
  squares: string[],
  /**
   * クリックされたマスにOXをセットし、セットした位置情報を履歴に保存する処理
   * @param nextSquares 
   * @param location 
   * @returns 
   */
  onPlay: (nextSquares: string[], location: {row: number, column: number}) => void,
}

/**
 *  OXゲームの盤面
 *  - マスをクリックするとOかXが入力される
 *  - 次の手番と勝敗結果が表示される
 *  @returns 
 */
const Board = ({xIsNext, squares, onPlay}: Props) => {
    const handleClick = (i: number, row: number): void => {
      if(squares[i] || calculateWinner(squares)){
        return;
      }
      const location = setLocation(row, i);
      const nextSquares: string[] = squares.slice();
      nextSquares[i] = xIsNext ? 'X' : 'O';
      onPlay(nextSquares, location);
    }

    const setLocation = (row: number, column: number) => {
      let location: {row: number, column: number};
      const convertedRow = row + 1;
      const convertedColumn = (column % 3) + 1
      location = {row: convertedRow, column: convertedColumn}
      return location;
    }
  
    const winner = calculateWinner(squares);
    let status: string = "Draw...";
    if(winner){
      status = "Winner: " + winner.player;
    }else if(squares.includes('')){
      status = "次のプレイヤー : " + (xIsNext ? "X" : "O");
    }
  
    return (
    <>
      <div className="status">{status}</div>
      {Array(3).fill(null).map((_, row) => (
        <div className="board-row" key={row}>
          {Array(3).fill(null).map((_, col) => {
            const index = row * 3 + col;
            const isWinning = winner?.line.includes(index) ? true : false;
            return (
              <Square key={index} isWinning={isWinning} value={squares[index]} onSquareClick={() => handleClick(index, row)} />
            );
          })}
        </div>
      ))}
    </>
    );
  }

  export default Board;