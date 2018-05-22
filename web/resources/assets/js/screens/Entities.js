import React, { Component }                     from 'react';
import { connect }                              from 'react-redux';
import PropTypes                                from 'prop-types';
import Validator                                from 'validator';
import isEmpty                                  from 'lodash/isEmpty';
import EmptyData                                from './EmptyData';
import TableView                                from '../components/widgets/TableView';
import Loading                                  from '../components/widgets/Loading';
import { entitiesList, 
         entitiesListClear,
         setEntity,
         entitiesReload,
         entityDelete }                         from '../actions/entitiesActions';
import { notify }                               from '../actions/alertActions';

class Entities extends Component {

    constructor(props) {
        super(props);

        this.state = {
          errors:       {},
          isLoading:    true,
          newEntity:   ''
        };

        this.onSubmit       = this.onSubmit.bind(this);
        this.onChange       = this.onChange.bind(this);
        this.onDelete       = this.onDelete.bind(this);
        this.onChangePage   = this.onChangePage.bind(this);
    }

    componentWillUnmount() {
        this.props.entitiesListClear()
    }

    componentDidMount() {
        this.loadEntities()
     }
 
     loadEntities() {
        this.setState({ errors: {}, isLoading: true });
        this.props.entitiesList().then(
            (res) => this.setState({ isLoading: !this.props.isLoaded}),
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    isValid() {
        let errors = {};

        if (Validator.isNull(this.state.newEntity)) {
            errors.newEntity = 'Preencha a nova Entidade antes de salvar';

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
            this.props.setEntity(this.state.newEntity).then(
                (res) => {
                    this.setState({newEntity: ''}); 
                    this.props.notify('success','Sucesso','Entidade adicionada com sucesso!'); 
                    this.props.entitiesReload(); 
                },
                (err) => {
                    this.setState({ errors: err.errors, isLoading: false }) 
                    this.props.notify('danger','Erro',this.state.errors); 
                }
            );
        } else {
            this.props.notify('warning','Erro','Preencha a nova Entidade antes de salvar'); 
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onDelete(sub) {
        this.props.entityDelete(sub).then(
            (res) => {
                this.props.notify('success','Sucesso','Entidade excluido com sucesso!'); 
                this.props.entitiesReload(); 
            },
            (err) => {this.setState({ errors: err.errors, isLoading: false }) }
        )
    }

    onChangePage(page) {
        this.props.entitiesList(page).then(
            (res) => this.setState({ isLoading: !this.props.isLoaded}),
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    render() {
        const { newEntity }             = this.state;
        const { entities, isLoaded }    = this.props.entities;
        const { isAuthenticated, user } = this.props.auth;

        const loading = <Loading />;
        const tableView = <TableView 
            title="Entidades" 
            header={['#','Título','Slug']}
            body={['id', 'name', 'slug']}
            content={entities}
            actions={['delete']}
            onDelete={this.onDelete}
            onChangePage={this.onChangePage}
            />;

        return (
            <div className="container-fluid">

                <div className="col-md-12 no-padding">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Adicionar Entidade</h4>
                        </div>
                        <div className="content">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Nova entidade</label>
                                            <input type="text" name="newEntity" id="newEntity" onChange={this.onChange} className="form-control border-input" placeholder="Faculdade / Escola / Instituição" value={newEntity} />
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

Entities.propTypes = {
    entitiesList: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { 
    entitiesList, 
    entitiesListClear, 
    entitiesReload, 
    setEntity, 
    notify, 
    entityDelete } )(Entities);