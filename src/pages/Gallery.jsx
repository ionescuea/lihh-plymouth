import { usePageTitle } from '../utils/usePageTitle.js';

export default function Gallery() {
  usePageTitle('Gallery');

  return (
    <>
      <h1 className="heading-caps text-ink fs-2">Gallery</h1>
      <p className="text-ink-soft mt-3">Coming soon.</p>
    </>
  );
}
