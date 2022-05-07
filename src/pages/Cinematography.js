import React from 'react'
import './Cinematography.css';
import useFirestore from '../hooks/useFirestore';

const Cinematography = () => 
{ 
  const { docs } = useFirestore('videos');

    return(
        <div className='cinema'>
            <h1 className="title-cine" >CINEMATOGRAPH</h1>
            <h1 style={{color: "#F9F6EE"}}>_</h1>
            <div className='vid-grid' >
            {docs && docs.map(doc => (
            <div className="video-container" key={doc.id}>
              <video autoPlay muted loop width={100} height={144}>
                <source src={doc.url} type="video/mp4" />
              </video>
            </div>
            ))}
            </div>
       </div> 

    );
};

export default Cinematography;