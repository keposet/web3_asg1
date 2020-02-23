import React from 'react';
import style from "../styles/fave.module.css";

class FavoriteItem extends React.Component {   
    handleRemove = () => {
        const removeId = this.props.id;
        this.props.removeFav(removeId);
    }
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (       
            <li className={style.favoritesItem}>
                <img src={`${url}${this.props.poster}`} className="later" alt={ this.props.title }/>
                <button className="closeButton" onClick={ this.handleRemove }>
                    <i > x </i>
                </button>
            </li>       
        ); 
    }
} 
export default FavoriteItem;