import React from 'react'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
    state = { loading:true, movies:[] };

    async componentDidMount() {
        try {
            const movieUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
            const response = await fetch(movieUrl);
            const jsonData = await response.json();
            this.setState( { loading:false, movies: jsonData } );
        }
        catch (error) {
            console.log(error);
        }
    }

    renderList() {
        return(
            <div>
                <h2>List/Match</h2>
                <h3>Title Year Rating</h3>
                {this.state.movies.map( (m) => <MovieItem title={m.title} poster={m.poster} rating={m.ratings.average} year={m.release_date} key={m.id}/>)}
                {console.log(this.state.movies[0])}
            </div>
        );
    }

    renderLoading() {
        return(
            <div>
            Loading hahaha
            </div>
        );
    }

    render() {
        if( this.state.loading)
            return this.renderLoading();
        else
            return this.renderList();
    }
}
export default MovieList;
