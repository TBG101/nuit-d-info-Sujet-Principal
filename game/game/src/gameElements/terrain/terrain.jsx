import React from 'react'
import terrain from '../../assets/gameImages/terraint.jpg'; // Tell webpack this JS file uses this image
import style from "./terrain.module.scss"
function Terrain() {
    const imageSize = {
        width: '100px', // Set the width as desired
        height: '150px',
    }
    return (
        <div className={style.terrain}>
            <img src={terrain} alt="" />
            <div className="imagesContainer">
                <img src={terrain} alt="" className={style.up} />
                <img src={terrain} alt="" className={style.down}/>
            </div>
            <img src={terrain} alt="" />
            <div className="imagesContainer">
                <img src={terrain} alt="" className={style.up} />
                <img src={terrain} alt="" className={style.down}/>
            </div>
            <img src={terrain} alt="" />
            <div className="imagesContainer">
                <img src={terrain} alt="" className={style.up} />
                <img src={terrain} alt="" className={style.down}/>
            </div>
            <img src={terrain} alt="" />
            <div className="imagesContainer">
                <img src={terrain} alt="" className={style.up} />
                <img src={terrain} alt="" className={style.down}/>
            </div>
            <img src={terrain} alt="" />



        </div>
    )
}

export default Terrain