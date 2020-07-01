import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar'
import Footer from '../src/components/footer/Footer'
import Donate from './screens/Donate'
import Privacy from './screens/Privacy'
import Membership from './screens/Membership'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Router>
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/donate' exact component={Donate} />
            <Route path='/privacy' exact component={Privacy} />
            <Route path='/membership' exact component={Membership} />


          </Switch>

        </Router>


      </main>
      <Footer />
    </div>
  );
}

export default App;