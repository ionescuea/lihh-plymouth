import { site } from '../data/site.js';
import { albums } from '../data/gallery.js';
import { formatShort } from '../utils/date.js';
import { usePageTitle } from '../utils/usePageTitle.js';

export default function Gallery() {
  usePageTitle('Gallery');

  const sorted = [...albums].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <header className="text-center">
        <h1 className="heading-caps text-ink fs-2">Gallery</h1>
        <p className="heading-script text-gold display-5 mt-2">Our get-togethers</p>
      </header>

      <div className="row g-4 mt-1">
        {sorted.map((album) => (
          <div className="col-12 col-sm-6 col-lg-4" key={album.id}>
            <article className="card border-gold rounded-4 h-100 overflow-hidden">
              {album.photos.length > 0 ? (
                <img
                  src={album.photos[0].src}
                  alt={album.photos[0].alt}
                  loading="lazy"
                  className="album-cover"
                />
              ) : (
                <div className="album-cover album-cover-empty" aria-hidden="true" />
              )}

              <div className="card-body p-4">
                <h2 className="heading-caps text-ink fs-6 mb-1">{album.title}</h2>
                <p className="text-ink-soft small mb-0">
                  <time dateTime={album.date}>{formatShort(album.date)}</time>
                  <span aria-hidden="true"> · </span>
                  {album.photos.length > 0
                    ? `${album.photos.length} photo${album.photos.length === 1 ? '' : 's'}`
                    : 'Photos coming soon'}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      <aside className="card border-gold rounded-4 mt-5">
        <div className="card-body p-4">
          <h2 className="heading-caps text-gold fs-6 mb-2">Photos of you</h2>
          <p className="text-ink-soft mb-0">
            We only publish photos here when members are happy to appear on the public site. If you
            would like a photo of you removed, message an admin in the{' '}
            <a href={site.facebookGroupUrl} target="_blank" rel="noopener">
              Facebook group
            </a>{' '}
            or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>, and we will
            take it down — no explanation needed.
          </p>
        </div>
      </aside>
    </>
  );
}
