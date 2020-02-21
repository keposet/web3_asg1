import React from 'react'
import {Link} from 'react-router-dom'
class FavoriteItem extends React.Component {   
    handleRemove = () => {
        const removeId = this.props.id;
        this.props.removeFav(removeId);
    }
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (       
            <li className="favorite">
                <Link to={`/filmInfo?=${this.props.title}`} ><img src={`${url}${this.props.poster}`} className="later" alt={ this.props.title }/></Link>
                <button className="closeButton" onClick={ this.handleRemove }>
                    <i > x </i>
                </button>
            </li>       
        ); 
    }
} 
export default FavoriteItem;