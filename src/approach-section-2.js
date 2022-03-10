import React from 'react';
import './App.css';
import {Row, Col} from 'react-bootstrap'
import approachimage1 from './images/approach1.png'
import approachimage2 from './images/approac2.png'
import approachimage3 from './images/approach3.png'

export default function Approach2 (props) {
    return (
    <div className='approach-section-2'>
    
        <Row style={{textAlign:'center'}}>
            <Col  xs={6} md={6} style={{ background: '#00B198', borderRadius: '0px 0px 20px 0px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               GET READY
               </h5>
               
              
                <br />
                <img src={approachimage1} alt='Relevant'/>
                <br />
            </Col>
            <Col  xs={6} md={6}>
               
                <br />
                <br />
                <br />
               <p style={{color:'#26627E', lineHeight:'34px'}}>
               You want to tell the world about your project. You might think you are ready, but our experience shows you are probably not.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'center'}}>
        <Col  xs={6} md={6}>
               
               <br />
               <br />
               <br />
              <p style={{color:'#26627E', lineHeight:'34px'}}>
              You build a community. You are in constant dialogue with potential investors. You speak to the press. You create and share content. You build momentum.
              </p>
           </Col>
            <Col  xs={6} md={6} style={{ background: '#00B198', borderRadius: '20px 0px 0px 20px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               GO LIVE
               </h5>
               
              
                <br />
                <img src={approachimage2} alt='Relevant'/>
                <br />
            </Col>
            
        </Row>
        <Row style={{textAlign:'center'}}>
            <Col  xs={6} md={6} style={{ background: '#00B198', borderRadius: '0px 20px 0px 0px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               GO BIG
               </h5>
               
              
                <br />
                <img src={approachimage3} alt='Relevant'/>
                <br />
            </Col>
            <Col  xs={6} md={6}>
               
                <br />
                <br />
                <br />
               <p style={{color:'#26627E', lineHeight:'34px'}}>
               You have your funding. You want your company to grow sustainably and continue to add value. But remember, securing funding is not the end of your journey… it is just the beginning.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'center', backgroundColor:'#222222', marginBottom:'40px'}}>
            <Col  xs={12} md={12} style={{padding:'50px'}}>
               
               
                <a href='/' className='btn-white'>
                Do you want to know how? Go on...
        </a>
            </Col>
        </Row>
    </div>
    ); 
}