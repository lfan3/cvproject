import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Photo from '../components/Cards/Photo';
import Presentation from '../components/Cards/Presentation';
import Skills from '../components/Cards/Skills';
import Education from '../components/Cards/Education';
import OtherExperiences from '../components/Cards/OtherExperiences';
import PhenixStage from '../components/Cards/PhenixStage';
import Interest from '../components/Cards/Interest';
import  OrganicForm from '../components/OrganicForm'
import {useEffect, Fragment} from 'react';

export default function Home(props){
    console.log(props)
    useEffect(()=>{
        const rooEl = document.getElementById('root');
        if(rooEl.className === 'cvCoverRoot'){
            rooEl.classList.remove('cvCoverRoot');
        }
        rooEl.classList.add('cvRoot');
        console.log('home')
    })

    return(
        <Fragment>
        <OrganicForm/>
        <div className = 'homeWrapper'>
            <Container className='contentWrapper'>
                <Row className="header" >
                    <Col lg={{span:9}} md={6} sm={6} xs={6}>
                        <Presentation/>
                    </Col>
                    <Col lg={{span:3}} md={6} sm={6} xs={6}>
                        <Photo/>
                    </Col>
                </Row>
                <Row className="section1">
                    <Col lg={6} md={12}>
                        <Skills/>
                    </Col>
                    <Col lg={6} md={12}>
                        <PhenixStage/>
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
        </Fragment>
    )
}