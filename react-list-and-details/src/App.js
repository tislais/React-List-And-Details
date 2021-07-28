import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TlabCharacters from './containers/TlabCharacters';
import CharacterDetail from './components/CharacterDetail';
import './App.css';


function App() {
  return (

    <Router>

      <Switch>

        <Route path="/" exact={true} 
        render={routerProps => (
            <TlabCharacters />
          )} />

        <Route path="/character/:id"
          render={routerProps => (
            <CharacterDetail {...routerProps} />
          )} />

      </Switch>

    </Router>

  );
}

export default App;
