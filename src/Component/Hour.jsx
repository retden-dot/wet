import React from 'react'
import imgIcon from './Vector.svg'
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addInd } from './redux/action'




const Hour = () => {
    const dispatch = useDispatch();
    const items = useSelector((data) => data.data.hourly)
    const itemsArr = items.slice(0, 6)

    const addIndHour = (ind) => {
        dispatch(addInd(ind))
    }

    return (
        <div className="hoursInfo">
            {
                itemsArr.map((arrItems,index) => {
                    const time = new Date(arrItems.dt * 1000)
                    return(
                        <NavLink to='/hourly' key={index} >
                            <div className="hourInfo" onClick={() => addIndHour(index)} id-index={index}>
                                <div className="timeHour">{time.getHours() + ':00'}</div>
                                <div className="icon_hour" style={{backgroundImage: `url(${imgIcon})`}}></div>
                                <div className="temp_hour">{Math.round(arrItems.temp)}°</div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Hour;
