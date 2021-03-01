import React from 'react';
import imgIcon from './Vector.svg'
import { useSelector } from "react-redux";


const Current = () => {



    const items = useSelector((data) => data.data)
    console.log(items.current.dt);



    const items2 = useSelector((data) => data)
    console.log(items2);



    const time = new Date(items.current.dt * 1000)
    return (
        <div className="current">
                <div className="icon_current" style={{backgroundImage: `url(${imgIcon})`}}></div>
                <div className="location">
                    <p>{items2.nameCity ? items2.nameCity : items.timezone}</p>
                    <p className="timeCurrent">сегодня,на  {time.getHours() + ':' + time.getMinutes()}</p>
                    <p className="timeCurrent">{items.current.weather[0].description}</p>
                </div>
                <div className="main_currentInfo">
                    <div className="humidity">{items.current.humidity}%</div>
                    <div className="temperatura">{Math.round(items.current.temp)}°</div>
                    <div className="wind-speed">{items.current.wind_speed} м/с</div>
                </div>
            </div>
    );
}

export default Current;
