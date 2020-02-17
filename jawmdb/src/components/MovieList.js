import React from 'react'
import MovieItem from './MovieItem'

class MovieList extends React.Component {

    render() {
        console.log(this.props.movies);
        return (
            
            <div className='list'>
            <h2>List/Match</h2>
            <h3>Title</h3>
            <h3>Year</h3>
            <h3>Rating</h3>
            <div className='loading'>
            Loading hahaha
            </div>
            <ul className='moviesList'>
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
