import React, { Component } from 'react';

import NavTop                   from '../components/NavTop';
import Sidebar                  from '../components/Sidebar';
import Footer                   from '../components/Footer';

const EmptyData = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="toolBox col-md-12">
                    <div className="icon-big icon-warning text-right">
                    <button type="button" className="btn btn-danger btn-circle btn-xl">
                        <i className="ti-plus"></i>
                    </button>
                    </div>
                </div>
                <div className="emptyBox">
                    <img className="emptyIcon" src="img/emptyicon.png" alt="" />
                    <h3>Nada aqui ainda</h3>
                    <p>Experimente clicar no botão + e veja como é fácil começar.</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyData ;