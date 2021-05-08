import React from 'react';

export function Items({item1, item2, item3}) {
    return(
        <React.Fragment>
            <div className='item--item1'>{item1}</div>
            <div className='item--item2'>{item2}</div>
            <div className='item--item3'>{item3}</div>
        </React.Fragment>
    )
}