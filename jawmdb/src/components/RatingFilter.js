import React from 'react';

class RatingFilter extends React.Component {
    state = { selected:"" };

    handleRadioChange = (e) => {
        const selected = e.target.value;
        let ratingUpperBound = 11;
        if(selected === "BETWEEN") {
            ratingUpperBound = document.querySelector("input[name='ratingUpper'].between").value;
        } 
        const updatedFilter = {};
        updatedFilter['ratingLower'] = -1;
        updatedFilter['ratingUpper'] = ratingUpperBound;
        updatedFilter[e.target.nextElementSibling.name] = e.target.nextElementSibling.value;  

        this.props.handleRatingChange(updatedFilter['ratingLower'], updatedFilter['ratingUpper'], 'ratingLower', 'ratingUpper');

        this.setState({ selected:selected });
    }

    render() {
        return(
            <label className="label">Rating
                <label> 
                    <input 
                        className="input" 
                        type="radio" 
                        value="BELOW"
                        checked={this.state.selected === "BELOW"} 
                        onChange={this.handleRadioChange} 
                    /> 
                    Below <input type="range" name="ratingUpper" min="0" max="10" onChange={ this.props.handleChange } disabled={this.state.selected !== "BELOW"} />
                </label> 
                <label>
                    <input 
                        className="input" 
                        type="radio" 
                        value="ABOVE" 
                        checked={this.state.selected === "ABOVE"} 
                        onChange={this.handleRadioChange}
                    /> 
                    Above <input type="range"  name="ratingLower" min="0" max="10" onChange={ this.props.handleChange } disabled={this.state.selected !== "ABOVE"} />
                </label>

                <label>
                    <input 
                        className="input" 
                        type="radio" 
                        value="BETWEEN" 
                        checked={this.state.selected === "BETWEEN"} 
                        onChange={this.handleRadioChange}
                    /> 
                    Between 
                    <input type="range" name="ratingLower" min="0" max="10" onChange={ this.props.handleChange } disabled={this.state.selected !== "BETWEEN"} />
                    <input className="between" type="range" name="ratingUpper" min="0" max="10" onChange={ this.props.handleChange } disabled={this.state.selected !== "BETWEEN"} />
                </label>
            </label>
        );
    }
}
export default RatingFilter;
