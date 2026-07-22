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
  bangkok: {
    slug: 'bangkok',
    location: 'Bangkok',
    returnHref: '/bangkok-community-events/',
    events: [
      { date: '27-28 June 2026', title: 'Club 30 Bangkok', text: 'Bangkok nightlife and social event for music, drinks, and socialising.', image: '/assets/fct/bangkok-club-30.jpg', href: '/contact-link/?topic=Club%2030%20Bangkok' },
      { date: '14 June 2026', title: 'Bangkok Titans Community Game Day', text: 'Community sports and social day in Bangkok, suitable for locals, expats and visitors looking to meet people.', image: '/assets/fct/bangkok-titans.jpeg', href: '/contact-link/?topic=Bangkok%20Titans%20Community%20Game%20Day' },
    ],
  },
  'chiang-mai': {
    slug: 'chiang-mai',
    location: 'Chiang Mai',
    returnHref: '/chiang-mai-community-events/',
    events: [
      { date: '31 May 2026', title: 'Chiang Mai Pride Community Weekend', text: 'Community celebration weekend in Chiang Mai bringing locals, expats and visitors together.', image: '/assets/fct/hero-community.jpg', href: '/contact-link/?topic=Chiang%20Mai%20Pride%20Community%20Weekend' },
      { date: '15 June 2026', title: 'Chiang Mai Food for the Poor Community Day', text: 'Local community support day connected with practical food and welfare help in Chiang Mai.', image: '/assets/fct/chiang-mai-free-food.jpg', href: '/contact-link/?topic=Chiang%20Mai%20Food%20For%20The%20Poor%20Community%20Day' },
    ],
  },
  'hua-hin': {
    slug: 'hua-hin',
    location: 'Hua Hin',
    returnHref: '/hua-hin-community-events/',
    events: [
      { date: '5-14 June 2026', title: 'Hua Hin Red Cross Fair', text: 'Annual Red Cross and local products fair supporting relief and charity work in Hua Hin.', image: '/assets/fct/events/hua-hin-red-cross-fair.jpg', href: 'https://huahintoday.com/hua-hin-news/hua-hin-red-cross-fair-to-run-from-5-14-june/' },
      { date: '21 June 2026', title: 'Hua Hin Summer Love', text: 'Community-friendly local gathering around Hua Hin during the early summer event season.', image: '/assets/fct/hua-hin-summer-love.jpg', href: '/contact-link/?topic=Hua%20Hin%20Summer%20Love' },
    ],
  },
  'koh-phangan': {
    slug: 'koh-phangan',
    location: 'Koh Phangan',
    returnHref: '/koh-phangan-community-events/',
    events: [
      { date: '29 June 2026', title: 'Full Moon Party VIP Trip', text: 'A supported group trip from Maenam to Koh Phangan for the full moon party period.', image: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', href: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg' },
      { date: '12 July 2026', title: 'Koh Phangan Beach Social', text: 'Island beach social period for visitors looking for music, beach venues and community connections.', image: '/assets/fct/beach-party-may.jpeg', href: '/contact-link/?topic=Koh%20Phangan%20Beach%20Social' },
    ],
  },
  krabi: {
    slug: 'krabi',
    location: 'Krabi',
    returnHref: '/krabi-community-events/',
    events: [
      { date: '21 June 2026', title: 'Krabi Hospital Run 2026', text: 'Charity walk and run supporting Krabi Hospital, with 5 km and 10 km categories listed for the 2026 event.', image: '/assets/fct/events/krabi-hospital-run-current.jpg', href: 'https://www.tourismthailand.org/Events-and-Festivals/krabi-hospital-run-2026' },
      { date: '25 June 2026', title: 'BYAS at Bamboo Beach Club', text: 'Live music event listed for Bamboo Beach Club in Krabi.', image: '/assets/fct/events/krabi-byas-current.jpg', href: 'https://www.bandsintown.com/c/krabi-thailand' },
      { date: '11-12 July 2026', title: 'Ngorn Nak Trail', text: 'Trail running from the coast toward Ngorn Nak Hill, with distance options listed from short runs up to longer trail routes.', image: '/assets/fct/events/krabi-ngorn-nak-trail-current.jpg', href: 'https://worldsmarathons.com/marathon/ngorn-nak-trail' },
    ],
  },
  pattaya: {
    slug: 'pattaya',
    location: 'Pattaya',
    returnHref: '/pattaya-community-events/',
    events: [
      { date: '14-20 June 2026', title: 'Pattaya Golf Event', text: 'Local Pattaya golf community event.', image: '/assets/fct/events/pattaya-golf-event-photo.png' },
      { date: '19-21 June 2026', title: 'Pattaya Circuit Social', text: 'Motorsport-themed community social event in Pattaya.', image: '/assets/fct/events/pattaya-circuit-event-photo.png' },
      { date: '27-29 June 2026', title: 'Pattaya Pride', text: 'Community celebration and social event in Pattaya.', image: '/assets/fct/events/pattaya-pride-current.jpg', href: '/contact-link/?topic=Pattaya%20Pride' },
    ],
  },
  phuket: {
    slug: 'phuket',
    location: 'Phuket',
    returnHref: '/phuket-community-events/',
    events: [
      { date: '19 June 2026', title: 'Rafael Cerato at Illuzion Phuket', text: 'Underground music night at Illuzion Phuket in Patong.', image: '/assets/fct/phuket-music-stage.jpg', href: 'https://www.phuket.net/events/2026-06/' },
      { date: '26 June 2026', title: 'Ministry of Sound at Illuzion Phuket', text: 'Music and nightlife event at Illuzion Phuket in Patong.', image: '/assets/fct/event-rock-concert.jpg', href: 'https://www.phuket.net/events/2026-06/' },
      { date: '29 June 2026', title: 'Phuket Pride Pool Social', text: 'Community pool and social event in Phuket with a pride and friendship theme.', image: '/assets/fct/phuket-pride-pool.jpeg', href: '/contact-link/?topic=Phuket%20Pride%20Pool%20Social' },
    ],
  },
};
