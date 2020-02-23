import React, { Component } from 'react';
import style from '../styles/personItem.module.css';

class CrewItem extends Component {

    render(){
        return (
            <div className={style.item}>
                <p className="Department-Item">{this.props.department}</p>
                <p className="Job-Item">{this.props.job}</p>
                <p className="Crew-Name-Item">{this.props.name}</p>
            </div>
        );
    }

}
export default CrewItem;