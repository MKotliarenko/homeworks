import React from 'react'
import './Message.module.css'
import {inspect} from "util";
import styles from './Message.module.css'
type MassageType ={
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MassageType) {
    return (
        <div>
            <img className={styles.img} src={props.avatar}/>
            <div  className={styles.message}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text} >{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
