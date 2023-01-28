import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionGridPlugin from '@fullcalendar/interaction';

function App() {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionGridPlugin]}
        headerToolbar={{
          left:"prev next today",
          center: "title",
          right:"dayGridMonth timeGridDay"
        }}
        buttonText={{
          day:"Visualisation sur la journée",
          prev:"mois d'avant <<<",
          next: ">>> mois d'après",
          month:"Visualisation sur le mois",
          today:"aujourd'hui"
        }}
      />
    </>
  );
}

export default App;
