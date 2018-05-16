import React, { Component } from 'react';
import { Transition } from 'react-spring';
import PropTypes from 'prop-types';
import { Animated } from 'react-web-animation';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Validator from 'validator';
import validateInput from '../utils/loginValidations';
import { login } from '../actions/authActions';

function animateLogo() {
    // $('#logo').jqFloat({width:0,height:50,speed:1800});
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: '',
          errors: {},
          isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }

    componentDidMount(){
        animateLogo();
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
    
        if (!isValid) {
          this.setState({ errors });
        }
    
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
          this.setState({ errors: {}, isLoading: true });
          this.props.login(this.state).then(
            (res) => this.context.router.history.push('/dashboard'),
            (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
          );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, email, password, isLoading } = this.state;

        return (
            <div className="container authPage">
                <div className="row">
                    <div className="col-sm-7 col-md-5 col-md-offset-3">
                        <h1 className="text-center login-title login-header">
                            <img id="logo" src="img/logo-single.png" alt="Test Maker" className="logo" /><br/>
                            <img src="img/name.png" alt="Test Maker" className="logo-name" />
                        </h1>
                        <div className="card card-user login-card">
                            <form onSubmit={this.onSubmit}>
                                <div className="content">

                                        <div className="form-group">
                                            <label>Email de acesso</label>
                                            <input name="email" type="email" className="form-control" onChange={this.onChange} id="email" value={email} placeholder="Email" autoComplete="off" required autoFocus />
                                            <span className="text-danger"><small></small></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Senha</label>
                                            <input name="password" type="password" className="form-control" onChange={this.onChange} id="password" placeholder="Senha" />
                                            <span className="text-danger"><small></small></span>
                                        </div>
                                    
                                </div>
                                <hr />
                                <div className="text-left col-md-offset-1">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <a className=" btn-link" href="{{ route('password.request') }}">Esqueceu a senha</a>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <button type="submit" className="btn btn-info btn-fill" disabled={isLoading}>Entrar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
  }
  
LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}
 
export default connect(null, { login })(LoginForm);