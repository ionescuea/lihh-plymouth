import { site } from '../data/site.js';
import { usePageTitle } from '../utils/usePageTitle.js';
import Button from '../components/Button.jsx';

export default function Join() {
  usePageTitle('Join');

  return (
    <>
      <header className="text-center">
        <h1 className="heading-caps text-ink fs-2">Joining us</h1>
        <p className="heading-script text-gold display-5 mt-2">Come and say hello</p>
      </header>

      <section className="card border-gold rounded-4 mx-auto mt-4" style={{ maxWidth: '40rem' }}>
        <div className="card-body text-center p-4 p-sm-5">
          <p className="text-ink-soft fs-5">
            Everything happens in our Facebook group — that is where meetups are announced and
            where you can get to know everyone before you come along.
          </p>
          <div className="mt-4">
            <Button href={site.facebookGroupUrl}>Join the Facebook group</Button>
          </div>
        </div>
      </section>
    </>
  );
}
