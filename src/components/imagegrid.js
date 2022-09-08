import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion/dist/framer-motion'

const ImageGrid = ({setSelectedImg}) => {
  const {docs}=useFirestore('images')
  
  return (
    <motion.div className='imagegrid'
    layout
          whileHover={{ opacity: 2 }}
          >
      {docs && docs.map(doc=>(
        <div className='imagewrap' key={doc.id}
        onClick={()=>setSelectedImg(doc.url)}
        >
          <motion.img src={doc.url} alt='image'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          />
        </div>
      ))}
    </motion.div>
  )
}

export default ImageGrid
