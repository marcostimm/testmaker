import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmptyData                        from './EmptyData';
import TableView                        from '../components/widgets/TableView';
import Loading                          from '../components/widgets/Loading';
import { examsList, examsListClear }    from '../actions/examsActions';

class Exams extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          errors:       {},
          isLoading:    true
        };
    }

    loadExams() {
        this.setState({ errors: {}, isLoading: true });
        this.props.examsList().then(
            (res) => {this.setState({examsData: this.props.exams, isLoading: !this.props.isLoaded});  },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    componentDidMount() {
       this.loadExams()
    }

    componentWillUnmount() {
        this.props.examsListClear()
    }

    render() {
        const { exams, isLoaded } = this.props.exams;
        const { isAuthenticated, user } = this.props.auth;

        const loading = <Loading />;

        const tableView = <TableView 
            title="Lista de Provas" 
            header={["ID","Título","Data","Entidade","Ações"]}
            data={exams} />;

        return (
            <div className="container-fluid">
                <div className="row">
                    { isLoaded ? tableView : loading }
                </div>
            </div>
        )
    }
}

Exams.propTypes = {
    examsList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { examsList, examsListClear } )(Exams);