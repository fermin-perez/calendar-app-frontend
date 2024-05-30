export const getMessages = () => {
  return {
    allDay: "All Day",
    previous: "<",
    next: ">",
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
    agenda: "Diary",
    date: "Date",
    time: "Hour",
    event: "Event",
    noEventsInRange: "There are no events in this range",
    showMore: (total) => `+ View more (${total})`,
  };
};
