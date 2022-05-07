import React from 'react';
import './Footer.css';
import { Link } from 'wouter';
import { Button } from '../components/Button';
function Footer() {
  const dev1 = `Contact Developer`;
  const dev3 = `haranhari003@gmail.com`;
  const notify = `GET IN TOUCH`;
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          <h2>LET ME KNOW</h2>
        </p> */}

      </section>
      <p className='footer-subscription-text' style={{ color: 'white', textAlign: 'center' }}>
        <h3>
          {notify.split('\n\n').map(paragraph =>
            <p>
              {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
            </p>
          )}
        </h3>
      </p>
      <div class='footer-links'>
        <div className='footer-link-wrapper' >
          <div class='footer-link-items' >
            <i href="mailto:avinashsubrayan@gmail.com" target="_blank" style={{color:"white"}} className='fa fa-envelope' rel="noreferrer"/>
            <a href="mailto:avinashsubrayan@gmail.com" target="_blank" rel="noreferrer">
            <h4 style={{ color: 'white', paddingBottom: '10px' }}>avinashsubrayan@gmail.com</h4>
            </a>
            <i style={{color:"white"}} className='fa fa-address-card' href=""/>
            <h4 style={{ color: 'white',size:"30px" }}>+91 8825517933</h4>
          </div>
        </div>
      </div>
      {/* <div className='whatsapp'>
            <h6 style={{textAlign: 'center'}}>Whatsapp</h6>
          </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h2 style={{ color: 'white', textAlign: 'center' , fontSize: '20px' }}>
              {dev1.split('\n\n').map(paragraph =>
                <p>
                  {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                </p>
              )}
            </h2>
            
            <a >
              <h3 style={{ color: 'white', textAlign: 'center', fontSize: '12px' }}>
              
                {dev3.split('\n\n').map(paragraph =>
                
                  <p>
                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                  </p>
                )}
               
              </h3>
              </a>
          
          </div>
          <small class='website-rights'></small>
           <div className='quote'>
            <h6 >" Cinema is a matter of what's in the frame and what's out " - Martin Scorsese</h6>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Footer;