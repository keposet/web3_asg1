import React from 'react';
import { Link } from 'react-router-dom';

class HomeView extends React.Component {
    render(){
        return(
            <div>
                <Link to='showAll'>
                    <button>Show all Movies</button>
                </Link>
            </div>
        );
    }
}

export default HomeView;
