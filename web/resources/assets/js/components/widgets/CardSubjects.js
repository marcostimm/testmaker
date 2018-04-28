import React, { Component } from 'react';

const CardSubjects = () => {
 
  return(  
    <div className="card">
        <div className="content">
            <div className="row">
                <div className="col-xs-5">
                    <div className="icon-big icon-success text-center">
                        <i className="ti-notepad"></i>
                    </div>
                </div>
                <div className="col-xs-7">
                    <div className="numbers">
                        <p>Assuntos</p>
                        12
                    </div>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="stats">
                    <i className="ti-calendar"></i> Last day
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default CardSubjects ;