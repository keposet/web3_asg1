import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieList from './MovieList.js';
import MovieFilter from './MovieFilter.js';

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
            const movieUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
            const response = await fetch(movieUrl);
            const jsonData = await response.json();

            jsonData.sort( this.sortTitle );
            this.setState( { loading:false, movies: jsonData, filteredMovies: jsonData} );
        }
        catch (error) {
            console.log(error);
        }
    }

    sortMovies = (sortBy, reverse) => {
        const sortedMovies = [...this.state.filteredMovies];
        sortedMovies.sort( sortBy );
        if ( reverse ) {
            sortedMovies.reverse();
        }
        this.setState( { filteredMovies: sortedMovies });
    }

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
                return year > parseInt(lowerBound, 10) && year < parseInt(upperBound, 10) 
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
                    loading={ this.state.loading }
                    sortTitle={ this.sortTitle }
                    sortYear={ this.sortYear }
                    sortRating={ this.sortRating }
                    sortMovies={ this.sortMovies }
                 />
            </div>         
        ); 
    }

} 
export default DefaultView;