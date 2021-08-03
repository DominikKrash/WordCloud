import './App.css';
import IntroScreen from './components/IntroScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index"


function App() {
  
  const login = useSelector((state) => state.login); 
  const dispatch = useDispatch();

  const {setLogin} = bindActionCreators(actionCreators, dispatch)
  return (
    <Router>
      <Switch>
        <Route path="/" setLogin={setLogin}><IntroScreen /></Route>
        <Route path="/game"></Route>
        <Route path="/game-check"></Route>
        <Route path="/score"></Route>
      </Switch>
    </Router>
  );
}

export default App;
