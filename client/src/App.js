import { useState, useEffect } from 'react';
import './App.css';

function getUrl(path){
  if (process.env.NODE_ENV === 'development'){
    return 'http://localhost:5000' + path
  }else{
    return path
  }
}

function App() {
  const [message, setMessage] = useState('hello web39')
  useEffect(() => {
    fetch(getUrl('/api/hello'))
    .then(res => res.json())
    .then(resBody => setMessage(resBody.message))
    .catch(err => {debugger})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>This will be the start of my portfolio</h1>
        {message}
      </header>
    </div>
  );
}

export default App;
