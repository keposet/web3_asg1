import React from 'react'; 
import Header from './Header.js';
import  FavoritesList from './FavoritesList.js';

class DefaultView extends React.Component {   
    render() {
        return (       
            <div>
                <Header />
                < FavoritesList favorites={ this.props.favorites } />
            </div>         
        ); 
    }

} 
export default DefaultView;