import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import heroimage from './images/Relevant.svg'

export default function IsItAThing (props) {
    return (
    <div className='IsItAThing-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6}>
               
                <br/>
               <h5>
               IS IT A THING
               </h5>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               Relevance is the only thing that sells. Relevance is a condition for the success of products, services, projects, funding, initiatives, messages, campaigns. You name it. What is relevant varies, depending on whom you are trying to reach with your message. But what never changes is, how relevance works.
               </p>
            </Col>

            <Col  xs={6} md={6} style={{textAlign:'center', position:'absolute', bottom:'0',right:'0'}}>
           

             <p id="isit-text">
             For something to be relevant, you need three things: visibility, value and credibility.
             </p>
            
           
            </Col>
        </Row>
        <Row style={{textAlign:'center', display:'flex', alignItems:'center'}}>
        <Col  xs={6} md={6}>
            <p id='isitathing-text'>
            "IF I DON'T BUY IT <br />- I WON'T BUY IT."
            </p>
            <p id='isitathing-text'>
            "SIX WORDS: <br/> WHAT'S IN IT FOR ME?"
            </p>
            <p id='isitathing-text'>
            "I DON'T BUY <br/> WHAT I DON'T SEE."
            </p>
             
           </Col>
           <Col  xs={6} md={6}>
               
           <img src={heroimage} alt='Relevant' style={{width: '500px', height: '500px'}}/>
            </Col>
            
        </Row>
    </Container>
    </div>
    ); 
}