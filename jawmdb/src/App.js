import React from 'react';
import './App.css';
import DefaultView from './components/DefaultView';
import { Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import DetailsView from './components/DetailsView';
require('dotenv').config()



class App extends React.Component {
  constructor(props) {   
    super(props);   
    this.state = { 
      favorites: [1],
      viewFilmID : ''
    }; 
  }
  viewMovie = (id) => {
    console.log(id);
    this.setState({...this.state,viewFilmID : [id]} )
  }

  render() {
    return (
      <main>
        <HomeView />        
        <Route path='/showAll' exact 
          render={ (props) =>
            <DefaultView 
            favorites={this.state.favorites}
            handleView = {this.viewMovie}
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
