import React, { Component } from 'react';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StarRating extends Component {
    render() { 
        
    const rating = this.props.rating;
    const fullStar = <FontAwesomeIcon icon={faStar}/>;
    const emptyStar = <FontAwesomeIcon icon={faStarRegular}/>;
    const halfStar = <FontAwesomeIcon icon={faStarHalfAlt}/>;
    const ratingArr = [];
    let xxd = rating;
    let xx = parseInt(xxd, 10);
    let d = xxd - xx;

    if (d >= 0.7 || d <=0.2){
           xx = Math.round(xxd);
           for (let i = 0; i < 10; i++) {   
               let s = (i < xx)? fullStar: emptyStar;
               ratingArr.push(s);
           }
    }else{
        for (let i = 0; i < 10; i++) {
            if (i === xx) {
                ratingArr.push(halfStar);
            } else {
                let s = (i < xx)? fullStar: emptyStar;
                ratingArr.push(s);
            }
        } 
    }
    
    return <div className="Star-Rating">{ ratingArr}</div>;
    }
}
 
export default StarRating;
