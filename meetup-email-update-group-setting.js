document.querySelectorAll('i.icon-checkbox').forEach(el => el.click());
document.querySelector('i.icon-checkbox[data-input-id$="_rsvp_confirm"]').click();
document.querySelector('i.icon-checkbox[data-input-id$="_event_update"]').click();
window.history.back();