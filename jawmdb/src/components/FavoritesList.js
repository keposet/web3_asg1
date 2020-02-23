import React from 'react'
import FavoriteItem from "./FavoriteItem"
import style from '../styles/fave.module.css'

class FavoritesList extends React.Component {
    render() {
        return (
            <div className={style.favorites}>
                <h3> Favorites </h3>
                <ul className={style.favoritesBar}>
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
    }
}
export default FavoritesList;