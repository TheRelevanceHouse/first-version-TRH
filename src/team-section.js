import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import GermanImage from './images/German.jpeg'
import AnnaImage from './images/anna.jpeg'
import VincentImage from './images/vincent.jpeg'
import EoinImage from './images/eoin.jpeg'
import AliImage from './images/ali.jpeg'
import AdelinaImage from './images/adelina.jpeg'
import RobynImage from './images/Robynn.webp'
import JonnyImage from './images/Jonny.webp'
import clementinaImage from './images/clementina123.jpeg'
import ln from './images/LinkedIN_white.svg'
import medium from './images/Medium_white.svg'
import twitter from './images/Twitter_white.svg'
import fb from './images/Facebook_white.svg'
import instagram from './images/Instagram_white.svg'
import './fonts/norwester.ttf'
import linkedinhover from './images/LinkedinIconHover.svg'
import facebookhover from './images/FacebookIconHover.svg'
import twitterhover from './images/TwitterIconHover.svg'
import instagramhover from './images/InstagramIconHover.svg'
import mediumhover from './images/MediumIconHover.svg'



export default function TeamSection (props) {
    return (
    <div className='team-section' id='team-section'>
         <Container >
        <Row style={{ marginTop:'50px', marginBottom:'20px', position:'relative'}}>
        <br id='hidespace' />
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
       
        <Col  xs={6} md={3} id="team-member" className='team-member'>
       
       
        <img id="team-image" src={GermanImage} alt='Relevant'/>
           
            <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           German Ramirez
            </p>
            
            <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
            CHIEF RELEVANCE OFFICER
            </p>

            <div id="team-card">
            <p>
                German Ramirez is our co-founder and Chief Relevance Officer. German is a pioneer in digital marketing, transformation and 
                blockchain and has 20+ years of international experience in strategy, branding, 
                marketing and innovation across a quantity of traditional and disruptive industries. 
                Whether it is world's first e-commerce business or blockchain technology, German has covered them in English, 
                Spanish or German, either as an entrepreneur, public speaker, thought leader or lecturer.
                <br /> <br />
                <b>Fun fact: </b> 
                German has been on the internet longer than Google and is a co-initiator of the first Swiss cryptocurrency 
                ATM in 2013 (it now sits at the Museum of Money in Zurich).
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
             
           </Col>
        
           <Col  xs={6} md={3} id="team-member" className='team-member'>
       
       <img id="team-image" src={AnnaImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Anna Stach
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           CHIEF ORCHESTRA OFFICER
           </p>
           <div id="team-card">
            <p>
            Anna Stach is our co-founder and Chief Orchestra Officer. Anna is a brand designer, marketer, and operations manager with 15+ years of experience in the traditional and digital arenas. A veteran of agencies in two countries, Anna keeps THE RELEVANCE HOUSE running smoothly.<br />

                <br /> 
                <b>Point of interest: </b> 
                Anna hates biographies. 
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
          </Col>

          <Col  xs={6} md={3} id="team-member" className='team-member'>
       
       <img id="team-image" src={VincentImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Vincent Tresno
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           GROWTH HACKER
           </p>
           <div id="team-card">
            <p>
            Vincent is a growth marketing strategist and has 15 years of experience gained in working with over 50 different companies across a broad range of industries. He started his career as a strategy consultant, founded a number of companies and held various Chief Marketing Officer positions.<br />

                <br /> 
                <b>Interesting point: </b> 
                Vincent will be happy to demonstrate that if you try hard enough, anything can be quantified.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
          </Col>

          <Col  xs={6} md={3} id="team-member" className='team-member'>
       
       <img id="team-image" src={EoinImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
           Eoin Jones
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           WORD JUGGLER
           </p>
           <div id="team-card">
            <p>
            Eoin (pronounced &ldquo;Owen&rdquo;) is a storyteller with a decade of proofreading, writing and editing experience in a variety of fields ranging from airlines to academia. He&rsquo;s a recovering political scientist, an unrepentant grammarian, a stickler for accuracy, and a meticulous researcher.<br />

                <br />
                <b>Fun fact: </b> 
                Eoin came to Zurich to write a paper&hellip; ten years ago. He got lost.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
          </Col>
            
        </Row>

         {/* Row-2 Team section */}
        
        <Row style={{textAlign:'center', display:'flex', alignItems:'center', flexWrap:'wrap'}}>
       
        <Col  xs={6} md={3} id="team-member" className='team-member'>
      
       <img id="team-image" src={AliImage} alt='Relevant'/>
          
           <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Ali Raza Dar
           </p>
           
           <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
           Data Rocker
           </p>
           <div id="team-card">
            <p>
            Ali is a software engineer and has four years of market experience spanning seven countries. While working in the Middle-East, he missed the hills of his native home and decided on Zurich to pursue his master&rsquo;s degree. He interprets data and turns it into information which offers ways to improve a business. He has spoken at TEDx on blockchain and how it could improve the world we live in, and he always has one eye on &ndash; and one foot &ndash; in the future.<br />

                <br />
                <b>Fun fact: </b> 
                Ali is always on time.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
          </Col>

          <Col  xs={6} md={3} id="team-member" className='team-member'>
      
      <img id="team-image" src={AdelinaImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Adelina Hoxhaj
          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          CONTENT HUNTER
          </p>
          <div id="team-card">
            <p>
            Adelina is an eager communicator, and has four years of experience, ranging from teaching languages to using language to make communications sing. Hailing from Lugano, she is a linguist, a medievalist, and a Post-It addict. Often found eyeballs deep in blockchain esoteria, she drives the content research for the editorial team.<br />

                <br />
                <b>Fun fact: </b> 
                She suffers from windows-related PTSD. Don&rsquo;t ask.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
         </Col>

         <Col  xs={6} md={3} id="team-member" className='team-member'>
      
         <img id="team-image" src={JonnyImage} alt='Relevant'/>
         
         <p id='' style={{color:'#fff', marginBottom:'0px'}}>
         Jonny Packer
         </p>
         
         <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
         DIGITAL DYNAMO
         </p>
         <div id="team-card">
            <p>
            Jonny is a keen marketeer with a degree in marketing with 4 years of experience in marketing & communications. After working with an array of clients from different sectors, he revels in trying something new. An Englishman born in Bermuda with a Swiss passport, Jonny considers himself an international man of mystery. He has a passion for anything creative and wordplay (a.k.a bad puns) and will jump at the chance to bring something new to the table.
                <br/>
                <br />
                <b>Fun fact: </b> 
                Unlike most Brits, Jonny enjoys a trip to the pub.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
         </Col>

         <Col  xs={6} md={3} id="team-member" className='team-member'>
      
      <img id="team-image" src={RobynImage} alt='Relevant'/>
         
          <p id='' style={{color:'#fff', marginBottom:'0px'}}>
          Robynn Weldon

          </p>
          
          <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
          WORD POLISHER
          </p>
          <div id="team-card">
            <p>
            Robynn has written and edited her way through magazines, newspapers and industries across three countries, finally settling with us to keep learning as she creates and hones stories that spark ideas. A reformed headline writer, she promises to go easy on the puns (mostly).

                <br /> <br/>
                <b>Warning: </b> 
                Robynn will try to convince you that knitting patterns are basically just computer code.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
         </Col>
           
       </Row>
       
       {/* Row-3 Team section */}
        
       <Row style={{textAlign:'center', display:'flex', alignItems:'center', flexWrap:'wrap'}}>
       
       <Col  xs={6} md={3} id="team-member" className='team-member'>
      
       <img id="team-image" src={clementinaImage} alt='Relevant'/>
         
         <p id='' style={{color:'#fff', marginBottom:'0px'}}>
         Clementina Palacios
         </p>
         
         <p id='team-section-text' style={{marginTop:'0px',fontSize:'1em', lineHeight:'30px'}}>
         MARKETING NINJA
         </p>
         <div id="team-card">
            <p>
            Clementina is a full stack digital marketing consultant with a strong expertise and background in online campaigns and Google Ads. She is a Venezuelan living in Europe since 2009 addicted to her work and to finding new challenges.
                <br/>
                <br />
                <b>Fun fact: </b> 
                She loves to work from random places, so you will always see her with different backgrounds in online meetings.
            </p> 
           
            
       <a href='https://www.linkedin.com/company/therelevancehouse/'> 
     
       <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
      
       </a>
       <a href='https://medium.com/the-relevance-house'> 
      
       <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
       </a>
       <a href='https://twitter.com/RelevanceHouse'> 
      
       <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
       </a>
       <a href='https://www.facebook.com/TheRelevanceHouse/'> 
       
       <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
       </a>
       <a href='https://www.instagram.com/therelevancehouse/'> 
       
       <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
       </a>      
      

            </div>
          </Col>
       
          <Col  xs={6} md={3}>
      
     
           
         </Col>

         <Col  xs={6} md={3}>
      
     
           
         </Col>

         <Col  xs={6} md={3}>
      
      
           
         </Col>
           
       </Row>
    </Container>
    </div>
    ); 
}