import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmptyData                            from './EmptyData';
import TableView                            from '../components/widgets/TableView';
import Loading                              from '../components/widgets/Loading';
import { questionList, 
         questionsListClear, 
         questionsTypeList }                from '../actions/questionsActions';
import Discursive                           from './Question/Discursive';

class Questions extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          errors:           {},
          isLoading:        true,
          questionsType:    [],
          newQuestion:      null
        };

        this.onChangePage   = this.onChangePage.bind(this);

        this.loadQuestionsType()
    }

    componentWillUnmount() {
        this.props.questionsListClear()
    }

    componentDidMount() {
        this.loadQuestions()
    }

    loadQuestionsType() {
        this.props.questionsTypeList().then(
            (res) => {this.setState({questionsType: this.props.questions.questionsType.data}) },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    loadQuestions() {
        this.setState({ errors: {}, isLoading: true });
        this.props.questionList().then(
            (res) => {this.setState({isLoading: !this.props.isLoaded});  },
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    onChangePage(page) {
        this.props.subjectsList(page).then(
            (res) => this.setState({ isLoading: !this.props.isLoaded}),
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
        console.log('change page to ' + page)
    }

    newQuestion(typeSlug) {
        switch(typeSlug) {
            case 'discursive':
                this.setState({newQuestion: <Discursive />});
            break;
        }
    }

    emptyNewQuestion() {
        this.setState({newQuestion: null});
    }

    render() {
        const { questions, isLoaded }       = this.props.questions;
        const { isAuthenticated, user }     = this.props.auth;

        const { questionsType, newQuestion } = this.state;
        const loading = <Loading />;

        const tableView = <TableView 
            title="Questões" 
            header={['#', 'Tipo', 'Categoria', 'Título', 'Referência']}
            columns= {['id', {'type': 'name'}, {'category': 'name'}, 'question', 'reference']}
            actions={['delete']}
            content={questions}
            onChangePage={this.onChangePage}
            />;

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
                    { newQuestion == null ? ( isLoaded ? tableView : loading ) : null }
                </div>
            </div>
        )
    }
}

Questions.propTypes = {
    questionList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
    questionList, 
    questionsListClear, 
    questionsTypeList } )(Questions);