import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import axios from 'axios';

function animateLogo() {
    $(function(){
        // $('#logo').jqFloat({
        //     width:0,
        //     height:50,
        //     speed:1800
        // });
    });
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'timm@marcos.im',
            password: 'rossow',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        animateLogo();
    }

    validateInput(data) {
        let errors = {};
      
        if (Validator.isNull(data.email)) {
          errors.identifier = 'This field is required';
        }
      
        if (Validator.isNull(data.password)) {
          errors.password = 'This field is required';
        }
      
        return {
          errors,
          isValid: isEmpty(errors)
        };
      }

    isValid() {
        const { errors, isValid } = this.validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    login() {
        axios.post('api/auth/login', this.state).then(res => {
            if (res.data.response != 'success') {
                errors.identifier = 'Email or password invalid';
            }
            const result = res.data.result;
            const token = res.data.result.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            this.props.onLog(token, result.user);
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
          this.setState({ errors: {}, isLoading: true });
          this.login(this.state)
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    render() {
        const { errors, email, password, isLoading } = this.state;

        return (
            <div className="container">
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
 
export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}