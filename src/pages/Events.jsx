import { events } from '../data/events.js';
import { upcomingEvents, pastEvents } from '../utils/date.js';
import { usePageTitle } from '../utils/usePageTitle.js';
import EventCard from '../components/EventCard.jsx';
import Button from '../components/Button.jsx';
import { site } from '../data/site.js';

export default function Events() {
  usePageTitle('Events');

  const upcoming = upcomingEvents(events);
  const past = pastEvents(events);

  return (
    <>
      <header className="text-center">
        <h1 className="heading-caps text-ink fs-2">Events</h1>
        <p className="heading-script text-gold display-5 mt-2">What is coming up</p>
      </header>

      {upcoming.length > 0 ? (
        <div className="d-flex flex-column gap-4 mt-4">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="card border-gold rounded-4 mt-4">
          <div className="card-body text-center p-5">
            <p className="heading-script text-gold display-6 mb-2">Being planned</p>
            <p className="text-ink-soft mb-4">
              The next date is not fixed yet. Meetups are announced in the Facebook group first.
            </p>
            <Button href={site.facebookGroupUrl}>Join the group</Button>
          </div>
        </div>
      )}

      {past.length > 0 && (
        <section className="mt-5">
          <h2 className="heading-caps text-ink fs-4 text-center">Previously</h2>
          <div className="d-flex flex-column gap-4 mt-4">
            {past.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
