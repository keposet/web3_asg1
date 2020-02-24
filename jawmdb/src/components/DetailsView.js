import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieDetail from './MovieDetail';
import PersonDetail from './PersonDetail';
import PersonnelList from './PersonnelList';
import loading from '../loading.svg'
import './DetailsView.css';
class DetailsView extends Component {

    constructor(props){
        super(props);
        this.state={
            film : {},
            castMember : {},
            castID: "",
            loading : true,
            filmView : true
        };
    }

    viewCredit = (id) => {
        if (id !== this.state.castID) {
            this.setState({loading: true, castID: id, filmView: false});    
        }
    }

    viewFilm = () => {
        this.setState({loading: true, filmView: true});
    }

//pull the else, add to CDU
    async componentDidMount() {
        try {
            const filmStorageID = localStorage.getItem('filmID');
            let filmID = JSON.parse(filmStorageID);
            // filmID added to local storage
            if (filmID ===null || filmID === "") {
                localStorage.setItem('filmID', JSON.stringify(this.props.filmID))
            }
            // check if props.fid ""
            if(this.props.filmID !== "" && this.props.filmID !== filmID){
                localStorage.setItem('filmID', JSON.stringify(this.props.filmID))
                filmID = this.props.filmID;
            }
            const movieURL = `https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${filmID}`;
            const resp = await fetch(`${movieURL}`);
            const data = await resp.json();
            this.setState({film: {...data}, loading: false});
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        // if new cast member then fetch
        console.log("CDU on fave click");
        console.log(`prevprops ${prevProps}`);
        console.log(`current rops ${this.props}`);
        if (prevState.castID !=this.state.castID) {
            try {             
                // this should be a node .env
                const creditURL = `https://api.themoviedb.org/3/person/${this.state.castID}?api_key=27e7355f9cd5bf46ffa2ad7726d3c494`;
                const response = await fetch(creditURL);
                const creditData = await response.json();
                this.setState({castMember: {...creditData}, loading:false, filmView: false});
            } catch (error) {
                console.log(error);
            }
        //if returning to movie view, load movie data from  state
        } else if (prevState.filmView != this.state.filmView 
            || prevState.film != this.state.film ) {
                 this.setState({loading:false});
        } else if ( prevProps.filmID !== this.props.filmID){
            try {
                const filmStorageID = localStorage.getItem('filmID');
                let filmID = JSON.parse(filmStorageID);
                // filmID added to local storage
                if (filmID ===null || filmID === "") {
                    localStorage.setItem('filmID', JSON.stringify(this.props.filmID))
                }
                // check if props.fid ""
                if(this.props.filmID !== "" && this.props.filmID !== filmID){
                    localStorage.setItem('filmID', JSON.stringify(this.props.filmID))
                    filmID = this.props.filmID;
                }
                const movieURL = `https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${filmID}`;
                const resp = await fetch(`${movieURL}`);
                const data = await resp.json();
                this.setState({film: {...data}, loading: false});
            } catch (error) {
                console.log(error);
            }
        }
}

    render() { 
        if (this.state.loading) {
            //render loading gif
            return (
                <img className="loading" src={loading} alt="loading"/>
            );
        } else {
            if (this.state.filmView) {
                return (
                    <div className="Detail-View">
                         <Header />
                        < FavoritesList 
                            favorites={ this.props.favorites } 
                            removeFav={ this.props.removeFav }
                            viewFavDetail={this.props.viewFavDetail}
                        />
                            <div className="return-holder">
                                <Link to='defaultview?search='>
                                    <button>Return 🔙</button>
                                </Link>
                            </div>
                        <MovieDetail 
                        film={this.state.film}
                        favorites={this.props.favorites}
                        addFav={ this.props.addFav }
                        removeFav={ this.props.removeFav }
                        />
                        <PersonnelList 
                            castList={this.state.film.production.cast} 
                            crewList={this.state.film.production.crew} 
                            viewCredit={this.viewCredit}/>
                        
                        
                    </div>
                );
            }else {
                return (
                    <div className="Detail-View">
                        <Header />
                        < FavoritesList 
                            favorites={ this.props.favorites } 
                            removeFav={ this.props.removeFav }
                            viewFavDetail={this.props.viewFavDetail}
                        />
                        <PersonDetail 
                            name={this.state.castMember.name}
                            image={this.state.castMember.profile_path}
                            imdb_id={this.state.castMember.imdb_id}
                            birthday={this.state.castMember.birthday}
                            biography={this.state.castMember.biography}
                            place_of_birth={this.state.castMember.place_of_birth}
                            viewFilm={this.viewFilm}
                        />
                        <PersonnelList 
                            castList={this.state.film.production.cast} 
                            crewList={this.state.film.production.crew} 
                            viewCredit={this.viewCredit}
                        />

                    </div>
                );

            }
        }
    }
}
 
export default DetailsView;