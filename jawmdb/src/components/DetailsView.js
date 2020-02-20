import React from 'react';
import {Component} from 'react';
import MovieDetail from './MovieDetail';
import PersonDetail from './PersonDetail';
import PersonnelList from './PersonnelList';
import { Link } from 'react-router-dom';

class DetailsView extends Component {

    state = {
        film : {},
        castMember : {},
        castID: "",
        loading : true,
        filmView : true
    }

    viewCredit = (id) => {
        this.setState({loading: true, castID: id, filmView: false});
        // this.setState({ castID: id, filmView: false});
    }

    viewFilm = () => {
        this.setState({loading: true, filmView: true});
    }


//pull the else, add to CDU
    async componentDidMount() {
        if (this.state.filmView) {
            try {
                const movieURL = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${this.props.filmID}`;
                const resp = await fetch(`${movieURL}`);
                const data = await resp.json();
                this.setState({film: {...data}, loading: false});
                
            } catch (error) {
                console.log(error);
            }    
        }
    }

    async componentDidUpdate(prevProps, prevState) {
            if (prevState.castID !=this.state.castID) {
                // ensure castID updates
                console.log(this.state.castID);
                try {             
                    // this should be a node .env
                    const creditURL = `https://api.themoviedb.org/3/person/${this.state.castID}?api_key=27e7355f9cd5bf46ffa2ad7726d3c494`;
                    const response = await fetch(creditURL);
                    const creditData = await response.json();
                    this.setState({castMember: {...creditData}, loading:false, filmView: false});
                    console.log(this.state.castMember);
                } catch (error) {
                    console.log(error);
                }
            } else if (prevState.filmView != this.state.filmView) {
                try {
                    console.log("empty CDU trycatch");
                    this.setState({loading:false});
                } catch (error) {
                    console.log(error);
                }
                
            }
    }


    render() { 
        if (this.state.loading) {
            //render loading gif
            return <div>loading</div>
        } else {
            if (this.state.filmView) {
                return (
                    <div className="Detail-View">
                        <Link to='showAll'>
                            <button>Return 🔙</button>
                        </Link>
                        <MovieDetail 
                        film={this.state.film}
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