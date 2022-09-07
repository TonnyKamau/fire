import React from 'react'

const Modal = ({selectedImg,setSelectedImg}) => {
const handleOnChange=(event)=>{
    if (event.target.classList.contains('backdrop')) {
        setSelectedImg(null);
      }
   
}
  return (
    < div className='backdrop' onClick={handleOnChange}>
        <img src={selectedImg} alt='largeview'/>
    </div>
  )
}

export default Modal