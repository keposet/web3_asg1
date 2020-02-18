import React, { Component } from 'react';

class DetailStub extends Component {
    render() {
        const data = this.props.data; 
        console.log(data);
        const title = this.props.title
        return ( 
            <div className="Stub">
                <h3>{title}</h3>
                <ul>
                    {data.map(d => <li>{d.name}</li>)}
                </ul>
            </div>
         );
    }
}
 
export default DetailStub;