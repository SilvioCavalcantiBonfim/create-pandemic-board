import { useState} from 'react';
import Header from './Header';
import BodyEdit from './BodyEdit';

function App() {

  const model_default = {
    name: 'New Project', 
    boardBackground: '',
    cities: [],
    routes: [], 
    illness: []
  };

  const [project, setProject] = useState(model_default, () => {console.log("update")});

  return (
    <div className="App">
      <Header project={project}/>
      <BodyEdit project={project} setProject={setProject}></BodyEdit>
      {/* <EditBar project={project} setProject={setProject}/> */}
    </div>
  );
}

export default App;
