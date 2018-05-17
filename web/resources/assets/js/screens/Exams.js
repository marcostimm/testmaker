import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyData        from './EmptyData';
import TableView        from '../components/widgets/TableView';
import Loading          from '../components/widgets/Loading';
import { examsList }    from '../actions/examsActions';

class Exams extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          exams: [],
          examsData:    [],
          errors:       {},
          isLoading:    true
        };
    }

    loadExams() {
        this.setState({ errors: {}, isLoading: true });
        this.props.examsList().then(
            (res) => { console.log(">>> " + this.state.getExams); /*this.setState({examsData: res.data, isLoading: false})*/ },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    componentDidMount() {
        this.loadExams()
    }

    render() {
        const { examsData, isLoading } = this.props;
        const { isAuthenticated, user } = this.props.auth;

        var loginButton;
        // if (isLoading) {
        //   loginButton = <Loading />;
        // } else {
        //   loginButton = <TableView 
        //     title="Lista de Provas" 
        //     header={["ID","Título","Data","Entidade","Ações"]}
        //     data={examsData} />;
        // }

        return (
            <div className="container-fluid">
                <div className="row">
                    {loginButton}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { examsList } )(Exams);