import React from 'react'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
    state = { loading:true, movies:[] };

    async componentDidMount() {
        try {
            const movieUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
            const response = await fetch(movieUrl);
            const jsonData = await response.json();
            console.log(jsonData);
            jsonData.sort( function(a,b) {
                var nameA = a.title.toUpperCase();
                var nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                  }
                if (nameA > nameB) {
                    return 1;
                  }
                return 0
            } );
            console.log(jsonData);
            this.setState( { loading:false, movies: jsonData } );
        }
        catch (error) {
            console.log(error);
        }
    }

    renderList() {
        return(
            <div className='list'>
                <h2>List/Match</h2>
                <h3>Title</h3>
                <h3>Year</h3>
                <h3>Rating</h3>
                <ul className='moviesList'>
                    {this.state.movies.map( (m) => <MovieItem title={m.title} poster={m.poster} rating={m.ratings.average} year={m.release_date} key={m.id}/>)}
                </ul>
                
            </div>
        );
    }

    renderLoading() {
        return(
            <div className='list'>
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
