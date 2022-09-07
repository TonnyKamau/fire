import React from 'react'
import { useState } from 'react';
import ProgressBar from './progressbar';

const Uploader = () => {
    const[file,setFile]=useState(null);
    const[error,setError]=useState(null);
    const types=['image/jpeg','image/png'];
const handleOnChange= (event)=>{
    event.preventDefault();
  let selected=event.target.files[0];
  if(selected && types.includes(selected.type)){
    setFile(selected);
    setError('')

  }else{
    setFile(null);
    setError('please select an image file png/jpeg')
  }

}
  return (
    <form>
       <label>
        <input type="file" onChange={handleOnChange} />
        <span>+</span>
      </label>
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
  )
}

export default Uploader