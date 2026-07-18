export type CommunityEvent = {
  slug: string;
  title: string;
  start: string;
  end: string;
  venue: string;
  excerpt: string;
  image: string;
  allDay?: boolean;
};

type RecurringEvent = Omit<CommunityEvent, 'slug' | 'start' | 'end'> & {
  slugPrefix: string;
  dates: string[];
  startTime: string;
  endTime: string;
};

const recurring = ({ slugPrefix, dates, startTime, endTime, ...event }: RecurringEvent): CommunityEvent[] =>
  dates.map((date) => ({
    ...event,
    slug: `${slugPrefix}-${date}`,
    start: `${date}T${startTime}:00+07:00`,
    end: `${date}T${endTime}:00+07:00`,
  }));

export const communityEvents: CommunityEvent[] = [
  ...recurring({
    slugPrefix: 'beach-walk-koh-samui-weekly',
    dates: ['2026-07-18', '2026-07-25', '2026-08-01', '2026-08-08', '2026-08-15', '2026-08-22'],
    startTime: '16:00',
    endTime: '18:00',
    title: 'Beach Walk',
    venue: 'Koh Samui',
    excerpt: 'A relaxed weekly beach walk for meeting people, getting outside and staying connected with the Koh Samui community.',
    image: '/assets/fct/beach-walk-community.jpg',
  }),
  ...recurring({
    slugPrefix: 'ai-community-meeting-nature-bar-maenam-weekly',
    dates: ['2026-07-22', '2026-07-29', '2026-08-05', '2026-08-12', '2026-08-19'],
    startTime: '16:00',
    endTime: '18:00',
    title: 'AI Community Meeting',
    venue: 'Nature Bar, Maenam Beach',
    excerpt: 'A weekly AI community meeting for practical conversations, local projects, new tools and useful business ideas.',
    image: '/assets/fct/ai-community-meeting.jpeg',
  }),
  ...recurring({
    slugPrefix: 'pub-quiz-nature-bar-maenam-beach-weekly',
    dates: ['2026-07-23', '2026-07-30', '2026-08-06', '2026-08-13', '2026-08-20'],
    startTime: '19:00',
    endTime: '21:45',
    title: 'Pub Quiz',
    venue: 'Nature Bar, Maenam Beach',
    excerpt: 'A friendly weekly pub quiz for teams, visitors and locals who enjoy a relaxed social evening by the beach.',
    image: '/assets/fct/pub-quiz-nature-bar.jpeg',
  }),
  ...recurring({
    slugPrefix: 'business-networking-lunch-nature-bar-maenam-weekly',
    dates: ['2026-07-24', '2026-07-31', '2026-08-07', '2026-08-14', '2026-08-21'],
    startTime: '15:00',
    endTime: '17:00',
    title: 'Business Networking Lunch',
    venue: 'Nature Bar, Maenam Beach',
    excerpt: 'A relaxed weekly business lunch for useful introductions, referrals and collaboration across the local community.',
    image: '/assets/fct/friday-business-networking-lunch.png',
  }),
  {
    slug: 'hua-hin-charity-golf-classic-2026',
    title: '16th Annual Amateur Charity Golf Classic',
    start: '2026-11-27T00:00:00+07:00',
    end: '2026-11-27T23:59:59+07:00',
    venue: 'Pineapple Valley Golf Club Hua Hin',
    excerpt: 'The Rotary Club of Royal Hua Hin charity golf event supporting community projects in and around Hua Hin.',
    image: '/assets/fct/hua-hin-charity-golf-classic-20261127.jpeg',
    allDay: true,
  },
].sort((left, right) => left.start.localeCompare(right.start));
