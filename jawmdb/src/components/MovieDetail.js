import React, { Component } from 'react';
import StarRating from './StarRating';
import DetailStub from "./DetailStub";
import Modal from "react-modal";
import './DetailsView.css'

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
                            <a href={`${this.tmdbURL}${film.tmdb_id}`}>tmdb</a>
                            <a href={`${this.imdbURL}${film.imdb_id}`}>IMDB</a>
                        </p>
                    </div>                    
                    <DetailStub title="Companies" data={film.production.companies}/>
                    <DetailStub title="Countries" data={film.production.countries}/>
                         <DetailStub title="Keywords" data={film.details.keywords}/>
                             <DetailStub title="Genres" data={film.details.genres}/>
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