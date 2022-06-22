import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import GermanImage from './images/German.jpeg'
import AnnaImage from './images/anna.jpeg'
import VincentImage from './images/vincent.jpeg'
import EoinImage from './images/eoin.jpeg'
import AliImage from './images/ali.jpeg'
import AdelinaImage from './images/adelina.jpeg'
import CarolinaImage from './images/carolina.webp'
import RobynImage from './images/Robynn.webp'
import KarlottaImage from './images/Karlotta.webp'
import DavinaImage from './images/Davina.webp'
import JonnyImage from './images/Jonny.webp'
import clementinaImage from './images/clementina123.jpeg'



export default function TeamSection (props) {
    return (
    <div className='team-section' id='team-section'>
         <Container >
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={12} md={12}>
               
                <br/>
               <h4 id="teamheading">
               MEET OUR TEEM
               </h4>
               
                <hr id='teamline' style={{ marginLeft:'0', width:'15%' }} />
                <br />
               <p>
               We are entrepreneurs, just like you. We have been building successful businesses, brands and startups for over 25 years. We are all believers in blockchain and emerging technologies. We have been involved in digital technologies since the 1990s, and in blockchain, fintech and AI since 2013. But what really differentiates us is that we have some of the most talented and experienced people around working with us.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'center', display:'flex', alignItems:'center'}}>
            <Col xs={12} md={12}>
            <p id="team-section-text">
            CORE-TEAM
             </p>
                </Col>
            
            </Row>

            {/* Row-1 Team section */}

        <Row style={{textAlign:'center', display:'flex', alignItems:'center', flexWrap:'wrap'}}>
       
        <Col  xs={6} md={3}>
       
        <img id="team-image" src={GermanImage} alt='Relevant'/>
           
            <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           German Ramirez
            </p>
            
            <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
            CHIEF RELEVANCE OFFICER
            </p>
             
           </Col>
        
           <Col  xs={6} md={3}>
       
       <img id="team-image" src={AnnaImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Anna Stach
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           CHIEF ORCHESTRA OFFICER
           </p>
            
          </Col>

          <Col  xs={6} md={3}>
       
       <img id="team-image" src={VincentImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Vincent Tresno
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           GROWTH HACKER
           </p>
            
          </Col>

          <Col  xs={6} md={3}>
       
       <img id="team-image" src={EoinImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Eoin Jones
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           WORD JUGGLER
           </p>
            
          </Col>
            
        </Row>

         {/* Row-2 Team section */}
        
        <Row style={{textAlign:'center', display:'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <Col  xs={6} md={3}>
      
       <img id="team-image" src={AliImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Ali Raza Dar
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           Data Rocker
           </p>
            
          </Col>

         <Col  xs={6} md={3}>
      
      <img id="team-image" src={AdelinaImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Adelina Hoxhaj
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          CONTENT HUNTER
          </p>
           
         </Col>

         <Col  xs={6} md={3}>
      
      <img id="team-image" src={CarolinaImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Carolina Vargas
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          CAMPAIGN GURU
          </p>
           
         </Col>

         <Col  xs={6} md={3}>
      
      <img id="team-image" src={RobynImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Robynn Weldon

          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          WORD POLISHER
          </p>
           
         </Col>
           
       </Row>
       
       {/* Row-3 Team section */}
        
       <Row style={{textAlign:'center', display:'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <Col  xs={6} md={3}>
      
       <img id="team-image" src={KarlottaImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Karlotta Sophie Stroh
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           MARKETING SCRABBLER
           </p>
            
          </Col>
       
          <Col  xs={6} md={3}>
      
      <img id="team-image" src={DavinaImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Davina Gokool
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          CONTENT WHIZ
          </p>
           
         </Col>

         <Col  xs={6} md={3}>
      
      <img id="team-image" src={JonnyImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Jonny Packer
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          DIGITAL DYNAMO
          </p>
           
         </Col>

         <Col  xs={6} md={3}>
      
      <img id="team-image" src={clementinaImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Clementina Palacios
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          MARKETING NINJA
          </p>
           
         </Col>
           
       </Row>
    </Container>
    </div>
    ); 
}