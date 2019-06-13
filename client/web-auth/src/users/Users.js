import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h2>Our Users</h2>

        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = '/users';

    axios
        .get(endpoint)
        .then(res => {
            console.log('users', res.data);
            this.setState(() => ({ users: res.data }));
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default UserList;
