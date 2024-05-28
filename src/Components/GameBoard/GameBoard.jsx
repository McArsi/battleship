import s from './gameBoard.module.css';
import { useDispatch } from "react-redux";
import UserBoard from './UserBoard';
import OpponentBoard from './OppenentBoard';


const GameBoard = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
            <div className={s.turn}>ХОД<span></span></div>
            <UserBoard />
            <OpponentBoard />
            <button onClick={console.log(1)}>Начать</button>
        </div>
    )
}

export default GameBoard;