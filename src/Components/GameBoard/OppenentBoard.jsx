import s from "./gameBoard.module.css";
import { useSelector } from "react-redux"

const OpponentBoard = () => {
  const state = useSelector((state) => state.boards.opponentBoard)
  return (
    //рендер поля компьютера
    <div className={s.board}>
       {state.map((item) => {
            return <div style={{backgroundColor: item[1]}} key={item} id={item} className={s.item}></div>
        })} 
    </div>
  );
};

export default OpponentBoard;
