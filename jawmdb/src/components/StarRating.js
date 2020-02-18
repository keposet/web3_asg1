import React, { Component } from 'react';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-solid-svg-icons"
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

// import { star-half-alt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StarRating extends Component {
    render() { 
        
    const rating = this.props.rating;
    console.log(rating);
    const fullStar = <FontAwesomeIcon icon={faStar}/>;
    const emptyStar = <FontAwesomeIcon icon={faStarRegular}/>;
    const halfStar = <FontAwesomeIcon icon={faStarHalf}/>;
    const ratingArr = [];
    // logic to formulate thinger. 

    //full rating
    let xxd = rating;
    //integer
    let xx = parseInt(xxd, 10);
    //decimal
    let d = xxd - xx;

    if (d >= 0.7 || d <=0.2){
           // round(xx)
           xx = Math.round(xxd);
           for (let i = 0; i < 10; i++) {   
               let s = (i < xx)? fullStar: emptyStar;
               console.log(s);
               ratingArr.push(s);
           }
    }else{
        // i have 7.4 - 7.6
        // add a half star. 
    }


    // let stars = parseInt(x,10)
    // //create full stars markup
    // // fill array with stars

    // let half = x- stars;
    // if(half >= 0.4 && half <= 0.6)
    // //create half star markup
    // // add to array

    // let empty = 10-(starArray.length -1);
    // //create empty star markup
    // // add to array




    console.log(ratingArr);

    return <div className="Star-Ratings">{ emptyStar}</div>;
    }
}
 
export default StarRating;
