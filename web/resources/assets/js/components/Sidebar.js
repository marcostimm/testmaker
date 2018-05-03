import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Sidebar extends Component {

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="/dashboard" className="simple-text">
                            <img src="img/logo.png" style={{width: '150px'}} alt="" />
                        </a>
                    </div>

                    <ul className="nav">
                        <li>
                            <NavLink to={'/dashboard'}>
                                <i className="ti-panel"></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/exams'}>
                                <i className="ti-files"></i>
                                <p>Provas</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/questions'}>
                                <i className="ti-list"></i>
                                <p>Questões</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/subjects'}>
                                <i className="ti-notepad"></i>
                                <p>Assuntos</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/formatting'}>
                                <i className="ti-ruler-alt"></i>
                                <p>Formatação</p>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to={'/entities'}>
                                <i className="ti-briefcase"></i>
                                <p>Entidades</p>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" onClick={this.logout.bind(this)}>
                                <p className="btn btn-danger" style={{marginTop: '20px', width: '100px', lineHeight: '20px'}} >Sair</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(Sidebar);