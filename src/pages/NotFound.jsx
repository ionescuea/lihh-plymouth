import Button from '../components/Button.jsx';
import { usePageTitle } from '../utils/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <div className="text-center py-5">
      <h1 className="heading-caps text-ink fs-2">Page not found</h1>
      <p className="text-ink-soft mt-3">That page does not exist, or it has moved.</p>
      <div className="mt-4">
        <Button href="/">Back to the home page</Button>
      </div>
    </div>
  );
}
