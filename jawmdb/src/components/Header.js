import React from 'react'; 
import HeaderBar from './HeaderBar.js'; 
import HeaderMenu from './HeaderMenu.js'; 
import style from '../styles/header.module.css';
const HeaderApp = function (props) {     
    return (         
        <header className={style.header}>           
            <HeaderBar />           
            <HeaderMenu />         
        </header>         
    ); 
} 
export default HeaderApp;