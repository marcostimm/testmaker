import React, { Component } from 'react';

import CardQuestions            from './widgets/CardQuestions';
import CardSubjects             from './widgets/CardSubjects';
import CardExams                from './widgets/CardExams';
import CardExamsBySubject       from './widgets/CardExamsBySubject';
import ChartSubject             from './widgets/ChartSubject';
import ChartDifficultLevel      from './widgets/ChartDifficultLevel';

const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-3 col-sm-6">
                    <CardQuestions />
                </div>

                <div className="col-lg-3 col-sm-6">
                    <CardSubjects />
                </div>

                <div className="col-lg-3 col-sm-6">
                    <CardExams />    
                </div>

                <div className="col-lg-3 col-sm-6">
                    <CardExamsBySubject />
                </div>

            </div>
            
            <div className="row">
                <div className="col-md-6">
                    <ChartSubject />
                </div>

                <div className="col-md-6">
                    <ChartDifficultLevel />
                </div>

            </div>
        </div>

    )
}

export default Dashboard ;