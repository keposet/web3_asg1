import React from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    handleView = () => {
        // this.props.handleView(this.props.tmdb_id); tph is undefined. but the property is there. 
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
                <img src={`${url}${this.props.poster}`} alt={this.props.title} />
                <p>{this.props.title}</p>
                <p className="center-align">{year}</p>
                <p className="center-align">{this.props.rating}</p>
                <button onClick={ this.handleFavorite }>♥</button>
                <Link to='filminfo'>
                    <button onClick={this.handleView}>View</button>
                </Link>
                
            </li>
        )
    }
}
export default MovieItem;