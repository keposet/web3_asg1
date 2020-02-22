import React from 'react';
import FavoriteItem from "./FavoriteItem";
import { CSSTransition } from 'react-transition-group';
import './Favorites.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

class FavoritesList extends React.Component {
    state = {hidden: false};

    handleHiden = () =>{
        const newHidden = !this.state.hidden;
        this.setState( { hidden: newHidden } );
    }
    render() {

        const arrow = (this.state.hidden) ? (<FontAwesomeIcon icon={faAngleDoubleRight}/>) : (<FontAwesomeIcon icon={faAngleDoubleLeft}/>);
            return (
                <div className="favorites-bar">
                    <h3> Favorites </h3>
                    <div onClick={this.handleHiden}>{arrow}</div>
                    
                    <CSSTransition
                        in={!this.state.hidden}
                        timeout={500}
                        classNames="display"
                        unmountOnExit
                        appear
                    > 
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
                    </CSSTransition>
                </div>
    
            );
        

    }
}
export default FavoritesList;