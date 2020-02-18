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
        let filtered = this.filterByTitle(this.state.movies, filterList.title);
        filtered = this.filterByYear(filtered, filterList.year, filterList.yearUpper);
        filtered = this.filterByRating(filtered, filterList.ratingLower, filterList.ratingUpper);
        this.setState( {filteredMovies: filtered } );
    }

    filterByTitle = (movies, title) => {
        //Take the list of movies, and for each movie check if the desired title is contained. If not remove it from the list.
        return movies.filter( (movie) => movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    }

    filterByYear = (movies, lowerBound, upperBound) => {
        if(lowerBound == null || lowerBound === "") {
            lowerBound = 0;
        }

        if(upperBound == null || upperBound === "") {
            let today = new Date();
            upperBound = today.getFullYear();
        }

        const updatedMovies = movies.filter( (movie) => {
                let [year] = movie.release_date.split('-');
                return year > lowerBound && year < upperBound 
            });
        return updatedMovies;
    }

    filterByRating = (movies, lowerBound, upperBound) => {
        if(lowerBound == null || lowerBound === "") {
            lowerBound = -1;
        }

        if(upperBound == null || upperBound === "") {
            upperBound = 11;
        }

        return movies.filter( (movie) => movie.ratings.average > lowerBound && movie.ratings.average < upperBound );
    }


    render() {
        return (       
            <div className="default-view">
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
                < MovieFilter filter={this.filter} clear={ this.clear} />
                < MovieList 
                    movies={ this.state.filteredMovies }
                    handleView={ this.props.handleView }
                 />
            </div>         
        ); 
    }

} 
export default DefaultView;