import React, { Component } from 'react';

class CrewItem extends Component {

    render(){
        return (
            <div className="Crew-Item">
                <div className="Department-Item">{this.props.department}</div>
                <div className="Job-Item">{this.props.job}</div>
                <div className="Crew-Name-Item">{this.props.name}</div>
            </div>
        );
    }

}
export default CrewItem;