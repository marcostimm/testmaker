import React, { Component }                     from 'react';
import { connect }                              from 'react-redux';
import PropTypes                                from 'prop-types';
import Validator                                from 'validator';
import isEmpty                                  from 'lodash/isEmpty';
import EmptyData                                from './EmptyData';
import TableView                                from '../components/widgets/TableView';
import Loading                                  from '../components/widgets/Loading';
import { subjectsList, 
         subjectsListClear,
         setSubject,
         subjectsReload,
         subjectDelete }                        from '../actions/subjectsActions';
import { notify }                               from '../actions/alertActions';

class Subjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
          errors:       {},
          isLoading:    true,
          newSubject:   ''
        };

        this.onSubmit       = this.onSubmit.bind(this);
        this.onChange       = this.onChange.bind(this);
        this.onDelete       = this.onDelete.bind(this);
        this.onChangePage   = this.onChangePage.bind(this);
    }

    componentWillUnmount() {
        this.props.subjectsListClear()
    }

    componentDidMount() {
        this.loadSubjects()
     }
 
    loadSubjects() {
        this.setState({ errors: {}, isLoading: true });
        this.props.subjectsList().then(
            (res) => this.setState({ isLoading: !this.props.isLoaded}),
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    isValid() {
        let errors = {};

        if (Validator.isNull(this.state.newSubject)) {
            errors.newSubject = 'Preencha o novo assunto antes de salvar';

        }
        return {
            errors,
            isValid: isEmpty(errors)
        };
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid().isValid) {
            this.setState({ errors: {}, isLoading: true });
            this.props.setSubject(this.state.newSubject).then(
                (res) => {
                    this.setState({newSubject: ''}); 
                    this.props.notify('success','Sucesso','Assunto adicionado com sucesso!'); 
                    this.props.subjectsReload(); 
                },
                (err) => {this.setState({ errors: err.response.data.errors, isLoading: false }) }
            );
        } else {
            this.props.notify('warning','Erro','Preencha o novo Assunto antes de salvar'); 
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onDelete(sub) {
        this.props.subjectDelete(sub).then(
            (res) => {
                this.props.notify('success','Sucesso','Assunto excluido com sucesso!'); 
                this.props.subjectsReload(); 
            },
            (err) => {this.setState({ errors: err.response.data.errors, isLoading: false }) }
        )
    }

    onChangePage(page) {
        this.props.subjectsList(page).then(
            (res) => this.setState({ isLoading: !this.props.isLoaded}),
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
        console.log('change page to ' + page)
    }

    render() {
        const { newSubject }            = this.state;
        const { subjects, isLoaded }    = this.props.subjects;
        const { isAuthenticated, user } = this.props.auth;

        const loading = <Loading />;
        const tableView = <TableView 
            title="Assuntos" 
            header={['#','Título','Slug']}
            body={['id', 'name', 'slug']}
            content={subjects}
            actions={['delete']}
            onDelete={this.onDelete}
            onChangePage={this.onChangePage}
            />;

        return (
            <div className="container-fluid">

                <div className="col-md-12 no-padding">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Adicionar Assunto</h4>
                        </div>
                        <div className="content">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Novo assunto</label>
                                            <input type="text" name="newSubject" id="newSubject" onChange={this.onChange} className="form-control border-input" placeholder="Assunto" value={newSubject} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-left" style={{marginTop: '26px'}}>
                                            <button type="submit" className="btn btn-info btn-fill btn-wd">Salvar</button>
                                    </div>
                                </div>

                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    { isLoaded ? tableView : loading }
                </div>
            </div>
        )
    }
}

Subjects.propTypes = {
    subjectsList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
    subjectsList, 
    subjectsListClear, 
    subjectsReload, 
    setSubject, 
    notify, 
    subjectDelete } )(Subjects);