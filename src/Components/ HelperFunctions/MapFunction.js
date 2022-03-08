import {useState} from "react";
import classNames from "classnames";


export const SuperMap = (array,  text = '',) => {
    const [activeItem, setActiveItem] = useState(0)
    return array.map((s, index) => <li
        className={classNames({
            active :activeItem === index
        })}
        onClick={() => setActiveItem(index)}
        key={`${s}_${index}`}
    >{s} {text}</li>)
}