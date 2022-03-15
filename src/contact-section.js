import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import locationimage from './images/locationicon.png'
import contactimage from './images/contacticon.png'
import contactcircle1 from './images/Intersect.png'

export default function ContactSection (props) {
    return (
    <div className='contact-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6}>
               
                <br/>
               <h5 style={{color:'rgb(0, 169, 147)'}}>
               LET US GET IN TOUCH!
               </h5>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#fff', lineHeight:'34px'}}>
               In order for firms in the blockchain and emerging technology sector to be successful, they need to build a relevant brand and story. We are here to help! So what are you waiting for?
               </p>
            </Col>

            <Col  xs={6} md={6} style={{textAlign:'right', position:'absolute', bottom:'0',right:'0'}}>
        
            
             <img id="circle-image" src={contactcircle1} alt='Relevant'/>
          
           
            </Col>
        </Row>
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6}>
               
                <br/>
                <img id="" src={locationimage} alt='Relevant'/>
                <br/>
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Head Office:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                THE RELEVANCE HOUSE. AG <br />
                Dammstrasse 16 | CH 6300 Zug
               </p>
                <br />
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Zurich Office:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                Mostly remote these days ;)
               </p>
            </Col>

            <Col  xs={6} md={6} style={{textAlign:'left', bottom:'0',right:'0'}}>
        
            <br/>
                <img id="" src={contactimage} alt='Relevant'/>
                <br/>
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Contact:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                Send us your questions and we will reply as soon as possible.
               </p>
                
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
                PRESS & OTHER INQUIRIES:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                welcome@therelevancehouse.com
               </p>
               
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
                NEW CUSTOMERS:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                lovetobe@therelevancehouse.com
               </p>
           
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}