import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            collapse: false
        }
    }
    render() {
        return (
            //individual activity
            <div className="activity activity--white shadow p-3 mb-1 sweep-to-right">
                <Row>
                    <Col xs="10"><b>{this.state.title}</b>  </Col>
                    <Col xs="2"><FontAwesomeIcon icon="chevron-right" /></Col>
                </Row>  
            </div>
        );
    }
}

export default Activity;