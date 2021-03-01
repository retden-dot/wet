import React from 'react';
import { useSelector } from "react-redux";

const More = () => {
    const items = useSelector((data) => data.data.current)
        
    return (

        <div className="moreInfo">  
            <div className="moreSubInfo"><div className="txtGroup"> По ощушениям: </div> <div className="infoGroup">  {Math.round(items.feels_like)} °C</div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Атмосферная температура: </div> <div className="infoGroup">  {Math.round(items.dew_point)} °C</div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Влажность: </div> <div className="infoGroup">  {items.humidity} % </div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Облачность: </div> <div className="infoGroup">  {items.clouds} % </div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Видимость: </div> <div className="infoGroup">  {items.visibility }  </div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Атмосферное давление: </div> <div className="infoGroup">  {items.pressure} </div></div>
            <div className="moreSubInfo"><div className="txtGroup"> УФ - излучение: </div> <div className="infoGroup">  {items.uvi}  </div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Скорость ветра: </div> <div className="infoGroup">  {items.wind_speed} м/с</div></div>
            <div className="moreSubInfo"><div className="txtGroup"> Направление ветра: </div> <div className="infoGroup">  {items.wind_deg} deg </div></div>
        </div>
    );
}

export default More;
