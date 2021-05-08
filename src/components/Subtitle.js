import Typography from '@material-ui/core/Typography';

export default function Subtitle({title,classes}){
    return(
        <Typography variant="h6" className={'subtitle '+classes}>{title}</Typography>
    )
}