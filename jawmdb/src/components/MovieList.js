import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

class MovieList extends React.Component {

    render() {
        console.log(this.props.movies);
        return ( 
            <div className="movie-list">
                <h2 className="list-heading">List/Match</h2>
                <h3 className="movie-title center-align">Title</h3>
                <h3 className="center-align">Year</h3>
                <h3 className="center-align">Rating</h3>
                <div className='loading' hidden={ !this.props.loading } >
                Loading hahaha
                </div>
                <ul className="movies">
                    {this.props.movies.map( (m) => <MovieItem 
                    title={m.title} 
                    poster={m.poster} 
                    rating={m.ratings.average} 
                    year={m.release_date} 
                    filmID={m.id}
                    handleView={this.props.handleView}
                    key={m.id} /> ) }
                </ul>
            </div>
        );
    }
}
export default MovieList;
