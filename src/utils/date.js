const long = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const short = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const formatLong = (date) => long.format(new Date(date));
export const formatShort = (date) => short.format(new Date(date));

/** Midnight today, so an event happening later today still counts as upcoming. */
export function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** Upcoming, non-draft events, soonest first. */
export function upcomingEvents(events) {
  const today = startOfToday();
  return events
    .filter((event) => !event.draft && new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

/** Past, non-draft events, most recent first. */
export function pastEvents(events) {
  const today = startOfToday();
  return events
    .filter((event) => !event.draft && new Date(event.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
