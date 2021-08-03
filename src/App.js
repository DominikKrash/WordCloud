import './App.css';
import IntroScreen from './components/IntroScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/"><IntroScreen /></Route>
        <Route path="/game"></Route>
        <Route path="/game-check"></Route>
        <Route path="/score"></Route>
      </Switch>
    </Router>
  );
}

export default App;
