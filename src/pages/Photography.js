import React, { useState } from 'react'
import './Photography.css';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

const Photography = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="photography">
      <h1 className="title" style={{ paddingTop: '70px' }}>PHOTOGRAPHY</h1>
      <h1>_</h1>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>

  );
};

export default Photography;