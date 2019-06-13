import React from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    handleLogout = () => {
        console.log('signed out!')
        localStorage.removeItem('jwt');
        this.props.handleLogout()
        this.props.history.push('/login')
    }

    render () {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default withRouter(Nav);