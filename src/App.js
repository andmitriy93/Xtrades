import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          {/* <Route exact path="/user" component={User} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
