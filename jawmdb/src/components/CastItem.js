import React, { Component } from 'react';
import style from '../styles/personItem.module.css';

class CastItem extends Component {

    viewCredit = () => {
        this.props.viewCredit(this.props.id);
    }
    render() { 
        return ( 
            <div className={style.item}>
                <p className="Character-Name">{this.props.character}</p>
                <p className="Credit-Name">{this.props.name}</p>
                <button className="Credit-button" onClick={this.viewCredit}>View🔭</button>
            </div>
         );
    }
}
 
export default CastItem;