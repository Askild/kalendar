import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import nbLocale from '@fullcalendar/core/locales/nb'

import './main.scss' // webpack must be configured to do this

const week1 = [
    {
        title: 'Planning 1',
        classNames: ['event red'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'mo' ],
            dtstart: '2019-05-06T09:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Planning 2',
        classNames: ['event red'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'mo' ],
            dtstart: '2019-05-06T10:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Planning',
        classNames: ['event blue'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'mo' ],
            dtstart: '2019-05-06T10:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Google-tid',
        classNames: ['event purple'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'we' ],
            dtstart: '2019-05-08T09:00:00',
        },
        duration: '08:00'
    },
    {
        title: 'PBR',
        classNames: ['event blue'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'th' ],
            dtstart: '2019-05-09T12:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Pre-PBR',
        classNames: ['event blue'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'fr' ],
            dtstart: '2019-05-10T10:00:00',
        },
        duration: '01:00'
    }
];

const week2 = [
    {
        title: 'Multi PBR',
        classNames: ['event blue'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'tu' ],
            dtstart: '2019-05-14T10:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'PBR',
        classNames: ['event red'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'we' ],
            dtstart: '2019-05-15T12:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Sprint review',
        classNames: ['event purple'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'th' ],
            dtstart: '2019-05-16T10:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Demo',
        classNames: ['event red'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'fr' ],
            dtstart: '2019-05-17T09:00:00',
        },
        duration: '01:00'
    },
    {
        title: 'Retro',
        classNames: ['event purple'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'fr' ],
            dtstart: '2019-05-17T10:30:00',
        },
        duration: '00:30'
    },
    {
        title: 'Demo',
        classNames: ['event blue'],
        rrule: {
            freq: 'weekly',
            interval: 2,
            byweekday: [ 'fr' ],
            dtstart: '2019-05-17T12:00:00',
        },
        duration: '01:00'
    }
];

const holyDays = [
    { title: 'Fri 17.mai', date: '2019-05-17', backgroundColor: "#D51067" },
    { title: 'Fri 17.mai', date: '2019-05-17', backgroundColor: "red", rendering: "background" },
    { title: 'Fri Himmelspretten', date: '2019-05-30', backgroundColor: "#D51067" },
    { title: 'Fri Himmelspretten', date: '2019-05-30', backgroundColor: "red", rendering: "background" },
    { title: 'Fri 2. pinsedag', date: '2019-06-10', backgroundColor: "#D51067" },
    { title: 'Fri 2. pinsedag', date: '2019-06-10', backgroundColor: "red", rendering: "background" }
];

const testEvents = [
    { title: '', date: new Date().toISOString().substr(0, 10) },
    { title: 'event 1', start: '2019-05-06T14:00:00', end: '2019-05-06T15:30:00', classNames: ['event blue'] },
    { title: 'event 1.1', start: '2019-05-07T13:37:00', end: '2019-05-07T14:42:00', classNames: ['event purple'] },

    { title: 'event 2', start: '2019-05-10T12:00:00', end: '2019-05-10T14:00:00', classNames: ['event blue'] },
    { title: 'event 3', start: '2019-05-10T12:00:00', end: '2019-05-10T14:00:00', className: ['event red'] },
    {
        title: 'Lunch',
        classNames: ['event skravert-red'],
        rrule: {
            freq: 'daily',
            // freq: 'weekly',
            //  interval: 1,
            // byweekday: [ 'tu', 'we', 'thu', 'fr' ],
            dtstart: '2019-02-01T11:00:00',
            // until: '2012-06-01',
          },
          duration: '00:30'
    }
];

const events = week1.concat(week2).concat(holyDays).concat(testEvents);


const fiveMinutesTimeout = 5 * 60 * 1000;
setTimeout(() => window.location.reload(), fiveMinutesTimeout);

export default class DemoApp extends React.Component {

  render() {
    return (
        <div className="kalendar-wrapper">
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
        events={events}
        />
        </div>
    )
  }

}
