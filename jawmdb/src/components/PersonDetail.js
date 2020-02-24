import React, { Component } from 'react';
import './PersonDetail.css'

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
            <h2 className="nameHead">Name</h2>
            <h3 className="name">{this.props.name}</h3>
            <img src={`${this.posterURL}${this.props.image}`} alt={this.props.name}/>
            <h5 className="birthHead">Birthday</h5>
            <p className="birth">{this.props.birthday}</p>
            <h5 className="placeHead">Place of Birth</h5>
            <p className="place">{this.props.place_of_birth}</p>
            <h5 className="bioHead">Biography</h5>
            <p className="bio">{this.props.biography}</p>
            <a className="actorLink" href={`https://www.imdb.com/name/${this.props.imdb_id}`}>IMDB Icon</a>
            <button className="Path-Button" onClick={this.viewFilm}>Return to Film 🎞</button>
        </div> 
        );
    }
}
 
export default PersonDetail;