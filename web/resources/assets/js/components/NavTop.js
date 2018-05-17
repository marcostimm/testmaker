import React, { Component } from 'react';

const NavTop = () => {
 
  return(  
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar bar1"></span>
                    <span className="icon-bar bar2"></span>
                    <span className="icon-bar bar3"></span>
                </button>
                <a className="navbar-brand" href="#">Quadro Geral</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">
                            <i className="ti-settings"></i>
                            <p>&nbsp;Configurações</p>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  )
}
 
export default NavTop ;