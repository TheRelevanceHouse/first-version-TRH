import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

export default function Approach (props) {
    return (
    <div className='approach-section'>
    <Container >
        <Row style={{ marginTop:'35px',textAlign:'center', marginBottom:'20px'}}>
            <Col  xs={12} md={12}>
               
                <br/>
               <h5 style={{color:'#00A993'}}>
               OUR HOLISTIC APPROACH
               </h5>
               
                <hr style={{ marginLeft:'auto', width:'40%' }} />
                <br />
               <p style={{color:'white', lineHeight:'34px'}}>
               Every emerging technology project is different, <br /> but the recipe for success remains the same.
               </p>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}