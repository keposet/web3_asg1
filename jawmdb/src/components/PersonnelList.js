import React, { Component } from 'react';
import CastItem from './CastItem';
import CrewItem from "./CrewItem";

class PersonnelList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            viewIsCast: true
        }
    }

    switchView= () => {
        if(this.state.viewIsCast){
            this.setState({viewIsCast: false})
        }else {this.setState({viewIsCast:true})}
    }

    render() { 
        if (this.state.viewIsCast == true) {
            return(
                <div className="Person-List">
                    <button onClick={this.switchView}>View Crew</button>
                    {this.props.castList.map( (c,i)=> 
                    <CastItem 
                        character={c.character} 
                        name={c.name} 
                        id={c.id} 
                        viewCredit={this.props.viewCredit}
                        key={i} 
                        index={i} />
                    )}
                </div>
                );
        }else{
            return (
                <div className="Person-List">
                    <button onClick={this.switchView}>View Cast</button>
                    {this.props.crewList.map((c,i)=>
                    <CrewItem 
                        department={c.department}
                        job={c.job}
                        name={c.name}
                        key={i}
                        index={i}
                    />
                )}
                </div>
            );
        }
    }
}
 
export default PersonnelList;