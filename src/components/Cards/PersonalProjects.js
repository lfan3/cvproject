import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Subtitle from '../Subtitle';
import {Project} from '../UniversityAndOtherjob';

const _contents = [
  {
    tech: "HTML CSS JS",
    content: "这是一张生日卡片，虽然里面的代码质量很乱，确是我刚自学做网页时做得第一份有互动又很有趣的作品，因此让我觉得很自豪。您可以通过上面的链接，下载源代码文件，打开index.html便可以使用。如果您也喜欢，可以个性化一下里面的内容，送给好友", 
    url:"https://github.com/lfan3/happybirthday"
  },

  {
    tech: "PHP JS",      
    content: "这是一个图片合成小应用，用户可以注册登录，上传照片或者使用电脑摄影头照相，合成照片，存储照片，删除照片。也可以对别的用户的照片点赞，留言",
    url:"https://github.com/lfan3/camagru"
  },

  {
    tech: "Node.js Websocket React Webpack Mysql Cheerio Api(NodeGeocoder,IP-API)",      
    content: "交友网站 目前这个repository出于安全性考虑，并没有公开。它的主要功能是与tinder类似，可以比配，聊天，地理定位，用户注册登录，上传修改照片",
    url: "https://github.com/lfan3/site-de-rencontre"
  },
]


export default function PersonalProjects() {

  return (
    <Card className='personalProjectCard contentCard'>
        <CardContent>
          <Subtitle classes='skills-subtitle' title='个人原创开源项目'/>
          {
            _contents.map((u,i)=>{
              return(
                <Project key={'pp'+i} tech={u.tech} content={u.content} url={u.url} />
              )
            })
          }
        </CardContent>
    </Card>
  );
}
