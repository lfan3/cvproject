import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Photo from '../components/Cards/Photo';
import Presentation from '../components/Cards/Presentation';
import Skills from '../components/Cards/Skills';
import Education from '../components/Cards/Education';
import OtherExperiences from '../components/Cards/OtherExperiences';
import PhenixJob from '../components/Cards/PhenixJob';
import Interest from '../components/Cards/Interest';
import OrganicForm from '../components/OrganicForm'
import {useEffect, Fragment} from 'react';
import {GoBack} from '../components/GoBack';
import {useHistory} from 'react-router-dom';

export default function Home(props){
    const history = useHistory();

    useEffect(()=>{
        const rooEl = document.getElementById('root');
        if(rooEl.className === 'cvCoverRoot'){
            rooEl.classList.remove('cvCoverRoot');
        }
        rooEl.classList.add('cvRoot');
    })

    function clickHandler(){
        history.push('/')
    }
    return(
        <Fragment>
        <GoBack clickHandler={clickHandler}/>

        <OrganicForm/>
        <div className = 'homeWrapper outsidePaper'>
            <Container className='contentWrapper'>
                <Row className="header" >
                    <Col lg={{span:9}} md={6} sm={6} xs={8}>
                        <Presentation/>
                    </Col>
                    <Col lg={{span:3}} md={6} sm={6} xs={4}>
                        <Photo/>
                    </Col>
                </Row>
                <Row className="section1">
                    <Col lg={6} md={12}>
                        <Skills/>
                    </Col>
                    <Col lg={6} md={12}>
                        <PhenixJob/>
                    </Col>
                </Row>
                <Row className="section2">
                    <Col lg={6} md={12}>
                        <Education/>
                        <Interest/> 
                    </Col>
                    <Col lg={6} md={12}>
                        <OtherExperiences/> 
                    </Col>
                </Row>
            </Container>
        </div>
        <div className = 'motivationWrapper outsidePaper'>
            <article className='contentWrapper'>
                <header className='motivation--header'>
                    <h1 className='name'>动机信</h1>
                </header>
                <section className='motivation--content'>
                <p className='paragraph--poli'>亲爱的招聘人员，您好：</p>
                <p className="paragraph">
                从我的简历中，您已经看到我曾数次转换专业，拥有三个文史类本科学历和一个硕士学位之后，突然转学计算机。
                虽然表面看起来，让人觉得很突兀，内在却其实有很多联系。首先，我是一个很喜欢学习的人，一方面我很喜欢语言与艺术
                另一方面，我也很爱数学和科学。因为很长时间在文理之间无法选择，在学理的时候就会自学文史，学文史的时候
                又会研究和数理相关的课题，写完关于数码科技与艺术的互动的硕士论文之后。我决定转业到计算机领域。
                </p>
                <p className="paragraph">
                2019年，我报考42大学(l'école 42)，这所学校在国内不是很多人了解，这是一所建校不到五年就成为法国最优秀的计算机工程学校之一。
                这所学校之所以不为国内所了解，主要是因为本校没有毕业证书，也不受中国教育局所承认。而这所学校之所以在法国非常知名是
                因为其特殊的教育体系和严格的筛选考试。考生要经过网考入围，然后在再经过连续整整28天每日连续10到15个小时的淘汰考试。
                之所以要有这么严格的筛选考试，是因为42大学是一所全员仅由学生组成的大学，也就是说没有老师，所有学习内容均有自学完成，学校
                没有假期，也没有固定作息时间，考试由机器人考核通过，学校项目由学生互相批改完成。工作环境与法国公司环境相同，学生每日
                都像企业员工一样写代码工作。因此学校虽然不提供毕业证书，学生却因为自学能力强，实践能力强，合作能力强而倍受业内人士欢迎。
                我也在这样一所自由度非常高的学校里收益匪浅，一方面学校可以让我自由自在地学习任何我想学的内容，另一方面也让我明白怎样学习编程才
                可以最有效率，在学校学习仅一年之后，曾分别注册codewar和coding game平台 在javascript排行榜上
                均排前20%。同时这个学校给我最重要的是让我找到了最适合自己从事的职业--程序员。因为程序员是一个可以让我集合语言，数学，
                艺术三个方面为一体的职业。42大学的大多数学生，在学校学习一年到两年之后便会主动停止学业顺利找到工作。我也并不例外，但是由于我的
                工作许可到期，加上疫情的原因，法国政府对外国人发放工作签证速度减缓。我便失去了继续在法国工作的机会，
                考虑到计算机行业在国内发展迅速，因此希望回国可以找到新的机会。
                </p>
                <p className="paragraph">
                虽然我在计算机行业中刚刚入行，可以展现的实战业绩不多，而且我并没有计算机专业类毕业证书。但是凭借我两年来每天在学校里写过的
                一行行代码，我在PHENIX公司里所学到的工作方法，我对自己学习能力的自信以及花费十年时间找寻到的适合自己的职业的肯定，
                我希望自己未来的雇佣公司可以不拘一格降人才。
                </p>
                <p className="paragraph">
                目前我仍在法国，正在建造一个交友网站，预计今年七月回国。因此我可以从八月或者九月开始工作。
                最后非常感谢您的阅读，希望可以很快听到您的消息。
                </p>
                </section>

                <footer>
                    <p>
                        范淋琳 <br/>
                        11/02/2021
                    </p>
                </footer>
     
            </article>
        </div>

      
        </Fragment>
    )
}