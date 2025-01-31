import React, { Component } from 'react';
import StarRating from './StarRating';
import DetailStub from "./DetailStub";
import Modal from "react-modal";
import imdbLogo from "../IMDb_logo.svg";
import tmdbLogo from "../tmdb.svg";
import './DetailsView.css';

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
        const companies = (this.props.film.production.companies !== null)? this.props.film.production.companies: [{name :"Data Not Available"}];
        const countries = (this.props.film.production.countries !== null)? this.props.film.production.countries: [{name :"Data Not Available"}];
        const keywords = (this.props.film.details.keywords !== null)? this.props.film.details.keywords: [{name :"Data Not Available"}];
        const genres = (this.props.film.details.genres !== null)? this.props.film.details.genres: [{name :"Data Not Available"}];
        let revenue = film.revenue;
        revenue = revenue/1000000;
        revenue = Number.parseFloat(revenue).toPrecision(5);

        return ( 
            <div className="Film-Detail">
                <div className="Title-Card">
                    <h2 name="title">{film.title}</h2>
                    <img src ={`${this.posterURL}${film.poster}`} 
                    alt={film.title}
                    onClick={this.openModal}/>
                    <p>{film.tagline}</p>
                    <button className="favorites-button" onClick={this.changeFavorites}>❤</button>
                </div>
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
                            <a href={`${this.tmdbURL}${film.tmdb_id}`}><img className="t-svg" src={tmdbLogo} alt="tmdbLink"/></a>
                            <a href={`${this.imdbURL}${film.imdb_id}`}><img className="i-svg" src={imdbLogo} alt="imdbLink"/></a>
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
                        className="modal-lightbox"
                        contentLabel="Poster Lightbox"
                    >
                        <div>
                            <button onClick={this.closeModal}>🔙</button>
                        </div>
                        <img src={`${this.modalURL}${film.poster}`} alt={`${film.title}lightbox`}/>
                        
                    </Modal>
                </div>                
            </div>
         );
    }
}
 
export default MovieDetail;