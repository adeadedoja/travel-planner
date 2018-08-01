import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    //modal toggle
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    //delete function
    delete() {
        console.log('delete');
    }

    render() {
        return (
            //individual activity
            <div className="activity activity--white shadow p-3 mb-1 sweep-to-right">
                <Row>
                    <Col xs="9"><b>{this.state.title}</b>  </Col>
                    <Col xs="1" onClick={this.toggle}><FontAwesomeIcon icon="chevron-right" /></Col>
                    <Col xs="1" onClick={this.delete}><FontAwesomeIcon icon="times" /></Col>
                </Row>  
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody className="activity__description--wrap">
                        {this.state.description}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Activity;