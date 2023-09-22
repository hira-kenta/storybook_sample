type Props = {
    /** 現在の昇降順を示すフラグ */
    ascOrder: boolean;
    /** 昇降状態を更新するための関数 */
    setAscOrder: (asc: boolean) => void;
}
/**
 * 昇順と降順を切り替えるためのボタンコンポーネント
 * 
 * @param {Props} props - コンポーネントに渡されるプロパティ
 * @param {boolean} props.ascOrder - 現在の昇順状態を示すフラグ
 * @param {(asc: boolean) => void} props.setAscOrder - 昇順状態を更新するための関数
 * 
 * @returns {JSX.Element} SortButtonコンポーネントのUI要素
 */
const SortButton = ({ascOrder, setAscOrder}: Props) => {
  return (
    <button onClick={() => setAscOrder(!ascOrder)}>{ascOrder ? "ASC": "DESC"}</button>
  )
}

export default SortButton;