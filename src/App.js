import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import React, {useState} from 'react';




function App() {
  const [catName, setCatName] = useState('')
  const [catBreed, setCatBreed] = useState('')

  const getCat = async () => {
    const response = await fetch('http://194.32.107.29:8080/randomcat')
    const data = await response.json()
    setCatName(data.name)
    setCatBreed(data.breed)
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex row justify-content-center pt-5'>
        <p className='catname'>Catname: {catName}</p>
        <p className='catbreed'>Catbreed: {catBreed}</p>
        <Button className="randomButton" variant="primary" onClick={getCat}>Random Cat</Button>{' '}
        </div>
      </header>
    </div>
  );
}

export default App;
