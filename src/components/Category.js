import React, { Component } from 'react';
import { Button} from 'reactstrap';
import Activity from "./Activity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Category extends Component {
    title;

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
     }
    }

    //activity list
    ActivityList = (activities) => {
        const listItems = activities.map((activity) =>
            <div key={activity.toString()}>
                <Activity title={activity.title} />
            </div>
        );
        return (
            <div>{listItems}</div>
        );
    }

    render() {
        return (
            <div className="mb-4">
                <div className="pr-4 pl-4"> <div className="category p-2 text-center"><b>{this.state.data.name}</b></div></div>
                <div>
                   {this.ActivityList(this.state.data.activities)}
                    <div class="text-center"><a class="btn btn-primary btn-sm text-white pt-2 pb-2 pr-4 pl-4 btn__red"><FontAwesomeIcon icon="plus" /> Add New Activity</a></div>
                </div>
            </div>
        );
    }
}


export default Category;