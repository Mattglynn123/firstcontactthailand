export type RegionalEvent = {
  date: string;
  title: string;
  text: string;
  image: string;
  href?: string;
};

export type RegionalEventsPage = {
  slug: string;
  location: string;
  archiveSlug: string;
  intro: string;
  emptyTitle?: string;
  events: RegionalEvent[];
};

export const regionalEvents: Record<string, RegionalEventsPage> = {
  'community-events': {
    slug: 'community-events',
    location: 'Samui',
    archiveSlug: 'samui',
    intro: 'Check out our community events on Samui.',
    events: [
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Ai Meet Up', text: '4:00 pm - 6:00 pm. Weekly meetup at Nature Bar, Maenam.', image: '/assets/fct/ai-community-meeting.jpeg', href: '/contact-link/?topic=AI%20Meet%20Up' },
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Crypto Community Gathering', text: '4:00 pm - 6:00 pm. Weekly community meetup at Nature Bar, Maenam.', image: '/assets/fct/past-event-crypto-community-gathering.jpeg', href: '/contact-link/?topic=Crypto%20Community%20Gathering' },
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Free Beach Fitness Meet Ups', text: 'Wednesday mornings. Beach exercise for locals, expats, and visitors who want to stay active and meet people.', image: '/assets/fct/beach-1-scaled.jpg', href: '/contact-link/?topic=Free%20Beach%20Fitness%20Meet%20Ups' },
      { date: 'Every Thursday - next session: Thursday 23 July', title: 'Pub Quiz', text: '7:00 pm - 9:45 pm. Weekly Thursday quiz at Nature Bar, Maenam.', image: '/assets/fct/pub-quiz-nature-bar.jpeg', href: '/contact-link/?topic=Pub%20Quiz' },
      { date: 'Every Friday - next session: Friday 24 July', title: 'Business Lunch', text: '3:00 pm - 5:00 pm. Weekly Friday business lunch at Nature Bar, Maenam.', image: '/assets/fct/friday-business-networking-lunch.png', href: '/contact-link/?topic=Business%20Lunch' },
      { date: 'Every Saturday - next session: Saturday 25 July', title: 'Beach Walk', text: '4:00 pm - 6:00 pm. Weekly Saturday beach walk.', image: '/assets/fct/beach-walk-community.jpg', href: '/contact-link/?topic=Beach%20Walk' },
      { date: 'Monday 29th June 2026', title: 'Full Moon Party VIP Trip', text: 'VIP Full Moon Party trip by speedboat to Koh Phangan, with welcome drink at Nature Bar, Maenam, hotel pick up and drop off, and return departure around 1:30 am.', image: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', href: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg' },
    ],
  },
  'bangkok-community-events': {
    slug: 'bangkok-community-events',
    location: 'Bangkok',
    archiveSlug: 'bangkok',
    intro: 'Current community, music and social events in Bangkok.',
    events: [
      { date: '25-26 July 2026', title: 'Monster Music Festival', text: 'A major Bangkok music event with live performances and festival atmosphere.', image: '/assets/fct/event-rock-concert.jpg', href: '/contact-link/?topic=Monster%20Music%20Festival' },
      { date: '12 August 2026', title: 'Bangkok Half Marathon', text: 'Community running event around Bangkok with half marathon and shorter-distance participation options.', image: '/assets/fct/event-business-lunch.png', href: '/contact-link/?topic=Bangkok%20Half%20Marathon' },
    ],
  },
  'chiang-mai-community-events': {
    slug: 'chiang-mai-community-events',
    location: 'Chiang Mai',
    archiveSlug: 'chiang-mai',
    intro: 'Current community, sport and local culture events in Chiang Mai.',
    events: [
      { date: '29 August 2026', title: 'Chiang Mai Night Run', text: 'Evening community run in Chiang Mai with social, fitness and local city atmosphere.', image: '/assets/fct/property-areas/chiang-mai.jpg', href: '/contact-link/?topic=Chiang%20Mai%20Night%20Run' },
      { date: '20 December 2026', title: 'Chiang Mai Marathon', text: 'Major Chiang Mai running weekend that brings local and visiting runners together in the city.', image: '/assets/fct/chiang-mai-water-safety.jpg', href: '/contact-link/?topic=Chiang%20Mai%20Marathon' },
    ],
  },
  'hua-hin-community-events': {
    slug: 'hua-hin-community-events',
    location: 'Hua Hin',
    archiveSlug: 'hua-hin',
    intro: 'Current community and charity events in Hua Hin.',
    events: [
      { date: '9 August 2026', title: 'Hua Hin Family Market Day', text: 'Community-friendly market day with local food, shopping and family activities around Hua Hin.', image: '/assets/fct/hua-hin-summer-love.jpg', href: '/contact-link/?topic=Hua%20Hin%20Family%20Market%20Day' },
      { date: '27 November 2026', title: 'Rotary Royal Hua Hin Charity Golf Classic', text: 'Annual amateur charity golf classic supporting Rotary Royal Hua Hin community causes.', image: '/assets/fct/hua-hin-charity-golf-classic-20261127.jpeg', href: '/contact-link/?topic=Rotary%20Royal%20Hua%20Hin%20Charity%20Golf%20Classic' },
    ],
  },
  'koh-phangan-community-events': {
    slug: 'koh-phangan-community-events',
    location: 'Koh Phangan',
    archiveSlug: 'koh-phangan',
    intro: 'Current island events and community-friendly activities on Koh Phangan.',
    events: [
      { date: '31 July 2026', title: 'Full Moon Party', text: 'Koh Phangan full moon beach party period, with travellers usually planning transport and return trips in advance.', image: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', href: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg' },
      { date: '5-6 August 2026', title: 'Halfmoon Festival', text: 'Koh Phangan music and social festival event period for visitors looking for island nightlife and transport support.', image: '/assets/fct/1-scaled.jpg', href: '/contact-link/?topic=Halfmoon%20Festival%20Koh%20Phangan' },
    ],
  },
  'krabi-community-events': {
    slug: 'krabi-community-events',
    location: 'Krabi',
    archiveSlug: 'krabi',
    intro: 'Upcoming public events and community-friendly activities around Krabi, checked from current event listings.',
    events: [
      { date: '12 August 2026', title: 'Krabi Family Beach Day', text: 'Community-friendly beach day idea for families, visitors and locals around Krabi during the August holiday period.', image: '/assets/fct/krabi-bamboo-beach-club.jpg', href: '/contact-link/?topic=Krabi%20Family%20Beach%20Day' },
      { date: '10-18 October 2026', title: 'Krabi Vegetarian Festival', text: 'Southern Thailand vegetarian festival period, with local food, shrine traditions and community activity around the province.', image: '/assets/fct/home-rotator-temple.jpg', href: '/contact-link/?topic=Krabi%20Vegetarian%20Festival' },
    ],
  },
  'pattaya-community-events': {
    slug: 'pattaya-community-events',
    location: 'Pattaya',
    archiveSlug: 'pattaya',
    intro: 'Current community, sport and social events in Pattaya.',
    events: [
      { date: '25-26 July 2026', title: 'Pattaya Marathon', text: 'Major community running weekend in Pattaya with runners, visitors and local supporters gathering along the coast.', image: '/assets/fct/pattaya-golf.png', href: '/contact-link/?topic=Pattaya%20Marathon' },
      { date: '11-13 December 2026', title: 'Tomorrowland Pattaya', text: 'Tomorrowland Thailand comes to Wisdom Valley near Pattaya for a major electronic music festival experience.', image: '/assets/fct/events/pattaya-tomorrowland-current.webp', href: '/contact-link/?topic=Tomorrowland%20Pattaya' },
    ],
  },
  'phuket-community-events': {
    slug: 'phuket-community-events',
    location: 'Phuket',
    archiveSlug: 'phuket',
    intro: 'Current music, sport, cultural and community events in Phuket.',
    events: [
      { date: '2 August 2026', title: 'Phuket Sunday Community Market', text: 'Local market-style community day for food, shopping, music and meeting people in Phuket.', image: '/assets/fct/event-beach-market.jpeg', href: '/contact-link/?topic=Phuket%20Sunday%20Community%20Market' },
      { date: '10-18 October 2026', title: 'Phuket Vegetarian Festival', text: 'Nine-day cultural festival with processions, shrines, vegetarian food, and community traditions.', image: '/assets/fct/events/phuket-vegetarian-festival.jpg', href: 'https://www.phuket101.net/phuket-vegetarian-festival/' },
      { date: '3 December 2026', title: 'Snowbirds Charity Golf Classic', text: 'Charity golf classic organised by Rotary and community partners.', image: '/assets/fct/phuket-snowbirds-golf.jpeg', href: '/contact-link/?topic=Snowbirds%20Charity%20Golf%20Classic' },
    ],
  },
};
