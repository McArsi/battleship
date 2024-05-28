import s from "./preview.module.css";
import { useSelector } from "react-redux";
import Item from "./Item";

const Preview = () => {
  const state = useSelector((state) => state.ships.ships);

  return (
    <div className={s.configuration}>
      {state.map((ship) => {
        return (
            //отрисовываем корабли в соответствии с их количеством
          <div>
            {Array.from({ length: ship.count }, (i) => (
              <Item key={"s" + ship.id} {...ship} />
            ))}
            
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
