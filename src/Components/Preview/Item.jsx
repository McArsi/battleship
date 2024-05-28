import s from "./preview.module.css";


const Item = ({ towers}) => {

  return (
    //создаем корабль
    <div onClick={(e) => {
        //по клику переворачиваем корабли
        e.target.parentNode.style.transform = (e.target.parentNode.style.transform == 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)');
    }} className={s.ship} draggable="true">
      {Array.from({ length: towers }, (i) => (
        //по количеству палуб создаем количество клеточек
        <div key={i}></div>
      ))}
    </div>
  );
};

export default Item;
