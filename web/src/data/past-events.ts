import type { RegionalEvent } from './regional-events';

export type PastEventsPage = {
  slug: string;
  location: string;
  returnHref: string;
  events: RegionalEvent[];
};

export const pastEvents: Record<string, PastEventsPage> = {
  samui: {
    slug: 'samui',
    location: 'Koh Samui',
    returnHref: '/community-events/',
    events: [
      { title: 'Beach Craft Market', date: '30 May 2026', text: 'Local makers, crafts and community connections at Nature Bar, Maenam Beach.', image: '/assets/fct/beach-craft-market-nature-bar-maenam-20260530.jpeg' },
      { title: 'Beach Party', date: '30 May 2026', text: 'A relaxed community afternoon by the sea at Nature Bar, Maenam Beach.', image: '/assets/fct/beach-party-may.jpeg' },
      { title: 'Business Networking Lunch', date: '29 May 2026', text: 'The weekly First Contact business lunch at Nature Bar, Maenam Beach.', image: '/assets/fct/friday-business-networking-lunch.png' },
      { title: 'AI Community Meeting', date: '27 May 2026', text: 'Practical conversations about AI, local projects and business ideas.', image: '/assets/fct/ai-community-meeting.jpeg' },
      { title: 'Paint & Sip', date: '3 May 2026', text: 'A creative community afternoon at Nature Bar.', image: '/assets/fct/past-event-paint-and-sip-3-may-4.jpeg' },
      { title: 'Koh Samui ANZAC Day', date: '25 April 2026', text: 'A community beach commemoration at Nature Bar.', image: '/assets/fct/past-event-anzac-day-25-april.jpeg' },
      { title: 'Songkran Family Beach Party', date: '13 April 2026', text: 'A family Songkran celebration on Maenam Beach.', image: '/assets/fct/past-event-songkran-family-beach-party-13-april.jpeg' },
      { title: 'Full Moon Party VIP Trip', date: '2 April 2026', text: 'A supported group trip from Maenam to Koh Phangan.', image: '/assets/fct/past-event-full-moon-party-vip-trip-2-april.jpeg' },
      { title: 'Beach Day Party', date: '29 March 2026', text: 'A day of music, food and community on Maenam Beach.', image: '/assets/fct/past-event-beach-day-party-maenam-29-march.jpeg' },
      { title: 'Nature Bar Day Party', date: 'Community event', text: 'Good tunes and local connections beside the beach.', image: '/assets/fct/past-event-nature-bar-day-party.jpeg' },
      { title: 'Speed Dating Night', date: 'Community event', text: 'A relaxed social evening at Nature Bar, Maenam Beach.', image: '/assets/fct/past-event-speed-dating-night.jpeg' },
      { title: "Samui's Got No Talent", date: 'Community event', text: 'A community entertainment night for locals and visitors.', image: '/assets/fct/past-event-samuis-got-no-talent-4.jpeg' },
      { title: 'Pub Quiz Night', date: 'Community event', text: "A friendly quiz night at Magical Garden, Fisherman's Village.", image: '/assets/fct/past-event-pub-quiz-night-early.jpeg' },
    ],
  },
  bangkok: { slug: 'bangkok', location: 'Bangkok', returnHref: '/bangkok-community-events/', events: [] },
  'chiang-mai': { slug: 'chiang-mai', location: 'Chiang Mai', returnHref: '/chiang-mai-community-events/', events: [] },
  'hua-hin': {
    slug: 'hua-hin',
    location: 'Hua Hin',
    returnHref: '/hua-hin-community-events/',
    events: [
      { date: '5-14 June 2026', title: 'Hua Hin Red Cross Fair', text: 'Annual Red Cross and local products fair supporting relief and charity work in Hua Hin.', image: '/assets/fct/events/hua-hin-red-cross-fair.jpg', href: 'https://huahintoday.com/hua-hin-news/hua-hin-red-cross-fair-to-run-from-5-14-june/' },
    ],
  },
  'koh-phangan': { slug: 'koh-phangan', location: 'Koh Phangan', returnHref: '/koh-phangan-community-events/', events: [] },
  krabi: { slug: 'krabi', location: 'Krabi', returnHref: '/krabi-community-events/', events: [] },
  pattaya: {
    slug: 'pattaya',
    location: 'Pattaya',
    returnHref: '/pattaya-community-events/',
    events: [
      { date: '14-20 June 2026', title: 'Pattaya Golf Event', text: 'Local Pattaya golf community event.', image: '/assets/fct/events/pattaya-golf-past.png' },
      { date: '19-21 June 2026', title: 'Pattaya Circuit Social', text: 'Motorsport-themed community social event in Pattaya.', image: '/assets/fct/events/pattaya-circuit-past.png' },
    ],
  },
  phuket: { slug: 'phuket', location: 'Phuket', returnHref: '/phuket-community-events/', events: [] },
};
