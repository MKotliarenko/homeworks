import React from 'react'
import './Message.module.css'
import {inspect} from "util";
import s from './Message.module.css'
type MassageType ={
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MassageType) {
    return (
        <div>
            <img className={s.img} src={props.avatar}/>
            <div  className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text} >{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
