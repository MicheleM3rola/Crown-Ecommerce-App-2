import React from "react";
import {withRouter} from 'react-router-dom';
import './menu-item.style.scss';


const MenuItem = ({title ,imageUrl,size,key,history,link,match})=>{

    return(
        <div 
         className= {`${size} menu-item`}
         onClick={()=> history.push(`${match.url}${link}`)}>
         <div className='background-image' 
             style={{
            backgroundImage: `url(${imageUrl})`

        }
        
             }
         /> 
                <div className="content">
                    <h1 className="title" key={key}>{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}


export default withRouter(MenuItem);