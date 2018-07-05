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
        const { title, subtitle, header, columns, content, autoLink, actions } = this.props;
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
                                { content.data.map((line, j) =>
                                    <tr key={j}>
                                        { columns.map((column, m) => {
                                            let col = (typeof column === 'object') ? Object.keys(column)[0] : column
                                            return <td key={m}>{getElem(line, column)}</td>;
                                        })}
                                        { ( actions ) ? (
                                            (actions.indexOf('delete') >= 0) ? <td><button onClick={() => this.onDelete(line.id) } className="btn btn-danger btn-fill small-btn"><i className="ti-close"></i></button></td> : null
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



function getElem(line, column) {
    if (typeof column === 'object') {
        var colName = Object.keys(column)[0];
        var colSubitem = Object.values(column)[0];
        return line[colName][colSubitem];
    }
    return line[column];
}