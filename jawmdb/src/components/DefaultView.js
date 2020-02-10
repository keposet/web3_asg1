import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';
import MovieList from './MovieList.js';
import MovieFilter from './MovieFilter.js';

class DefaultView extends React.Component {   
    render() {
        return (       
            <div className="default-view">
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
                < MovieFilter />
                < MovieList />
            </div>         
        ); 
    }

} 
export default DefaultView;