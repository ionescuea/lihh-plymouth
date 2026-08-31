import { site } from '../data/site.js';
import { events } from '../data/events.js';
import { albums } from '../data/gallery.js';
import { upcomingEvents } from '../utils/date.js';
import { usePageTitle } from '../utils/usePageTitle.js';
import Button from '../components/Button.jsx';
import EventTeaser from '../components/EventTeaser.jsx';
import GalleryHighlights from '../components/GalleryHighlights.jsx';

export default function Home() {
  usePageTitle();

  const nextEvent = upcomingEvents(events)[0];

  const highlights = [...albums]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .flatMap((album) => album.photos)
    .slice(0, 4);

  return (
    <>
      <section className="hero">
        {site.coverImage ? (
          <img src={site.coverImage} alt="" className="hero-image hero-drift" fetchPriority="high" />
        ) : (
          <div className="hero-fallback" />
        )}
        <div className="hero-scrim" />

        <div className="hero-content text-center text-white px-4 px-sm-5 py-5">
          <h1 className="my-4">
            <span className="heading-caps d-block fs-2 fs-sm-1">Ladies in High Heels Club</span>
            <span className="heading-script text-gold-light d-block display-2">Plymouth</span>
          </h1>
          <p className="heading-caps text-gold-light small mt-4">{site.strapline}</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Button href={site.facebookGroupUrl}>Join the group</Button>
            <Button href="/about" variant="outline-gold">
              What we&apos;re about
            </Button>
          </div>
          <p className="text-cream small mt-4 mb-0">
            {site.memberCount}+ members · {site.location}
          </p>
        </div>
      </section>

      <div className="mt-5">
        <EventTeaser event={nextEvent} />
      </div>

      <div className="mt-5">
        <GalleryHighlights photos={highlights} />
      </div>

      <section className="bg-ink text-white text-center rounded-4 px-4 px-sm-5 py-5 mt-5">
        <h2 className="heading-script text-gold-light display-4">Fancy coming along?</h2>
        <p className="text-cream mx-auto mt-3" style={{ maxWidth: '34rem' }}>
          Everything is arranged through our Facebook group. Say hello there and we will make sure
          you know where we are heading next.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <Button href={site.facebookGroupUrl}>Join the group</Button>
          <Button href="/join" variant="outline-gold">
            How joining works
          </Button>
        </div>
      </section>
    </>
  );
}
