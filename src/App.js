import './App.css';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import GameResultScreen from './components/GameResultScreen';
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
        <Route exact path="/game-check"><GameResultScreen/></Route>
        <Route exact path="/score"></Route>
      </Switch>
    </Router>
  );
}

export default App;
