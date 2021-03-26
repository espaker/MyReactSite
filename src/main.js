import React from "react";
import {useParams} from "react-router-dom"
import {Container, Row, Col} from 'react-bootstrap'

import Header from './components/header/header'
import AboutMe from './components/aboutme/aboutme'
import WorkExperience from './components/workexperience/workexperience'

import './main.css'

const Main = () => {
    const {lang} = useParams()

    return (
        <div className='main'>
            <Header lang={lang}/>
            <Container className='sections-wrapper'>
                <Row>
                    <Col xs={12} lg={8} className='primary'>
                        <AboutMe lang={lang}/>
                        <WorkExperience lang={lang}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Main;