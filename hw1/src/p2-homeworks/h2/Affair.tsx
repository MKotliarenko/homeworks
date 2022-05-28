import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={s.columnsClass}>
            <div>{props.affair.name}  </div>
            <div>{props.affair.priority}  </div>
            {/*<button  onClick={deleteCallback}>X</button>*/}
            <SuperButton red onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}
export default Affair
