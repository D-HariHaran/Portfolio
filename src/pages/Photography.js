import React ,{useState} from 'react'
import './Photography.css';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

const Photography = () => 
{
    const [selectedImg, setSelectedImg] = useState(null);

    return(
        <div className="photography">
            <h1 className="title">GALLERY</h1>
            <h1 style={{color: "#F9F6EE",fontSize: "50px"}}>_</h1>
            <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>

    );
};

export default Photography;