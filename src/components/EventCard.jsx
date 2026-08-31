import { formatLong } from '../utils/date.js';
import { site } from '../data/site.js';
import Button from './Button.jsx';

export default function EventCard({ event, past = false }) {
  return (
    <article className={`card border-gold rounded-4 overflow-hidden ${past ? 'opacity-75' : ''}`}>
      <div className="row g-0">
        <div className="col-12 col-md-4">
          {event.cover ? (
            <img src={event.cover} alt="" className="event-cover" loading="lazy" />
          ) : (
            <div className="event-cover event-cover-empty" aria-hidden="true" />
          )}
        </div>

        <div className="col-12 col-md-8">
          <div className="card-body p-4 p-sm-5">
            <p className="heading-caps text-gold small mb-2">
              <time dateTime={event.date}>{formatLong(event.date)}</time>
              {event.time && (
                <>
                  <span aria-hidden="true"> · </span>
                  {event.time}
                </>
              )}
            </p>

            <h2 className="heading-caps text-ink fs-4 mb-2">{event.title}</h2>

            <p className="text-ink-soft mb-2">{event.venue}</p>

            {event.dressCode && (
              <p className="mb-0">
                <span className="dress-code">Dress code · {event.dressCode}</span>
              </p>
            )}

            {event.summary && <p className="text-ink-soft mt-3 mb-0">{event.summary}</p>}

            {!past && (
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button href={site.facebookGroupUrl}>Let us know you are coming</Button>
                {event.link && (
                  <Button href={event.link} variant="outline-gold">
                    {event.linkLabel ?? 'More details'}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
