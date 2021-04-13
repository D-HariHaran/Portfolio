
import React from 'react';
import './Services.css';
import CardItem from './CardItem';

function Services() {
    const text = `Hello`
  return (
    <div className='cards'>
      <h1>SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <p style={{alignContent:'center',alignItems:'center'}}>
          </p>
        </div>
        <ul className='cards__items'>
            
            <CardItem
              src='videography.jpg'
              text='VIDEOGRAPHY'
              label='Video'
              path='/services'
            />
            <CardItem
              src='love.jpg'
              text='DIGITAL INTERMEDIATE'
              label='DI'
              path='/services'
            />
          </ul>
      </div>
    </div>
  );
}

export default Services;
