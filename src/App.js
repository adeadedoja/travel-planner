import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Category from "./components/Category";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faChevronRight, faTimes)

const data = [
  {
  "name":  "Sport",
  "activities": [
      {
        "title": "Play Football",
        "description": "I cannot wait to play soccer at Old Trafford"
      },
      {
        "title": "Watch the United vs Barcelona Game",
        "description": "2I cannot wait to play soccer at Old Trafford"
      },
    ]
  },
  {
  "name":  "Fun",
  "activities": [
      {
        "title": "Play Football",
        "description": "I cannot wait to play soccer at Old Trafford"
      },
      {
        "title": "Watch the United vs Barcelona Game",
        "description": "2I cannot wait to play soccer at Old Trafford"
      },
    ]
  },
  {
  "name":  "Action",
  "activities": [
      {
        "title": "Play Football",
        "description": "I cannot wait to play soccer at Old Trafford"
      },
      {
        "title": "Watch the United vs Barcelona Game",
        "description": "2I cannot wait to play soccer at Old Trafford"
      },
    ]
  },
  {
  "name":  "Chill and Relax",
  "activities": [
      {
        "title": "Play Football",
        "description": "I cannot wait to play soccer at Old Trafford"
      },
      {
        "title": "Watch the United vs Barcelona Game",
        "description": "2I cannot wait to play soccer at Old Trafford"
      },
    ]
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }
  //categoryList
  CategoryList = (categories) => {
    const listItems = categories.map((category) =>
      <Col md="4" key={category.name.toString()}>
          <Category data={category}/>
      </Col>
    );
    return (
      <Row>{listItems}</Row>
    );
  }



  render() {
    return (
      <Container className="maincontainer">
          <Row>
              <Col>
                <img src="undraw_departing_lsgy.svg" className="img-fluid" />
              </Col>
              <Col md="9">
                <p className="text-white mb-0 pb-0 pt-4"><small>Hi Dami,</small></p>
                <h1 className="display-4 mt-0 pt-0 b6 text-white">What you doing in barcelona?</h1>
              </Col>
            </Row>
            {this.CategoryList(this.state.data)}
      </Container>
    );
  }
}

export default App;
