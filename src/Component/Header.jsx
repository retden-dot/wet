import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to='/search' activeClassName="selectMenu" exact> Места</NavLink>
            <NavLink to='/' activeClassName="selectMenu" exact> Главная</NavLink>
        </header>
    );
}

export default Header;
