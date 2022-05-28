import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filter:FilterType) => void,
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div >

            {mappedAffairs}
            <div className={s.filter}>
                <SuperButton onClick={setAll}>
                    All
                </SuperButton>
                <SuperButton onClick={setHigh}>
                    High
                </SuperButton>
                <SuperButton onClick={setMiddle}>
                    Middle
                </SuperButton>
                <SuperButton onClick={setLow} style={{width:50, height:30}}>
                    Low
                </SuperButton>
                {/*<button onClick={setAll}>All</button>*/}
                {/*<button onClick={setHigh}>High</button>*/}
                {/*<button onClick={setMiddle}>Middle</button>*/}
                {/*<button onClick={setLow}>Low</button>*/}
            </div>
        </div>
    )
}

export default Affairs
