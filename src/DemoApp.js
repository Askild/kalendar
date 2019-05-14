import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import nbLocale from '@fullcalendar/core/locales/nb'

import './main.scss' // webpack must be configured to do this

import {events} from './events';

const fiveMinutesTimeout = 5 * 60 * 1000;
setTimeout(() => window.location.reload(), fiveMinutesTimeout);
const postText = text => {

    fetch('/api/somethingelse', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(JSON.parse(text)), // body data type must match "Content-Type" header
    }).then(res => window.alert(res.status));
}

const Editor = (props) => {
    const [text, setText] = useState(JSON.stringify(props.events, null, 4));
    return <div>
        <button onClick={() => postText(text)}>Send</button>
        <textarea rows={50} cols={150} style={{height: 'auto'}} onChange={evt => setText(evt.target.value)} value={text}></textarea>
    </div>;
}

export default class DemoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: events,
            showEditor: false
        };
    }
    refreshEvents = () => {
        fetch('/api/something').then(res => res.json()).then(json => {
            console.log({json})
            this.setState({
                events: json
            })
        });
    }
    componentDidMount() {
        setInterval(this.refreshEvents, 3 * 60 * 1000);
        this.refreshEvents();
    }

    toggleEditMode = () => {
        this.setState({
            showEditor: !this.state.showEditor
        });
    }

    render() {
        return (
            <div className="kalendar-wrapper">
                {this.state.showEditor && <Editor events={this.state.events} />}
                <FullCalendar
                    defaultView="timeGridWeek"
                    plugins={[ timeGridPlugin, rrulePlugin ]}
                    weekends={false}
                    minTime="09:00:00"
                    maxTime="16:00:00"
                    locale={nbLocale}
                    weekNumbers={true}
                    nowIndicator={true}
                    contentHeight={750}
                    slotDuration="00:30:00"
                    slotLabelInterval="01:00:00"
                    events={this.state.events}
                    />

                <button onClick={this.toggleEditMode}>Edit</button>
            </div>
        )
    }
}
