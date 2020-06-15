import React from 'react';
import './card.component.styles.css';
const Card = ({card:{data:{author, url , download_url}}}) => {
 return(
<div>
 <div className='card-author'>
  <h1>{author}</h1>
  </div>
  <div className='card-image'>
  <img  alt="card" style= {{width: '300px', 
  height:'400px',
  marginbottom: '10px',
  margintop: '10px'}
    } src={download_url}/>
  </div>
 <div className='card-button'>
  <button><a href={download_url} target= "_blank" rel="noopener noreferrer">Download</a></button>
  </div>
  </div>
 )
}
export default  Card;