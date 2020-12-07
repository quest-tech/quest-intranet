import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Calendar.css'

var script = document.createElement('script'); 
script.src = '//code.jquery.com/jquery-1.11.0.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script); 

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            roomTime: ''
        }
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateRoomTime = this.updateRoomTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var script = document.createElement('script'); 

        script.src = "https://apis.google.com/js/api.js"

        document.getElementById('calendarDiv').appendChild(script);
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
        console.log(this.state.email)
    }

    updateRoomTime(event) {
        this.setState({
            roomTime: event.target.value
        })
        console.log(this.state.roomTime)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        var gapi = window.gapi
        var CLIENT_ID = ""
        var API_KEY = ""
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        var SCOPES = "https://www.googleapis.com/auth/calendar.events"

        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                
                var event = {
                    'summary': 'Awesome Event!',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'Really great refreshments',
                    'start': {
                        'dateTime': '2020-06-28T09:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                        'dateTime': '2020-06-28T17:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                        {'email': 'lpage@example.com'},
                        {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            {'method': 'email', 'minutes': 24 * 60},
                            {'method': 'popup', 'minutes': 10}
                        ]
                    }
                }

                var request = gapi.client.calendar.events.insert({
                    'calendarId': 'c_2i1q13990mog6vo03vnama37nc@group.calendar.google.com',
                    'resource': event,
                })

                request.execute(event => {
                    console.log(event)
                })
                

                /*
                    Uncomment the following block to get events
                */
                /*
                // get events
                gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
                }).then(response => {
                const events = response.result.items
                console.log('EVENTS: ', events)
                })
                */
            

            })
        })
    }

    render() {
        return (
            <div id="calendarDiv">
                <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=c_2i1q13990mog6vo03vnama37nc%40group.calendar.google.com&amp;ctz=America%2FNew_York" style={ { border: "0"} } scrolling="no" width="800" height="600" frameborder="0"></iframe>
                <h1>Room Scheduling</h1>
                <Form onSubmit={ (event) => this.handleSubmit(event) } >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" onChange={this.updateName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.updateEmail} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Room Time</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." onChange={this.updateRoomTime}>
                            <option>Choose...</option>
                            <option>8:00-10:00</option>
                            <option>10:00-12:00</option>
                            <option>12:00-2:00</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <div id="wrapper">
                        <Button className="prev" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Calendar;