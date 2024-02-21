function updateCalendar(id) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const dateString = `${month} ${day}, ${year}`;
  document.getElementById(id).innerText = dateString;
}
setInterval(() => {
  updateCalendar('calender-1'); 
  updateCalendar('calender-2'); 
  updateCalendar('calender-3'); 
  updateCalendar('calender-4'); 
  updateCalendar('calender-5'); 
  updateCalendar('calender-6'); 
  updateCalendar('calender-7'); 
  updateCalendar('calender-8'); 
  
}, 1000);
updateCalendar('calender-1'); 
updateCalendar('calender-2'); 
updateCalendar('calender-3'); 
updateCalendar('calender-4'); 
updateCalendar('calender-5'); 
updateCalendar('calender-6'); 
updateCalendar('calender-7'); 
updateCalendar('calender-8'); 



