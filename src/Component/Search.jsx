import React from 'react'
import Header from './Header'
import { addCity, addCityInfo } from './redux/action'
import { useDispatch } from "react-redux"


const Search = () => {
    const [state, setState] = React.useState('');
    const dispatch = useDispatch()
    const inputSearchCity = React.useRef()
    const [successState, setSuccess] = React.useState(null)
    const addGorCity = () => setState(inputSearchCity.current.value)
    
    const adCitys = () => {
        fetch(`https://nominatim.openstreetmap.org/search.php?q=${state}&polygon_geojson=1&format=jsonv2`)
            .then( response => response.json())
            .then( data => {
                (data[0] === undefined || data.length === 0) ? 
                    setSuccess(null)
                :
                    dispatch(addCity(data))
                    dispatch(addCityInfo(inputSearchCity.current.value))
                    setSuccess(undefined)
                ;
        })
    }

    const success={
        background: '#d1e7dd',
        color: '#0f5132',
        padding: '10px',
        margin: '65px 0 0 0',
    }
    const styleBtn = {
        margin: '5px',
        padding: '5px 10px',
        background: '#FFFFFF',
        border: '0.3px solid #0E0E0E',
        fontFamily: 'Jost, sans-serif',
        borderRadius: '5px',
    }
    const styleInp = {
        background: '#FFFFFF',
        border: '0.3px solid #5C5C5C',
        fontFamily: 'Jost, sans-serif',
        borderRadius: '5px',
        flexGrow: 1, 
        padding: '5px', 
        margin: '5px' 
    }
    const styleDiv = {
        position: 'fixed',
        top: '50px', 
        left: 0, 
        right: 0, 
        display: 'flex', 
        background: '#FFFFFF', 
        padding: '5px'
    }
    return (
        <div>
            <Header />

            {
                successState === undefined ? 
                    <div style={success} role="alert">  
                        Данные обновлены  
                    </div>
                : 
                    <div></div>
            } 

            <div style={styleDiv}>
                <input style={styleInp} placeholder="Населенный пункт" type="text" ref={inputSearchCity} onChange={ addGorCity }/>
                <button style={styleBtn} onClick={ adCitys }>Добавить город</button>
            </div>
        </div>
    );
}

export default Search;
