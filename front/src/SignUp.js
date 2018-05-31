import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.updateEmailField = this.updateEmailField.bind(this);
        // On transmet (on bind) à la fonction le context de l'event à l'aide de bind(this)
    }


    updateEmailField(e) {
        this.setState({
            email: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.email}</h1>
                <input type="email" name="email" placeholder="rox@gmail.com" onChange={this.updateEmailField} />
            </div>
        );
    }
}

export default SignUp;