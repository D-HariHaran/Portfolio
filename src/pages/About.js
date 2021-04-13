
import React from 'react';
import './About.css';

function About() { 
  const text = `An inspiring cinematographer working for satisfaction and exploring new edges of frames who is  passionate about capturing the angles of life.
  `
  return (
    <div className='about' style={{paddingTop:'80px'}}>
      <h1>ABOUT</h1>
      <h2>
      <div style={{textAlign:'center'}}>
        {text.split('\n\n').map(paragraph =>
            <p>
                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
            </p>
        )}
    </div>
    </h2>
    </div>
  );
}

export default About;
