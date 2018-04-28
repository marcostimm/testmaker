import React, { Component } from 'react';

const ChartSubject = () => {
 
  return(  
    <div className="card">
        <div className="header">
            <h4 className="title">Conteúdo</h4>
            <p className="category">Porcentagem de questões por conteúdo</p>
        </div>
        <div className="content">
            <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

            <div className="footer">
                <div className="chart-legend">
                    <i className="fa fa-circle text-info"></i> Física
                    <i className="fa fa-circle text-danger"></i> Matemática
                    <i className="fa fa-circle text-warning"></i> Biologia
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default ChartSubject ;