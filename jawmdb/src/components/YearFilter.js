import React from 'react';

class YearFilter extends React.Component {
    state = { selected:"" };

    handleRadioChange = (e) => {
        const selected = e.target.value;
        const updatedFilter = {};
        updatedFilter['year'] = -1;
        updatedFilter['yearUpper'] = "";
        if(selected === "BETWEEN") {
            updatedFilter['yearUpper'] = document.querySelector("input[name='yearUpper'].between").value;
            updatedFilter['year'] = document.querySelector("input[name='year'].between").value;
        } else {
            updatedFilter[e.target.nextElementSibling.name] = e.target.nextElementSibling.value;  
        }

        this.props.handleYearChange(updatedFilter['year'], updatedFilter['yearUpper'], 'year', 'yearUpper');

        this.setState({ selected:selected });
    }

    render() {
        return(
            <label className="filter-label"> 
                <div className="filter-heading">Year</div>
                <label > 
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="BEFORE"
                        checked={this.state.selected === "BEFORE"} 
                        onChange={this.handleRadioChange} /> 
                    Before
                    <input className="input" type="number" name="yearUpper" disabled={this.state.selected !== "BEFORE"} onChange={this.props.handleChange}/>
                </label> 


                <label> 
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="AFTER" 
                        checked={this.state.selected === "AFTER"} 
                        onChange={this.handleRadioChange} /> 
                    After
                    <input className="input" type="number" name="year" disabled={this.state.selected !== "AFTER"} onChange={this.props.handleChange}/>
                </label> 

                <label> 
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="BETWEEN" 
                        checked={this.state.selected === "BETWEEN"} 
                        onChange={this.handleRadioChange} /> 
                    Between
                    <div className="input">
                        <input className="between" type="number" name="year" disabled={this.state.selected !== "BETWEEN"} onChange={this.props.handleChange}/>
                        <input className="between" type="number" name="yearUpper" disabled={this.state.selected !== "BETWEEN"} onChange={this.props.handleChange}/>
                    </div>
                    
                </label> 
            </label>
        );
    }
}
export default YearFilter;
