import React from 'react';
import {Component} from 'react';

class detailsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film : [],
            loading : true

        }
    }
    render() { 
        if (this.state.loading) {
            //render loading gif
        } else {
            //render the full view
        }
    }
}
 
export default detailsView;