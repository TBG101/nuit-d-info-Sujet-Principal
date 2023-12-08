import React from 'react'
import logo from '../../assets/gameImages/sky.jpg'; // Tell webpack this JS file uses this image
import style from "./style.module.scss"

function SkyElement() {
    return (
        <div className={style.sky}>
            <img src={logo} alt="" />
        </div>

    )
}

export default SkyElement