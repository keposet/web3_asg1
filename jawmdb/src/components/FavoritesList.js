import React from 'react'
import FavoriteItem from "./FavoriteItem"

class FavoritesList extends React.Component {
    state = {hidden: false};

    handleHiden = () =>{
        const newHidden = !this.state.hidden;
        this.setState( { hidden: newHidden } );
    }
    render() {
        if(!this.state.hidden) {
            return (
                <div className="favorites-bar">
                    <h3> Favorites </h3>
                    <button onClick={this.handleHiden}>Hide</button>
                    <ul className="favorites">
                        {   this.props.favorites.map( (fav, ind) => 
                                <FavoriteItem 
                                    poster={fav.poster} 
                                    id={fav.id} 
                                    title={fav.title}  
                                    removeFav={ this.props.removeFav } 
                                    key={ind}
                                />
                            )
                        }
                    </ul>
                </div>
    
            );
        } else {
            return(
                <div className="favorites-bar">
                    <h3> Favorites </h3>
                    <button onClick={this.handleHiden}>Hide</button>
                </div>
            );
        }

    }
}
export default FavoritesList;