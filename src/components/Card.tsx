import React, { useEffect, useRef } from 'react';
import './Card.scss';
const Card = (props)=>{
    const cardRef = useRef(null);
    const isVisible = ()=> {
        return cardRef?.current && cardRef?.current.offsetTop + cardRef.current.scrollTop <props.scrollY + cardRef.current.offsetHeight*2;
    }

    useEffect(()=>{
    },[cardRef])
    
    return (<div ref={cardRef} className={`card-container ${isVisible()? 'animated' : 'animated'}`}>
        <div>{props.children}</div>
    </div>);
}

export default Card;