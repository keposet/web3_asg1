import React, { Component } from 'react';

class PersonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    width = "w185";
    posterURL =`https://image.tmdb.org/t/p/${this.width}`;

    viewFilm = () => {
        this.props.viewFilm();
    }

    render() { 
        return ( 
        <div className="Person-Detail">
            <h2>Name</h2>
            <h3>{this.props.name}</h3>
            <img src={`${this.posterURL}${this.props.image}`} alt={this.props.name}/>
                  <h5>Birthday</h5><p>{this.props.birthday}</p>
            <h5>Place of Birth</h5><p>{this.props.place_of_birth}</p>
                 <h5>Biography</h5><p>{this.props.biography}</p>
            <h5>IMDB</h5><a href={`https://www.imdb.com/name/${this.props.imdb_id}`}>IMDB Icon</a>

            <button className="Path-Button" onClick={this.viewFilm}>Return to Film 🎞</button>

        </div> 
        );
    }
}
 
export default PersonDetail;