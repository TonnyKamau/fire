import React from 'react'
import './App.css';
import Title from './components/title';
import Uploader from './components/uploader';
import ImageGrid from './components/imagegrid';
import Modal from './components/modal';
import { useState } from 'react';
function App() {
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <div className="App">
      <Title />
      <Uploader />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg}setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
