import React, { Component } from 'react';
import style from '../styles/movieDetail.module.css'

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
        <div className={style.personDetail}>
            <h3 className={style.nameHead}>Name</h3>
            <h1 className={style.nameActual}>{this.props.name}</h1>
            <img className={style.photo} src={`${this.posterURL}${this.props.image}`} alt={this.props.name}/>
                  <h5 className= {style.birthHead}>Birthday</h5>
                  <p className={style.birthDate}>{this.props.birthday}</p>
            <h5 className={style.placeBirthTitle}>Place of Birth</h5>

            <p className={style.pobD}>{this.props.place_of_birth}</p>
                 <h5 className={style.bioHead}>Biography</h5>
                 <p className={style.bio}>{this.props.biography}</p>
            <h5 className={style.linkHead}>IMDB</h5>
            <a className={style.link} href={`https://www.imdb.com/name/${this.props.imdb_id}`}>IMDB Icon</a>

            <button className={style.ret} onClick={this.viewFilm}>Return to Film 🎞</button>

        </div> 
        );
    }
}
 
export default PersonDetail;