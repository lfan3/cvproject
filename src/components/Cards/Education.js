import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {University} from '../UniversityAndOtherjob';
import Subtitle from '../Subtitle';

const _uni = [
  {
    year:'2019/02-2021/05 巴黎',
    diplo:"计算机构架 (digital technology architect)",
    uni:"42计算机工程大学 (L'Ecole 42)"
  },  
  {
    year: "2015/09-2017/10",
    uni: "巴黎第十大学/柏林洪堡大学",
    diplo: "艺术史研究生", 
  },
  {
    year: "2014/09-2015/06",
    uni: "尼斯大学",      
    diplo: "旅游本科",
  },
  {
    year: "2013/09-2014/06",
    uni: "蒙彼利埃第三大学",  
    diplo:"艺术史本科",
  },
]

export default function Education() {

  return (
    <Card className='educationCard contentCard'>
        <CardContent>
          <Subtitle classes='skills-subtitle' title='教育'/>
          {
            _uni.map((u,i)=>{
              return(
                <University key={'uni'+i} year={u.year} uni={u.uni} diplo={u.diplo} />
              )
            })
          }
        </CardContent>
    </Card>
  );
}
