import React, { Component } from 'react';
import EmptyData            from '../../screens/EmptyData';
import { NavLink }          from 'react-router-dom';
import TableViewPagination  from './TableViewPagination';

class TableView extends Component {

    constructor(props) {
        super(props);

        this.onChangePage   = this.onChangePage.bind(this);
    }

    onDelete(id) {
        if (typeof this.props.onDelete === 'function') {
            this.props.onDelete(id);
        }
    }

    onChangePage(page) {
        if (typeof this.props.onChangePage === 'function') {
            this.props.onChangePage(page);
        }
    }

    render() {
        const { title, subtitle, header, body, content, autoLink, actions } = this.props;
        const numOfColumns = header.length + (actions? 1 : 0)

        // Empty Data
        if ( typeof content == 'undefined' || content.length == 0 ) {
            return (<EmptyData />)
        }

        // Render Table
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">{title}</h4>
                        <p className="category">{subtitle}</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    { header.map((title, i) => <th key={i}>{title}</th>) }
                                    { ( actions ) ? <th>Ações</th> : null}
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(content.data).map((line, j) => 
                                    <tr key={j}>
                                        { Object.keys(content.data[line]).map((column, k) => {
                                            if( typeof body !== 'undefined' && body.length > 0 ) {
                                            return (body.indexOf(column) >= 0) ? (
                                                (k <= 2 && autoLink) ?
                                                <td key={k}><NavLink to={"/subjects/" + (content.data[line]).id}>{content.data[line][column]}</NavLink></td> :
                                                <td key={k}>{content.data[line][column]}</td>
                                                ) : null
                                            } else {
                                                return <td key={k}>{content.data[line][column]}</td>
                                            }
                                        })}
                                        { ( actions ) ? (
                                            (actions.indexOf('delete') >= 0) ? <td><button onClick={() => this.onDelete((content.data[line]).id) } className="btn btn-danger btn-fill small-btn"><i className="ti-close"></i></button></td> : null
                                        ) : null }
                                    </tr>
                                )}
                            </tbody>

                            <TableViewPagination onChangePage={this.onChangePage} data={content} numOfColumns={numOfColumns} />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableView;