import React, { Component } from 'react';

import NavTop                   from '../components/NavTop';
import Sidebar                  from '../components/Sidebar';
import Footer                   from '../components/Footer';
import EmptyData                from './EmptyData';

const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row">
            <EmptyData />
                {/* <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Lista de Provas</h4>
                            <p className="category">Provas geradas</p>
                        </div>
                        <div className="content table-responsive table-full-width">
                            <table className="table table-striped">
                                <thead>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Country</th>
                                    <th>City</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dakota Rice</td>
                                        <td>$36,738</td>
                                        <td>Niger</td>
                                        <td>Oud-Turnhout</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard ;