import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const Hourly = () => { 

        const items = useSelector((data) => data)

    
        return (
            <div>
                
               {
                   items === undefined ? <Redirect to='/search' /> :
                   items.data.hourly[items.index].temp
                }
            </div>
        )
}

export default Hourly;
