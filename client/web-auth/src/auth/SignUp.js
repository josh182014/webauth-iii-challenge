import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            department: ''
        };
    }

    handleInputChanges = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.handleSignUp(this.state)
        this.props.history.push('/users')
    }

    render() {
        return (
            <>
                <h1>Sign Up</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div>Username</div>
                        <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChanges}
                        type="text"
                        />
                    </div>
                    <div>
                        <div>Password</div>
                        <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChanges}
                        type="password"
                        />
                    </div>
                    <div>Department</div>
                    <input value={this.state.department} name='department' onChange={this.handleInputChanges} list='types'></input>
                    <datalist id='types'>
                        <option value='web19'></option>
                        <option value='web18'></option>
                        <option value='web17'></option>
                        <option value='ios6'></option>
                        <option value='android5'></option>
                        <option value='ds6'></option>
                    </datalist>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </>
        )
    }
}

export default SignUp