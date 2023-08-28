import React from 'react'
import { useState } from 'react'
//import './Card.css'

import { Link } from 'react-router-dom'


const YouTuberCard = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card" >
          <img  src={props.creatorImageURL}></img>
          <h2 className="title" >{props.creatorName}</h2>
          <p>{props.Description}</p>
          <p><a href={props.creatorURL}><p className="author">Creator Web Page</p></a></p>
          <Link to={'view/'+ props.id}>See Creator Details</Link>
        
      </div>
  );
};

export default YouTuberCard;