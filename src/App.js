
import { useDispatch, useSelector } from "react-redux";
import Current from './Component/Current.jsx'
import Header from './Component/Header.jsx'
import Hour from './Component/Hour'
import Daily from './Component/Daily'
import More from './Component/More'
import React from 'react'
import { setData } from './Component/redux/action'
import placeHolderImg from './35.gif'
import { NavLink, Route } from "react-router-dom";
import Search from "./Component/Search.jsx";
import Hourly from "./Component/Hourly.jsx";


function App() {

  const dispatch = useDispatch();
  const city2 = useSelector((data) => data.payload)
  const items = useSelector((data) => data.data)
  
  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?${ city2 === undefined ? 'lat=' + 43 + '&lon=' + 43 : 'lat=' + city2[0].lat + '&lon=' + city2[0].lon }&\n+exclude=hourly,minutely,daily,alerts,minutely&appid=32a79cad65c1ee5a461b90caa6c1f1a7&units=metric&lang=ru`)
    .then( response => response.json())
    .then( data => dispatch(setData(data)))
  },[city2])

  return (
    <div>
      <div className="bgFon"></div>
      <div className="mainComp">
          <Route path='/' component={() => { 
            return (
            (items === undefined || items.dt === 10000 || city2 === undefined) ? 
            <div className="placeholder">
              <img src={placeHolderImg} alt=""/>  
              <NavLink to='/search' className="detect" activeClassName="selectMenu" exact>×</NavLink>
            </div> :  
              <div> 
                  <Header />
                    <main>
                      <div className="main_bl">
                        <Current />
                        <Hour />
                        <Daily />
                        <More />
                      </div>
                    </main>
                </div>
            )
          }}  exact/>
        <Route path='/search' component={Search} exact/>
        <Route path='/hourly' component={Hourly} exact/>
      </div>
    </div>
  )
}

export default App;
