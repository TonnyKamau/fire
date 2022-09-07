import React from 'react'
import './App.css';
import Title from './components/title';
import Uploader from './components/uploader';
import ImageGrid from './components/imagegrid';
function App() {
  return (
    <div className="App">
      <Title />
      <Uploader />
      <ImageGrid />
    </div>
  );
}

export default App;
