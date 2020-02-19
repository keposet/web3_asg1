import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

class MovieList extends React.Component {
    state = { selected:"title", reverse:false };

    sortValue = (e) => {
        let sortOrder = this.props.sortTitle;
        const selected = e.currentTarget.value;
        if( selected === "year") {
            sortOrder = this.props.sortYear;
        } else if( selected === "rating") {
            sortOrder = this.props.sortRating;
        }
        const reverse = this.state.selected === selected && this.state.reverse;
        this.props.sortMovies(sortOrder, reverse);
        this.setState( { selected: selected , reverse: !this.state.reverse});
    }
    render() {
        return ( 
            <div className="movie-list">
                <h2 className="list-heading">List/Match</h2>
                <h3 className="movie-title center-align"><button name="title" value="title" onClick={ this.sortValue}>Title</button></h3>
                <h3 className="center-align"><button name="year" value="year" onClick={ this.sortValue}>Year</button></h3>
                <h3 className="center-align"><button name="rating" value="rating" onClick={ this.sortValue}>Rating</button></h3>
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
