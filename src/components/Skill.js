import React from 'react';
import Level from './Level';


export default function Skill({children, tech, level=0}) {

    return (
    <div className='skill'>
        <div className={`skill--tech`}>
            <span className='skill--icon'>
                {children}
            </span>
            <span className='skill--name'>
                {tech}
            </span>
        </div>
        <div className="skill--level">
            <Level level={level}/>
        </div>
    </div>
  );
}