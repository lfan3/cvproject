import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Job} from '../UniversityAndOtherjob';
import Subtitle from '../Subtitle';
import Chip from '@material-ui/core/Chip';

const _jobs = [
  {
    year: "2020/08-2021/01",
    company: "PHENIX 巴黎",
    job: "全栈工程师(实习)", 
    jobContent:[
            {
                item:"后端",
                content: "编写程序新功能代码，提高公司网站平台性能，部署网站，调试代码创建测试确保代码覆盖率（TDD)"
            },
            {
                item:"前端",
                content: "创建类似谷歌日历的时间安排工具，创建展示各项指数趋数据的图表页，改善重组代码"                
            },
            {
                item:"交流",
                content: "向其它部门发布和介绍公司平台新的功能使用方法，帮助非技术部门解决网络技术问题"                
            },
            {
                item:"架构",
                content: "clean architecture" 
            },
            {
                item:"技术栈",
                content: "C#, ASP.Net, Javascript, jquery, HTML, CSS, Bootstrap, Datadog, AWS Cloud, Microsoft SQL server, Microsoft Azur Cloud" 
            },
            {
                item:"工作方法",
                content: "Scrum 敏捷开发" 
            },
    ]
  }
]

function JobContentItem({item, content}){
    let techArray = [];
    if(item === "技术栈")
        techArray = content.split(',');
    const renderChips = (techArray)=>{
        return(
            techArray.map((t,i)=>{
                return(<Chip key={t} label={t} color="primary" variant="outlined" className="tech-chip"/>)
            })
        )
    }
    return(
        <div className='jobContentItem'>
            <div className="jobContent--titre"><span>{item}</span></div>
            {
                item === "技术栈"
                ? renderChips(techArray)
                : <div className="jobContent--content"><span>{content}</span></div>
            }
        </div>
    )
}

function JobContent({content}){
    return(
        <div className="jobContent">
            {
                content.map((j,i)=>{
                    return(
                        <JobContentItem key={'jobItem '+ i} item={j.item} content={j.content} />
                    )
                })
            }
        </div>
    )
}

export default function PhenixStage() {

  return (
    <Card className='experienceCard'>
        <CardContent>
          <Subtitle classes='skills-subtitle' title='软件开发经验'/>
          {
            _jobs.map((u,i)=>{
              return(
                <div key={'job' + i}>
                    <Job year={u.year} company={u.company} job={u.job} />
                    <JobContent content={u.jobContent}/>
                </div>
              )
            })
          }
        </CardContent>
    </Card>
  );
}
