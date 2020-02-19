import React from 'react'

class FavoriteItem extends React.Component {   
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (       
            <li className="favorite">
                <img src={`${url}${this.props.poster}`} className="later" alt={ this.props.title }/>
                <button className="closeButton">
                    <i>x</i>
                </button>
            </li>       
        ); 
    }
} 
export default FavoriteItem;