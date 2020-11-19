<<<<<<< HEAD
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
=======
import './App.css';
import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'TWIQ',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <Header siteState={this.state.currentTab} />
        </header>
      </div>
    );
  }

>>>>>>> Header_component
}

export default App;