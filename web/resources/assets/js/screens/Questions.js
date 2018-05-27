import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmptyData                        from './EmptyData';
import TableView                        from '../components/widgets/TableView';
import Loading                          from '../components/widgets/Loading';
import { examsList, examsListClear }    from '../actions/examsActions';
import { questionsTypeList }            from '../actions/questionsActions';
import Discursive                       from './Question/Discursive';

class Questions extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          errors:           {},
          isLoading:        true,
          questionsType:    [],
          newQuestion:      <Discursive />
        };

        this.loadQuestionsType()
    }

    loadQuestionsType() {
        this.props.questionsTypeList().then(
            (res) => {this.setState({questionsType: this.props.questions.questionsType.data}) },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    loadExams() {
        this.setState({ errors: {}, isLoading: true });
        this.props.examsList().then(
            (res) => {this.setState({examsData: this.props.exams, isLoading: !this.props.isLoaded});  },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    newQuestion(typeSlug) {
        console.log("Nova questão do tipo: ", typeSlug)

        switch(typeSlug) {
            case 'discursive':
                this.setState({newQuestion: <Discursive />});
            break;
        }
    }

    emptyNewQuestion() {
        this.setState({newQuestion: null});
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

        const { questionsType, newQuestion } = this.state;
        const loading = <Loading />;

        const tableView = <TableView 
            title="Questões" 
            header={["ID","Título","Data","Entidade","Ações"]}
            data={exams} />;

        return (
            <div className="container-fluid">
                <div className="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        {newQuestion != null ? <button type="button" className="btn btn-warning btn-fill btn-wd" onClick={() => this.emptyNewQuestion()}>Cancelar</button> /*<button type="button" className="btn btn-danger btn-fill small-btn" onClick={() => this.emptyNewQuestion() } data-toggle="dropdown"><i className="ti-close"></i></button>*/ : (
                        <li className="dropdown">
                            <button type="button" className="btn btn-success btn-fill btn-wd" data-toggle="dropdown">Nova Questão</button>
                            <ul className="dropdown-menu">
                                { this.props.questionsType ? <li><a>Carregando...</a></li> : (questionsType.map((type, i) => <li key={i}><a onClick={() => this.newQuestion(type.slug)}>{type.name}</a></li>)) }
                            </ul>
                        </li>
                        )}
                    </ul>
                </div>
                { newQuestion }
                <div className="row">
                    { newQuestion == null ? (isLoaded ? tableView : loading) : null }
                </div>
            </div>
        )
    }
}

Questions.propTypes = {
    examsList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { examsList, examsListClear, questionsTypeList } )(Questions);