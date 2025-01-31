import React, { Component } from 'react';
import './personItem.css'

class CastItem extends Component {

    viewCredit = () => {
        this.props.viewCredit(this.props.id);
    }
    render() { 
        return ( 
            <div className="Cast-Item">
                <div className="Character-Name">{this.props.character} &nbsp;</div>
                <div className="Credit-Name">{this.props.name}</div>
                <button className="Credit-button" onClick={this.viewCredit}>View🔭</button>
            </div>
         );
    }
}
 
export default CastItem;