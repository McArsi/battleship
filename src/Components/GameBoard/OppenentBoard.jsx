import s from "./gameBoard.module.css";

const OpponentBoard = () => {
  return (
    <div className={s.board}>
      {Array.from({ length: 100 }, (i) => (
        <div key={i} className={s.item}></div>
      ))}
    </div>
  );
};

export default OpponentBoard;
