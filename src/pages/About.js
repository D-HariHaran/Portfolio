
import { Icon } from '@material-ui/core';
import React from 'react';
import './About.css';
function About() { 
  const text = `An inspiring cinematographer working for satisfaction and exploring new edges of frames who is  passionate about capturing the angles of life.
  `
  return (

    <div className='about' style={{paddingTop:'80px'}}>
       <div className='line' style={{width:"100%",height:"2px",backgroundColor:"white",opacity:"0.4"}}></div>
       <h1 className="titleCine" style={{paddingTop:"60px",paddingBottom:"10px"}}>SHOWREEL</h1>
       <h1 style={{color: "#F9F6EE",fontSize: "50px",paddingBottom:"70px"}}>_</h1>
       <iframe
         className='frameVideo'
        src="https://drive.google.com/file/d/14g1trRKobu4YbUccWicBovfMfz5BOpfV/preview"
        frameborder="0"
        allow="autoplay"
        allowFullScreen="true"
        title="video"
        style={{height:"800px",paddingBottom:"71px"}}
      />
      <div className='line' style={{width:"100%",height:"2px",backgroundColor:"white",opacity:"0.4"}}></div>
       <h1 className="titleCine" style={{paddingTop:"70px"}}>CINEMATOGRAPHY</h1>
       <h1 style={{color: "#F9F6EE",fontSize: "50px",paddingBottom: "80px"}}>_</h1>
      <div className='films'>
        <a className='reborn' href='https://www.youtube.com/watch?v=ZZxCJ66Re9U&t=23s' target="blank" textDecoration="none">
        <a className='fa fa-play-circle' href='https://www.youtube.com/watch?v=ZZxCJ66Re9U&t=23s' target="blank" style={{color:"white",paddingLeft:"45%",fontSize:"50px",paddingTop:"25%",textDecoration:"none"}}></a>
        </a>
        <div className='desciption'>
         <div style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>REBORN</div>
        <h1 style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"15px"}}>- (short film) -<br/></h1>
        <h1 className='secondDesc'>
        When a guy is betrayed and pushed towards death, though he wants to avenge for his betrayal..he does not possess the power to do that.  All he wants is to save himself from this mess. But accidentally he gets the power he wanted to make his foes run for their lives. Will he pay back? 
        </h1>
        </div>
     </div>

     <div className='films'>
        <div className='iru'>
        <div style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>IRU PAKKANGAL</div>
        <h1 style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"15px"}}>- (short film) -<br/></h1>
        <h1 className='secondDesc'>
        Aravind is on his vacation. To kill the boredom of his vacation, he thinks of writing a story about two characters and their completely different personalities.
        </h1>
        </div>
        <a className='aravind' href='https://www.youtube.com/watch?v=JJn1uwn7cOM&t=3s' target="blank">
        <a className='fa fa-play-circle' href='https://www.youtube.com/watch?v=JJn1uwn7cOM&t=3s' target="blank" style={{color:"white",paddingLeft:"45%",fontSize:"50px",paddingTop:"25%",textDecoration:"none"}}></a>
        </a>
     </div>



     <div className='films'>
        <a className='pei' href='https://www.youtube.com/watch?v=k-EcC6qfpn8&t=9s' target="blank">
        <a className='fa fa-play-circle' href='https://www.youtube.com/watch?v=k-EcC6qfpn8&t=9s' target="blank" style={{color:"white",paddingLeft:"45%",fontSize:"50px",paddingTop:"25%",textDecoration:"none"}}></a>
        </a>
        <div className='pei_desc'>
        <div style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>VINAI</div>
        <h1 style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"15px"}}>- (short film) -<br/></h1>
        <h1 className='secondDesc'>
        This is a story of a boy who vows to avenge the murder of his family for their wealth.
        </h1>
        </div>
     </div>
     
     <div className='films'>
        <div className='stain_desciption'>
        <div style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>STAIN OF SIN</div>
        <h1 style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"15px"}}>- (short film) -<br/></h1>
        <h1 className='secondDesc'>
        The entire film was shot on iphone 11
        </h1>
        </div>
        <a className='sin' href='https://www.youtube.com/watch?v=M1V1AHLR1w4' target="blank">
        <a className='fa fa-play-circle' href='https://www.youtube.com/watch?v=M1V1AHLR1w4' target="blank" style={{color:"white",paddingLeft:"45%",fontSize:"50px",paddingTop:"25%",textDecoration:"none"}}></a>
        </a>
     </div>



     <div className='films'>
        <a className='dillan' href='https://www.youtube.com/watch?v=rzvUBL1XCYU' target="blank">
        <a className='fa fa-play-circle' href='https://www.youtube.com/watch?v=rzvUBL1XCYU' target="blank" style={{color:"white",paddingLeft:"45%",fontSize:"50px",paddingTop:"25%",textDecoration:"none"}}></a>
        </a>
        <div className='dillan_desciption'>
        <div style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>DILLAN</div>
        <h1 style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex",fontSize:"15px"}}>- (short film) -<br/></h1>
        <h1 className='secondDesc'>
        Dillan is a story about a father and his adopted son. Dillan comes to know that he is an adopted kid when he turned 12. So he is not in a cordial relationship with his father. Now he is 21 years old.
        </h1>
        </div>
     </div>

    </div>
  );
}

export default About;
