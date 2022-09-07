import React from 'react'
import useFirestore from '../hooks/useFirestore'


const ImageGrid = ({setSelectedImg}) => {
  const {docs}=useFirestore('images')
  
  return (
    <div className='imagegrid'>
      {docs && docs.map(doc=>(
        <div className='imagewrap' key={doc.id}
        onClick={()=>setSelectedImg(doc.url)}
        >
          <img src={doc.url} alt='image'/>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
