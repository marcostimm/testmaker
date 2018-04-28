import React, { Component } from 'react';
 
const CardExamsBySubject = () => {
 
  return(  
    <div className="card">
        <div className="content">
            <div className="row">
                <div className="col-xs-5">
                    <div className="icon-big icon-info text-center">
                        <i className="ti-stats-up"></i>
                    </div>
                </div>
                <div className="col-xs-7">
                    <div className="numbers">
                        <p>Questões por conteúdo</p>
                        ~ 28
                    </div>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="stats">
                    <i className="ti-reload"></i> Updated now
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default CardExamsBySubject ;