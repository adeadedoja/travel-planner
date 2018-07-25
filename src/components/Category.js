import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import Activity from "./Activity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Category extends Component {
    title;

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            activities: props.data.activities,
            modal: false,
            title: '',
            description: ''
        }
        this.addActivity = this.addActivity.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addActivity = (event) => {
        //prevent submit
        event.preventDefault();
        //switch off modal first
        this.setState({
            modal: false
        });
        //add new activity to current activities state
        this.setState(prevState => ({
            activities: [...prevState.activities, { title: this.state.title, description: this.state.description}]
        }));
    }

    //set state value from form elements
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    //activity list
    ActivityList = (activities) => {
        const listItems = activities.map((activity) =>
            <div key={activity.title.toString()}>
                <Activity title={activity.title} />
            </div>
        );
        return (
            <div>{listItems}</div>
        );
    }

    //toggle modal
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="mb-4 mt-4">
                <div className="pr-4 pl-4"> <div className="category p-2 text-center"><b>{this.state.data.name}</b></div></div>
                <div>
                   {this.ActivityList(this.state.activities)}
                    <div className="text-center"><a className="btn btn-primary btn-sm text-white pt-2 pb-2 pr-4 pl-4 btn--red" onClick={this.toggle}><FontAwesomeIcon icon="plus" /> Add New Activity</a></div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add New Activity</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.addActivity}>
                                <FormGroup>
                                        <Input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Name of Activity" />
                                        <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange}  placeholder="Description of Activity" />
                                </FormGroup>
                                <FormGroup>
                                    <div className="text-center">
                                        <Button className="btn--red">Submit</Button>
                                    </div>
                                </FormGroup>
                            </Form>
                            
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}


export default Category;