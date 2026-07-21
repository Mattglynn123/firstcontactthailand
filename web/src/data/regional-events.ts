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
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Ai Meet Up', text: '4:00 pm - 6:00 pm. Weekly meetup at Nature Bar, Maenam.', image: '/assets/fct/ai-community-meeting.jpeg', href: '/contact-link/' },
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Crypto Community Gathering', text: '4:00 pm - 6:00 pm. Weekly community meetup at Nature Bar, Maenam.', image: '/assets/fct/past-event-crypto-community-gathering.jpeg', href: '/contact-link/' },
      { date: 'Every Wednesday - next session: Wednesday 22 July', title: 'Free Beach Fitness Meet Ups', text: 'Wednesday mornings. Beach exercise for locals, expats, and visitors who want to stay active and meet people.', image: '/assets/fct/beach-1-scaled.jpg', href: '/contact-link/?fct_event=free-beach-fitness' },
      { date: 'Every Thursday - next session: Thursday 23 July', title: 'Pub Quiz', text: '7:00 pm - 9:45 pm. Weekly Thursday quiz at Nature Bar, Maenam.', image: '/assets/fct/pub-quiz-nature-bar.jpeg', href: '/contact-link/' },
      { date: 'Every Friday - next session: Friday 24 July', title: 'Business Lunch', text: '3:00 pm - 5:00 pm. Weekly Friday business lunch at Nature Bar, Maenam.', image: '/assets/fct/friday-business-networking-lunch.png', href: '/contact-link/' },
      { date: 'Every Saturday - next session: Saturday 25 July', title: 'Beach Walk', text: '4:00 pm - 6:00 pm. Weekly Saturday beach walk.', image: '/assets/fct/beach-walk-community.jpg', href: '/contact-link/' },
      { date: 'Monday 29th June 2026', title: 'Full Moon Party VIP Trip', text: 'VIP Full Moon Party trip by speedboat to Koh Phangan, with welcome drink at Nature Bar, Maenam, hotel pick up and drop off, and return departure around 1:30 am.', image: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', href: '/contact-link/?fct_event=full-moon-party-vip-trip' },
    ],
  },
  'bangkok-community-events': {
    slug: 'bangkok-community-events',
    location: 'Bangkok',
    archiveSlug: 'bangkok',
    intro: 'Current community, music and social events in Bangkok.',
    events: [
      { date: '27-28 June 2026', title: 'Club 30 Bangkok', text: 'Bangkok nightlife and social event for music, drinks, and socialising.', image: '/assets/fct/bangkok-club-30.jpg', href: '/contact-link/' },
      { date: '25-26 July 2026', title: 'Monster Music Festival', text: 'A major Bangkok music event with live performances and festival atmosphere.', image: '/assets/fct/event-rock-concert.jpg', href: '/contact-link/' },
    ],
  },
  'chiang-mai-community-events': {
    slug: 'chiang-mai-community-events',
    location: 'Chiang Mai',
    archiveSlug: 'chiang-mai',
    intro: 'The Chiang Mai community calendar is being prepared.',
    emptyTitle: 'Chiang Mai Community Events',
    events: [],
  },
  'hua-hin-community-events': {
    slug: 'hua-hin-community-events',
    location: 'Hua Hin',
    archiveSlug: 'hua-hin',
    intro: 'Current community and charity events in Hua Hin.',
    events: [
      { date: '27 November 2026', title: 'Rotary Royal Hua Hin Charity Golf Classic', text: 'Annual amateur charity golf classic supporting Rotary Royal Hua Hin community causes.', image: '/assets/fct/hua-hin-charity-golf-classic-20261127.jpeg', href: '/contact-link/' },
    ],
  },
  'koh-phangan-community-events': {
    slug: 'koh-phangan-community-events',
    location: 'Koh Phangan',
    archiveSlug: 'koh-phangan',
    intro: 'The Koh Phangan community calendar is being prepared.',
    emptyTitle: 'Koh Phangan Community Calendar',
    events: [],
  },
  'krabi-community-events': {
    slug: 'krabi-community-events',
    location: 'Krabi',
    archiveSlug: 'krabi',
    intro: 'Upcoming public events and community-friendly activities around Krabi, checked from current event listings.',
    events: [
      { date: '21 June 2026', title: 'Krabi Hospital Run 2026', text: 'Charity walk and run supporting Krabi Hospital, with 5 km and 10 km categories listed for the 2026 event.', image: '/assets/fct/events/krabi-hospital-run-current.jpg', href: 'https://www.tourismthailand.org/Events-and-Festivals/krabi-hospital-run-2026' },
      { date: '11-12 July 2026', title: 'Ngorn Nak Trail', text: 'Trail running from the coast toward Ngorn Nak Hill, with distance options listed from short runs up to longer trail routes.', image: '/assets/fct/events/krabi-ngorn-nak-trail-current.jpg', href: 'https://worldsmarathons.com/marathon/ngorn-nak-trail' },
      { date: '25 June 2026', title: 'BYAS at Bamboo Beach Club', text: 'Live music event listed for Bamboo Beach Club in Krabi. Check the event page for ticket and timing updates before travelling.', image: '/assets/fct/events/krabi-byas-current.jpg', href: 'https://www.bandsintown.com/c/krabi-thailand' },
    ],
  },
  'pattaya-community-events': {
    slug: 'pattaya-community-events',
    location: 'Pattaya',
    archiveSlug: 'pattaya',
    intro: 'Current community, sport and social events in Pattaya.',
    events: [
      { date: '27-29 June 2026', title: 'Pattaya Pride', text: 'Community celebration and social event in Pattaya.', image: '/assets/fct/events/pattaya-pride-current.jpg', href: '/contact-link/' },
      { date: 'December 11-13, 2026', title: 'Tomorrowland Pattaya', text: 'Tomorrowland Thailand comes to Wisdom Valley near Pattaya for a major electronic music festival experience.', image: '/assets/fct/events/pattaya-tomorrowland-current.webp', href: '/contact-link/' },
    ],
  },
  'phuket-community-events': {
    slug: 'phuket-community-events',
    location: 'Phuket',
    archiveSlug: 'phuket',
    intro: 'Current music, sport, cultural and community events in Phuket.',
    events: [
      { date: '19 June 2026', title: 'Rafael Cerato at Illuzion Phuket', text: 'Underground music night at Illuzion Phuket in Patong.', image: '/assets/fct/phuket-music-stage.jpg', href: 'https://www.phuket.net/events/2026-06/' },
      { date: '26 June 2026', title: 'Ministry of Sound at Illuzion Phuket', text: 'Music and nightlife event at Illuzion Phuket in Patong.', image: '/assets/fct/event-rock-concert.jpg', href: 'https://www.phuket.net/events/2026-06/' },
      { date: '10-18 October 2026', title: 'Phuket Vegetarian Festival', text: 'Nine-day cultural festival with processions, shrines, vegetarian food, and community traditions.', image: '/assets/fct/events/phuket-vegetarian-festival.jpg', href: 'https://www.phuket101.net/phuket-vegetarian-festival/' },
      { date: '3 December 2026', title: 'Snowbirds Charity Golf Classic', text: 'Charity golf classic organised by Rotary and community partners.', image: '/assets/fct/phuket-snowbirds-golf.jpeg', href: '/contact-link/' },
    ],
  },
};
