import React from 'react';
import Card from '@material-ui/core/Card';


export default function Photo() {

  return (
    <Card className='photoCard odd'>
        <img alt='profile' src={process.env.PUBLIC_URL +"/linfan.jpeg"} className='photo'/>
    </Card>
  );
}
