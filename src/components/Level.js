import React from 'react';
import Icon from '@material-ui/core/Icon';

export default function Level({level}){
    const items = []
    if(level === 0)
        return items;
    for (let i=0; i<level; i++ ) {
      items.push(
        <span key={'dot' + i} className='dot'>
            <Icon className="fas fa-circle" color="primary" fontSize='inherit'/>
        </span>
      );
    }
    for(let i=0; i<10-level; i++ ){
        items.push(
            <span key={'emptyDoty' +i} className="dot">
                <Icon className="far fa-circle" color="primary" fontSize='inherit'/>
            </span>
          );
    }
    return(
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}