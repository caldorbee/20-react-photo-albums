import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Albums from './pages/Albums'
import Photos from './pages/Photos'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Albums}></Route>
          <Route path="/detail/:id" component={Photos}></Route>
        </Switch>
      </div>
    </Router>
  );
}
