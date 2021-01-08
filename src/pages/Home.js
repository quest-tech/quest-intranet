import React from 'react';
import QuestLogo from '../assets/QuestLogo.png';
import ImageButton from '../components/ImageButton';
// Must install these dependecies
// npm i -S react-simple-flex-grid or yarn add react-simple-flex-grid
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// Can also use bootstrap grid

function Home() {
    return (
        <div className='home'>
            <Row gutter={500} justify='start'>
                <Col span={2}>
                    <ImageButton image={QuestLogo} link='test1'></ImageButton>
                    <ImageButton image={QuestLogo} link='test2'></ImageButton>
                </Col>
                <Col span={2}>
                    <ImageButton image={QuestLogo} link='test3'></ImageButton>
                    <ImageButton image={QuestLogo} link='test4'></ImageButton>
                </Col>
                <Col span={2}>
                    <ImageButton image={QuestLogo} link='test5'></ImageButton>
                    <ImageButton image={QuestLogo} link='test6'></ImageButton>
                </Col>
            </Row>
    
            

        </div>

    )
}

export default Home
