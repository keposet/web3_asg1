import React from 'react';

class YearFilter extends React.Component {
    state = { selected:"" };

    handleRadioChange = (e) => {
        const selected = e.target.value;
        let yearUpperBound = -1;
        if(selected === "BETWEEN") {
            yearUpperBound = document.querySelector("input[name='yearUpper'].between").value;
        } 
        const updatedFilter = {};
        updatedFilter['year'] = -1;
        updatedFilter['yearUpper'] = yearUpperBound;
        updatedFilter[e.target.nextElementSibling.name] = e.target.nextElementSibling.value;  

        this.props.handleYearChange(updatedFilter['year'], updatedFilter['yearUpper']);
        
        this.setState({ selected:selected });
    }

    render() {
        return(
            <label className="label">Year
                <label> 
                    <input 
                        className="input" 
                        type="radio" 
                        value="BEFORE"
                        checked={this.state.selected === "BEFORE"} 
                        onChange={this.handleRadioChange} /> 
                    Before
                    <input className="input" type="number" name="yearUpper" disabled={this.state.selected !== "BEFORE"} onChange={this.props.handleChange}/>
                </label> 


                <label> 
                    <input 
                        className="input" 
                        type="radio" 
                        value="AFTER" 
                        checked={this.state.selected === "AFTER"} 
                        onChange={this.handleRadioChange} /> 
                    After
                    <input className="input" type="number" name="year" disabled={this.state.selected !== "AFTER"} onChange={this.props.handleChange}/>
                </label> 

                <label> 
                    <input 
                        className="input" 
                        type="radio" 
                        value="BETWEEN" 
                        checked={this.state.selected === "BETWEEN"} 
                        onChange={this.handleRadioChange} /> 
                    Between
                    <input className="input between" type="number" name="year" disabled={this.state.selected !== "BETWEEN"} onChange={this.props.handleChange}/>
                    <input className="input between" type="number" name="yearUpper" disabled={this.state.selected !== "BETWEEN"} onChange={this.props.handleChange}/>
                </label> 
            </label>
        );
    }
}
export default YearFilter;
