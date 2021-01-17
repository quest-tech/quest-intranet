import {
    Row,
    Col,
    Container,
} from 'react-bootstrap';

import React from 'react';
import ImageButton from '../components/ImageButton';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return(
            <Container style={{alignContent: 'center', justifyContent: "center"}}>
                <Row  xs={2} md={4} lg={5} className="text-center" style={{padding: '10px'}}>
                    <Col > 
                        <ImageButton link='rec1'/> 
                    </Col>
                    <Col > 
                        <ImageButton link='rec2'/> 
                    </Col>
                </Row>
                <Row  xs={2} md={4} lg={5} className="text-center" style={{padding: '10px'}}>
                    <Col > 
                        <ImageButton link='rec3'/> 
                    </Col>
                    <Col > 
                        <ImageButton link='rec4'/> 
                    </Col>
                </Row>
                <Row  xs={2} md={4} lg={5} className="text-center" style={{padding: '10px'}}> 
                    <Col > 
                        <ImageButton link='rec5'/> 
                    </Col>
                    <Col > 
                        <ImageButton link='rec6'/> 
                    </Col>
                </Row>
            </Container>
    )
}

export default Home;



