import { usePageTitle } from '../utils/usePageTitle.js';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <h1 className="heading-caps text-ink fs-2">About the club</h1>
      <p className="text-ink-soft mt-3">Coming soon.</p>
    </>
  );
}
