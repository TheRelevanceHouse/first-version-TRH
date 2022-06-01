import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import approachimage1 from './images/GETREADYIcon.svg'
import approachimage2 from './images/GOLIVEIcon.svg'
import approachimage3 from './images/GOBIGIcon.svg'
import backgroundapproach from './images/backgroundapproach.png' 
import arrow from './images/greenline.png'


export default function Approach (props) {
    return (
    <div className='approach-section' style={{background: `url(${backgroundapproach})`,}}>
    <Container >
        <Row style={{ marginTop:'35px',textAlign:'left', marginBottom:'20px'}}>
            <Col  xs={12} md={12}>
               
                <br/>
               <h4 >
               OUR HOLISTIC APPROACH
               </h4>
               
                <hr style={{ marginLeft:'0', width:'20%' }} />
                <br />
               <p style={{color:'#ffffff', fontWeight:'400'}}>
               Every emerging technology project is different, <br /> but the recipe for success remains the same.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'left'}}>
            <Col id="approach-col"  xs={12} md={4} >
               
                <img src={approachimage1} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               GET READY
               </h5>
                <br />
                <p style={{color:'#26627E', lineHeight:'34px'}}>
               You want to tell the world about your project. You might think you are ready, but our experience shows you are probably not.
               </p>
            </Col>
            <Col id="approach-col"  xs={12} md={4}>
            <img src={approachimage2} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               GO LIVE
               </h5>
                <br />
              <p style={{color:'#26627E', lineHeight:'34px'}}>
              You build a community. You are in constant dialogue with potential investors. You speak to the press. You create and share content. You build momentum.
              </p>
           </Col>
           <Col id="approach-col"  xs={12} md={4} >
               
           <img src={approachimage3} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               GO BIG
               </h5>
                <br />
               <p style={{color:'#26627E', lineHeight:'34px'}}>
              You have your funding. You want your company to grow sustainably and continue to add value. But remember, securing funding is not the end of your journey… it is just the beginning.
              </p>
           </Col>
            
            
        </Row>
       
        <Row style={{textAlign:'left'}}>
            <Col  xs={6} md={6} style={{padding:'35px'}}>
               <br />
               <span id="how-line">
               Do you want to know how?
               </span>
               <br />
               <br />
              
            </Col>
            <Col  xs={6} md={6} > 
            <img style={{padding:'35px', paddingLeft:'0'}} id="arrowimage" src={arrow} alt='Relevant'/>
            <span id="goon">
               GO ON
               </span>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}