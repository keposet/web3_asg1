import React from 'react';
import YearFilter from './YearFilter'
import RatingFilter from './RatingFilter';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import './Filter.css'

class MovieFilter extends React.Component {
    state = {filterCritiria: { title:"", yearUpper:"", year:"", ratingLower:"", ratingUpper:"" }, hidden: false};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.filterCritiria);
        this.props.filter(this.state.filterCritiria);
    }
    hidePanel = () =>{
        const newHidden = !this.state.hidden;
        this.setState( { hidden: newHidden } );
    }

    clearFilters = (e) => {
        this.props.clear();
    }

    handleChange = (e) => {
        const updatedFilter = {...this.state.filterCritiria};
        updatedFilter[e.currentTarget.name] = e.currentTarget.value;
        this.setState( { filterCritiria: updatedFilter} );
    }

    handleRadioButtonChange = (lowerBound, upperBound, lowerTitle, upperTitle) => {
        const updatedFilter = {...this.state.filterCritiria};
        updatedFilter[lowerTitle] = lowerBound;
        updatedFilter[upperTitle] = upperBound;
        this.setState( {filterCritiria: updatedFilter} );
    }

    render() {
        const arrow = (this.state.hidden) ? (<FontAwesomeIcon icon={faAngleDoubleRight}/>) : (<FontAwesomeIcon icon={faAngleDoubleLeft}/>);
        return(
            <form className="filter" onSubmit={this.handleSubmit} >
                <CSSTransition
                        in={!this.state.hidden}
                        timeout={350}
                        classNames="hide"
                        unmountOnExit
                        appear
                    > 
                <fieldset id="box">
                    <legend>Movie Filter</legend>
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title" onChange={this.handleChange} />

                    <YearFilter handleChange={ this.handleChange } handleYearChange={ this.handleRadioButtonChange } />
                    <RatingFilter handleChange={ this.handleChange } handleRatingChange={ this.handleRadioButtonChange }/>

                    <button>Filter</button>
                    <button type="button" onClick={this.clearFilters}>Clear</button>

                </fieldset>
                </CSSTransition>
        <button type="button" onClick={this.hidePanel}>{arrow}</button>
            </form>
        );
    }
}
export default MovieFilter;
