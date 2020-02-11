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

    filter = () => {
        console.log("Filtering");
    }

    render() {
        return (       
            <div className="default-view">
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
                < MovieFilter filter={this.filter} />
                < MovieList movies={ this.state.filteredMovies } />
            </div>         
        ); 
    }

} 
export default DefaultView;