import React from 'react';

class RatingFilter extends React.Component {
    state = { selected:"", below: 10, above: 10, betweenLow: 10, betweenHigh: 10 };

    handleRadioChange = (e) => {
        const selected = e.target.value;
        let ratingUpperBound = 11;
        if(selected === "BETWEEN") {
            ratingUpperBound = this.state.betweenHigh;
        } 
        const updatedFilter = {};
        updatedFilter['ratingLower'] = -1;
        updatedFilter['ratingUpper'] = ratingUpperBound;
        updatedFilter[e.target.nextElementSibling.name] = e.target.nextElementSibling.value;  

        this.props.handleRatingChange(updatedFilter['ratingLower'], updatedFilter['ratingUpper'], 'ratingLower', 'ratingUpper');

        this.setState({ selected:selected });
    }

    handleRatingsChange = (e) => {
        let ratingVal = e.currentTarget.value;
        let changingProperty = "betweenHigh";
 
        this.props.handleChange(e);
        if(this.state.selected === "BELOW") {
           changingProperty = "below";
        } else if (this.state.selected === "ABOVE") {
           changingProperty = "above";
        } else if (this.state.selected === "BETWEEN" && e.currentTarget.name === "ratingLower") {
            changingProperty = "betweenLow";
        }
        this.setState( { [changingProperty]: ratingVal});
    }

    render() {
        return(
            <label className="filter-label">
                <div className="filter-heading">Rating</div>
                <label> 
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="BELOW"
                        checked={this.state.selected === "BELOW"} 
                        onChange={this.handleRadioChange} 
                    /> 
                    Below  
                    <input 
                        className="input" type="range" name="ratingUpper" 
                        min="0" max="10" 
                        onChange={ this.handleRatingsChange } 
                        disabled={this.state.selected !== "BELOW"} 
                    /> 
                    
                </label> 
                    <span>{this.state.below}</span>
                <label>
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="ABOVE" 
                        checked={this.state.selected === "ABOVE"} 
                        onChange={this.handleRadioChange}
                    /> 
                    Above 
                    <input 
                        className="input" 
                        type="range"  
                        name="ratingLower" 
                        min="0" max="10" 
                        onChange={ this.handleRatingsChange } 
                        disabled={this.state.selected !== "ABOVE"} 
                        /> 
                </label>
                <span>{this.state.above}</span>

                <label>
                    <input 
                        className="radio-input" 
                        type="radio" 
                        value="BETWEEN" 
                        checked={this.state.selected === "BETWEEN"} 
                        onChange={this.handleRadioChange}
                    /> 
                    Between 
                    <input className="input" type="range" 
                        name="ratingLower" 
                        min="0" max="10"  
                        onChange={ this.handleRatingsChange } 
                        disabled={this.state.selected !== "BETWEEN"} />   
                        
                    <input className="between input" type="range" 
                        name="ratingUpper" min="0" max="10"  
                        onChange={ this.handleRatingsChange } 
                        disabled={this.state.selected !== "BETWEEN"} /> 
                        
                </label>
                <div className="between">
                    <span>{this.state.betweenLow}</span>
                    <span>{this.state.betweenHigh}</span>
                </div>
            </label>
        );
    }
}
export default RatingFilter;
