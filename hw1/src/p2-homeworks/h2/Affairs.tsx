import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filter:FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (filter:FilterType) => {props.setFilter(filter)}

    return (
        <div >

            {mappedAffairs}
            <div className={s.filter}>
                <SuperButton onClick={()=>setFilter("all")}  >
                    All
                </SuperButton>
                <SuperButton onClick={()=>setFilter("high")}>
                    High
                </SuperButton>
                <SuperButton onClick={()=>setFilter("middle")}>
                    Middle
                </SuperButton>
                <SuperButton onClick={()=>setFilter("low")}>
                    Low
                </SuperButton>
            </div>
        </div>
    )
}

export default Affairs
