
// import React...
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {

    const CALENDAR_ID = '8n8u58ssric1hmm84jvkvl9d68@group.calendar.google.com'
    const API_KEY = 'AIzaSyD-UNSznwGRDtLZqizxTM1ku-9YS0DZkcQ'
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`


    console.log("got here1")
    axios.get(url).then(resp => {


      // let events = [];
      // console.log(resp);

      // events = resp.data.items.filter(event => event.start).map(event => {

      //   if (event.end) {
      //     return {
      //       title: event.summary,
      //       start: event.start.dateTime || event.start.date,
      //       end: event.end.dateTime || event.end.date,
      //       allDay: false
      //     }

      //   }
      //   else {
      //     return {
      //       title: event.summary,
      //       start: event.start.dateTime || event.start.date,
      //       allDay: false
      //     }
      //   }

      // });
      // console.log(events)


      // this.setState({
      //   events
      // }, () => { console.log(this.state) });




    }).catch(err => {

      console.log(err);

    })







  }

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          id="calendar"
          header={{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,listWeek'
          }}
          defaultDate={new Date()}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
          height={
            window.innerHeight * 0.8
          }
          handleWindowResize={true}
        />
      </div>
    );
  }
}





export default Calendar;
