import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieList from './MovieList.js';
import MovieFilter from './MovieFilter.js';

class DefaultView extends React.Component {   

    state = { loading:true, movies:[], filteredMovies:[] };

    async componentDidMount() {
        try {
            const movieUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
            const response = await fetch(movieUrl);
            const jsonData = await response.json();

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
            this.setState( { loading:false, movies: jsonData, filteredMovies: jsonData} );
        }
        catch (error) {
            console.log(error);
        }
    }

    clear = () => {
        const filtered = this.filterByTitle(this.state.movies, "");
        this.setState( { filteredMovies: filtered } );
    }

    filter = (filterList) => {
        console.log("Filtering");
        const filtered = this.filterByTitle(this.state.movies, filterList.title);
        this.setState( {filteredMovies: filtered } );
    }

    filterByTitle = (movies, title) => {
        //Take the list of movies, and for each movie check if the desired title is contained. If not remove it from the list.
        return movies.filter( (movie) => movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    }

    render() {
        return (       
            <div className="default-view">
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
                < MovieFilter filter={this.filter} clear={ this.clear} />
                < MovieList 
                    movies={ this.state.filteredMovies }
                    handleView={this.props.handleView}
                 />
            </div>         
        ); 
    }

} 
export default DefaultView;