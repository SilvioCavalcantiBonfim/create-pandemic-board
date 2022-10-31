import { useState } from 'react';
import './App.css';
import CardBoard from './CardProjectBoard';
import EditMenu from './Edit';
import NavMenu from './Nav';

function App() {
  const [project, setProject] = useState(null);
  const [Theme, setTheme] = useState(0);

  const contrastHandle = (event)=>{
    setTheme((v) => {return 1-v});
}


  return (
    <div className="App">
      <NavMenu contrastHandle={contrastHandle} theme={['dark', 'light'][Theme]}/>
      <EditMenu theme={['secondary', 'success'][Theme]}/>
      <div style={{display: 'flex'}}><CardBoard title='Pandemia Brasil' theme={Theme}/>
      <CardBoard title='Pandemia Brasil' theme={Theme}/>
      <CardBoard title='Pandemia Brasil' theme={Theme}/>
      <CardBoard title='Pandemia Brasil' theme={Theme}/></div>
    </div>
  );
}

export default App;
