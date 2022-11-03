import { useState} from 'react';
import './App.css';
import EditMenu from './Edit';
import NavMenu from './Nav';
import BoardEdit from './boardEdit';

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

  document.body.classList.add(['bg-secondary', 'bg-light'][Theme]);
  document.body.classList.remove(['bg-secondary', 'bg-light'][1 - Theme]);
  return (
    <div className="App">
      <NavMenu contrastHandle={contrastHandle} theme={Theme} />
      <EditMenu theme={Theme} setProject={setProject}/>
      <BoardEdit theme={Theme} project={project} setProject={setProject}/>
    </div>
  );
}

export default App;
