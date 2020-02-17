import React, { Component } from 'react';

class CastItem extends Component {
    constructor(props) {
        super(props);
    }
    viewCredit = (credit) => {
        this.props.displayCredit(credit);
    }
    render() { 
        return ( 
            <div className="Cast-Item">
                <div className="Character-Name">{this.props.character}</div>
                <div className="Credit-Name">{this.props.name}</div>
                <button className="Credit-button" onClick={this.viewCredit(this.props.LOLIDK)}>View🔭</button>
            </div>
         );
    }
}
 
export default CastItem;