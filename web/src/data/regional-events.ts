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
  intro: string;
  events: RegionalEvent[];
};

export const regionalEvents: Record<string, RegionalEventsPage> = {
  'community-events': {
    slug: 'community-events',
    location: 'Samui',
    intro: 'Check out our community events on Samui.',
    events: [
      { date: 'Weekly Wednesdays, 4:00 pm - 6:00 pm', title: 'AI Meet Up', text: 'A practical weekly AI community meet-up at Nature Bar, Maenam.', image: '/assets/fct/ai-community-meeting.jpeg', href: '/event/ai-community-meeting-nature-bar-maenam-weekly-2026-07-22/' },
      { date: 'Weekly Wednesdays, 4:00 pm - 6:00 pm', title: 'Crypto Community Gathering', text: 'Meet local people interested in crypto, digital business and practical technology.', image: '/assets/fct/past-event-crypto-community-gathering.jpeg', href: '/contact-link/?fct_event=crypto-community-gathering' },
      { date: 'Weekly Thursdays, 7:00 pm - 9:45 pm', title: 'Pub Quiz', text: 'A relaxed weekly pub quiz at Nature Bar, Maenam.', image: '/assets/fct/pub-quiz-nature-bar.jpeg', href: '/event/pub-quiz-nature-bar-maenam-beach-weekly-2026-07-23/' },
      { date: 'Weekly Fridays, 3:00 pm - 5:00 pm', title: 'Business Lunch', text: 'Meet local business owners and community members at Nature Bar, Maenam.', image: '/assets/fct/friday-business-networking-lunch.png', href: '/event/business-networking-lunch-nature-bar-maenam-weekly-2026-07-24/' },
      { date: 'Weekly Saturdays, 4:00 pm - 6:00 pm', title: 'Beach Walk', text: 'A friendly weekly beach walk and informal community meet-up.', image: '/assets/fct/beach-walk-community.jpg', href: '/event/beach-walk-koh-samui-weekly-2026-07-18/' },
    ],
  },
  'bangkok-community-events': {
    slug: 'bangkok-community-events',
    location: 'Bangkok',
    intro: 'Current community, music and social events in Bangkok.',
    events: [
      { date: '20 June 2026', title: 'Bangkok Titans', text: 'A Bangkok community sports event.', image: '/assets/fct/bangkok-titans.jpeg', href: '/contact-link/?fct_event=bangkok-titans' },
      { date: '27-28 June 2026', title: 'Club 30 Bangkok', text: 'Bangkok nightlife and social event for music, drinks and socialising.', image: '/assets/fct/bangkok-club-30.jpg', href: '/contact-link/?fct_event=club-30-bangkok' },
      { date: '25-26 July 2026', title: 'Monster Music Festival', text: 'A major Bangkok music event with live performances and festival atmosphere.', image: '/assets/fct/event-rock-concert.jpg', href: '/contact-link/?fct_event=monster-music-festival' },
    ],
  },
  'chiang-mai-community-events': {
    slug: 'chiang-mai-community-events',
    location: 'Chiang Mai',
    intro: 'The Chiang Mai community calendar is being prepared.',
    events: [],
  },
  'hua-hin-community-events': {
    slug: 'hua-hin-community-events',
    location: 'Hua Hin',
    intro: 'Current community and charity events in Hua Hin.',
    events: [
      { date: '20 June 2026', title: 'Summer of Love III', text: 'Boutique beach festival at The Standard, Hua Hin.', image: '/assets/fct/hua-hin-summer-love.jpg', href: '/contact-link/?fct_event=summer-of-love-hua-hin' },
      { date: '27 November 2026', title: 'Rotary Royal Hua Hin Charity Golf Classic', text: 'Annual amateur charity golf classic supporting Rotary Royal Hua Hin community causes.', image: '/assets/fct/hua-hin-golf.jpeg', href: '/contact-link/?fct_event=hua-hin-charity-golf' },
    ],
  },
  'koh-phangan-community-events': {
    slug: 'koh-phangan-community-events',
    location: 'Koh Phangan',
    intro: 'The Koh Phangan community calendar is being prepared.',
    events: [],
  },
  'krabi-community-events': {
    slug: 'krabi-community-events',
    location: 'Krabi',
    intro: 'Upcoming public events and community-friendly activities around Krabi.',
    events: [
      { date: '20 June 2026', title: 'Krabi Pride 2026', text: 'A celebration of diversity in Krabi Town with parade, live performances and community activities.', image: '/assets/fct/krabi-bamboo-beach-club.jpg', href: '/contact-link/?fct_event=krabi-pride' },
      { date: '22-23 June 2026', title: 'ICVMWT 2026 Krabi', text: 'International conference on vehicular, mobile and wearable technology.', image: '/assets/fct/krabi-hospital-run.jpg', href: '/contact-link/?fct_event=icvmwt-krabi' },
      { date: '11-12 July 2026', title: 'Ngorn Nak Trail 2026', text: 'Beach and mountain trail running challenge around Dragon Crest and Tubkaek.', image: '/assets/fct/krabi-ngorn-nak-trail.jpg', href: '/contact-link/?fct_event=ngorn-nak-trail' },
      { date: '11-12 September 2026', title: 'Scenic Half Marathon Krabi 2026', text: 'Running weekend around Ao Nang with several distances and scenic coastal routes.', image: '/assets/fct/beach-walk-community.jpg', href: '/contact-link/?fct_event=krabi-half-marathon' },
    ],
  },
  'pattaya-community-events': {
    slug: 'pattaya-community-events',
    location: 'Pattaya',
    intro: 'Current community, sport and social events in Pattaya.',
    events: [
      { date: '14-20 June 2026', title: 'Avani Pattaya 2 Ball Golf Tournament', text: 'A week of pairs golf across Pattaya championship courses with social events at AVANI Pattaya Resort & Spa.', image: '/assets/fct/pattaya-golf.png', href: '/contact-link/?fct_event=pattaya-golf' },
      { date: 'June 2026', title: 'Pattaya Circuit Social', text: 'Motorsport-themed social event in Pattaya.', image: '/assets/fct/pattaya-circuit.png', href: '/contact-link/?fct_event=pattaya-circuit' },
      { date: 'June 2026', title: 'Pattaya Pride', text: 'Community celebration and social event in Pattaya.', image: '/assets/fct/pattaya-pride.png', href: '/contact-link/?fct_event=pattaya-pride' },
      { date: 'June 2026', title: 'Tomorrowland Pattaya', text: 'Music and social event in Pattaya.', image: '/assets/fct/pattaya-tomorrowland.png', href: '/contact-link/?fct_event=tomorrowland-pattaya' },
    ],
  },
  'phuket-community-events': {
    slug: 'phuket-community-events',
    location: 'Phuket',
    intro: 'Current music, sport, cultural and community events in Phuket.',
    events: [
      { date: '19 June 2026', title: 'Rafael Cerato at Illuzion Phuket', text: 'Underground music night at Illuzion Phuket in Patong.', image: '/assets/fct/phuket-music-stage.jpg', href: '/contact-link/?fct_event=rafael-cerato-phuket' },
      { date: '20 June 2026', title: 'Pool Party - Celebrate Pride Month', text: 'Pride Month pool party at Patong Bay Hill with music, performances and community atmosphere.', image: '/assets/fct/phuket-pride-pool.jpeg', href: '/contact-link/?fct_event=phuket-pride-pool-party' },
      { date: '20-21 June 2026', title: 'Show Jumping and Dressage Competition', text: 'Two days of equestrian competition at Niran Farm Equestrian Center.', image: '/assets/fct/phuket-show-jumping.jpeg', href: '/contact-link/?fct_event=phuket-equestrian' },
      { date: '26 June 2026', title: 'Ministry of Sound at Illuzion Phuket', text: 'Music and nightlife event at Illuzion Phuket in Patong.', image: '/assets/fct/event-rock-concert.jpg', href: '/contact-link/?fct_event=ministry-of-sound-phuket' },
      { date: '10-18 October 2026', title: 'Phuket Vegetarian Festival', text: 'Nine-day cultural festival with processions, shrines, vegetarian food and community traditions.', image: '/assets/fct/hero-community.jpg', href: '/contact-link/?fct_event=phuket-vegetarian-festival' },
      { date: '3 December 2026', title: 'Snowbirds Charity Golf Classic', text: 'Charity golf classic organised by Rotary and community partners.', image: '/assets/fct/phuket-snowbirds-golf.jpeg', href: '/contact-link/?fct_event=phuket-snowbirds-golf' },
    ],
  },
};
