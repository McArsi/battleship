import s from "./gameBoard.module.css";

const UserBoard = () => {
  return (
    <div className={s.board}>
      {Array.from({ length: 100 }, (i) => (
        <div key={i} className={s.item}></div>
      ))}
    </div>
  );
};

export default UserBoard;
