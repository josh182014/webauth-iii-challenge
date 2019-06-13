import React from 'react';
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Users from './users/Users'
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  handleLogin = user => {
    console.log('logged in', user)
  }

  handleSignUp = user => {
    console.log('signed up', user)
  }

  handleLogout = () => {
    console.log('signed out!')
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hi</h1>
          <nav>
            whatever
          </nav>
          <main>
            {/* <Route path="/login" component={Login} handleLogin={this.handleLogin} /> */}
            <Route path='/login'
              render={props => (
                <Login {...props}
                handleLogin={this.handleLogin}
                />
              )}
              />
            <Route path='/signup'
            render={props => (
              <SignUp {...props}
              handleSignUp={this.handleSignUp}
              />
            )}
            />
            <Route path='/users'
            render={props => (
              <Users {...props}
              />
            )}
            />
          
          </main>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
