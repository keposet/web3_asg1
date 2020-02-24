import React from 'react';
import './App.css';
import DefaultView from './components/DefaultView';
import { Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import DetailsView from './components/DetailsView';
import {CSSTransition} from 'react-transition-group';
require('dotenv').config()



class App extends React.Component {
  constructor(props) {   
    super(props);   
    this.state = { 
      favorites: [],
      viewFilmID: ''
    }; 
  }
  viewMovie = (id) => {
    this.setState({...this.state,viewFilmID : [id]} )
  }

  addToFavorites = (favorite) => {
      //Take the current list of favorites, if the passed in favorite is not in the list add it to favorites
      let newFavorites = this.state.favorites;
      if( !newFavorites.find( f => f.id === favorite.id)) {
        newFavorites.push( { poster:favorite.poster, id:favorite.id, title:favorite.title } );
        this.setState( { favorites:newFavorites } );
      } 
  }

  removeFromFavorites = (id) => {
      //Look through the favorites array and filter out the movie with the passed in id.
      let newFavorites = this.state.favorites;
      newFavorites = newFavorites.filter( fav => fav.id != id);
      this.setState( { favorites:newFavorites } );
  }

  render() {
    return (
      <main>
        <Route path='/' key='/' exact  >
          { ({match}) => (
              <CSSTransition
                  in={match != null}
                  timeout={750}
                  classNames="home-page"
                  unmountOnExit
              >
                <HomeView />
              </CSSTransition>
          )}
        </Route>   

           
        <Route path='/defaultview' exact 
          render={ (props) =>

            <DefaultView 
                {...props}
                  favorites={this.state.favorites}
                  handleView = {this.viewMovie}
                  addFav={ this.addToFavorites }
                  removeFav={ this.removeFromFavorites }
                  viewFavDetail={this.viewMovie}
                />
          }
        />
        <Route path='/filminfo' exact
          render={(props) => <DetailsView 
            favorites={this.state.favorites}
            addFav={ this.addToFavorites }
            removeFav={ this.removeFromFavorites }
            filmID={this.state.viewFilmID}
            viewFavDetail={this.viewMovie}
            />}
          />
      </main>
    );
  }
}

export default App;
