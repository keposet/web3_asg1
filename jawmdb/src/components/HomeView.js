import React from 'react';
import { Link } from 'react-router-dom';

class HomeView extends React.Component {
    state = { search: ""};

    handleInput = (e) => {
        let updatedSearch = this.state.search;
        updatedSearch = e.currentTarget.value;
        this.setState( { search: updatedSearch} );
    }

    render(){
        const imgUrl = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80";
        return(
            <div className="home-view"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    height: '800px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div>
                    <h1>Movie Browser</h1>
                    <label>Title</label>
                    <input type="text" onChange={ this.handleInput }></input>
                    <p>
                        <Link to='/defaultview?search='>
                            <button>Show all Movies</button>
                        </Link>
                       <Link to={`/defaultview?search=${this.state.search}`} >
                            <button >Search Movies</button>
                        </Link>                        
                    </p>
                   
                </div>
                <p>Image Credit to: Denise Jans @dmjdenise from unsplash</p>
            </div>
        );
    }
}

export default HomeView;
