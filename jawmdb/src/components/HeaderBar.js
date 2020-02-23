import React from 'react'; 
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
import style from '../styles/header.module.css';

const HeaderBar = function (props) {   
    return (         
        <div className={style.headerTitle}>
            <div className={style.headerLogo} >
                <Link to='/' >
                    <img src={logo} alt="JAWMDB" className="logo" />    
                </Link>
            </div>
            <h4 className={style.pageTitle}>JAWMDB: Jason & Austin's Movie Database</h4>
        </div>            
    ); 
} 
export default HeaderBar; 