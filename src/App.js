import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
// import User from './components/user_page/user_show_page';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          {/* <Route exact path="/user" component={User} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
