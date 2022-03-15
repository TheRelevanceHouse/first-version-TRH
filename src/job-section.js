import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'

export default function JobSection (props) {
    return (
    <div className='job-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6}>
               
                <br/>
               <h5>
               WE ARE HIRING!
               </h5>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               From internships to roles for senior professionals, we offer many opportunities for you to grow with us and shape the future.
               </p>
               <p style={{color:'#2F2E2E', lineHeight:'34px'}}>
               Want to join us? Please see the vacant job offers below and send your CV and cover letter to <a href="mailto: welcome@therelevancehouse.com" style={{color: '#00A993'}}>welcome@therelevancehouse.com</a>. We look forward to meeting you!
            </p>
            </Col>

            <Col  xs={6} md={6} style={{textAlign:'center', position:'absolute', bottom:'0',right:'0'}}>
        
             <p className='job-text' style={{fontSize:'18px'}}>

<a   href='/' target="_blank">DEVELOPER &amp; DATA ANALYST</a><br />

<a   href='/' target="_blank">CREATIVE COPYWRITER (60%)</a><br />

<a   href='/' target="_blank">CONTENT WRITER (60%)</a><br />

<a   href='/' target="_blank">SOCIAL MEDIA MANAGER (50-80%)</a><br />

<a   href='/' target="_blank">INTERNSHIP PR &amp; COMMUNICATION (50-80%)</a><br />

<a   href='/' target="_blank">INTERNSHIP COMMUNICATION &amp; DIGITAL MARKETING (50-80%)</a>

</p>
           
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}