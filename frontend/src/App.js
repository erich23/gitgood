import React, { Component } from 'react';
import logo from './hack.jpg';
import './App.css';
import Calendar from './components/calendar.jsx';
import Form from './components/form.jsx';
import WordCloud from './components/wordcloud';
import AverageCommitLength from './components/commitlength';
import Contributions from './components/contributions';

import Emotions from './components/emotion';



class App extends Component {

  fetching() {

    fetch('http://example.com/movies.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      });

  }




  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitGood: A GitHub Repository Visualization Tool</h1>
        </header>
        <p className="App-intro" style={{ marginBottom: '100px' }}>
          To get statistics, enter GitHub URL here:

        </p>

        <div>
          <Form />
        </div>
        <div>
          <AverageCommitLength />
        </div>

        {/* <div>
          <WordCloud />
        </div>
        <div>
          <Emotions />
        </div> */}

        <div>
          <Contributions />
        </div>




      </div>
    );
  }
}

export default App;







