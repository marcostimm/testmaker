import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableViewPagination extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current_page: this.props.data.current_page
        };
    }

    setPage(page) {
        this.setState({current_page: page})
        if (typeof this.props.onChangePage === 'function') {
            this.props.onChangePage(page);
        }
    }

    render() {
        const { data, numOfColumns }                    = this.props;
        const { from, to, per_page, total, last_page }  = data;
        const { current_page }                          = this.state;

        if (data.total > data.per_page) {

            const pages = [];
            for(let i=1; i <= last_page; i++) {
                pages.push(<a key={i} onClick={() => this.setPage(i)} className={`btn btn-sm btn-success btn-icon btn-pagination ${current_page == i ? 'active' : null}`}>{i}</a>)
            }

            return (<tfoot>
                <tr>
                    <td className="text-center" colSpan={numOfColumns}>
                        <a onClick={() => this.setPage(1)} className="btn btn-sm btn-success btn-icon btn-pagination"><i className="ti-angle-double-left"></i></a>
                        <a onClick={() => this.setPage((current_page > 1) ? (current_page - 1) : 1)} className="btn btn-sm btn-success btn-icon btn-pagination"><i className="ti-angle-left"></i></a>
                        {pages}
                        <a onClick={() => this.setPage((current_page < last_page) ? (current_page + 1) : last_page)} className="btn btn-sm btn-success btn-icon btn-pagination"><i className="ti-angle-right"></i></a>
                        <a onClick={() => this.setPage(last_page)} className="btn btn-sm btn-success btn-icon btn-pagination"><i className="ti-angle-double-right"></i></a>
                    </td>
                </tr>
            </tfoot>);
        } else {
            return (<tfoot>
                <tr>
                    <td colSpan={numOfColumns}></td>
                </tr>
            </tfoot>);
        }
    }

}

export default TableViewPagination;