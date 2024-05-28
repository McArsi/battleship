import s from "./gameBoard.module.css";
import { useSelector } from "react-redux";

const UserBoard = () => {
  const state = useSelector((state) => state.boards.userBoard)
  console.log(state)
  return (
    //рендер поля игрока
    <div className={s.board}>
        {state.map((item) => {
            return <div style={{backgroundColor: item[1]}} key={item[0]} id={item[0]} className={s.item}></div>
        })} 
    </div>
  );
};

export default UserBoard;
