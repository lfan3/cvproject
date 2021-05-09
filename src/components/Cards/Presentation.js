import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WechatIcon from '../WechatIcon'
import Subtitle from '../Subtitle'
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '12em',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    top: '50%',
    left: '50%',
    transform: `translate(-6em, -6em)`,
  },
  qrcode:{
    width:'10em',
  }
}));


export default function Presentation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = ()=>{
    setOpen(true);
  }
  const handleClose = ()=>{
    setOpen(false);
  }
  const modalBody = (
    <div className={classes.paper}>
      <img src={process.env.PUBLIC_URL +"/wechatQR.jpg"} alt='wechat' className={classes.qrcode}/>
    </div>
  )
  return (
    <Card className='presentationCard'>
        <CardContent>
            <h1 className='name'>范淋琳</h1>
            <Subtitle title='全栈工程师' classes='presentation-subtitle'/>
            <div className='presentation--citation'>
              <Typography variant="body1" className='presentation--citation'>程序首先是让人来读的，之后让机器偶尔执行会。-- 哈尔-艾贝尔森</Typography>
            </div>
            <div className='presentation--icons'>
              <IconButton color='primary' style={{padding: 0}} href="https://github.com/lfan3">
                <GitHubIcon viewBox={'0 -1 26 26'}/>
              </IconButton>
              <IconButton color='secondary' style={{padding: 0}} href="https://www.linkedin.com/in/linlin-fan-0213/">
                <LinkedInIcon viewBox={'2 2 21 21'}/>
              </IconButton>
              <div>
                <IconButton style={{padding: 0}} onClick={handleOpen}>
                  <WechatIcon/>
                </IconButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {modalBody}
                </Modal>
              </div>
            </div>
        </CardContent>
    </Card>
  );
}
