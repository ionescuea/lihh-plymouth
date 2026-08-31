import { site } from '../data/site.js';
import { usePageTitle } from '../utils/usePageTitle.js';

export default function Gallery() {
  usePageTitle('Gallery');

  return (
    <>
      <h1 className="heading-caps text-ink fs-2">Gallery</h1>
      <p className="text-ink-soft mt-3">Coming soon.</p>

      <aside className="card border-gold rounded-4 mt-5">
        <div className="card-body p-4">
          <h2 className="heading-caps text-gold fs-6 mb-2">Photos of you</h2>
          <p className="text-ink-soft mb-0">
            We only publish photos here when members are happy to appear on the public site. If you
            would like a photo of you removed, email{' '}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we will take it down
            — no explanation needed.
          </p>
        </div>
      </aside>
    </>
  );
}
