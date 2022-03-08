import { memo } from "react";
import classNames from "classnames";

export const Categories = memo (({items, onClickItem, category}) => {
   return <div className="categories">
       <ul>{items
           ? items.map((s, index) => <li
               className={classNames({active :category === index})}
               onClick={() => onClickItem(index)}
               key={`${s}_${index}`}
           >{s}</li>)

           : <li className="active">Все</li>}</ul>
   </div>
})