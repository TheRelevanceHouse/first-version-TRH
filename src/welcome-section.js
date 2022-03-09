import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

export default function Welcome (props) {
    return (
    <div className='welcome-section'>
    <Container >
        <Row style={{ marginTop:'35px', width:'50%'}}>
            <Col  xs={12} md={12}>
                <br/>
                <br/>
                <br/>
               <h4 style={{color:'#23ADA0'}}>
                        WELCOME TO <br/>
                            THE RELEVANCE HOUSE
                  
               </h4>
                <hr />
                <br />
               <p >
               THE RELEVANCE HOUSE is a full-service Marketing, Branding and Communications agency for firms in the blockchain and emerging technology sector. We focus on helping technology start-ups and projects build and communicate a relevant brand and story. 
                <br/>
                Why? Because only relevance has impact.
               </p>
            </Col>
           
        </Row>
        <Row id='welcome-section' style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px' }}>
        <h5 style={{color:'#00A993'}}>
        Are you in a hurry? Give us...
        </h5>
        </Row>
        <Row className='welcome-row' style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px' }}>
            <br />
            <br />
            <Col id='column' xs={4} md={4} style={{ textAlign :'center' }}>
               <span>
                   1
               </span>
               <p>
                   ONE MINUTE
               </p>
            </Col>
            <Col id='column' xs={4} md={4} style={{ textAlign :'center' }}>
            <span>
                   5
               </span>
               <p>
                   FIVE MINUTE
               </p>
            </Col>
            <Col id='column' xs={4} md={4} style={{ textAlign :'center' }}>
            <span>
                   10
               </span>
               <p>
                   TEN MINUTE
               </p>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}