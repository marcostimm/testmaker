import React, { Component } from 'react';

const ChartSubject = () => {
 
  return(  
    <div className="card ">
        <div className="header">
            <h4 className="title">Nível de Dificuldade</h4>
            <p className="category">Nível médio das provas aplicadas</p>
        </div>
        <div className="content">
            <div id="chartActivity" className="ct-chart"></div>

            <div className="footer">
                <div className="chart-legend">
                    <i className="fa fa-circle text-info"></i> Salesiano
                    <i className="fa fa-circle text-warning"></i> UFES
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default ChartSubject ;