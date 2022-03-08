import React from 'react';
import './Card.scss';
const Card = React.forwardRef((props,ref)=>{

    return (<div ref={ref} className={`card-container`}>
        <div className="d-flex flex-column justify-between h-100">{props.children}</div>
    </div>);
});

export default Card;