import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: "", password: "", first_name: "", last_name: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        this.props.actionForm(user);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }


    render() {
        if (this.props.formType === "Login") {
            return (
                <div>
                    <h3>Log in!</h3>
                    <form onSubmit={this.handleSubmit}>
                        Email: <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        <br/>
                        Password: <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        <br/>
                        <input type="submit" value="Login"/>
                        <br/>
                        Don't Have an Account? <Link to={'/signup'}>Sign Up</Link>
                    </form>
                </div>
            )
        } else {
            return (
               <div>
                   <h3>Sign Up!</h3>
                    <form onSubmit={this.handleSubmit}>
            
                        Email: <input type="text" value={this.state.email} onChange={this.update("email")}/>
                        <br/>
                        First Name: <input type="text" value={this.state.text} onChange={this.update("first_name")} />
                        <br/>
                        Last Name: <input type="text" value={this.state.text} onChange={this.update("last_name")} />
                        <br/>
                        Password: <input type="password" value={this.state.password} onChange={this.update("password")}/>
                        <br/>
                        <button onClick={this.handleSubmit}>Signup</button>
                        <br/>
                        Already Have an Account? <Link to={'/login'}>Log in</Link>
                    </form>
                </div>
            )
        }
    }

}
//     render() {
//         return (
//             <div className="login-form-container">
//                 <form onSubmit={this.handleSubmit} className="login-form-box">
//                     <br />
//                     Please {this.props.formType} or {this.props.otherForm}
//                     <div onClick={this.props.closeModal} className="close-x">X</div>
//                     <div className="login-form">
//                         <br />
//                         <label>Username:
//               <input type="text"
//                                 value={this.state.username}
//                                 onChange={this.update('username')}
//                                 className="login-input"
//                             />
//                         </label>
//                         <br />
//                         <label>Password:
//               <input type="password"
//                                 value={this.state.password}
//                                 onChange={this.update('password')}
//                                 className="login-input"
//                             />
//                         </label>
//                         <br />
//                         <input className="session-submit" type="submit" value={this.props.formType} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
export default withRouter(SessionForm);