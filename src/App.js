import './style/app.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      
      <Route path="/">
          <Home />
      </Route>
      

      

      </Switch>
    </div>
    </Router>
  );
}

export default App;
