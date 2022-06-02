import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import Relevancecircle from './images/Group29.svg'

export default function IsItAThing (props) {
    return (
    <div className='IsItAThing-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6} style={{borderRight:'2px solid #00a993'}}>
               
                <br/>
               <h4>
               IS IT A THING
               </h4>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               Relevance is the only thing that sells. Relevance is a condition for the success of products, services, projects, funding, initiatives, messages, campaigns. You name it. What is relevant varies, depending on whom you are trying to reach with your message. But what never changes is, how relevance works.
               </p>

               <br/>

               <br/>
               <p id="isit-text">
             For something to be relevant, you need three things: visibility, value and credibility.
             </p>
            
                <br />
                <br />

                <a href='/' className='btn-green'>
               Do you want to know ?
                </a>

            </Col>


            <Col  xs={6} md={6} style={{textAlign:'right', position:'absolute', bottom:'0',right:'0'}}>
           
            <img src={Relevancecircle} alt='Relevant' style={{width: '500px', height: '500px'}}/>
             
           
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}