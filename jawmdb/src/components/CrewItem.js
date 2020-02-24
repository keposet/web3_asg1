import React, { Component } from 'react';
import './personItem.css'

class CrewItem extends Component {

    render(){
        return (
            <div className="Crew-Item">
                <p className="Department-Item">{this.props.department} &nbsp;</p>
                <p className="Job-Item">{this.props.job} &nbsp;</p>
                <p className="Crew-Name-Item">{this.props.name}</p>
            </div>
        );
    }

}
export default CrewItem;