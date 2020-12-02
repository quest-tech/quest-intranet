import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Announcements.css'
import Nav from 'react-bootstrap/Nav'



class Announcements extends React.Component {
    constructor(props) {
      super(props)
      this.switchContent = this.switchContent.bind(this);
      this.state = { isAnnouncement: true }
    }

    switchContent(selectedKey) {
      if (selectedKey === 'announcements') {
        this.setState({ isAnnouncement: true })
      } else {
        this.setState({ isAnnouncement: false })
      }

    }
  
    render() {
      let jsx;

      if (this.state.isAnnouncement === true) {
        jsx = <Nav.Item><img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" /></Nav.Item>
      } else {
        jsx = <Nav.Item><img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" /></Nav.Item>
      }

      return (
        <div>
          <Nav className="justify-content-center" variant="pills" onSelect={this.switchContent}>
            <Nav.Item>
              <Nav.Link className={this.state.isAnnouncement ? 'active' : 'myClass'} eventKey="announcements">Announcements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={this.state.isAnnouncement ? 'myClass' : 'active'} eventKey="calendars">Calendar</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-center">
            { jsx }
          </Nav>
        </div>
    )
    
    }
  }

  export default Announcements;

  //{this.state.isAnnouncement ? "active" : "myClass"}