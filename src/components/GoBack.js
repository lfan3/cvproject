import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Icon from '@material-ui/core/Icon';

export function GoBack({clickHandler}){
    return(
        <IconButton onClick={clickHandler} size='medium' className='gobackbtn'>
            <Icon className="fa fa-hand-point-left" fontSize='inherit'/>
            <span className='label'>返回</span>
        </IconButton>
        
    )
}