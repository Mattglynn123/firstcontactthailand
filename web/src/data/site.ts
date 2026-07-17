export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = NavChild & {
  children?: NavChild[];
};

export type ServiceCard = {
  title: string;
  text: string;
  image: string;
  href?: string;
  action?: string;
  meta?: string;
};

export type PriorityPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  heroText: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  cards: ServiceCard[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const contact = {
  email: 'info@firstcontactthailand.com',
  phoneDisplay: '+66 80 337 8707',
  whatsapp: 'https://wa.me/66803378707',
  facebook: 'https://www.facebook.com/groups/321622170289599',
};

export const navigation: NavItem[] = [
  {
    label: 'Charity',
    href: '/charity/',
    children: [
      { label: 'Bangkok', href: '/bangkok-charity-programs/' },
      { label: 'Chiang Mai', href: '/chiang-mai-charity-programs/' },
      { label: 'Hua Hin', href: '/hua-hin-charity-programs/' },
      { label: 'Koh Samui', href: '/koh-samui-charity-programs/' },
      { label: 'Pattaya', href: '/pattaya-charity-programs/' },
      { label: 'Phuket', href: '/phuket-charity-programs/' },
    ],
  },
  {
    label: 'Events',
    href: '/community-events/',
    children: [
      { label: 'Bangkok', href: '/bangkok-community-events/' },
      { label: 'Chiang Mai', href: '/chiang-mai-community-events/' },
      { label: 'Hua Hin', href: '/hua-hin-community-events/' },
      { label: 'Koh Samui', href: '/community-events/' },
      { label: 'Pattaya', href: '/pattaya-community-events/' },
      { label: 'Phuket', href: '/phuket-community-events/' },
      { label: 'Past Events', href: '/past-events/' },
    ],
  },
  { label: 'Health & Fitness', href: '/health-fitness/' },
  { label: 'Hire', href: '/hire/' },
  { label: 'Local Business Network', href: '/local-business-network/' },
  { label: 'Local Deals', href: '/local-deals/' },
  {
    label: 'Move to Thailand Guide',
    href: '/move-to-thailand-guide/',
    children: [
      { label: 'Bangkok', href: '/moving-to-bangkok/' },
      { label: 'Chiang Mai', href: '/moving-to-chiang-mai/' },
      { label: 'Hua Hin', href: '/moving-to-hua-hin/' },
      { label: 'Koh Samui', href: '/moving-to-samui/' },
      { label: 'Pattaya', href: '/moving-to-pattaya/' },
      { label: 'Phuket', href: '/moving-to-phuket/' },
    ],
  },
  {
    label: 'Property',
    href: '/real-estate/',
    children: [
      { label: 'Property Overview', href: '/real-estate/' },
      { label: 'Property Sales', href: '/property-sales/' },
      { label: 'Property Management', href: '/property-management/' },
      { label: 'Building Contractors', href: '/building-contractors/' },
      { label: 'Buyers Agent', href: '/buyers-agent/' },
    ],
  },
  { label: 'Tours', href: '/tours-2/' },
];

const connectHref = '/contact-link/';

export const priorityPages: Record<string, PriorityPage> = {
  'local-business-network': {
    slug: 'local-business-network',
    title: 'Local Business Network',
    seoTitle: 'Local Business Network | First Contact Thailand',
    description: 'Connect with trusted local businesses, advisers, founders and service providers across Thailand.',
    eyebrow: 'Trusted introductions across Thailand',
    heroText: 'Our network brings together local businesses, expats and residents so the right help is easier to find.',
    heroImage: '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg',
    introTitle: 'Find the right local partner faster',
    introText: 'First Contact began in Koh Samui and now connects people with a broad network of trusted local operators. Every introduction is built around practical help, fair service and stronger communities.',
    cards: [
      { title: 'AI Community', text: 'Meet local founders, operators and newcomers using practical AI tools to work smarter.', image: '/assets/fct/ai-community-local-business-network-20260530.jpeg' },
      { title: 'Affiliate Marketing', text: 'Build referral partnerships with businesses that can help your customers and support local causes.', image: '/assets/fct/Marketing-scaled.jpg' },
      { title: 'Business Done 4 U', text: 'Get practical local support for setting up, improving and running a business in Thailand.', image: '/assets/fct/start-up-scaled.jpg' },
      { title: 'Co-working Spaces', text: 'Find flexible workspaces, meeting places and useful local business hubs.', image: '/assets/fct/co-working-scaled.jpg' },
      { title: 'Crypto Education & Business', text: 'Connect with local education, digital business and online opportunity support.', image: '/assets/fct/crypto-scaled.jpg' },
      { title: 'Insurance', text: 'Speak with trusted partners about personal, health, vehicle, property and business cover.', image: '/assets/fct/insurance-scaled.jpg' },
      { title: 'Legal Services', text: 'Connect with advisers for company setup, contracts, property checks and business structure.', image: '/assets/fct/legal-scaled.jpg' },
      { title: 'Marketing & Media', text: 'Get introduced to creative, social media, design and business promotion support.', image: '/assets/fct/business-marketing.jpg' },
      { title: 'Nanny Services', text: 'Find trusted family support, child care and practical help through local contacts.', image: '/assets/fct/nanny-scaled.jpg' },
      { title: 'Property Support', text: 'Connect with trusted property sales, management, building and buyer support.', image: '/assets/fct/property-home.jpg', href: '/real-estate/', action: 'Explore property support' },
      { title: 'Remote & Online Work', text: 'Explore practical remote work, online jobs and income opportunities.', image: '/assets/fct/remote-scaled.jpg' },
      { title: 'Solar', text: 'Connect with local solar providers and practical home improvement support.', image: '/assets/fct/solar-scaled.jpg' },
      { title: 'Tours & Entertainment', text: 'Find trusted tours, local experiences, entertainment and event partners.', image: '/assets/fct/tours-day-trip.jpg', href: '/tours-2/', action: 'Explore tours' },
      { title: 'Visas', text: 'Get introduced to local visa support for retirement, business, family and long stays.', image: '/assets/fct/visias-scaled.jpg' },
      { title: 'Healthy Drinking Water', text: 'Find trusted drinking water, filtration and home supply contacts.', image: '/assets/fct/drinking-scaled.jpg' },
      { title: 'Weddings', text: 'Connect with local wedding, event and celebration partners.', image: '/assets/fct/photo-1502635385003-ee1e6a1a742d.avif' },
    ],
    ctaTitle: 'Need a provider you can trust?',
    ctaText: 'Tell us what you need and where you are. We will point you towards a suitable local partner.',
    ctaLabel: 'Ask for an introduction',
    ctaHref: connectHref,
  },
  'community-events': {
    slug: 'community-events',
    title: 'Koh Samui Community Events',
    seoTitle: 'Koh Samui Community Events | First Contact Thailand',
    description: 'Discover business networking, social events and community gatherings on Koh Samui.',
    eyebrow: 'Meet, connect and support local',
    heroText: 'Business lunches, meetups, beach walks and social gatherings for locals, expats and visitors.',
    heroImage: '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg',
    introTitle: 'Regular community connections',
    introText: 'Events change throughout the month. Contact us for the latest details before attending, or share an event you would like the community to know about.',
    cards: [
      { title: 'AI Community Meetups', text: 'Practical conversations for people exploring AI tools, local projects and new business ideas.', image: '/assets/fct/ai-community-meeting.jpeg', meta: 'Koh Samui' },
      { title: 'Friday Business Lunch', text: 'A relaxed weekly gathering for introductions, referrals and useful local collaboration.', image: '/assets/fct/friday-business-networking-lunch.png', meta: 'Weekly networking' },
      { title: 'Beach Craft Market', text: 'Local makers, artists, crafts and a community afternoon by the sea.', image: '/assets/fct/beach-craft-market-nature-bar-maenam-20260530.jpeg', meta: 'Community market' },
      { title: 'Pub Quiz', text: 'An easy social evening for teams, visitors and locals who enjoy a friendly challenge.', image: '/assets/fct/pub-quiz-nature-bar.jpeg', meta: 'Social event' },
      { title: 'Beach Walks & Gatherings', text: 'Simple outdoor events for meeting people and staying connected with the community.', image: '/assets/fct/beach-walk-community.jpg', meta: 'Community activity' },
      { title: 'Full Moon Party Trips', text: 'Group trips organised with trusted local transport and practical support.', image: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', meta: 'Group experience', href: '/tours-2/', action: 'Explore tours' },
    ],
    ctaTitle: 'Have a community event coming up?',
    ctaText: 'Send us the details and we can help connect it with the local First Contact network.',
    ctaLabel: 'Tell us about an event',
    ctaHref: connectHref,
    secondaryLabel: 'See previous events',
    secondaryHref: '/past-events/',
  },
  hire: {
    slug: 'hire',
    title: 'Hire Trusted Local Services',
    seoTitle: 'Hire Trusted Local Services | First Contact Thailand',
    description: 'Hire trusted local drivers, vehicles and service providers through First Contact Thailand.',
    eyebrow: 'Fair prices and reliable help',
    heroText: 'Avoid overcharging and unreliable providers with practical introductions to trusted local partners.',
    heroImage: '/assets/fct/hire-car.jpg',
    introTitle: 'Simple, local and reliable',
    introText: 'From airport transfers and vehicle hire to everyday practical help, we connect you with providers who know the area and care about fair service.',
    cards: [
      { title: 'Airport Transfers', text: 'Reliable local drivers, clear pricing and help arriving or leaving without airport stress.', image: '/assets/fct/hire-car.jpg' },
      { title: 'Vehicle Hire', text: 'Trusted local partners for cars, bikes and practical transport support with local backup.', image: '/assets/fct/hire-bike.jpg' },
      { title: 'Local Services', text: 'Vetted local help for everyday needs, fair prices and providers who support the community.', image: '/assets/fct/hire-services.jpg' },
    ],
    ctaTitle: 'Need someone dependable?',
    ctaText: 'Tell us what you need, where you are and when you need it.',
    ctaLabel: 'Request a connection',
    ctaHref: connectHref,
  },
  'local-deals': {
    slug: 'local-deals',
    title: 'Local Deals',
    seoTitle: 'Local Deals in Thailand | First Contact Thailand',
    description: 'Find local food, drink, travel and lifestyle deals through trusted First Contact recommendations.',
    eyebrow: 'Live more like a local',
    heroText: 'Enjoy insider recommendations, fair local prices and trusted introductions wherever you are in Thailand.',
    heroImage: '/assets/fct/deals-local-life.jpg',
    introTitle: 'Better local value',
    introText: 'Find useful recommendations for food, drinks, transport and everyday local life without navigating tourist pricing or unreliable listings.',
    cards: [
      { title: 'Drink Like a Local', text: 'Find local happy hours, beach bars and insider specials without paying tourist prices.', image: '/assets/fct/deals-drinks.jpg' },
      { title: 'Eat Like a Local', text: 'Discover where locals eat, celebrate and recommend, from casual spots to group-friendly venues.', image: '/assets/fct/photo-1555396273-367ea4eb4db5.avif' },
      { title: 'Live Like a Local', text: 'Get trusted recommendations for shopping, travel, services and local-rate experiences.', image: '/assets/fct/deals-local-life.jpg' },
    ],
    ctaTitle: 'Looking for a local recommendation?',
    ctaText: 'Tell us your location and what you need. We will point you in the right direction.',
    ctaLabel: 'Ask for local deals',
    ctaHref: connectHref,
  },
  'health-fitness': {
    slug: 'health-fitness',
    title: 'Health & Fitness',
    seoTitle: 'Health, Fitness & Wellness | First Contact Thailand',
    description: 'Find local fitness meetups, health support and wellness connections through First Contact Thailand.',
    eyebrow: 'Feel better and meet new people',
    heroText: 'Discover practical local fitness, health and wellness support while connecting with the community.',
    heroImage: '/assets/fct/beach-1-scaled.jpg',
    introTitle: 'Health and community belong together',
    introText: 'From free beach fitness and group activities to trusted local wellness contacts, First Contact helps you find support that fits local life.',
    cards: [
      { title: 'Beach Fitness Meetups', text: 'Join informal outdoor sessions that combine movement, fresh air and community.', image: '/assets/fct/gym-scaled.jpg' },
      { title: "Women's Health & Wellness", text: 'Connect with local events, products and trusted contacts supporting women\'s health.', image: '/assets/fct/gym-copy-scaled.jpg' },
      { title: "Men's Health & Wellness", text: 'Find practical local support, group activities and useful health connections.', image: '/assets/fct/personal-scaled.jpg' },
      { title: 'Personal Health Products', text: 'Ask for trusted local recommendations for wellbeing, personal care and performance.', image: '/assets/fct/beach-1-scaled.jpg' },
    ],
    ctaTitle: 'Ready to get active or find support?',
    ctaText: 'Tell us what you are looking for and we will connect you with suitable local options.',
    ctaLabel: 'Ask about health & fitness',
    ctaHref: connectHref,
  },
  'real-estate': {
    slug: 'real-estate',
    title: 'Property',
    seoTitle: 'Property Support in Thailand | First Contact Thailand',
    description: 'Connect with trusted property sales, management, building and buyer support across Thailand.',
    eyebrow: 'Sales, management and build support',
    heroText: 'Find trusted introductions for buying, selling, managing, building and checking property locally.',
    heroImage: '/assets/fct/property-home.jpg',
    introTitle: 'Clear property pathways',
    introText: 'Choose the type of support you need and we will connect you with suitable local contacts for the area.',
    cards: [
      { title: 'Property Sales', text: 'Explore opportunities and get introduced to trusted local sales contacts.', image: '/assets/fct/property-home.jpg', href: '/property-sales/', action: 'Explore property sales' },
      { title: 'Property Management', text: 'Find practical support for villas, rentals, maintenance and owner communication.', image: '/assets/fct/house-2-scaled.jpg', href: '/property-management/', action: 'Property management' },
      { title: 'Building Contractors', text: 'Connect with builders and project support for repairs, renovations and construction.', image: '/assets/fct/property-building.jpg', href: '/building-contractors/', action: 'Find contractors' },
      { title: 'Buying Property in Thailand', text: 'Understand the process, local checks and practical questions before you commit.', image: '/assets/fct/business-legal.jpg', href: '/buyers-agent/', action: 'Buying support' },
      { title: 'Buyers Agent', text: 'Get help with local searches, area questions, checks and trusted introductions.', image: '/assets/fct/house-scaled.jpg', href: '/buyers-agent/', action: 'Find a buyers agent' },
    ],
    ctaTitle: 'Looking at property in Thailand?',
    ctaText: 'Share the area and type of support you need and we will connect you with suitable local contacts.',
    ctaLabel: 'Contact property support',
    ctaHref: connectHref,
  },
  'tours-2': {
    slug: 'tours-2',
    title: 'Tours',
    seoTitle: 'Tours and Local Experiences | First Contact Thailand',
    description: 'Connect with trusted local drivers, boat operators, guides and experience providers across Thailand.',
    eyebrow: 'Trusted local operators',
    heroText: 'Explore Thailand with reliable local drivers, boat operators, tour guides and experience providers.',
    heroImage: '/assets/fct/tours-day-trip.jpg',
    introTitle: 'Local knowledge without the guesswork',
    introText: 'Plan a custom day trip, island experience, party transfer or family outing with trusted local partners.',
    cards: [
      { title: 'Customise Your Own Day Trip', text: 'Explore like a local with trusted drivers, boat operators and guides who tailor the trip to your group.', image: '/assets/fct/tours-day-trip.jpg' },
      { title: 'Full Moon Parties', text: 'Safe, stylish Full Moon Party experiences arranged around your group with trusted support.', image: '/assets/fct/tours-full-moon.jpg' },
      { title: 'Other Tours', text: 'Discover islands, viewpoints, beaches and hidden gems while supporting local providers.', image: '/assets/fct/tours-islands.jpg', href: '/other-tours/', action: 'View other tours' },
      { title: 'Become a Better Tour Guide', text: 'Improve guest experiences, build stronger listings and maximise commissions.', image: '/assets/fct/tours-guide.png', href: '/become-a-better-tour-guide/', action: 'Guide opportunities' },
    ],
    ctaTitle: 'Want a tour arranged around you?',
    ctaText: 'Tell us your group size, dates and preferred style of trip.',
    ctaLabel: 'Start planning',
    ctaHref: connectHref,
  },
};

export const homeSections = [
  {
    title: 'Local Business Network',
    text: 'Trusted introductions to businesses, advisers and practical services across Thailand.',
    image: '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg',
    href: '/local-business-network/',
  },
  {
    title: 'Community Events',
    text: 'Meetups, business lunches and social gatherings that bring people together.',
    image: '/assets/fct/friday-business-networking-lunch.png',
    href: '/community-events/',
  },
  {
    title: 'Tours & Experiences',
    text: 'Explore with trusted local drivers, guides, boat operators and experience providers.',
    image: '/assets/fct/tours-day-trip.jpg',
    href: '/tours-2/',
  },
  {
    title: 'Property',
    text: 'Sales, management, building and buyer support from trusted local contacts.',
    image: '/assets/fct/property-home.jpg',
    href: '/real-estate/',
  },
  {
    title: 'Hire',
    text: 'Reliable local transfers, vehicles and practical services with clear pricing.',
    image: '/assets/fct/hire-bike.jpg',
    href: '/hire/',
  },
  {
    title: 'Local Deals',
    text: 'Food, drinks, services and recommendations that help you live more like a local.',
    image: '/assets/fct/deals-local-life.jpg',
    href: '/local-deals/',
  },
];
