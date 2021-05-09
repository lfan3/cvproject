import {Items} from './Item';
  
export function University({year, diplo, uni}) {
    return(
        <div className='university'>
            <Items item1={year} item2={diplo} item3={uni}/>
        </div>
    )
}

export function Job({year, job, company}){
    return(
        <div className='job'>
            <Items item1={year} item2={job} item3={company}/>
        </div>
    )
}