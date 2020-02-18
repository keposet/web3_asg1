import React from 'react';
import {Component} from 'react';
import MovieDetail from './MovieDetail';

class DetailsView extends Component {

    state = {
        film : {},
        details: {},
        production:{},
        loading : true
    }

    async componentDidMount() {
        try {
            const movieURL = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${this.props.filmID}`;
            const resp = await fetch(`${movieURL}`);
            const data = await resp.json();
            this.setState({film: {...data}, loading: false});
        } catch (error) {
            console.log(error);
        }
        
    }
    render() { 
        
        if (this.state.loading) {
            //render loading gif
            return <div>loading</div>
        } else {
            return (
                <div className="Detail-View">
                    <MovieDetail film={this.state.film}
                    />
                </div>
            );
        }
    }
}
 
export default DetailsView;