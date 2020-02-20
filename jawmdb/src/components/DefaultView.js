import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieList from './MovieList.js';
import MovieFilter from './MovieFilter.js';
import { useLocation } from 'react-router-dom';

class DefaultView extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            loading:true,
            movies:[], 
            filteredMovies:[]
        };
    }
    
    async componentDidMount() {
        try {
            //Check for query string
            let [,search] = this.props.location.search.split("=");
            
            //Check if the movies have been stored in local.
            const movieObj = localStorage.getItem('movies');
            let movies = JSON.parse(movieObj);
            //If they are not, fetch the movies from the API
            if(movies == null || movies == "") {
                const movieUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                const response = await fetch(movieUrl);
                movies = await response.json();

                //once the movies have been fetched store them localy for quicker loading times
                localStorage.setItem('movies', JSON.stringify(movies));
            }

            //Sort the movies the movies before displaying them.
            let filteredMovies = this.filterByTitle(movies, search);
            filteredMovies.sort( this.sortTitle );
            this.setState( { loading:false, movies: movies, filteredMovies: filteredMovies} );
        }
        catch (error) {
            console.log(error);
        }
    }

    //Method to be called by the movie list. 
    //This method takes a sorting function and a boolean on whether the list should be reversed
    sortMovies = (sortBy, reverse) => {
        const sortedMovies = [...this.state.filteredMovies];
        sortedMovies.sort( sortBy );
        if ( reverse ) {
            sortedMovies.reverse();
        }
        this.setState( { filteredMovies: sortedMovies });
    }

    //A set of sorting functions used by the movie list
      // Either, sort by title, year, or rating
    sortTitle(a,b) {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
            }
        if (nameA > nameB) {
            return 1;
            }
        return 0
    }
    sortYear(a,b){
        var yearA = a.release_date;
        var yearB = b.release_date;
        if (yearA < yearB) {
            return -1;
            }
        if (yearA > yearB) {
            return 1;
            }
        return 0
    }
    sortRating(a,b){
        var ratingA = a.ratings.average;
        var ratingB = b.ratings.average;
        if (ratingA < ratingB) {
            return -1;
            }
        if (ratingA > ratingB) {
            return 1;
            }
        return 0
    }

    //Function used by MovieFilter to clear all filters and display all movies
    clear = () => {
        const filtered = this.filterByTitle(this.state.movies, "");
        this.setState( { filteredMovies: filtered } );
    }

    //Function used by MovieFilter, filters the movies array based on given Title, year, and rating.
      // as defined in filterList (title:"", yearupper:"", yearlower:"", ratingUpper:"", raringLower:"")
    filter = (filterList) => {
        let filtered = this.filterByTitle(this.state.movies, filterList.title);
        filtered = this.filterByYear(filtered, filterList.year, filterList.yearUpper);
        filtered = this.filterByRating(filtered, filterList.ratingLower, filterList.ratingUpper);
        this.setState( {filteredMovies: filtered } );
    }

    //Function used by filter to filter movie array on given title
    filterByTitle = (movies, title) => {
        //Take the list of movies, and for each movie check if the desired title is contained. If not remove it from the list.
        return movies.filter( (movie) => movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    }

    //Function used by filter to filter movie array on given Year range ( e.g 1994 -> 2000)
    filterByYear = (movies, lowerBound, upperBound) => {
        //if no lowerbound defined, set to zero as the lowest year
        if(lowerBound == null || lowerBound === "") {
            lowerBound = 0;
        }

        //if no upperBound defined use the current year as the highest year
        if(upperBound == null || upperBound === "") {
            let today = new Date();
            upperBound = today.getFullYear();
        }

        const updatedMovies = movies.filter( (movie) => {
                let [year] = movie.release_date.split('-');
                return year > parseInt(lowerBound, 10) && year < parseInt(upperBound, 10) 
            });
        return updatedMovies;
    }

    //Function used by filter to filter movie array on given Rating range (e.g. 2 -> 8)
    filterByRating = (movies, lowerBound, upperBound) => {
        if(lowerBound == null || lowerBound === "") {
            lowerBound = -1;
        }

        if(upperBound == null || upperBound === "") {
            upperBound = 11;
        }

        return movies.filter( (movie) => movie.ratings.average >= lowerBound && movie.ratings.average <= upperBound );
    }


    render() {
        return (       
            <div className="default-view">
                <Header />
                < FavoritesList favorites={ this.props.favorites } removeFav={ this.props.removeFav }/>
                < MovieFilter filter={this.filter} clear={ this.clear} />
                < MovieList 
                    movies={ this.state.filteredMovies }
                    handleView={ this.props.handleView }
                    loading={ this.state.loading }
                    sortTitle={ this.sortTitle }
                    sortYear={ this.sortYear }
                    sortRating={ this.sortRating }
                    sortMovies={ this.sortMovies }
                    addFav={ this.props.addFav }
                 />
            </div>         
        ); 
    }

} 


export default DefaultView;
