import { Link } from 'react-router-dom';

export default function GalleryHighlights({ photos }) {
  return (
    <section>
      <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2">
        <h2 className="mb-0">
          <span className="heading-caps text-ink fs-3">From our</span>{' '}
          <span className="heading-script text-gold display-6">nights out</span>
        </h2>
        <Link to="/gallery" className="small">
          See the full gallery
        </Link>
      </div>

      {photos.length > 0 ? (
        <div className="row g-3 g-sm-4 mt-1">
          {photos.map((photo) => (
            <div className="col-6 col-lg-3" key={photo.src}>
              <Link to="/gallery" className="gallery-link d-block overflow-hidden rounded-3">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="gallery-tile"
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="row g-3 g-sm-4 mt-1" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="gallery-placeholder" />
              </div>
            ))}
          </div>
          <p className="text-ink-soft small mt-3 mb-0">
            Photos from our meetups will appear here once members have confirmed they are happy to
            be pictured on the public site.
          </p>
        </>
      )}
    </section>
  );
}
