import React, { Component } from 'react';
import StarRating from './StarRating';
import DetailStub from "./DetailStub";

class MovieDetail extends Component {
    

    width = "w185";
    posterURL =`https://image.tmdb.org/t/p/${this.width}/`;
    tmdbURL = "https://www.themoviedb.org/movie/";
    imdbURL= "https://www.imdb.com/title/";
        

    handleFave= () => {
        console.log("empty handle fave fucntion in Movie Detail");
        // this.props.handleFave(this.props.film.id);
    }

    render( ) { 
        const film = this.props.film;
        let revenue = film.revenue;
        revenue = revenue/1000000;
        revenue = Number.parseFloat(revenue).toPrecision(5);
        console.log(film);

        return ( 
            <div className="Film-Detail">
                <div className="Title-Card">
                    <h2 name="title">{film.title}</h2>
                    <img src ={`${this.posterURL}${film.poster}`} />
                    <p>{film.tagline}</p>
                </div>
                <button className="favorites-button" onClick={this.handleFave}>❤</button>
                <div className="Film-Data-Card">
                    <div className="Overview-Stub">
                        <h3>Overview</h3>
                             <p>{film.details.overview}</p>
                    </div>
                    <div className="Release-Stub">
                        <h5>Release Date:</h5>
                        <p>{film.release_date}</p>
                        <h5>Revenue</h5><p>${revenue} Million</p>
                        <h5>Rating</h5>
                        <StarRating rating={film.ratings.average}/>
                        <h5>Links</h5>
                        <p>
                            <a href={`${this.tmdbURL}${film.tmdb_id}`}>tmdb</a>
                            <a href={`${this.imdbURL}${film.imdb_id}`}>IMDB</a>
                        </p>
                    </div>                    
                    <DetailStub title="Companies" data={film.production.companies}/>
                    <DetailStub title="Countries" data={film.production.countries}/>
                         <DetailStub title="Keywords" data={film.details.keywords}/>
                             <DetailStub title="Genres" data={film.details.genres}/>
                </div>                
            </div>
         );
    }
}
 
export default MovieDetail;