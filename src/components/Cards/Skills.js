import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skill from '../Skill';
import Icon from '@material-ui/core/Icon';
import TsIcon from '../TsIcon';
import CIcon from '../CIcon';
import CSharpIcon from '../CSharpIcon';
import Subtitle from '../Subtitle';

const _skills = [
  {
    tech:'React',
    level:8,
    icon:'fab fa-react'
  },
  {
    tech:'Node.js',
    level:7,
    icon:'fab fa-node-js',
  },
  {
    tech:'Typescript',
    level:7,
    icon:'fab fa-typescript',
  },
  {
    tech:'Javascript',
    level:8,
    icon:"fab fa-js-square",
  },
  {
    tech:'HTML',
    level:10,
    icon:'fab fa-html5',
  },
  {
    tech:'CSS',
    level:8,
    icon:'fab fa-css3-alt',
  },
  {
    tech:'Bootstrap',
    level:7,
    icon:'fab fa-bootstrap',
  },
  {
    tech:'C# .Net',
    level:6,
    icon:'fab fa-csharp',
  },
  {
    tech:'C',
    level:5,
    icon:"fas fa-copyright",
  },
  {
    tech:'Mysql',
    level:6,
    icon:'fas fa-database',
  },
  {
    tech:'Microsoft SQL SERVER',
    level:6,
    icon:"fas fa-server",
  },
  {
    tech:'PHP symfony',
    level:5,
    icon:'fab fa-php',
  },

];

const _otherSkills = {
  tools: "webpack, docker, VScode, AWS",
  system: "Linux, Windows, MAC"
}

export default function Skills() {
  const renderSwitch = (skill)=>{
    switch(skill.tech){
      case 'Typescript':
        return <TsIcon className='fa'/>;
      case 'C':
        return <CIcon className='fa'/>;
      case 'C# .Net':
        return <CSharpIcon className='fa'/>;
      default:
        return <Icon className={skill.icon} color='secondary' fontSize='inherit'/>;
    }
  }
  return (
      <Card className='skillsCard contentCard'>
        <CardContent>
        <Subtitle classes='skills-subtitle' title='技能'/>
        {
          _skills.map((s, i)=>{
            return(
              <Skill tech={s.tech} level={s.level} key={'skill '+i}>
              {
                renderSwitch(s)
              }
              </Skill>
            )
          })
        }
        <div className={`skill--others`}>
          <Skill tech={_otherSkills.system} level={0}>
            <Icon className="fas fa-cog" color='secondary' fontSize='inherit'/>
          </Skill>
          <Skill tech={_otherSkills.tools} level={0}>
            <Icon className="fas fa-tools" color='secondary' fontSize='inherit'/>
          </Skill>
        </div>
      </CardContent>
 
    </Card>
  );
}

