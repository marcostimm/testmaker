import React, { Component } from 'react';
import EmptyData            from '../../screens/EmptyData';

class TableView extends Component {

    render() {
        const { title, subtitle, header, data } = this.props;

        // Empty Data
        if ( data.length == 0 ) {
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
                                    {header.map((h, i) => <th key={i} >{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((line, j) => 
                                    <tr key={j}>
                                        {line.map((column, k) => 
                                            <td key={k}>{column}</td>
                                        )}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableView;