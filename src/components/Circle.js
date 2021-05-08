import '../index.css';

export default function Circle({classe, viewBox}){
    return(
        <svg className={classe} viewBox={viewBox}>
            <circle x={10} y={10} r={5} fill='#D0B6CA'/>
        </svg>
    )
}
