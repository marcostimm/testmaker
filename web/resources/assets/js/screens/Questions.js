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
          newQuestionType:  null
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
                this.setState({newQuestionType: <Discursive />});
            break;
        }
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

        const { questionsType, newQuestionType } = this.state;
        const loading = <Loading />;

        const tableView = <TableView 
            title="Questões" 
            header={["ID","Título","Data","Entidade","Ações"]}
            data={exams} />;


        return (
            <div className="container-fluid">
                <div className="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <button type="submit" className="btn btn-success btn-fill btn-wd" data-toggle="dropdown">Nova Questão</button>
                            <ul className="dropdown-menu">
                                { this.props.questionsType ? <li><a>Carregando...</a></li> : (questionsType.map((type, i) => <li key={i}><a onClick={() => this.newQuestion(type.slug)}>{type.name}</a></li>)) }
                            </ul>
                        </li>
                    </ul>
                </div>

                { newQuestionType }
                

                <div className="row">
                    { newQuestionType == null ? (isLoaded ? tableView : loading) : null }
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