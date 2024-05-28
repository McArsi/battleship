import s from './gameBoard.module.css';
import UserBoard from './UserBoard';
import OpponentBoard from './OppenentBoard';


const GameBoard = () => {
    return (
        <div className={s.container}>
            <UserBoard />
            <OpponentBoard />
        </div>
    )
}

export default GameBoard;