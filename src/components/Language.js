import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Language() {

  return (
    <Card className='presentationCard'>
        <CardContent>
            <Typography variant="h3">范淋琳</Typography>
            <Typography variant="h4">全栈工程师</Typography>
            <Typography variant="body1">love coding</Typography>
            
        </CardContent>
    </Card>
  );
}
