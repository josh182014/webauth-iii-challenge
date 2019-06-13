import React from 'react';
import axios from 'axios';
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Users from './users/Users'
import Nav from './nav/Nav'
import './auth/addInterceptors';

import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: localStorage.getItem("jwt") === null ? false : true,
    loggingIn: false,
    fetchingData: false,
    users: [],
  }

  getUsers = () => {
    this.setState({fetchingData: true})
    const endpoint = 'http://localhost:5000/api/users';

    axios
        .get(endpoint)
        .then(res => {
            console.log('users', res.data);
            // this.setState({users: res.data})
            this.setState(() => ({ users: res.data }));

            this.setState({fetchingData: false})
        })
        .catch(error => {
            console.log(error)
        })
  }

  handleLogin = user => {
    this.setState({loggingIn: true})
    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
      .post(endpoint, user)
      .then(res => {
        this.setState({loggingIn: false, loggedIn: true})
        localStorage.setItem('jwt', res.data.token);
        console.log('response', res)
        this.getUsers()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSignUp = user => {
    this.setState({loggingIn: true})
    const endpoint = 'http://localhost:5000/api/auth/register';
    axios
      .post(endpoint, user)
      .then(res => {
        this.setState({loggingIn: false, loggedIn: true})
        localStorage.setItem('jwt', res.data.token);
        console.log('response', res)
        this.getUsers()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLogout = () => {
    this.setState({loggedIn: false})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hi</h1>
          <Nav loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
          <main>
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
              getUsers={this.getUsers}
              users={this.state.users}
              fetchingData={this.state.fetchingData}
              loggedIn={this.state.loggedIn}
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
