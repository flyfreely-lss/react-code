import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history';
import './assets/css/App.css';
import StateComponent from './components/StateComponent'
import ReducerComponent from './components/ReducerComponent'
import RouterComponent from './components/RouterComponent'
import Todos from './components/todos/components/App'

// const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <div className="App">
        <StateComponent initialCount={0} />
        <ReducerComponent initialCount={100} />

        <RouterComponent />

        {/* Redux 示例：Todo列表 */}
        <Todos />
      </div>
    </Router>
  );
}

export default App;
