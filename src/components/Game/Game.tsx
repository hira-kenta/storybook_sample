import { useState } from "react";
import Board from "../Board/Board";
import History from "../History/History";

/**
 * OXゲームを行うコンポーネント
 * - OXを入力する盤面と入力の履歴情報が表示される  
 * - 履歴情報から特定の盤面の再現をすることが可能
 * @returns 
 */
const Game = () => {
    const [history, setHistory] = useState<string[][]>([Array(9).fill('')]);
    const [locations, setLocations] = useState<string[]>(['']);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares: string[] = history[currentMove];
  
    const handlePlay = (nextSquares: string[], location: {row: number, column: number}) => {
      const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares]
      const currentLocation: string[] = [...locations.slice(0, currentMove + 1), `(${location.row},${location.column})`];
      setHistory(nextHistory);
      setLocations(currentLocation);
      setCurrentMove(nextHistory.length - 1);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div className="game-info">
          <History 
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            locations={locations}
            history={history}
          />
        </div>
      </div>
    )
  }
  
  export default Game;