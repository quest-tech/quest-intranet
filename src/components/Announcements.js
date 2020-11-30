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
        jsx = <Nav.Item><img src="https://www.thesun.co.uk/wp-content/uploads/2020/11/5299d6ba-ab23-4459-8b82-f21476c053ec.jpg" alt="Missing Image" width="1000" height="600" /></Nav.Item>
      } else {
        jsx = <Nav.Item><img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" /></Nav.Item>
      }

      return (
        <div>
          <Nav className="justify-content-center" variant="pills" onSelect={this.switchContent}>
            <Nav.Item>
              <Nav.Link eventKey="announcements">Announcements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="calendars">Calendar</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-center">
            { jsx }
          </Nav>
        </div>
        
        /* <div class='container my-container' >
            <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-announcements-tab" data-toggle="pill" href="#pills-announcements" role="tab" aria-controls="pills-announcements" aria-selected="true">Announcements</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-calendar-tab" data-toggle="pill" href="#pills-calendar" role="tab" aria-controls="pills-calendar" aria-selected="false">Calendar</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-announcements" role="tabpanel" aria-labelledby="pills-announcements-tab">
                    <img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" />
                </div>
                <div class="tab-pane fade" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">
                    <img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" />
                </div>
            </div>
        </div> */
    )
    
    }
  }

  export default Announcements;