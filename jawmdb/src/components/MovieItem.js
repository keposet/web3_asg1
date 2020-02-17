import React from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    handleView = () => {
        // this.props.handleView(this.props.tmdb_id); tph is undefined. but the property is there. 
        this.props.handleView(this.props.filmID);
        
    }
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (
            <li className='movieItem'>
                <img src={`${url}${this.props.poster}`} alt={this.props.title} />
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.rating}</p>
                <button>♥</button>
                <Link to='filminfo'>
                    <button onClick={this.handleView}>View</button>
                </Link>
                
            </li>
        )
    }
}
export default MovieItem;