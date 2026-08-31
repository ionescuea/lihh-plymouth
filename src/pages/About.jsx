import { site } from '../data/site.js';
import { usePageTitle } from '../utils/usePageTitle.js';
import Button from '../components/Button.jsx';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <header className="text-center">
        <h1 className="heading-caps text-ink fs-2">About the club</h1>
        <p className="heading-script text-gold display-5 mt-2">Who we are</p>
      </header>

      <section className="mx-auto mt-4 text-center" style={{ maxWidth: '44rem' }}>
        <p className="fs-5 text-ink-soft">
          The members of this group will share information, support and empower one another to make
          positive changes in their lives and to build happier, healthy families and futures.
        </p>
      </section>

      <figure className="card border-gold rounded-4 mx-auto mt-5" style={{ maxWidth: '40rem' }}>
        <blockquote className="card-body text-center p-4 p-sm-5 mb-0">
          <p className="heading-script text-gold display-6 mb-0">
            “There is no limit to what we, as women, can accomplish”
          </p>
          <footer className="heading-caps text-ink-soft small mt-3">Michelle Obama</footer>
        </blockquote>
      </figure>

      <section className="row g-4 mt-4 text-center">
        <div className="col-12 col-sm-4">
          <p className="heading-script text-gold display-6 mb-0">{site.memberCount}+</p>
          <p className="heading-caps text-ink-soft small mb-0">Members</p>
        </div>
        <div className="col-12 col-sm-4">
          <p className="heading-script text-gold display-6 mb-0">{site.founded}</p>
          <p className="heading-caps text-ink-soft small mb-0">Founded</p>
        </div>
        <div className="col-12 col-sm-4">
          <p className="heading-script text-gold display-6 mb-0">Plymouth</p>
          <p className="heading-caps text-ink-soft small mb-0">Where we meet</p>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-center">
          <span className="heading-caps text-ink fs-3">What a</span>{' '}
          <span className="heading-script text-gold display-6">meetup is like</span>
        </h2>

        <p className="text-ink-soft mx-auto mt-3 text-center" style={{ maxWidth: '42rem' }}>
          We get together most months, somewhere new each time — a restaurant, a bar, or somewhere
          worth spending an afternoon. Some are evenings out, some are days or half days. Every
          meetup has its own dress theme, so there is always a good excuse to make an effort. Expect{' '}
          {site.typicalAttendance} ladies along: big enough for a proper buzz, small enough to
          actually talk to people.
        </p>

        <div className="row g-4 mt-1">
          <div className="col-12 col-md-4">
            <div className="card border-gold rounded-4 h-100">
              <div className="card-body p-4">
                <h3 className="heading-caps text-gold fs-6">Somewhere new</h3>
                <p className="text-ink-soft mb-0 mt-2">
                  A different venue or restaurant each month, so we all get to try places we might
                  not have chosen on our own.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-gold rounded-4 h-100">
              <div className="card-body p-4">
                <h3 className="heading-caps text-gold fs-6">A dress theme</h3>
                <p className="text-ink-soft mb-0 mt-2">
                  Every meeting has one — the colours of summer, for instance. Join in as much or as
                  little as you fancy.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-gold rounded-4 h-100">
              <div className="card-body p-4">
                <h3 className="heading-caps text-gold fs-6">Good company</h3>
                <p className="text-ink-soft mb-0 mt-2">
                  We are here to socialise, meet new people, share ideas, empower each other and
                  have fun. Come on your own — most of us did.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white text-center rounded-4 px-4 px-sm-5 py-5 mt-5">
        <h2 className="heading-script text-gold-light display-5">Come and meet us</h2>
        <p className="text-cream mx-auto mt-3" style={{ maxWidth: '32rem' }}>
          Everything is arranged through our Facebook group, and new members are always welcome.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <Button href={site.facebookGroupUrl}>Join the group</Button>
          <Button href="/events" variant="outline-gold">
            See what is coming up
          </Button>
        </div>
      </section>
    </>
  );
}
