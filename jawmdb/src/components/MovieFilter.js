import React from 'react';

class MovieFilter extends React.Component {
    state = {filterCritiria: {title:"", yearUpper:"", year:"", rating:""} };

    handleSubmit = (e) => {
        e.preventDefault();
        
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

    handleRadioChange = (e) => {
        const selected = e.target.value;
        let yearUpperBound = "";
        if(selected === "BETWEEN") {
            yearUpperBound = document.querySelector("input[name='yearUpper']").value;
        }
        const updatedFilter = {...this.state.filterCritiria};
        updatedFilter['year'] = e.target.nextElementSibling.value;
        updatedFilter['yearUpper'] = yearUpperBound;
        this.setState({ selected:selected , filterCritiria:updatedFilter});
    }
    render() {
        const years = ['Before', 'After'];
        return(
            <form className="filter" onSubmit={this.handleSubmit} >
                <fieldset id="box">
                    <legend>Movie Filter</legend>
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title" onChange={this.handleChange} />

                    <label className="label">Year</label>
                    {years.map( (year, ind) => 
                        <label> 
                            <input 
                                className="input" 
                                type="radio" 
                                value={year.toUpperCase()} 
                                checked={this.state.selected === year.toUpperCase()} 
                                onChange={this.handleRadioChange} /> 
                            {year} 
                            <input className="input" type="number" name="year" disabled={this.state.selected !== year.toUpperCase()} onChange={this.handleChange}/>
                    </label> 
                    )}

                    <label> 
                        <input 
                            className="input" 
                            type="radio" 
                            value="BETWEEN" 
                            checked={this.state.selected === "BETWEEN"} 
                            onChange={this.handleRadioChange} /> 
                        Between
                        <input className="input" type="number" name="year" disabled={this.state.selected !== "BETWEEN"} onChange={this.handleChange}/>
                        <input className="input" type="number" name="yearUpper" disabled={this.state.selected !== "BETWEEN"} onChange={this.handleChange}/>
                    </label> 
                    

                    
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

                </fieldset>
            </form>
        );
    }
}
export default MovieFilter;
