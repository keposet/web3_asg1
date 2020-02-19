import React from 'react'; 
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

const HeaderBar = function (props) {   
    return (         
        <div className="header-title">             
           <Link to='/' >
                <img src={logo} alt="JAWMDB" className="logo" />    
            </Link>        
        </div>            
    ); 
} 
export default HeaderBar; 