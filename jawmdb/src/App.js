import React from 'react';
import './App.css';
import DefaultView from './components/DefaultView';

class App extends React.Component {
  constructor(props) {   
    super(props);   
    this.state = { favorites: [1] }; 
  }

  render() {
    return (
      <main>
        <DefaultView favorites={this.state.favorites} />
      </main>
    );
  }
}

export default App;
