import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import DownloadIcon from './images/download.png'
import circles from './images/circles.png'

export default function Welcome (props) {
    return (
    <div className='welcome-section'>
    <Container >
        <Row style={{ marginTop:'35px', display:'flex', alignItems: 'flex-end'}}>
            <Col  xs={12} md={6}>
                <br/>
                <br/>
                <br/>
               <h4 style={{color:'#23ADA0'}}>
                        WELCOME TO <br/>
                            THE RELEVANCE HOUSE
                  
               </h4>
                <hr id='line-shades'/>
                <br />
               <p >
               THE RELEVANCE HOUSE is a full-service Marketing, Branding and Communications agency for firms in the blockchain and emerging technology sector. We focus on helping technology start-ups and projects build and communicate a relevant brand and story. 
                <br/> <br/>
                Why? Because only relevance has impact.
               </p>
            </Col>
            <Col  xs={12} md={6}>
            <br/>
                <br/>
                <br/>
               <img style={{width:'400px', height:'auto', float:'right' }} src={circles} alt='Image' ></img>
            </Col>
           
        </Row>
        <Row id='welcome-section' style={{ textAlign:'left', marginBottom:'40px', marginTop:'15px' }}>
        <h5 style={{color:'#00A993'}}>
        Are you in a hurry? Give us...
        </h5>
        </Row>
        <Row className='welcome-row' style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px' }}>
            <br />
            <br />
            <Col id='column' xs={4} md={3} style={{ textAlign :'center'}}>
               <span>
                   1
               </span>
               <p>
                   ONE MINUTE
               </p>
               <br />
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>
            </Col>
            <Col  xs={0} md={1} style={{ textAlign :'center', width:'12.5%' }}>
                </Col>
            <Col id='column' xs={4} md={3} style={{ textAlign :'center'}}>
            <span>
                   5
               </span>
               <p>
                   FIVE MINUTE
               </p>
               <br />
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>
            </Col>
            <Col  xs={0} md={1} style={{ textAlign :'center', width:'12.5%' }}>
                </Col>
            <Col id='column' xs={4} md={3} style={{ textAlign :'center' }}>
            <span>
                   10
               </span>
               <p>
                   TEN MINUTE
               </p>
               <br />
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}