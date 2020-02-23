import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';
import loading from '../loading.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

class MovieList extends React.Component {
    state = { selected:"title", reverse:true };

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
        const display = this.props.movies.length > 0 || this.props.loading;
        const titleArrow = (this.state.selected === "title" && this.state.reverse) ? (<FontAwesomeIcon icon={faSortDown}/>) : (<FontAwesomeIcon icon={faSortUp}/>);
        const yearArrow = (this.state.selected === "year" && !this.state.reverse) ? (<FontAwesomeIcon icon={faSortDown}/>) : (<FontAwesomeIcon icon={faSortUp}/>);
        const ratingArrow = (this.state.selected === "rating" && !this.state.reverse) ? (<FontAwesomeIcon icon={faSortDown}/>) : (<FontAwesomeIcon icon={faSortUp}/>);
        return ( 
            <div className="movie-list">
                <h2 className="list-heading">List/Match</h2>
                <h3 className="movie-title center-align"><button name="title" value="title" onClick={ this.sortValue}>Title {titleArrow} </button></h3>
                <h3 className="center-align"><button name="year" value="year" onClick={ this.sortValue}>Year {yearArrow} </button></h3>
                <h3 className="center-align"><button name="rating" value="rating" onClick={ this.sortValue}>Rating {ratingArrow} </button></h3>
                <div className="empty-search" hidden={ display }> Your search found no results</div>
                <img className="loading" src={loading} alt="loading" hidden={ !this.props.loading }/>
                
                <ul className="movies">
                    {this.props.movies.map( (m) => <MovieItem 
                    title={m.title} 
                    poster={m.poster} 
                    rating={m.ratings.average} 
                    year={m.release_date} 
                    filmID={m.id}
                    handleView={this.props.handleView}
                    addFav={ this.props.addFav }
                    key={m.id} /> ) }
                </ul>
            </div>
        );
    }
}
export default MovieList;
