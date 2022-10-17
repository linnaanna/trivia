import React, { useState } from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([]);
  const [request, setRequest] = useState('');
  
  
  const getData = () => {
    setResults(fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(resdata => {setResults(resdata.results);}))
    setRequest('?');
  }

    const getQuestion = () =>{

    results.map(getQ);

    function getQ (item) {
      setRequest(item.question)
    } 
  }

  const getAnswer = () => {
    
    results.map(getA);

    function getA (item) {
      setRequest(item.correct_answer)
    }
  }

  
  return (
    <div className="App">
      
           <p> {request} </p>
      <button class="button" onClick={getData}>Refresh</button>
      <button class="button" onClick={getQuestion}>Question</button>
      <button class="button" onClick={getAnswer}>Answer</button>
      <footer class="footer">©Anna Linna 2022</footer>
    </div>
    
  );
  } 

export default App;
