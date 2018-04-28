import React, { Component } from 'react';
 
const CardExams = () => {
 
  return(  
    <div className="card">
        <div className="content">
            <div className="row">
                <div className="col-xs-5">
                    <div className="icon-big icon-danger text-center">
                        <i className="ti-files"></i>
                    </div>
                </div>
                <div className="col-xs-7">
                    <div className="numbers">
                        <p>Provas</p>
                        23
                    </div>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="stats">
                    <i className="ti-timer"></i> In the last hour
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default CardExams ;