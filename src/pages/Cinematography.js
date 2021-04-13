import React ,{useState} from 'react'
import './Cinematography.css';
import VideoGrid from '../components/VideoGrid';
import Modal from '../components/Modal';

const Cinematography = () => 
{
    const [selectedImg, setSelectedImg] = useState(null);

    return(
        <div className="cinematography">
            <h1 className="title-cine" style={{paddingTop:'70px'}}>CINEMATOGRAPHY</h1>
            <VideoGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>

    );
};

export default Cinematography;