import React, { useState } from 'react'
import SortButton from '../SortButton/SortButton';

export type Props = {
    /** 現在の移動順<br/>(何手目かを表す) */
    currentMove: number;
    /** 移動順を設定する */
    setCurrentMove: (move: number) => void;
    /** 各移動に伴う位置情報<br/>(行, 列)で表示 */
    locations: string[];
    /** 各移動に伴う盤面の状態の履歴 */
    history: string[][];
}

/**
 * 盤面の状態の変更履歴
 * - 特定の履歴情報をクリックすることでその時点の盤面が再現される
 * - 履歴が最新であるものは現在の移動とし、移動位置も表示される
 * - ソートボタンの押下によって履歴情報を昇降順で並び替えることができる
 * @returns 
 */
const History = ({currentMove, setCurrentMove, locations, history }: Props) => {
    const [ascOrder, setAscOrder] = useState<boolean>(true);

    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove);
      }

    const moves = history.map((_, move) => {
        let description;
        if(move === currentMove){
          return (
          <li key={move}>
            <b>{"You are at move #" + move + locations[move]}</b>
          </li>)
        }
        description = move > 0 ? `Go to move #${move}`
                               : `Go to game start`;
        return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
      });

    return (
    <>
        <SortButton ascOrder={ascOrder} setAscOrder={setAscOrder}/>
        <ol>{ascOrder ? moves: moves.reverse() }</ol>
    </>
    )
}

export default History;