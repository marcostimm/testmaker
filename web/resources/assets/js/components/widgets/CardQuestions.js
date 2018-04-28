import React, { Component } from 'react';

const CardQuestions = () => {
 
  return(  
    <div className="card">
      <div className="content">
          <div className="row">
              <div className="col-xs-5">
                  <div className="icon-big icon-warning text-center">
                      <i className="ti-list"></i>
                  </div>
              </div>
              <div className="col-xs-7">
                  <div className="numbers">
                      <p>Questões</p>
                      234
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
 
export default CardQuestions ;