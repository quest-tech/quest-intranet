import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

class Announcements extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
        /* <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-announcements-tab" data-toggle="pill" href="#pills-announcements" role="tab" aria-controls="pills-announcements" aria-selected="true">Announcements</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-calendar-tab" data-toggle="pill" href="#pills-calendar" role="tab" aria-controls="pills-calendar" aria-selected="false">Calendar</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-announcements" role="tabpanel" aria-labelledby="pills-announcements-tab">
                    <img src="https://lh3.googleusercontent.com/proxy/1lDRtki9T-ONyneXpthOk71nCZSPX2WPvMvUCPgE5UwEmQKbsl64ZKR0olHzqnPg036mfabd-Prjg5ms_VTdfhfwA4v6" alt="Missing Image" width="500" height="200" />
                </div>
                <div class="tab-pane fade" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">
                    <img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" />
                </div>
            </div>
        </div> */

        <div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="announcements-tab" data-toggle="tab" href="#announcements" role="tab" aria-controls="announcements" aria-selected="true">Announcements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="calendar-tab" data-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="false">Calendar</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
                <img src="https://lh3.googleusercontent.com/proxy/1lDRtki9T-ONyneXpthOk71nCZSPX2WPvMvUCPgE5UwEmQKbsl64ZKR0olHzqnPg036mfabd-Prjg5ms_VTdfhfwA4v6" alt="Missing Image" width="500" height="200" />
            </div>
            <div class="tab-pane fade" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                <img src="https://www.wiki-calendar.com/wp-content/uploads/2019/12/November-2020-Calendar.jpg" alt="Missing Image" width="1000" height="600" />
            </div>
          </div>
        </div>
    )
    
    }
  }

  export default Announcements;