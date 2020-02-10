import React from 'react'

class MovieItem extends React.Component {
    render() {
        const url = "https://image.tmdb.org/t/p/w92";
        return (
            <div>
                <img src={`${url}${this.props.poster}`} alt={this.props.title} />
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.rating}</p>
                <button>♥</button>
                <button>View</button>
            </div>
        )
    }
}
export default MovieItem;

