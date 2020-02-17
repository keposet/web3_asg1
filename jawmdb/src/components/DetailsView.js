import React from 'react';
import {Component} from 'react';
import MovieDetail from './MovieDetail';

class DetailsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film : [],
            loading : false
        }
    }

    async componentDidMount() {
        try {
            const movieURL = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${this.props.filmID}`;
            const resp = await fetch(`${movieURL}`);
            const data = await resp.json();
            this.setState({...this.state, film: {...data}});
        } catch (error) {
            console.log(error);
        }
        
    }
    render() { 
        console.log(this.state.film);
        if (this.state.loading) {
            //render loading gif
            return <div>loading</div>
        } else {
            
            
        return <div> you did it </div>
            
        }
    }
}
 
export default DetailsView;