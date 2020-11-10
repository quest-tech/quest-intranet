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

}

export default App;
