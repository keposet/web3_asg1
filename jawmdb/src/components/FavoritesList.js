import React from 'react';
import FavoriteItem from "./FavoriteItem";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
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
        //Display a left arrow when showing the favorites list, show  a right arrow when the list is hidden
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
                        <TransitionGroup component={null}>
                        {   this.props.favorites.map( (fav, ind) => 
                            <CSSTransition
                                key={fav.title}
                                timeout={300}
                                classNames="display"
                                unmountOnExit
                                appear
                            > 
                                <FavoriteItem 
                                    poster={fav.poster} 
                                    id={fav.id} 
                                    title={fav.title}  
                                    removeFav={ this.props.removeFav } 
                                    key={ind}
                                />
                            </CSSTransition>
                            )
                        }
                        </TransitionGroup>
                    </ul>
                </CSSTransition>
            </div>

        );
    }
}
export default FavoritesList;