import React from 'react'
import FavoriteItem from "./FavoriteItem"

class FavoritesList extends React.Component {
    render() {
        return (
            <div className="favorites-bar">
                <h3> Favorites </h3>
                <ul className="favorites">
                    {this.props.favorites.map( (fav, ind) => <FavoriteItem poster={fav.poster} id={fav.id} title={fav.title} key={ind}/>)}
                </ul>
            </div>

        );
    }
}
export default FavoritesList;