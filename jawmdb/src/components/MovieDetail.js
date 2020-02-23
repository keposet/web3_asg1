import React, { Component } from 'react';
import StarRating from './StarRating';
import DetailStub from "./DetailStub";
import Modal from "react-modal";
import style from '../styles/movieDetail.module.css';

class MovieDetail extends Component {
    
    constructor(props){
        super(props);
        this.state={
            modalIsOpen:false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    width = "w185";
    modalWidth="w500";
    baseURL=`https://image.tmdb.org/t/p/`;
    posterURL =`${this.baseURL}${this.width}/`;
    modalURL=`${this.baseURL}${this.modalWidth}`;


    tmdbURL = "https://www.themoviedb.org/movie/";
    imdbURL= "https://www.imdb.com/title/";
        

    changeFavorites= () => {
        console.log(this.props);
        const film = this.props.film;
        const faves = this.props.favorites;
        const add = this.props.addFav;
        const rmv = this.props.removeFav;
        (!faves.find((f)=> f.id === film.id))? add(film): rmv(film.id);
    }

    posterModal=() => {
        // render modal?
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    afterOpenModal(){
        //
    }

    closeModal(){
        this.setState( { modalIsOpen: false});
    }

    render( ) { 
        const film = this.props.film;
        console.log(this.props.film);
        // const companies= (!film.companies===null)? film.companies: ["No Data Available"];
        const companies= (film.production.companies!==null)? film.production.companies: ["No Data Available"];
        const countries= (film.production.countries!==null)? film.production.countries: ["No Data Available"];
        const keywords= (film.details.keywords!==null)? film.details.keywords: ["No Data Available"];
        const genres= (film.details.genres!==null)? film.details.genres: ["No Data Available"];
        let revenue = (film.revenue!==null)? film.revenue: ["No Data Available"];
        
        revenue = revenue/1000000;
        revenue = Number.parseFloat(revenue).toPrecision(5);

        return ( 
            <div className={style.movieDetail}>
                <div className={style.titleCard}>
                    <h2 className={style.title} name="title">{film.title}</h2>
                    <img src ={`${this.posterURL}${film.poster}`} 
                    alt={film.title}
                    onClick={this.openModal}/>
                    <h4 className={style.tg}>{film.tagline}</h4>
                    <h3>Overview</h3>
                    <p>{film.details.overview}</p>
                    
                </div>
                <button className="favorites-button" onClick={this.changeFavorites}>❤</button>
                <div className={style.infoCard}>
                    <div className={style.rInfo}>
                    <p>
                        <h4>Release Date:</h4>
                        {film.release_date}
                    </p>
                        <h4>Revenue</h4><p>${revenue} Million</p>
                        <h4>Rating</h4>
                        <StarRating rating={film.ratings.average}/>
                        <h4>Links</h4>
                        <p>
                            <a href={`${this.tmdbURL}${film.tmdb_id}`}>tmdb</a>
                            <a href={`${this.imdbURL}${film.imdb_id}`}>IMDB</a>
                        </p>
                    </div>                    
                    <DetailStub title="Companies" data={companies}/>
                    <DetailStub title="Countries" data={countries}/>
                         <DetailStub title="Keywords" data={keywords}/>
                             <DetailStub title="Genres" data={genres}/>
                    <Modal 
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.state.afterOpenModal}
                        onRequestClose={this.state.closeModal}
                        //This takes an object, easier to style in css style={"background-color:black;"}
                        ariaHideApp={false}
                        contentLabel="Poster Lightbox"
                    >
                        <img src={`${this.modalURL}${film.poster}`} alt={`${film.title}lightbox`}/>
                        <button onClick={this.closeModal}>🔙</button>
                    </Modal>
                </div>                
            </div>
         );
    }
}
 
export default MovieDetail;