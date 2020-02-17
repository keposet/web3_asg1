import React, { Component } from 'react';

class MovieDetail extends Component {
    state = {  };
    width = "w185";
    posterURL =`https://image.tmdb.org/t/p/${width}/`;

    handleFave= (id) => {
        this.props.handleFave(id);
    }
    render() { 
        return ( 
            <div className="idk">
                <div className="poster-detail">
                    <h2 name="title">{this.props.title}</h2>
                    <img src ={`${this.posterURL}${this.props.poster}`} />
                </div>
                <div className="text-detail">
                    {
                    // loop to build cast and crew items
                    }

                </div>
                

            </div>
         );
    }
}
 
export default MovieDetail;