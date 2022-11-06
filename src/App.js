import React from 'react';
import Header from './Header';
import BodyEdit from './BodyEdit';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        <BodyEdit/>
      </div>
    );
  }
}

export default App;
