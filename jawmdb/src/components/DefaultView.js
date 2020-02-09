import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieList from './MovieList.js';

class DefaultView extends React.Component {   
    render() {
        return (       
            <div>
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
                < MovieList />
            </div>         
        ); 
    }

} 
export default DefaultView;