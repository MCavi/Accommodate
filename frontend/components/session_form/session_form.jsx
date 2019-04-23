import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "", password: "", first_name: "", last_name: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
        this.handleChangeModal = this.handleChangeModal.bind(this);
    };

    handleChangeModal(){
        this.props.closeModal();
        debugger
        this.props.openModal(this.props.otherForm);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        // this.props.actionForm(user).then(this.props.closeModal);
        this.props.actionForm(user).then(this.props.closeModal);
    }

    handleSubmitDemo(e){
        e.preventDefault();
        const user = { email: "mike3@gmail.email", password: "starwars", first_name: 'Mike', last_name: "Yoon"};
        this.props.demoLogin(user).then(this.props.closeModal);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }


    render() {
        if (this.props.formType === "Login") {
            return (
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-header">
                        <h3>Log in to continue</h3>    
                    </div>
                    <div className="login-form-input">
                        <input className="test" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                    </div>
                    <div className="login-form-input">
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
                    </div>
                    <div className="login-form-input">
                        <input type="submit" value="Log in"/>    
                    </div>
                    
                    <div className="login-form-input">
                        <button onClick={this.handleSubmitDemo}>Log in Demo User</button>
                    </div>

                    <div className="login-form-input">
                        <div>Don't Have an Account? <p onClick={this.handleChangeModal} >Sign Up</p> </div> 
                    </div>
                    
                </form>
            )
        } else {
            return (
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-header">
                        <h3>Sign up</h3>
                    </div>
                    <div className="login-form-input">
                        <input className="test" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                    </div>
                    <div className="login-form-input">
                        <input className="test" type="text" value={this.state.first_name} onChange={this.update('first_name')} placeholder="First Name" />
                    </div>
                    <div className="login-form-input">
                        <input className="test" type="text" value={this.state.last_name} onChange={this.update('last_name')} placeholder="Last Name" />
                    </div>
                    <div className="login-form-input">
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                    </div>
                    <div className="login-form-input">
                        <input type="submit" value="Sign Up" />
                    </div>
                    <div className="login-form-input">
                        <div>Already have an Accommodate account? <p onClick={this.handleChangeModal}>Log In</p></div>
                    </div>
                </form>
            )
        }
    }

}

export default withRouter(SessionForm);