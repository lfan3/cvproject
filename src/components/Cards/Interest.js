
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Subtitle from '../Subtitle';

import MovieIcon from '@material-ui/icons/Movie';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExploreIcon from '@material-ui/icons/Explore';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles({
  root: {
    border:'unset',
    cursor:'text',
    '&:hover': {
      backgroundColor: '#ffffff',
      border:'unset',
      cursor:'text',
    },
  },
});

export default function Interest() {
    const classes = useStyles();
    return (
      <Card className='interestCard contentCard'>
          <CardContent>
            <Subtitle classes='skills-subtitle' title='兴趣爱好语言'/>
            <div  className='languageWrapper'>
              <span className='language'>
                <span className='language--name'>法语:</span>
                <span className='language--level'>高级</span>
              </span>
              <span className='language'>
                <span className='language--name'>英语:</span>
                <span className='language--level'>高级</span>
              </span>
              <span className='language'>
                <span className='language--name'>德语:</span>
                <span className='language--level'>高级</span>
              </span>
            </div>
            <div className='hobbyWrapper'>
              <Button className={classes.root} variant="outlined" color="primary" startIcon={<FlightTakeoffIcon/>}>旅游</Button>
              <Button className={classes.root} variant="outlined" color="primary" startIcon={<MovieIcon/>}>电影</Button>
              <Button className={classes.root} variant="outlined" color="primary" startIcon={<ExploreIcon/>}>探索</Button>
              <Button className={classes.root} variant="outlined" color="primary" startIcon={<BookIcon/>}>阅读</Button>
            </div>
          </CardContent>
      </Card>
    );
  }