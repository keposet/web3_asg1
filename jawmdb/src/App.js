import React from 'react';
import './App.css';
import DefaultView from './components/DefaultView';
import { Route } from 'react-router-dom';
import HomeView from './components/HomeView';



class App extends React.Component {
  constructor(props) {   
    super(props);   
    this.state = { favorites: [1] }; 
  }

  render() {
    return (
      <main>
        <HomeView />
        <Route path='/showAll' exact 
          render={ (props) =>
            <DefaultView favorites={this.state.favorites} />
          }
        />
      </main>
    );
  }
}

export default App;
