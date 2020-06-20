import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Router>
          <Switch>
            <Route path='/' exact component={HomeScreen} />
          </Switch>

        </Router>

      </main>
    </div>
  );
}

export default App;