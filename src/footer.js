import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'

export default function Footer (props) {
    return (
    <div className='footer-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative', textAlign:'center'}}>
            <Col  xs={12} md={12}>
                <br />
              
               <p style={{color:'#00A993', lineHeight:'34px'}}>
               © 2022 BY THE RELEVANCE HOUSE. AG
            </p>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}