import { useEffect } from 'react';
import { site } from '../data/site.js';

/**
 * Sets the browser tab title. Separate HTML pages would get this for free; with
 * client-side routing it has to be set as each page appears.
 */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : site.name;
  }, [title]);
}
