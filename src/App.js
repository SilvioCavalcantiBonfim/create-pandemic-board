import { useState} from 'react';
import './App.css';
import EditMenu from './Edit';
import BoardEdit from './boardEdit';
import NavMenu from './Header';

function App() {

  const model_default = {
    illnessBox: []
  };

  const [project, setProject] = useState(model_default);

  if (localStorage.getItem("theme") === null)
    localStorage.setItem("theme", 0);
  const [Theme, setTheme] = useState(localStorage.getItem("theme"));


  const contrastHandle = (event) => {
    setTheme((v) => { localStorage.setItem("theme", 1 - v); return 1 - v; });
  }

  return (
    <div className="App">
      <NavMenu/>
      {/* <EditMenu theme={Theme} setProject={setProject} contrastHandle={contrastHandle}/> */}
      {/* <BoardEdit theme={Theme} project={project} setProject={setProject}/> */}
    </div>
  );
}

export default App;
