import React from 'react'
import FavoriteItem from "./FavoriteItem"

class FavoritesList extends React.Component {
    render() {
        return (
            <div>
                <h3> Favorites </h3>
                <ul className="favorites">
                    {this.props.favorites.map( (fav) => <FavoriteItem />)}
                </ul>
            </div>

        );
    }
}
export default FavoritesList;