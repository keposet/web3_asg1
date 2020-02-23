import React, { Component } from 'react';
import styles from '../styles/stub.module.css';

class DetailStub extends Component {
    render() {
        const data = this.props.data; 
        const title = this.props.title
        return ( 
            <div className={styles.stub} >
                <h3 className={styles.stubHead}>{title}</h3>
                <ul className={styles.ul}>
                    {data.map(d => <li className={styles.li} key={d.name}>{d.name}</li>)}
                </ul>
            </div>
         );
    }
}
 
export default DetailStub;