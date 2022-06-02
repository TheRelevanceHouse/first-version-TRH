import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import approachimage1 from './images/GETREADYIcon.svg'
import approachimage2 from './images/GOLIVEIcon.svg'
import approachimage3 from './images/GOBIGIcon.svg'
import backgroundapproach from './images/backgroundapproach.png' 
import arrow from './images/greenline.png'


export default function How (props) {
    return (
    <div className='how-section' style={{background:'#cccccc'}}>
    <Container >
        <Row style={{ marginTop:'35px',textAlign:'left', marginBottom:'20px'}}>
            <Col  xs={12} md={6}>
               
                <br/>
               <h4 >
               HOW WE MAKE IT HAPPEN
               </h4>
               
                <hr style={{ marginLeft:'0', width:'40%' }} />
                <br />
               <p style={{color:'#2F2E2E', fontWeight:'400'}}>
               THE RELEVANCE HOUSE is structured in three different units that work hand in hand for our clients. 
               Using a proven set of proprietary methodologies, tools and frameworks, we create and execute high-quality brand, go-to-market, funding, storytelling and growth hacking strategies that have a measurable positive impact on your business.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'left'}}>
            <Col id="approach-col"  xs={12} md={4} >
               
                <img src={approachimage1} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               THE DISTILLERY
               </h5>
                <br />
                <p>
                Branding & Storytelling, Marketing & Communication Strategy, Target Groups, Business Goals & KPIs. What and how you will tell the world about your project.
               </p>
            </Col>
            <Col id="approach-col"  xs={12} md={4}>
            <img src={approachimage2} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               THE STUDIO
               </h5>
                <br />
              <p >
              Brand Design, CI & CD, Build Website(s), Social Media, Campaigns, Landing Pages, Content Marketing & Production, Story Visualization.
              </p>
           </Col>
           <Col id="approach-col"  xs={12} md={4} >
               
           <img src={approachimage3} alt='Relevant'/>
                <br />
                <br/>
               <h5 style={{color:'#00a993'}}>
               GO LIVE
               </h5>
                <br />
               <p>
               Ongoing Though Leadership & Content, Social Media & Community Management, Growth Hacking & Digital Marketing, Public Relations (PR) & Press Work, Events & Conferences, Newsletter & Stakeholder Dialogue.
              </p>
           </Col>
            
            
        </Row>
    </Container>
    </div>
    ); 
}