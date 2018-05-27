import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { subjectsList }                 from '../../actions/subjectsActions';
import { setQuestion }                  from '../../actions/questionsActions';
import Validator                        from 'validator';
import TagsInput                        from 'react-tagsinput';
import                                  'react-tagsinput/react-tagsinput.css';

class Discursive extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subjects:    [],
            errors:      null,
            tags:       [],
            newQuestion: {
                type:       'discursive',
                subject:    null,
                tags:       [],
                notes:      "",
                question:   "",
                answer:     "",
                reference:  ""
            }
        };

        this.onSubmit               = this.onSubmit.bind(this);
        this.handleChanges          = this.handleChanges.bind(this);
    }

    handleChanges(e){
        const items = this.state.newQuestion;
        if(Array.isArray(e)) {
            items['tags'] = e
        } else {
            e.preventDefault();
            items[e.target.name] = e.target.value
        }
        this.setState({ newQuestion: items })
    }

    loadSubjects() {
        this.setState({ errors: {} });
        this.props.subjectsList().then(
            (res) => {this.setState({ subjects: this.props.subjects.subjects.data});},
            (err) => this.setState({ errors: err.response, isLoading: false })
        );
    }

    isValid() {
        let errors = {};
        console.log(this.state.newQuestion)
        return true;
        // if (Validator.isNull(this.state.newQuestion)) {
        //     errors.newEntity = 'Preencha a nova Entidade antes de salvar';

        // }
        // return {
        //     errors,
        //     isValid: isEmpty(errors)
        // };
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.props.setQuestion(this.state.newQuestion).then(
                (res) => {console.log('saved')},
                (err) => {console.log('Error', err)}
            );
        }
    }

    componentDidMount() {
        this.loadSubjects()
    }

    render() {
        const { subjects } = this.state;
        const { tags, notes, question, answer, reference, subject } = this.state.newQuestion;

        return (
            <div className="col-md-12 no-padding">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Adicionar Questão Discursiva</h4>
                    </div>
                    <div className="content">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label>Assunto:</label>
                                        <select name="subject" onChange={this.handleChanges} className="form-control border-input" id="sel1">
                                            <option>Selecione um assunto...</option>
                                            {subjects.map((subject, index) => <option key={index} value={subject.id}>{subject.name}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <TagsInput name="tags" id="tags" value={tags} inputProps={{placeholder: 'Tags'}} onChange={this.handleChanges} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Notas Internas (estas notas são para seu controle. Utilize como quiser.)</label>
                                        <textarea onChange={this.handleChanges} value={notes} rows="4" name="notes" id="notes" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Pergunta / Questão</label>
                                        <textarea onChange={this.handleChanges} value={question} rows="4" name="question" id="question" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Resposta</label>
                                        <textarea onChange={this.handleChanges} value={answer} rows="4" name="answer" id="answer" className="form-control border-input" ></textarea>
                                    </div>
                                </div>
                            </div>                            

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Referência (fonte)</label>
                                        <input onChange={this.handleChanges} value={reference} name="reference" id="reference" className="form-control border-input" />
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

export default connect(mapStateToProps, { subjectsList, setQuestion } )(Discursive);