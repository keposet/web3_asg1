import React, { Component } from 'react';
import StarRating from './StarRating';

class MovieDetail extends Component {
    

    width = "w185";
    posterURL =`https://image.tmdb.org/t/p/${this.width}/`;
        

    handleFave= (id) => {
        this.props.handleFave(id);
    }

    render( ) { 
        const film = this.props.film;
        console.log(film);
        return ( 
            <div className="Film-Detail">
                <div className="Title-Card">
                    <h2 name="title">{film.title}</h2>
                    <img src ={`${this.posterURL}${film.poster}`} />
                    <p>{film.tagline}</p>
                </div>
                <div className="Film-Data-Card">
                    <div className="Overview-Stub">
                        <h3>Overview</h3>
                             <p>{film.details.overview}</p>
                    </div>
                    <div className="IDK">
                        <h5>Release Date:</h5>
                        <p>{film.release_date}</p>
                        <h5>Revenue</h5><p>${film.revenue}</p>
                        <h5>Rating</h5>
                        <p>
                            {
                                // gotta make stars
                                // film.ratings.average gives number
                                // x.0 to x.3 == 0 x.4-x.6 = 0.5 0.7+ = 1
                                // seems like a functional component would be necessary
                                
                            }

                        </p>
                        {console.log('MovieDetail film state')}
                        {console.log(film)}
                        <StarRating rating={film.ratings.average}/>
                        <h5>Links</h5>
                        <p>
                            <a href=''>tmdb</a>
                            <a href=''>IMDB</a>
                        </p>
                    </div>
                    

                </div>
                

            </div>
         );
    }
}
 
export default MovieDetail;