export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = NavChild & {
  children?: NavChild[];
};

export type ServiceCard = {
  title: string;
  text: string;
  image?: string;
  href?: string;
  action?: string;
  meta?: string;
};

export type PriorityPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  heroText: string;
  heroImage: string;
  cards: ServiceCard[];
  gridColumns?: 3 | 4;
  ctaLabel?: string;
  ctaHref?: string;
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
    ],
  },
  { label: 'Health & Fitness', href: '/health-fitness/' },
  { label: 'Hire', href: '/hire/' },
  { label: 'Local Business Network', href: '/local-business-network/' },
  { label: 'Local Deals', href: '/local-deals/' },
  { label: 'Move to Thailand Guide', href: '/moving-to-samui/' },
  {
    label: 'Property',
    href: '/real-estate/',
    children: [
      { label: 'Property Overview', href: '/real-estate/' },
      {
        label: 'Property Sales',
        href: '/property-sales/',
        children: [
          { label: 'Koh Samui', href: '/property-sales/koh-samui/' },
          { label: 'Koh Phangan', href: '/property-sales/koh-phangan/' },
          { label: 'Bangkok', href: '/property-sales/bangkok/' },
          { label: 'Pattaya', href: '/property-sales/pattaya/' },
          { label: 'Phuket', href: '/property-sales/phuket/' },
          { label: 'Krabi', href: '/property-sales/krabi/' },
          { label: 'Chiang Mai', href: '/property-sales/chiang-mai/' },
          { label: 'Hua Hin', href: '/property-sales/hua-hin/' },
        ],
      },
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
    description: 'Connect with trusted local businesses, advisers and service providers across Thailand.',
    heroText: 'Our collective network includes over 500 businesses, bringing together locals and expats to connect people with trusted services throughout Thailand.',
    heroImage: '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg',
    gridColumns: 3,
    cards: [
      { title: 'Affiliate Marketing', text: 'Build trusted referral partnerships across Thailand and connect with businesses that can help your customers.', image: '/assets/fct/Marketing-scaled.jpg' },
      { title: 'AI Community', text: 'Connect with local founders, operators, and business owners using practical tools to work smarter.', image: '/assets/fct/ai-community-local-business-network-20260530.jpeg' },
      { title: 'Business Done 4 U', text: 'Get practical local support for setting up, improving, and running your business in Thailand.', image: '/assets/fct/start-up-scaled.jpg' },
      { title: 'Co Working Spaces', text: 'Find flexible workspaces, meeting places, and local business hubs.', image: '/assets/fct/co-working-scaled.jpg' },
      { title: 'Crypto Education & Business', text: 'Connect with local crypto education, online business, and digital opportunity support.', image: '/assets/fct/crypto-scaled.jpg' },
      { title: 'Insurance', text: 'Speak with trusted partners about personal, business, health, vehicle, property, and travel insurance.', image: '/assets/fct/insurance-scaled.jpg' },
      { title: 'Legal Services', text: 'Connect with advisers for company setup, contracts, property checks, and business structure.', image: '/assets/fct/legal-scaled.jpg' },
      { title: 'Marketing & Media', text: 'Get introduced to creative, social media, design, and business promotion support.', image: '/assets/fct/marketing-media.jpg' },
      { title: 'Nanny Services', text: 'Find trusted family support, child care, and practical help through local contacts.', image: '/assets/fct/nanny-scaled.jpg' },
      { title: 'Property Support', text: 'Connect with trusted property sales, management, building, and buyer support.', image: '/assets/fct/b.networking-scaled.jpg' },
      { title: 'Remote & Online Work', text: 'Explore practical remote work, online job, and income opportunities.', image: '/assets/fct/remote-scaled.jpg' },
      { title: 'Solar', text: 'Connect with local solar and practical home improvement support.', image: '/assets/fct/solar-scaled.jpg' },
      { title: 'Tours & Entertainment', text: 'Find trusted tours, local experiences, entertainment, and event partners.', image: '/assets/fct/Hero-Images-copy-2-scaled.jpg' },
      { title: 'Visas', text: 'Get introduced to local visa support for retirement, business, family, education, and long-stay planning.', image: '/assets/fct/visias-scaled.jpg' },
      { title: 'Water - Drink Healthy', text: 'Find trusted water, drinking water, and home supply contacts.', image: '/assets/fct/drinking-scaled.jpg' },
      { title: 'Weddings', text: 'Connect with local wedding, event, and celebration partners.', image: '/assets/fct/photo-1502635385003-ee1e6a1a742d.avif' },
    ],
    ctaLabel: 'Contact us and we will connect you with our trusted local business partners',
    ctaHref: '/contact-link/?topic=Local%20Business%20Network',
  },
  'community-events': {
    slug: 'community-events',
    title: 'Socialising in Samui',
    seoTitle: 'Koh Samui Community Events | First Contact Thailand',
    description: 'Discover community events, meetups and business gatherings on Koh Samui.',
    heroText: 'Check out our community events on Samui.',
    heroImage: '/assets/fct/ai-community-meeting.jpeg',
    gridColumns: 3,
    cards: [
      { title: 'AI Meet Up', text: 'Weekly Wednesdays, 4:00 pm - 6:00 pm at Nature Bar, Maenam.', image: '/assets/fct/ai-community-meeting.jpeg', href: '/event/ai-community-meeting-nature-bar-maenam-weekly-2026-07-22/', action: 'Ask about this event' },
      { title: 'Crypto Community Gathering', text: 'Weekly Wednesdays, 4:00 pm - 6:00 pm at Nature Bar, Maenam.', image: '/assets/fct/past-event-crypto-community-gathering.jpeg', href: '/contact-link/?topic=Crypto%20Community%20Gathering', action: 'Ask about this event' },
      { title: 'Pub Quiz', text: 'Weekly Thursdays, 7:00 pm - 9:45 pm at Nature Bar, Maenam.', image: '/assets/fct/pub-quiz-nature-bar.jpeg', href: '/event/pub-quiz-nature-bar-maenam-beach-weekly-2026-07-23/', action: 'Ask about this event' },
      { title: 'Business Lunch', text: 'Weekly Fridays, 3:00 pm - 5:00 pm at Nature Bar, Maenam.', image: '/assets/fct/friday-business-networking-lunch.png', href: '/event/business-networking-lunch-nature-bar-maenam-weekly-2026-07-24/', action: 'Ask about this event' },
      { title: 'Beach Walk', text: 'Weekly Saturdays, 4:00 pm - 6:00 pm.', image: '/assets/fct/beach-walk-community.jpg', href: '/event/beach-walk-koh-samui-weekly-2026-07-18/', action: 'Ask about this event' },
    ],
    ctaLabel: 'Check out our previous events',
    ctaHref: '/past-events/',
    secondaryLabel: 'Let us know if you have a community event coming up',
    secondaryHref: '/contact-link/?topic=Samui%20community%20event',
  },
  hire: {
    slug: 'hire',
    title: 'Hire Trusted Local Services',
    seoTitle: 'Hire Trusted Local Services | First Contact Thailand',
    description: 'Hire trusted local drivers, vehicles and service providers through First Contact Thailand.',
    heroText: 'Avoid overcharging, unreliable providers, and confusing local arrangements. We connect you with trusted local partners who offer fair prices and reliable service.',
    heroImage: '/assets/fct/air-scaled.jpg',
    gridColumns: 3,
    cards: [
      { title: 'Airport Transfers', text: 'Airport worries? Not with us. Reliable local drivers, fair transparent prices, and no hidden extras.', image: '/assets/fct/air-scaled.jpg' },
      { title: 'Vehicle Hire', text: 'Trusted local partners for cars, bikes, and practical transport support, with clear prices and local backup.', image: '/assets/fct/scooter-scaled.jpg' },
      { title: 'Local Services', text: 'Book trusted local partners who are vetted, reliable, fairly priced, and ready to help you get things done.', image: '/assets/fct/hire-services.jpg' },
    ],
    ctaLabel: 'Click here and we will connect you with our trusted local partners.',
    ctaHref: '/contact-link/?topic=Hire%20Trusted%20Local%20Services',
  },
  'local-deals': {
    slug: 'local-deals',
    title: 'Local Deals',
    seoTitle: 'Local Deals in Thailand | First Contact Thailand',
    description: 'Find local food, drink, travel and lifestyle deals through trusted First Contact recommendations.',
    heroText: 'Enjoy our exclusive local deals and live like a true local.',
    heroImage: '/assets/fct/photo-1514362545857-3bc16c4c7d1b.avif',
    gridColumns: 3,
    cards: [
      { title: 'Drink Like a Local', text: 'Hate paying tourist prices? We will guide you straight to the best local happy hours and insider specials.', image: '/assets/fct/photo-1514362545857-3bc16c4c7d1b.avif' },
      { title: 'Eat Like a Local', text: 'Hate paying tourist prices? We will show you where the locals eat, drink, and celebrate.', image: '/assets/fct/photo-1555396273-367ea4eb4db5.avif' },
      { title: 'Live Like a Local', text: 'Discover how to shop, eat, travel, and enjoy Thailand at local rates with trusted local recommendations.', image: '/assets/fct/photo-1504674900247-0877df9cc836.avif' },
    ],
    ctaLabel: 'Tell us which local deal you would like to claim',
    ctaHref: '/contact-link/?topic=Local%20Deals',
  },
  'health-fitness': {
    slug: 'health-fitness',
    title: 'Health & Fitness',
    seoTitle: 'Health, Fitness & Wellness | First Contact Thailand',
    description: 'Find local fitness, health support and wellness connections through First Contact Thailand.',
    heroText: 'Discover practical local fitness, health and wellness support while connecting with the community.',
    heroImage: '/assets/fct/beach-1-scaled.jpg',
    gridColumns: 3,
    cards: [
      { title: "Womens Health & Wellness", text: "Several amazing events are held weekly to support womens health. Some of our members also offer a range of womens health products.", image: '/assets/fct/gym-scaled.jpg' },
      { title: "Mens Health & Wellness", text: "We care about mens health. Our community can connect you with trusted mens health and wellness programs.", image: '/assets/fct/gym-copy-scaled.jpg' },
      { title: 'Personal Products', text: 'Personal products are important. When you look good you feel good. We can connect you with trusted community partners for products and support.', image: '/assets/fct/personal-scaled.jpg' },
    ],
    ctaLabel: 'Ask about health and fitness',
    ctaHref: '/contact-link/?topic=Health%20and%20Fitness',
  },
  'tours-2': {
    slug: 'tours-2',
    title: 'Tours',
    seoTitle: 'Tours and Local Experiences | First Contact Thailand',
    description: 'Connect with trusted local drivers, boat operators, guides and experience providers across Thailand.',
    heroText: 'Connect with trusted local drivers, boat operators, tour guides, and experience providers across Thailand.',
    heroImage: '/assets/fct/Hero-Images-copy-2-scaled.jpg',
    gridColumns: 4,
    cards: [
      { title: 'Customise Your Own Day Trip', text: 'Explore like a local with trusted drivers, boat operators, and guides who tailor every trip to your needs.', image: '/assets/fct/Hero-Images-copy-2-scaled.jpg', href: '/contact-link/?topic=Customise%20Your%20Own%20Day%20Trip', action: 'Connect with local partners' },
      { title: 'Full Moon Parties', text: 'Safe, stylish Full Moon Party experiences arranged around your group with trusted local support.', image: '/assets/fct/1-scaled.jpg', href: '/assets/fct/full-moon-party-vip-trip-29-june-2026.jpeg', action: 'Book your Full Moon trip' },
      { title: 'Other Tours', text: 'Discover hidden gems and authentic local experiences while supporting trusted local partners.', image: '/assets/fct/11-scaled.jpg', href: '/other-tours/', action: 'View other tours' },
      { title: 'Become a Better Tour Guide', text: 'Elevate the way you create guest experiences while learning how to maximise your commissions.', image: '/assets/fct/tour-guide-fun-pic-20260609.png', href: '/become-a-better-tour-guide/', action: 'Find out more' },
    ],
  },
};
