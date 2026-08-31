/**
 * Club meetups. Order does not matter — the site sorts them by date.
 *
 * To add one, copy a block and edit it:
 *   id         used in the page address, so keep it lowercase with dashes
 *   date       'YYYY-MM-DD'
 *   time       optional, e.g. '7.30pm'
 *   dressCode  optional, shown as a badge on the card
 *   link       optional web address for tickets or venue details
 *   linkLabel  wording for that link's button, defaults to 'More details'
 *   cover      optional image path under /public, e.g. '/images/moulin-rouge.jpg'
 *              leave it out and the card shows a gold gradient instead
 *   draft      true hides it from the site completely
 */

export const events = [
  {
    id: '2026-09-moulin-rouge',
    title: 'Moulin Rouge at the Theatre Royal',
    date: '2026-09-18',
    time: '7.30pm',
    venue: 'Theatre Royal Plymouth',
    dressCode: 'Moulin Rouge',
    link: 'https://theatreroyal.com/whats-on/moulin-rouge/',
    linkLabel: 'Tickets at the Theatre Royal',
    cover: '/images/events/moulin-rouge.jpg',
    summary:
      'A night at the theatre for Moulin Rouge. Dress the part — think red, black, feathers and plenty of sparkle.',
  },
];
