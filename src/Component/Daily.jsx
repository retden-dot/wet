import React from 'react';
import imgIcon from './Vector.svg'
import { useSelector } from "react-redux";

const Daily = () => {
    const items = useSelector((data) => data.data)

    return (
        <div className="dailyInfo">
            {
                items.daily.map((item, index) => {
                    let time = new Date(item.dt * 1000)
                    const dayRep = (day) => {
                        switch(day){
                            case 'Mon': return 'Понедельник'
                            case 'Tue': return 'Вторник'
                            case 'Wed': return 'Среда'
                            case 'Thu': return 'Четверг'
                            case 'Fri': return 'Пятница'
                            case 'Sat': return 'Cуббота'
                            case 'Sun': return 'Воскресенье'
                            default: return 'Не опредлен'
                        }
                    }
                    return (
                        <div className="dayInfo" key={index}>
                            <div className="nameDay">{dayRep (String(time).slice(0, 3))}</div>
                            <div className="timeIconDay" > 
                                <div className="tempDay">{Math.round(item.temp.max)}°</div>
                                <div className="iconDay" style={{backgroundImage: `url(${imgIcon})`}}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Daily;
