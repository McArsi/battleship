import s from "./preview.module.css";


const Item = ({ towers }) => {

  return (
    //создаем корабль
    <div onClick={(e) => {
        //по клику переворачиваем корабли
        e.target.parentNode.style.display = (e.target.parentNode.style.display == 'block' ? 'flex' : 'block');
    }} className={s.ship} draggable="true">
      {Array.from({ length: towers }, (k, i) => (
        //по количеству палуб создаем количество клеточек
        <div key={"item" + k} id={k}></div>
      ))}
    </div>
  );
};

export default Item;
