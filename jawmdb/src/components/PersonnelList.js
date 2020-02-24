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
        if (this.state.viewIsCast == true && this.props.castList !== null) {
            const castList = this.props.castList.sort((a,b)=> (a.order <b.order)? -1: 1);
            return(
                <div className="Cast-List">
                    <button onClick={this.switchView}>View Crew</button>
                    <div className="Person-List">
                    <div className="cast-titles">
                            <h3 className="t1">Character</h3>
                            <h3 className="t2">Actor</h3>
                        </div>
                    {castList.map( (c,i)=> 
                    <CastItem 
                        character={c.character} 
                        name={c.name} 
                        id={c.id} 
                        viewCredit={this.props.viewCredit}
                        key={i} 
                        index={i} />
                    )}
                    </div>
                </div>
                );
        }else{        
            let crewList = this.props.crewList.sort((a,b)=> (a.department < b.department) ? -1:1);
            crewList = crewList.sort((a,b)=> (a.department === b.department && a.name < b.name)? -1:1);
            
            return (
                <div className="Crew-List">
                    <button onClick={this.switchView}>View Cast</button>
                    <div className="Person-List">
                        <div className="crew-Titles">
                            <h3 className="t1">Department</h3>
                            <h3 className="t2">Role</h3>
                            <h3 className="t3">Name</h3>
                        </div>
                    {crewList.map((c,i)=>
                    <CrewItem 
                        department={c.department}
                        job={c.job}
                        name={c.name}
                        key={i}
                        index={i}
                    />
                    )}
                    </div>
                </div>
            );
        }
    }
}
 
export default PersonnelList;