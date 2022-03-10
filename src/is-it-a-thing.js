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
               HOW WE MAKE IT HAPPEN
               </h5>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               THE RELEVANCE HOUSE is structured in three different units that work hand in hand for our clients. Using a proven set of proprietary methodologies, tools and frameworks, we create and execute high-quality brand, go-to-market, funding, storytelling and growth hacking strategies that have a measurable positive impact on your business.
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