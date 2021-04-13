import React from 'react';
import './Footer.css';
import { Link } from 'wouter';
import { Button } from '../components/Button';

function Footer() {
  const dev1 = `Contact Developer`;
  const dev2 = `D.Hariharan`;
  const dev3 = `haranhari003@gmail.com`;
  const notify = `FEEL FREE TO CONTACT ME`;
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          <h2>LET ME KNOW</h2>
        </p>

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
            <h2>CONTACT</h2>
            <a href="mailto:avinashsubrayan@gmail.com" target="_blank" rel="noreferrer">Email</a>
            <a href="mailto:avinashsubrayan@gmail.com" target="_blank" rel="noreferrer">
              <h4 style={{ color: 'white', paddingBottom: '10px' }}>avinashsubrayan@gmail.com</h4>
            </a>
            <a href="">Mobile</a>
            <h4 style={{ color: 'white' }}>+91 7708810529</h4>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h2 style={{ color: 'white', textAlign: 'center' }}>
              {dev1.split('\n\n').map(paragraph =>
                <p>
                  {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                </p>
              )}
            </h2>
            <a href="https://www.linkedin.com/in/d-hari-haran-elite" target="_blank" rel="noreferrer">
              <h3 style={{ color: 'white', textAlign: 'center' }}>
                {dev2.split('\n\n').map(paragraph =>
                  <p>
                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                  </p>
                )}
              </h3>
            </a>

            <a href="mailto:haranhari003@gmail.com" rel="noreferrer" target="_blank">
              <h3 style={{ color: 'white', textAlign: 'center' }}>

                {dev3.split('\n\n').map(paragraph =>

                  <p>
                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                  </p>
                )}

              </h3>
            </a>

          </div>
          <small class='website-rights'></small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;