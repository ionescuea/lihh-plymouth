/**
 * Photo albums, one block per event.
 *
 * Drop the photos into public/images/<album-id>/ then list them here. Every photo
 * needs an `alt` description — it is read aloud by screen readers and shown if the
 * image fails to load. The first photo in the list becomes the album cover.
 *
 * The covers below are deliberately blurred, so the colour and mood of the evening
 * show without anyone being identifiable. Once members have agreed to appear, add
 * the real photographs here and the blurred covers can go.
 *
 * To make another blurred cover:
 *   node scripts/make-cover.mjs --out public/images/<album>/cover.jpg \
 *     --title "Event title" --photo <the original photo>
 */

export const albums = [
  {
    id: '2026-08-colours-of-summer',
    title: 'The Colours of the Summer',
    date: '2026-08-21',
    photos: [
      {
        src: '/images/2026-08-colours-of-summer/cover.jpg',
        alt: 'A blurred photograph of the group in summer colours, with the event name across it',
      },
    ],
  },
  {
    id: '2026-06-summer-cruise',
    title: 'Summer Cruise & Lunch',
    date: '2026-06-13',
    photos: [
      {
        src: '/images/2026-06-summer-cruise/cover.jpg',
        alt: 'A blurred photograph from the summer cruise, with the event name across it',
      },
    ],
  },
];
