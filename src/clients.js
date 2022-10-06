import React from 'react';
import './App.css';
import ajuna from './images/ajuna.png'
import algo from './images/algo.png'
import ab from './images/AllianceBlock-Logo.png'
import CD from './images/Custodigit-logo.png'
import encointer from './images/encointer.png'
import geeq from './images/Geeq-Logo.png'
import integritee from './images/integritee.png'
import mindfire from './images/mindfire.png'
import seba from './images/seba-bank.png'
import utopia from './images/utopia.png'
import madheidi from './images/madheidi.png'
import {Row, Col, Container} from 'react-bootstrap'

export default function Clients (props) {
    return (
        <div className='clients' id="clients">
            <Container >
        <Row style={{ marginTop:'50px', marginBottom:'20px', position:'relative'}}>
        <br id='hidespace' />
            <Col  xs={12} md={12}>
               
                <br/>
               <h4 id="teamheading">
               FAMOUS NAMES WE WORKED WITH
               </h4>
               
                <hr id='teamline' style={{ marginLeft:'0', width:'15%' }} />
                <br />
              
            </Col>
        </Row>
   

            {/* Row-1 Clients section */}

        <Row id="clientrow">
       
        <Col  xs={3} md={2} >
       
        <img src={ajuna} alt='AjunaNetwork'/>
    
        </Col>
        <Col  xs={3} md={2} >
       
        <img src={geeq} alt='Geeq' />
   
       </Col>

       <Col  xs={3} md={2} >
       <img src={utopia} alt='UtopiaMusic' />
       </Col>

       <Col  xs={3} md={2} >
       <img src={seba} alt='SebaBank' />
        </Col>

        <Col  xs={3} md={2} >
        <img src={encointer} alt='Relevant' />
        </Col>

        <Col  xs={3} md={2} >
        <img src={madheidi} alt='MadHeidi' />
            </Col>
            </Row>

            <Row id="clientrow" >
       
       <Col  xs={3} md={2} >
      
       <img src={ab} alt='AllianceBlock' />
   
       </Col>
       <Col  xs={3} md={2} >
      
       <img src={integritee} alt='IntegriTEE' />
  
      </Col>

      <Col  xs={3} md={2} >
      <img src={mindfire} alt='MindFire' />
      </Col>

      <Col  xs={3} md={2} >
      <img src={algo} alt='AlgoTrader' />
       </Col>

       <Col  xs={3} md={2} >
       <img src={CD} alt='CustoDigit' />
       </Col>

      
           </Row>
        </Container>

         </div>
        ); 
    }