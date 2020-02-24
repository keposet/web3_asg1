import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class MovieItem extends React.Component {
    handleView = () => {
        this.props.handleView(this.props.filmID);
    }
    
    handleFavorite = () => {
        const newFav = { poster:this.props.poster, id:this.props.filmID, title:this.props.title};
        this.props.addFav(newFav);
    }

    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        const [year] = this.props.year.split('-');
        return (
            <li className="movie-list-item">
                <Link to='filminfo'
                    filmID={this.props.filmID}
                >
                    <img src={`${url}${this.props.poster}`} alt={this.props.title} onClick={this.handleView} />
                </Link>
                
                <Link to='filminfo'
                    filmID={this.props.filmID}
                >
                    <p onClick={this.handleView}>{this.props.title}</p>
                </Link>
                <p className="center-align mi-year">{year}</p>
                <p className="center-align mi-rating">{this.props.rating}</p>
                <div className="favorite-btn" ><FontAwesomeIcon icon={faHeart} onClick={ this.handleFavorite }/></div>
                <Link to='filminfo'
                    filmID={this.props.filmID}
                >
                    <button onClick={this.handleView}>View</button>
                </Link>
                
            </li>
        )
    }
}
export default MovieItem;