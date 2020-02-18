import React from 'react';
import YearFilter from './YearFilter'
import RatingFilter from './RatingFilter';

class MovieFilter extends React.Component {
    state = {filterCritiria: { title:"", yearUpper:"", year:"", ratingLower:"", ratingUpper:"" } };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.filterCritiria);
        this.props.filter(this.state.filterCritiria);
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

        return(
            <form className="filter" onSubmit={this.handleSubmit} >
                <fieldset id="box">
                    <legend>Movie Filter</legend>
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title" onChange={this.handleChange} />

                    <YearFilter handleChange={ this.handleChange } handleYearChange={ this.handleRadioButtonChange } />
                    <RatingFilter handleChange={ this.handleChange } handleRatingChange={ this.handleRadioButtonChange }/>

                    <button>Filter</button>
                    <button type="button" onClick={this.clearFilters}>Clear</button>
                    <button type="button" onClick={this.hidePanel}>Hide</button>

                </fieldset>
            </form>
        );
    }
}
export default MovieFilter;
