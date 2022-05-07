import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid" style={{justifyContent:'center',alignContent:'center',paddingLeft:"0px",objectFit:"contain"}}>
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" style={{objectFit:"fill !important"}} key={doc.id} 
        layout
        whileHover={{ opacity: 1 }}s
        onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img className="img" style={{objectFit:"fill !important"}} src={doc.url} alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          />
          
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;