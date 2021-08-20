import CalendarHeader from './Calendar.Header';
// import CalendarTable from './CalendarTable';

import { useCalendarState } from './Calendar.hooks';

const Calendar = () => {
  const calendarState = useCalendarState();

  const { navDate, setNavDate, selectedDate, setExpanded } = calendarState;

  return (
    <div
      className="border-2 rounded-xl"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        if (!navDate.hasSame(selectedDate, 'month')) setNavDate(selectedDate);
        setExpanded(false);
      }}
    >
      <CalendarHeader calendarState={calendarState} />
      {/* <CalendarTable calendarState={calendarState} /> */}
    </div>
  );
};

export default Calendar;
