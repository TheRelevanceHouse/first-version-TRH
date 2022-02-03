import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import heroimage from './images/Relevant.svg'
import scroll from "./images/scrolldown.svg"

export default function Hero (props) {
    return (
    <div className='hero-section'>
    <Container >
        <Row style={{ marginTop:'35px'}}>
            <Col  xs={6} md={6}>
                <br/>
                <br/>
                <br/>
               <h4 style={{color:'#23ADA0'}}>
               ONLY RELEVANCE 
               </h4>
               <h4 style={{color:'#FAFAFA'}}>
                   HAS IMPACT
               </h4>
                <hr />
                <br />
               <p style={{color:'white', lineHeight:'34px'}}>
               EVERY GOOD IDEA FITS ON A POST-IT. <br />
               IF IT DOESN´T. IT´S NOT A GOOD IDEA, YET.
               </p>
            </Col>
            <Col xs={6} md={6} style={{ textAlign :'right' }}>
                <img src={heroimage} alt='Relevant' style={{width: '500px', height: '500px'}}/>
            </Col>
        </Row>
        <Row style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px' }}>
            <br />
            <br />
            <p id="scroll">
            SCROLL DOWN
            </p>
            <img src={scroll}  alt='scroll'/>
        </Row>
    </Container>
    </div>
    ); 
}