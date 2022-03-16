import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import howimage from './images/how-section.png'

export default function How (props) {
    return (
    <div className='how-section'>
        <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px'}}>
            <Col  xs={6} md={6}>
               
                <br/>
               <h5 style={{color:'#00A993'}}>
               HOW WE MAKE IT HAPPEN
               </h5>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               THE RELEVANCE HOUSE is structured in three different units that work hand in hand for our clients. Using a proven set of proprietary methodologies, tools and frameworks, we create and execute high-quality brand, go-to-market, funding, storytelling and growth hacking strategies that have a measurable positive impact on your business.
               </p>
            </Col>
            <Col  xs={6} md={6} style={{textAlign:'center'}}>
            <img src={howimage} alt='Relevant' style={{ marginTop:'35px', marginBottom:'20px'}}/>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}