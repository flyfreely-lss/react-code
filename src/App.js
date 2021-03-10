import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import './assets/css/App.css';
import StateComponent from './components/StateComponent'
import ReducerComponent from './components/ReducerComponent'
import RouterComponent from './components/RouterComponent'
import store from './store'
// import Todos from './components/todos/components/App'
import ReduxAsyncComponent from './components/ReduxAsyncComponent'

// const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <StateComponent />
          <ReducerComponent />
          <RouterComponent />

          {/* Redux 示例：Todo列表 */}
          {/* <Todos /> */}

          <ReduxAsyncComponent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
