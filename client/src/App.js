import './App.css';

import Header from './components/header'
import Todoform from './components/Todoform'
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <Todoform />
      <Todos/>
    </div>
  );
}

export default App;
