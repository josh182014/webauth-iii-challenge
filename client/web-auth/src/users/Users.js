import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props)
    }

  componentDidMount() {
        this.props.getUsers()
    }

  render() {
    if (!this.props.loggedIn) {
        return (
            <div>
                Please log in to continue.
            </div>
        )
    }
    else {
        return (
        <>
            <h2>Our Users</h2>

            <div>
            {this.props.users.map(user => (
                <div key={user.id}>{user.username}</div>
            ))}
            </div>
        </>
        );
    }
  }
}

export default UserList;
