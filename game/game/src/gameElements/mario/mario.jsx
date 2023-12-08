import React from 'react'
import mario from "../../assets/gameImages/mario.png"
import style from "./mario.module.scss"
function Mario() {
    return (
        <div className={style.mario}>
            <img src={mario} alt="" />
        </div>
    )
}

export default Mario