import './App.css';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import { client } from './utils/client';
import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <SearchBooks />
          </Route>
          <Route exact path='/saved'>
            <SavedBooks />
          </Route>
          <Route exact path='/login'>
            <LoginForm />
          </Route>
          <Route exact path='/signup'>
            <SignUpForm />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;