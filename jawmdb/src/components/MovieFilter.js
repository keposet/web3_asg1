import React from 'react';
import YearFilter from './YearFilter'

class MovieFilter extends React.Component {
    state = {filterCritiria: {title:"", yearUpper:"", year:"", rating:""} };

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
        this.setState({ filterCritiria: updatedFilter} );
    }

    handleYearChange = (yearLower, yearUpper) => {
        const updatedFilter = {...this.state.filterCritiria};
        console.log(yearLower + " " + yearUpper);
    }

    render() {

        return(
            <form className="filter" onSubmit={this.handleSubmit} >
                <fieldset id="box">
                    <legend>Movie Filter</legend>
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title" onChange={this.handleChange} />

                    <YearFilter handleChange={ this.handleChange } handleYearChange={ this.handleYearChange } />
                    
                    <label className="label">Rating</label>
                    <label> 
                        <input 
                            className="input" 
                            type="radio" 
                            name="rating" /> 
                        Below <input type="range" name="volume" min="0" max="10" />
                    </label> 
                    <label>
                        <input className="input" type="radio" name="rating" /> 
                        Above <input type="range"  name="volume" min="0" max="10" />
                    </label>

                    <label>
                        <input className="input" type="radio" name="rating" /> 
                        Between 
                        <input type="range" name="volume" min="0" max="10" />
                        <input type="range" name="volume" min="0" max="10" />
                    </label>



                    <button>Filter</button>
                    <button type="button" onClick={this.clearFilters}>Clear</button>
                    <button type="button" onClick={this.hidePanel}>Hide</button>

                </fieldset>
            </form>
        );
    }
}
export default MovieFilter;
