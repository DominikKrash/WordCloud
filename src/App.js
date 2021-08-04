import './App.css';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/"><IntroScreen /></Route>
        <Route exact path="/game"><GameScreen/></Route>
        <Route exact path="/game-check"></Route>
        <Route exact path="/score"></Route>
      </Switch>
    </Router>
  );
}

export default App;
