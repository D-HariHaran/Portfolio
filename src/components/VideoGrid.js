import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const VideoGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('videos');

  console.log(docs);

  return (
    <div className="vid-grid">
      {docs && docs.map(doc => (
        <motion.div className="vid-wrap" key={doc.id} 
        layout
        whileHover={{ opacity: 1 }}s
        onClick={() => setSelectedImg(doc.url)}
        >
          <motion.video className="vid" src={doc.url} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          />
          
        </motion.div>
      ))}
    </div>
  )
}

export default VideoGrid;