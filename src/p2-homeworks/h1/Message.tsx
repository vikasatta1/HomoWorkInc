import React from 'react'
import styles from "./Message.module.css";

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div>


            <div className="person">
                <img src={props.avatar}/>
                <div className={styles.person}>  {props.name}</div>
                <div className={styles.text}> {props.message}</div>
                <div className="data">  {props.time}</div>
            </div>

        </div>
    )
}

export default Message
