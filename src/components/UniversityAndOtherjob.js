import {Items} from './Item';
  
export function University({year, diplo, uni}) {
    return(
        <div className='university'>
            <Items items={[diplo, year, uni]}/>
        </div>
    )
}

export function Job({year, job, company}){
    return(
        <div className='job'>
            <Items items={[year, job, company]}/>
        </div>
    )
}

export function Project({tech, content, url}){
    return(
        <div className='project'>
            <Items items={[tech,  url, content,]}/>
        </div>
    )
}