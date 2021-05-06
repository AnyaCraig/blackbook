import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';

import { ContactsList } from './ContactsList';
import { List } from './List';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <ContactsList {...props} />;
            }}
          />
          <Route
            exact
            path="/addresses"
            render={props => {
              return <List {...props} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
