import { formatLong } from '../utils/date.js';
import { site } from '../data/site.js';
import Button from './Button.jsx';

export default function EventTeaser({ event }) {
  return (
    <section className="card border-gold rounded-4 shadow-sm">
      <div className="card-body p-4 p-sm-5">
        <p className="heading-caps text-gold small mb-0">Next meetup</p>

        {event ? (
          <>
            <h2 className="heading-caps text-ink fs-2 mt-3">{event.title}</h2>
            <p className="text-ink-soft fs-5 mb-0 mt-2">
              <time dateTime={event.date}>{formatLong(event.date)}</time>
              <span aria-hidden="true"> · </span>
              {event.venue}
            </p>
            {event.summary && <p className="text-ink-soft mt-3">{event.summary}</p>}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button href="/events" variant="outline-gold">
                Event details
              </Button>
              <Button href={site.facebookGroupUrl}>Join the group</Button>
            </div>
          </>
        ) : (
          <>
            <h2 className="heading-script text-gold display-5 mt-2">Being planned</h2>
            <p className="text-ink-soft fs-5 mt-3">
              The next date is not fixed yet. Meetups are announced in the Facebook group first, so
              join there to hear about it as soon as it is set.
            </p>
            <div className="mt-4">
              <Button href={site.facebookGroupUrl}>Join the group</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
