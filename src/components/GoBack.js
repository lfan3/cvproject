import IconButton from '@material-ui/core/IconButton';
import React from 'react';

export function GoBack({clickHandler}){
    return(
        <IconButton onClick={clickHandler} size='medium' className='gobackbtn'>
            <span className='label'>返回</span>
        </IconButton>
        
    )
}