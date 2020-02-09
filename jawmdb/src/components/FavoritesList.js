import React from 'react'
import FavoriteItem from "./FavoriteItem"

class FavoritesList extends React.Component {
    render() {
        return (
            <div>
                <h3> Favorites </h3>
                <ul className="favorites">
                    {this.props.favorites.map( (fav, ind) => <FavoriteItem key={ind}/>)}
                </ul>
            </div>

        );
    }
}
export default FavoritesList;