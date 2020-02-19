import React from 'react';
import './App.css';
import DefaultView from './components/DefaultView';
import { Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import DetailsView from './components/DetailsView';



class App extends React.Component {
  constructor(props) {   
    super(props);   
    this.state = { 
      favorites: [],
      viewFilmID : ''
    }; 
  }
  viewMovie = (id) => {
    console.log(id);
    this.setState({...this.state,viewFilmID : [id]} )
  }

  addToFavorites = (favorite) => {
      let newFavorites = this.state.favorites;
      if( !newFavorites.find( f => f.id === favorite.id)) {
        newFavorites.push( { poster:favorite.poster, id:favorite.id, title:favorite.title } );
        this.setState( { favorites:newFavorites } );
      } 
  }

  removeFromFavorites = (id) => {
      let newFavorites = this.state.favorites;
      newFavorites = newFavorites.filter( fav => fav.id != id);
      this.setState( { favorites:newFavorites } );
  }

  render() {
    return (
      <main>
        <Route path='/' exact component={HomeView} />       
        <Route path='/showAll' exact 
          render={ (props) =>
            <DefaultView 
              favorites={this.state.favorites}
              handleView = {this.viewMovie}
              addFav={ this.addToFavorites }
              removeFav={ this.removeFromFavorites }
             />
          }
        />
        <Route path='/filminfo' exact
          render={(props) => <DetailsView 
            filmID={this.state.viewFilmID}
            />}
          />
      </main>
    );
  }
}

export default App;
