export type Card = {
  title: string;
  text: string;
  image?: string;
  href?: string;
  action?: string;
};

export type EventItem = {
  date: string;
  title: string;
  time: string;
  venue: string;
  text: string;
  href: string;
};

export type PriorityPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  introTitle: string;
  introText: string;
  cards?: Card[];
  events?: EventItem[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
};

const contactHref = '/contact-link/';

export const priorityPages: Record<string, PriorityPage> = {
  'local-business-network': {
    slug: 'local-business-network',
    title: 'Local Business Network',
    seoTitle: 'Local Business Network | First Contact Thailand',
    description: 'Connect with trusted local businesses, advisers, founders and service providers across Thailand.',
    eyebrow: 'Trusted introductions',
    heroTitle: 'Local Business Network',
    heroText: 'A practical network of local operators, advisers and service providers helping residents, expats and visitors find reliable support.',
    heroImage: '/assets/fct/hero-network.jpg',
    primaryAction: { label: 'Get Introduced', href: contactHref },
    secondaryAction: { label: 'View Local Deals', href: '/local-deals/' },
    introTitle: 'Find the right local partner faster',
    introText: 'First Contact began on Koh Samui and has grown into a wider Thailand network. We connect people with trusted local businesses while keeping community support at the centre of the model.',
    cards: [
      { title: 'AI Community', text: 'Meet founders and operators using practical tools to work smarter and grow local businesses.', image: '/assets/fct/business-ai-community.jpeg', href: contactHref, action: 'Ask about AI community' },
      { title: 'Affiliate Marketing', text: 'Build referral partnerships with businesses that can help your customers and support local causes.', image: '/assets/fct/business-marketing.jpg', href: contactHref, action: 'Start a referral conversation' },
      { title: 'Co-working', text: 'Find workspaces, meeting places and local business hubs for focused work and useful connections.', image: '/assets/fct/business-coworking.jpg', href: contactHref, action: 'Find workspace support' },
      { title: 'Legal Advice', text: 'Connect with advisers for company setup, contracts, property checks and business structure.', image: '/assets/fct/business-legal.jpg', href: contactHref, action: 'Request an introduction' },
      { title: 'Insurance', text: 'Speak with trusted partners about personal, health, vehicle, property, travel and business cover.', image: '/assets/fct/business-insurance.jpg', href: contactHref, action: 'Ask about insurance' },
      { title: 'Visas', text: 'Get introduced to local visa support for retirement, business, family, education and long-stay planning.', image: '/assets/fct/business-visas.jpg', href: contactHref, action: 'Find visa support' },
    ],
    ctaTitle: 'Need a provider you can trust?',
    ctaText: 'Tell us what you need and we will point you toward a suitable local partner.',
    ctaHref: contactHref,
    ctaLabel: 'Contact First Contact',
  },
  events: {
    slug: 'events',
    title: 'Events',
    seoTitle: 'Community Events in Thailand | First Contact Thailand',
    description: 'Find business networking, social events and community gatherings connected through First Contact Thailand.',
    eyebrow: 'Weekly community',
    heroTitle: 'Events That Bring People Together',
    heroText: 'Business lunches, meetups, beach walks and social events for locals, expats and visitors who want genuine connections.',
    heroImage: '/assets/fct/event-beach-market.jpeg',
    primaryAction: { label: 'Submit an Event', href: contactHref },
    secondaryAction: { label: 'Past Events', href: '/past-events/' },
    introTitle: 'A simpler events page',
    introText: 'The imported calendar embed has been replaced for the MVP with clear event cards that wrap cleanly and work without third-party layout scripts.',
    events: [
      { date: 'Wednesday', title: 'AI Meet Up', time: '4:00 pm - 6:00 pm', venue: 'Nature Bar, Maenam', text: 'A practical weekly meetup for people exploring AI tools, local business ideas and community projects.', href: contactHref },
      { date: 'Wednesday', title: 'Crypto Community Gathering', time: '4:00 pm - 6:00 pm', venue: 'Nature Bar, Maenam', text: 'An informal community gathering for people interested in crypto, digital work and local networking.', href: contactHref },
      { date: 'Thursday', title: 'Pub Quiz', time: '7:00 pm - 9:45 pm', venue: 'Nature Bar, Maenam', text: 'A friendly weekly quiz night for locals, visitors and teams who enjoy an easy social evening.', href: contactHref },
      { date: 'Friday', title: 'Business Lunch', time: '3:00 pm - 5:00 pm', venue: 'Nature Bar, Maenam', text: 'A relaxed weekly business lunch for introductions, referrals and local collaboration.', href: contactHref },
      { date: 'Saturday', title: 'Beach Walk', time: '4:00 pm - 6:00 pm', venue: 'Koh Samui', text: 'A simple social walk for meeting people, getting outside and keeping the community visible.', href: contactHref },
    ],
    ctaTitle: 'Have a community event coming up?',
    ctaText: 'Send us the details and we can help connect it with the local First Contact network.',
    ctaHref: contactHref,
    ctaLabel: 'Tell us about an event',
  },
  tours: {
    slug: 'tours',
    title: 'Tours',
    seoTitle: 'Tours and Local Experiences | First Contact Thailand',
    description: 'Connect with trusted local drivers, boat operators, guides and experience providers across Thailand.',
    eyebrow: 'Trusted local operators',
    heroTitle: 'Tours and Experiences',
    heroText: 'Explore Thailand with reliable local drivers, boat operators, tour guides and experience providers.',
    heroImage: '/assets/fct/tours-day-trip.jpg',
    primaryAction: { label: 'Plan a Tour', href: contactHref },
    secondaryAction: { label: 'Guide Opportunities', href: '/become-a-better-tour-guide/' },
    introTitle: 'Local knowledge without the guesswork',
    introText: 'Whether you want a custom day trip, a party transfer, a family day out or better tour guide connections, we introduce you to trusted local partners.',
    cards: [
      { title: 'Customise Your Own Day Trip', text: 'Explore like a local with trusted drivers, boat operators and guides who tailor the trip to your group.', image: '/assets/fct/tours-day-trip.jpg', href: contactHref, action: 'Connect with local partners' },
      { title: 'Full Moon Parties', text: 'Safe, stylish Full Moon Party experiences arranged around your group with trusted local support.', image: '/assets/fct/tours-full-moon.jpg', href: '/full-moon-party-vip-trip/', action: 'Book your Full Moon trip' },
      { title: 'Other Tours', text: 'Discover islands, viewpoints, beaches and hidden gems while supporting trusted local providers.', image: '/assets/fct/tours-islands.jpg', href: '/other-tours/', action: 'View other tours' },
      { title: 'Become a Better Tour Guide', text: 'Improve guest experiences, build stronger listings and learn how to maximise commissions.', image: '/assets/fct/tours-guide.png', href: '/become-a-better-tour-guide/', action: 'Find out more' },
    ],
    ctaTitle: 'Want a tour arranged around you?',
    ctaText: 'Tell us your group size, dates and style of trip, and we will connect you with local partners.',
    ctaHref: contactHref,
    ctaLabel: 'Start planning',
  },
  property: {
    slug: 'property',
    title: 'Property',
    seoTitle: 'Property Support in Thailand | First Contact Thailand',
    description: 'Connect with trusted property sales, management, building and buyer support across Thailand.',
    eyebrow: 'Sales, management and build support',
    heroTitle: 'Property Support Across Thailand',
    heroText: 'Find trusted introductions for buying, selling, managing, building and checking property locally.',
    heroImage: '/assets/fct/property-home.jpg',
    primaryAction: { label: 'Ask About Property', href: contactHref },
    secondaryAction: { label: 'Property Sales', href: '/property-sales/' },
    introTitle: 'Clear property pathways',
    introText: 'The MVP separates property services from area links so visitors can quickly choose the support they need without inherited WordPress clutter.',
    cards: [
      { title: 'Property Sales Overview', text: 'Understand available property opportunities and get introduced to trusted local sales support.', image: '/assets/fct/property-home.jpg', href: '/property-sales/', action: 'View sales overview' },
      { title: 'Property Management', text: 'Find practical support for villas, rentals, maintenance and owner communication.', image: '/assets/fct/hero-community.jpg', href: '/property-management/', action: 'Ask about management' },
      { title: 'Building Contractors', text: 'Connect with builders and project support for repairs, renovations and new construction.', image: '/assets/fct/property-building.jpg', href: '/building-contractors/', action: 'Find contractors' },
      { title: 'Buyers Agent', text: 'Get help with local searches, area questions, checks and introductions before you commit.', image: '/assets/fct/business-legal.jpg', href: '/buyers-agent/', action: 'Find a buyers agent' },
    ],
    ctaTitle: 'Looking at property in Thailand?',
    ctaText: 'Share the area and type of support you need, and we will connect you with suitable local contacts.',
    ctaHref: contactHref,
    ctaLabel: 'Contact property support',
  },
  hire: {
    slug: 'hire',
    title: 'Hire',
    seoTitle: 'Hire Trusted Local Services | First Contact Thailand',
    description: 'Hire trusted local drivers, vehicles and service providers through First Contact Thailand.',
    eyebrow: 'Fair prices and reliable help',
    heroTitle: 'Hire Trusted Local Services',
    heroText: 'Avoid overcharging, unreliable providers and confusing local arrangements with trusted partner introductions.',
    heroImage: '/assets/fct/hire-car.jpg',
    primaryAction: { label: 'Hire Local Support', href: contactHref },
    secondaryAction: { label: 'Local Deals', href: '/local-deals/' },
    introTitle: 'Simple, local, reliable',
    introText: 'From airport transfers and vehicle hire to practical local services, First Contact connects you with people who know the area and care about fair service.',
    cards: [
      { title: 'Airport Transfers', text: 'Reliable local drivers, clear pricing and help arriving or leaving without airport stress.', image: '/assets/fct/hire-car.jpg', href: contactHref, action: 'Arrange a transfer' },
      { title: 'Vehicle Hire', text: 'Trusted local partners for cars, bikes and practical transport support with local backup.', image: '/assets/fct/hire-bike.jpg', href: contactHref, action: 'Ask about vehicles' },
      { title: 'Local Services', text: 'Vetted local help for everyday needs, fair prices and service providers who give back.', image: '/assets/fct/hire-services.jpg', href: contactHref, action: 'Find local services' },
    ],
    ctaTitle: 'Need someone dependable?',
    ctaText: 'Tell us what you need and when, and we will connect you with a trusted local option.',
    ctaHref: contactHref,
    ctaLabel: 'Request a connection',
  },
  'local-deals': {
    slug: 'local-deals',
    title: 'Local Deals',
    seoTitle: 'Local Deals in Thailand | First Contact Thailand',
    description: 'Find local food, drink, travel and lifestyle deals through trusted First Contact Thailand recommendations.',
    eyebrow: 'Live like a local',
    heroTitle: 'Local Deals',
    heroText: 'Enjoy insider recommendations, fair local prices and trusted introductions so you can live more like a local.',
    heroImage: '/assets/fct/deals-local-life.jpg',
    primaryAction: { label: 'Find Deals', href: contactHref },
    secondaryAction: { label: 'Business Network', href: '/local-business-network/' },
    introTitle: 'Better local value',
    introText: 'The deal pages are simplified into practical categories for food, drinks and everyday local life, with clear contact routes instead of nested imported cards.',
    cards: [
      { title: 'Drink Like a Local', text: 'Find local happy hours, beach bars and insider specials without paying tourist prices.', image: '/assets/fct/deals-drinks.jpg', href: contactHref, action: 'Find drink deals' },
      { title: 'Eat Like a Local', text: 'Discover where locals eat, celebrate and recommend, from casual spots to group-friendly venues.', image: '/assets/fct/hero-community.jpg', href: contactHref, action: 'Find food deals' },
      { title: 'Live Like a Local', text: 'Get trusted recommendations for shopping, travel, services and local-rate experiences.', image: '/assets/fct/deals-local-life.jpg', href: contactHref, action: 'Find local tips' },
    ],
    ctaTitle: 'Want local recommendations?',
    ctaText: 'Tell us where you are and what you are looking for, and we will point you in the right direction.',
    ctaHref: contactHref,
    ctaLabel: 'Ask for deals',
  },
  'contact-link': {
    slug: 'contact-link',
    title: 'Contact',
    seoTitle: 'Contact First Contact Thailand',
    description: 'Contact First Contact Thailand for trusted local business, event, property, tour, hire and deal introductions.',
    eyebrow: 'Get connected',
    heroTitle: 'Contact First Contact Thailand',
    heroText: 'Tell us what you need and we will help connect you with trusted local partners across the network.',
    heroImage: '/assets/fct/contact-community.jpg',
    primaryAction: { label: 'Message on Facebook', href: 'https://www.facebook.com/groups/321622170289599' },
    secondaryAction: { label: 'Explore Services', href: '/local-business-network/' },
    introTitle: 'What should we help with?',
    introText: 'Use the contact route for business introductions, local deals, tours, hire, property support, event submissions and community questions.',
    cards: [
      { title: 'Business Introductions', text: 'Tell us the service, location and urgency, and we will help route you to the right local partner.', href: '/local-business-network/', action: 'View business network' },
      { title: 'Events and Community', text: 'Share your event details or ask what is coming up locally.', href: '/events/', action: 'View events' },
      { title: 'Tours, Hire and Property', text: 'Send the basics and we will connect you with trusted local providers.', href: '/tours/', action: 'View tours' },
    ],
    ctaTitle: 'Prefer a personal touch?',
    ctaText: 'Reach out through the First Contact Thailand Facebook group and we will get back to you.',
    ctaHref: 'https://www.facebook.com/groups/321622170289599',
    ctaLabel: 'Open Facebook group',
  },
};

export const homePage = {
  seoTitle: 'First Contact Thailand | Trusted Local Connections',
  description: 'First Contact Thailand connects locals, expats and travellers with trusted local businesses, services, events and community support.',
  heroImage: '/assets/fct/hero-community.jpg',
  sections: [
    priorityPages['local-business-network'],
    priorityPages.events,
    priorityPages.tours,
    priorityPages.property,
    priorityPages.hire,
    priorityPages['local-deals'],
  ],
};
