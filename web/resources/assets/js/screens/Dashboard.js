import React, { Component } from 'react';

import CardQuestions            from '../components/widgets/CardQuestions';
import CardSubjects             from '../components/widgets/CardSubjects';
import CardExams                from '../components/widgets/CardExams';
import CardExamsBySubject       from '../components/widgets/CardExamsBySubject';
import ChartSubject             from '../components/widgets/ChartSubject';
import ChartDifficultLevel      from '../components/widgets/ChartDifficultLevel';

function ChartsRender() {

      var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
          [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
        ]
      };

      var options = {
          seriesBarDistance: 10,
          axisX: {
              showGrid: false
          },
          height: "245px"
      };

      var responsiveOptions = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];

      Chartist.Line('#chartActivity', data, options, responsiveOptions);

      var dataPreferences = {
          series: [
              [25, 30, 20, 25]
          ]
      };

      var optionsPreferences = {
          donut: true,
          donutWidth: 40,
          startAngle: 0,
          total: 100,
          showLabel: false,
          axisX: {
              showGrid: false
          }
      };

      Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

      Chartist.Pie('#chartPreferences', {
        labels: ['62%','32%','6%'],
        series: [62, 32, 6]
      });
}

class Dashboard extends Component {

    componentDidMount() {
        ChartsRender()
    }

    render() {
        return (
        <div className="container-fluid margin-top">
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
}

export default Dashboard ;