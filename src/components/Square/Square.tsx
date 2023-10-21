type Props = {
  /** 勝利マスを示すフラグ */
  isWinning: boolean,
  /** マス内に入力される記号 */
  value: string,
  /** 記号を入力するための関数 */
  onSquareClick: () => void,
}

/**
 * 盤面の最小単位であるマス
 * - 押下されると記号が設定される
 * - 勝利した場合のマスに該当する場合背景色が変化する
 * @returns 
 */
const Square = ({isWinning, value, onSquareClick}: Props) => {
  const getClassName = () => {
    if(value != ''){
      return isWinning ? "square win" : "square filled"
    }
    return "square";
  }
    return (
      <button 
        className={getClassName()}
        onClick={onSquareClick}
      >
          {value}
      </button>
    )
  }

  export default Square;