import React, { Component }                     from 'react';
import { AlertList, Alert, AlertContainer }     from "react-bs-notifier";
import { connect }                              from 'react-redux';
import { notify, clearNotify }                  from '../actions/alertActions';

class Notify extends Component {

    constructor(props) {
        super(props);

        this.state = {
			position:   "top-right",
            timeout:    3000,
            showIcon:   true
        };
    }

    onAlertDismissed(alert) {
		this.props.clearNotify(alert);
	}

    render() {
        const { position, timeout, showIcon } = this.state;
        const { alerts } = this.props.alerts;

        return( 
            <AlertList 
                position={position}
                showIcon={showIcon} 
                timeout={timeout}
                alerts={alerts}
                onDismiss={this.onAlertDismissed.bind(this)} 
            />
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, { notify, clearNotify } )(Notify);
