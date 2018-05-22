import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { subjectsList }         from '../../actions/subjectsActions';
import TagsInput                from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

class Discursive extends Component {

    constructor(props) {
        super(props);

        this.state = {
          subjects:    [],
          errors:      null,
          tags:        [],

        };

        this.handleTagChange       = this.handleTagChange.bind(this);
    }

    handleTagChange(tags) {
        this.setState({ tags: tags })
    }

    loadSubjects() {
        this.setState({ errors: {} });
        this.props.subjectsList().then(
            (res) => {this.setState({ subjects: this.props.subjects.subjects.data});},
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    componentDidMount() {
        this.loadSubjects()
    }

    render() {
        const { subjects, tags } = this.state;

        return (
            <div className="col-md-12 no-padding">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Adicionar Questão Discursiva</h4>
                    </div>
                    <div className="content">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Assunto:</label>
                                        <select className="form-control" id="sel1">
                                            <option>Selecione um assunto...</option>
                                            {subjects.map((subject, index) => <option key={index}>{subject.name}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <TagsInput value={tags} inputProps={{placeholder: 'Tags'}} onChange={this.handleTagChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Notas Internas (estas notas são para seu controle. Utilize como quiser.)</label>
                                        <textarea rows="4" name="notes" id="notes" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Pergunta / Questão</label>
                                        <textarea rows="4" name="question" id="question" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Resposta</label>
                                        <textarea rows="4" name="answer" id="answer" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>                            

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Referência (fonte)</label>
                                        <input name="reference" id="reference" className="form-control border-input" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 text-left" style={{marginTop: '26px'}}>
                                    <button type="submit" className="btn btn-info btn-fill btn-wd">Salvar</button>
                                </div>
                            </div>

                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { subjectsList } )(Discursive);