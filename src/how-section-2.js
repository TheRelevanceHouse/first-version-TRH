import React from 'react';
import './App.css';
import {Row, Col} from 'react-bootstrap'
import how1 from './images/how1.png'
import how2 from './images/how2.png'
import how3 from './images/how3.png'

export default function How2 (props) {
    return (
    <div className='how-section-2'>
             <Row style={{textAlign:'center'}}>
            <Col  xs={6} md={6} style={{ background: 'linear-gradient(90deg, #003F49 -4.91%, #26627E 100%)', borderRadius: '0px 0px 20px 0px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               THE DISTILLERY
               </h5>
               
              
                <br />
                <img src={how1} alt='Relevant'/>
                <br />
            </Col>
            <Col  xs={6} md={6}>
               
                <br />
                <br />
                <br />
               <p style={{color:'#26627E', lineHeight:'34px'}}>
               Branding & Storytelling, Marketing & Communication Strategy, Target Groups, Business Goals & KPIs. What and how you will tell the world about your project.
               </p>
            </Col>
        </Row>
        <Row style={{textAlign:'center'}}>
        <Col  xs={6} md={6}>
               
               <br />
               <br />
               <br />
              <p style={{color:'#26627E', lineHeight:'34px'}}>
              Brand Design, CI & CD, Build Website(s), Social Media, Campaigns, Landing Pages, Content Marketing & Production, Story Visualization.
              </p>
           </Col>
           <Col  xs={6} md={6} style={{ background: 'linear-gradient(90deg, #003F49 -4.91%, #26627E 100%)', borderRadius: '20px 0px 0px 20px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               THE STUDIO
               </h5>
               
              
                <br />
                <img src={how2} alt='Relevant'/>
                <br />
            </Col>
            
        </Row>
        <Row style={{textAlign:'center'}}>
        <Col  xs={6} md={6} style={{ background: 'linear-gradient(90deg, #003F49 -4.91%, #26627E 100%)', borderRadius: '0px 20px 0px 0px', paddingBottom: '30px'}}>
               
                <br/>
               <h5 style={{color:'#fff'}}>
               THE DELIVERY
               </h5>
               
              
                <br />
                <img src={how3} alt='Relevant'/>
                <br />
            </Col>
            <Col  xs={6} md={6}>
               
                <br />
                <br />
                <br />
               <p style={{color:'#26627E', lineHeight:'34px'}}>
               Ongoing Though Leadership & Content, Social Media & Community Management, Growth Hacking & Digital Marketing, Public Relations (PR) & Press Work, Events & Conferences, Newsletter & Stakeholder Dialogue.
               </p>
            </Col>
        </Row>

        <Row style={{textAlign:'center', backgroundColor:'#fff', marginBottom:'40px'}}>
            <Col  xs={12} md={12} style={{padding:'50px'}}>
               
                <p>
                There is a lot more to tell about our unique methodology.
                </p>
                <br />
                <br/>
                <a href='/' className='btn-green-shade'>
                Do you want to know how? Go on...
        </a>
            </Col>
        </Row>
    </div>
    ); 
}