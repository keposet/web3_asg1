import React, { Component } from 'react';

class CastItem extends Component {

    viewCredit = () => {
        this.props.viewCredit(this.props.id);
    }
    render() { 
        return ( 
            <div className="Cast-Item">
                <p className="Character-Name">{this.props.character} &nbsp;</p>
                <p className="Credit-Name">{this.props.name}</p>
                <button className="Credit-button" onClick={this.viewCredit}>View🔭</button>
            </div>
         );
    }
}
 
export default CastItem;