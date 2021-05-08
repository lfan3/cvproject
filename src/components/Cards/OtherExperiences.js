import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Job} from '../UniversityAndOtherjob';
import Subtitle from '../Subtitle';

const _jobs = [
  {
    year: "2018/05-2020/03",
    company: "自由职业 巴黎",
    job: "博物馆讲解员，导游，翻译", 
  },
  {
    year: "2017/07-2017/09",
    company: "Galerie Kunstsaele，柏林",      
    job: "画廊助理",
  },
  {
    year: "2017/07-2017/09",
    company: "Louis Vuitton，柏林",      
    job: "路易威登《时间胶囊》讲解",
  },
  {
    year: "2015/05-2015/08",
    company: "滨海自由城旅游局 (Office de Tourisme de Villefranche-sur-Mer)",      
    job: "旅游顾问，博物馆讲解，城市导游",
  },
]


export default function OtherExperiences() {

  return (
    <Card className='otherExperienceCard contentCard'>
        <CardContent>
          <Subtitle classes='skills-subtitle' title='其它工作经验'/>
          {
            _jobs.map((u,i)=>{
              return(
                <Job key={'uni'+i} year={u.year} company={u.company} job={u.job} />
              )
            })
          }
        </CardContent>
    </Card>
  );
}
