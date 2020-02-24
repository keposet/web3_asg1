import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
class FavoriteItem extends React.Component {   
    handleRemove = () => {
        const removeId = this.props.id;
        this.props.removeFav(removeId);
    }
    handleDetail = () => {
        this.props.viewFavDetail(this.props.id);
    }
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (       
            <li className="favorite">
                <Link to='filminfo' filmID={this.props.id}>
                    <img onClick={this.handleDetail} 
                    src={`${url}${this.props.poster}`} 
                    className="later" 
                    alt={ this.props.title } 
                    title={ this.props.title }/>
                </Link>
                <button className="closeButton" onClick={ this.handleRemove }>
                    <FontAwesomeIcon icon={ faTrashAlt }/>
                </button>
            </li>       
        ); 
    }
} 
export default FavoriteItem;