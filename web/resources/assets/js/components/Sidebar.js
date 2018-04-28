import React, { Component } from 'react';

const Sidebar = () => {

    return (
        <div className="sidebar" data-background-color="white" data-active-color="danger">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="/dashboard" className="simple-text">
                        <img src="img/logo.png" style={{width: '150px'}} alt="" />
                    </a>
                </div>

                <ul className="nav">
                    <li className="active">
                        <a href="dashboard">
                            <i className="ti-panel"></i>
                            <p>Painel</p>
                        </a>
                    </li>
                    <li>
                        <a href="exams">
                            <i className="ti-files"></i>
                            <p>Provas</p>
                        </a>
                    </li>
                    <li>
                        <a href="questions">
                            <i className="ti-list"></i>
                            <p>Questões</p>
                        </a>
                    </li>
                    <li>
                        <a href="subjects">
                            <i className="ti-notepad"></i>
                            <p>Assuntos</p>
                        </a>
                    </li>
                    <li>
                        <a href="formatting">
                            <i className="ti-ruler-alt"></i>
                            <p>Formatação</p>
                        </a>
                    </li>
                    <li>
                        <a href="entities">
                            <i className="ti-briefcase"></i>
                            <p>Entidades</p>
                        </a>
                    </li>
                    <li>
                        <a href="logout">
                            <p className="btn btn-danger" style={{marginTop: '20px', width: '100px', lineHeight: '20px'}} >Sair</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar ;