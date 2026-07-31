export type CharityProgram = {
  slug: string;
  title: string;
  text: string;
  image: string;
  details?: CharityProgramDetail[];
};

export type CompletedCharityProgram = {
  title: string;
  date: string;
  text: string;
  image: string;
  href?: string;
};

export type CharityProgramDetail = {
  title: string;
  text: string;
  image?: string;
};

export type CharityRegion = {
  slug: string;
  location: string;
  intro: string;
  sourceName: string;
  sourceUrl: string;
  programs: CharityProgram[];
  completedArchiveSlug?: string;
  completedPrograms?: CompletedCharityProgram[];
};

export type CompletedCharityPage = {
  slug: string;
  title: string;
  location: string;
  intro: string;
  returnHref: string;
  programs: CompletedCharityProgram[];
};

const program = (
  region: string,
  title: string,
  text: string,
  image: string,
  slug?: string,
  details?: CharityProgramDetail[],
): CharityProgram => ({
  slug: slug ?? `${region}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
  title,
  text,
  image,
  details,
});

export const charityRegions: Record<string, CharityRegion> = {
  'bangkok-charity-programs': {
    slug: 'bangkok-charity-programs', location: 'Bangkok',
    intro: 'We support Bangkok charity programs, including projects run by the Rotary Club of Bangkok Foundation.',
    sourceName: 'Rotary Club of Bangkok Foundation',
    sourceUrl: 'https://rcbfoundation.org/',
    programs: [
      program('bangkok', 'Clean Drinking Water Systems', 'Supporting clean drinking water systems, sanitation, and hygiene education for rural schools and communities.', '/assets/fct/charity/bangkok/clean-drinking-water-systems.jpg'),
      program('bangkok', 'Nursing Scholarships', "Helping nursing students in financial hardship continue their studies and supporting Thailand's need for registered nurses.", '/assets/fct/charity/bangkok/kid-s-day-out.jpg', 'bangkok-kid-s-day-out'),
      program('bangkok', 'Children Of The Forest Education Support', 'Helping stateless and migrant children access preparatory education, Thai language support, and safer pathways into school.', '/assets/fct/charity/bangkok/polio-plus.jpg', 'bangkok-polio-plus'),
      program('bangkok', 'Waste Management Learning', 'Supporting waste-management learning, sorting bins, composting, and reusable water bottles at a rural school.', '/assets/fct/charity/bangkok/low-income-communities.jpg', 'bangkok-low-income-communities'),
      program('bangkok', 'Youth Charity Support', 'Helping direct support toward youth programs and community projects where the foundation can use it most effectively.', '/assets/fct/charity/bangkok/youth.jpg', 'bangkok-youth'),
    ],
  },
  'chiang-mai-charity-programs': {
    slug: 'chiang-mai-charity-programs', location: 'Chiang Mai',
    intro: 'We support Chiang Mai charity projects, primarily via the Chiang Mai International Rotary Club, including children, education, health, water safety, community wellbeing and practical support programs.',
    sourceName: 'Chiang Mai International Rotary Club',
    sourceUrl: 'https://www.cmirotary.org/',
    programs: [
      program('chiang-mai', "Children's Water Safety and Drowning Prevention", 'Supporting water survival training for local students, helping children build basic swimming and water-safety skills.', '/assets/fct/charity/chiang-mai/children-s-water-safety-and-drowning-prevention.jpg'),
      program('chiang-mai', 'BCMF B.K. Kee Patient House', 'Helping provide support and accommodation for patients and families who travel to Chiang Mai for medical treatment.', '/assets/fct/charity/chiang-mai/bcmf-b-k-kee-patient-house.jpg'),
      program('chiang-mai', 'B.E.A.M. GED Program', 'Supporting education pathways and opportunities for young people through GED learning and wider community education.', '/assets/fct/charity/chiang-mai/b-e-a-m-ged-program.jpg'),
      program('chiang-mai', 'School Vision Screening', 'Screening school children for eyesight issues and helping children access spectacles so poor vision does not hold back learning.', '/assets/fct/charity/chiang-mai/school-vision-screening.jpg'),
      program('chiang-mai', 'Cultivating a Peace Culture in School', 'Helping students build confidence, discipline and non-violent conflict resolution through peace-culture education.', '/assets/fct/charity/chiang-mai/cultivating-a-peace-culture-in-school.jpg'),
      program('chiang-mai', 'Winter Clothing and School Supplies Appeal', 'Collecting and distributing winter clothing and school supplies for communities that need practical seasonal support.', '/assets/fct/charity/chiang-mai/winter-clothing-and-school-supplies-appeal.jpg'),
      program('chiang-mai', 'Water and Sanitation Project', 'Improving access to cleaner water and sanitation infrastructure for communities across Northern Thailand.', '/assets/fct/charity/chiang-mai/water-and-sanitation-project.jpg'),
      program('chiang-mai', 'Teddy Trekkers Initiative', 'A hands-on initiative supporting children and families through outreach, care packages and community visits.', '/assets/fct/charity/chiang-mai/teddy-trekkers-initiative.jpg'),
      program('chiang-mai', 'Mae Tao Clinic Child Protection', 'Supporting child protection and education work connected with the Mae Tao Clinic community.', '/assets/fct/charity/chiang-mai/mae-tao-clinic-child-protection.jpg'),
      program('chiang-mai', 'Free Food for the Poor Initiative', 'Helping provide food support to vulnerable people and families who need practical assistance.', '/assets/fct/charity/chiang-mai/free-food-for-the-poor-initiative.jpg'),
    ],
  },
  'hua-hin-charity-programs': {
    slug: 'hua-hin-charity-programs', location: 'Hua Hin',
    intro: 'We support several Hua Hin charities, primarily via the Rotary Club of Royal Hua Hin, supporting children, education, health, lifesaving skills and community wellbeing.',
    sourceName: 'Rotary Club of Royal Hua Hin',
    sourceUrl: 'https://rotaryroyalhuahin.org/',
    programs: [
      program('hua-hin', 'Hua Hin Youth Football Championship for Literacy', 'Supporting youth sport, literacy, teamwork, and school community participation in Hua Hin.', '/assets/fct/charity/hua-hin/hua-hin-youth-football-championship-for-literacy.jpg'),
      program('hua-hin', 'Ultrasound Technology Project', 'Helping hospitals improve diagnostic capability through new ultrasound technology and Rotary support.', '/assets/fct/charity/hua-hin/ultrasound-technology-project.jpg'),
      program('hua-hin', 'Police Help Save Lives', 'AED donation and lifesaving training for Hua Hin Police Department first responders.', '/assets/fct/charity/hua-hin/police-help-save-lives.jpg'),
      program('hua-hin', 'World Water Day Service Project', 'Providing drinking water support for local government and community service teams during the hot season.', '/assets/fct/charity/hua-hin/world-water-day-service-project.jpg'),
      program('hua-hin', 'Children Of The Forest', 'Supporting education, healthcare, and child protection for migrant and stateless children and families.', '/assets/fct/charity/hua-hin/children-of-the-forest.jpg'),
      program('hua-hin', 'Library Books For Local Schools', 'Promoting education and literacy with Thai storybooks and dictionaries for school libraries.', '/assets/fct/charity/hua-hin/library-books-for-local-schools.jpg'),
      program('hua-hin', 'Lifesaving Training For Students', 'Hands-on CPR, AED, and choking response training for students in the Hua Hin region.', '/assets/fct/charity/hua-hin/lifesaving-training-for-students.jpg'),
      program('hua-hin', 'University Social Responsibility', 'Student-led service work creating practical support and positive experiences for local children.', '/assets/fct/charity/hua-hin/university-social-responsibility.jpg'),
      program('hua-hin', 'Eyeglasses For Children', 'Providing prescription eyeglasses for children through school support and local partner initiatives.', '/assets/fct/charity/hua-hin/eyeglasses-for-children.jpg'),
      program('hua-hin', 'Water Safety And Drowning Prevention', 'Training children in practical water safety and drowning prevention skills.', '/assets/fct/charity/hua-hin/water-safety-and-drowning-prevention.jpg'),
    ],
  },
  'koh-samui-charity-programs': {
    slug: 'koh-samui-charity-programs', location: 'Koh Samui',
    intro: 'We support several Koh Samui and Koh Phangan charities, primarily via the Rotary Club of Samui-Phangan.',
    sourceName: 'Rotary Club of Samui-Phangan',
    sourceUrl: 'https://rotarysamui-phangan.org/',
    programs: [
      program('koh-samui', 'Koh Samui Surf Lifesaving Club', 'Supporting ocean safety, lifesaving skills, and swimming confidence for local children and families.', '/assets/fct/charity/koh-samui/koh-samui-surf-lifesaving-club.jpeg', 'koh-samui-surf-lifesaving-club', [
        { title: 'Support The Program', text: 'Help the club keep practical ocean safety training available for local children and families. Every bit of support helps the program reach more kids.', image: '/assets/fct/charity/koh-samui/koh-samui-surf-lifesaving-club.jpeg' },
        { title: 'Ocean Awareness', text: 'Beach awareness and lifesaving education give families more confidence around the water. The goal is safer days on Samui beaches.', image: '/assets/fct/home-rotator-beach.jpg' },
        { title: 'Safety Skills', text: 'Children learn swimming confidence, ocean safety, and practical skills they can use. The program builds stronger swimmers and safer habits.', image: '/assets/fct/beach-1-scaled.jpg' },
        { title: 'Get Involved', text: 'First Contact can connect volunteers, sponsors, and donors with the Surf Lifesaving Club team. Tell us how you would like to help.', image: '/assets/fct/beach-walk-community.jpg' },
      ]),
      program('koh-samui', 'Think Pink Samui', 'Supporting breast imaging services, screening days, awareness campaigns, and early detection for women on Koh Samui.', '/assets/fct/charity/koh-samui/think-pink-samui.jpg', 'think-pink-samui', [
        { title: 'Program Overview', text: 'Think Pink Samui supports breast imaging services, screening days, awareness campaigns, and earlier detection for women on Koh Samui.', image: '/assets/fct/charity/koh-samui/think-pink-samui.jpg' },
        { title: 'Who It Helps', text: 'The program helps women and families access local breast-screening awareness and practical health information before problems are found too late.', image: '/assets/fct/charity/koh-samui/think-pink-samui-dr-kris.jpg' },
        { title: 'How Support Helps', text: 'Support helps keep clear screening information, local awareness material, hospital links, and outreach visible across the Samui community.', image: '/assets/fct/charity/koh-samui/think-pink-samui-english-info.jpg' },
        { title: 'Get Involved', text: 'First Contact can collect your enquiry and connect you with the right local route if you want to support Think Pink Samui.', image: '/assets/fct/charity/koh-samui/think-pink-samui-logo.png' },
      ]),
      program('koh-samui', 'Support 4 Autism', 'Helping the Learning Center for Magical Autistic Children with teachers, transport, supplies, activities, and family support.', '/assets/fct/charity/koh-samui/support-4-autism.jpg', 'support-4-autism-samui', [
        { title: 'Program Overview', text: 'Support 4 Autism helps the Learning Center for Magical Autistic Children with teachers, transport, supplies, activities, and family support.', image: '/assets/fct/charity/koh-samui/support-4-autism.jpg' },
        { title: 'Who It Helps', text: 'The program supports children, carers, teachers, and families who benefit from patient learning support and practical day-to-day help.', image: '/assets/fct/charity/koh-samui/support-4-autism-classroom.jpg' },
        { title: 'How Support Helps', text: 'Support can help with learning materials, transport, activities, pool sessions, family support, and the running costs that keep the centre moving.', image: '/assets/fct/charity/koh-samui/support-4-autism-swimming-session.jpg' },
        { title: 'Get Involved', text: 'First Contact can collect your enquiry and connect you with the right local route if you want to support the autism program.', image: '/assets/fct/charity/koh-samui/support-4-autism-mac-logo.jpg' },
      ]),
      program('koh-samui', 'Swim 4 Life', 'Free water-safety and swimming lessons for local children, helping reduce child drowning risk on Samui.', '/assets/fct/charity/koh-samui/swim-4-life.jpeg', 'swim-4-life-samui', [
        { title: 'Program Overview', text: 'Swim 4 Life gives local children free water-safety and swimming lessons so they can build confidence and reduce drowning risk.', image: '/assets/fct/charity/koh-samui/swim-4-life.jpeg' },
        { title: 'Who It Helps', text: 'The program helps Samui children, schools, and families build safer habits around pools, beaches, and everyday island life near water.', image: '/assets/fct/charity/koh-samui/swim-4-life-water-safety-session.jpg' },
        { title: 'How Support Helps', text: 'Support can help with instructors, pool time, transport, teaching aids, safety equipment, and practical coordination for each lesson group.', image: '/assets/fct/charity/koh-samui/swim-4-life-coaching.jpg' },
        { title: 'Get Involved', text: 'First Contact can collect your enquiry and connect you with the right local route if you want to support Swim 4 Life.', image: '/assets/fct/charity/koh-samui/swim-4-life-graduation.jpg' },
      ]),
    ],
    completedArchiveSlug: 'koh-samui-completed-charity-programs',
    completedPrograms: [
      {
        title: 'Food 4 Life',
        date: 'Completed program',
        text: 'Essential supplies were provided to local families affected by hardship and the collapse of tourism during Covid.',
        image: '/assets/fct/charity/koh-samui/food-4-life.jpg',
      },
      {
        title: 'Defibs 4 Samui',
        date: 'Completed program',
        text: 'Public emergency response was strengthened by helping place AED defibrillators with rescue teams around Samui.',
        image: '/assets/fct/charity/koh-samui/defibs-4-samui.jpg',
      },
    ],
  },
  'pattaya-charity-programs': {
    slug: 'pattaya-charity-programs', location: 'Pattaya',
    intro: 'We support several Pattaya charity projects, primarily via the Rotary Club of Pattaya.',
    sourceName: 'Rotary Club of Pattaya',
    sourceUrl: 'https://www.rotarypattaya.com/',
    programs: [
      program('pattaya', 'Young Entrepreneurs Fair', 'Supporting young people with practical enterprise experience and community-led opportunities.', '/assets/fct/charity/pattaya/young-entrepreneurs-fair.jpg'),
      program('pattaya', 'Drinking Water', 'Helping provide access to safe drinking water and practical health support for local communities.', '/assets/fct/drinking-scaled.jpg'),
      program('pattaya', 'Promoting Peace', 'Children use art to express peace, with proceeds supporting scholarships and local Rotary charities.', '/assets/fct/charity/pattaya/promoting-peace.webp'),
      program('pattaya', 'Shop Local Too!', 'Encouraging local support and community connection through Rotary Pattaya initiatives.', '/assets/fct/charity/pattaya/shop-local-too.webp', undefined, [
        { title: 'Program Overview', text: 'Shop Local Too! encourages residents and visitors to support local businesses, local services, and community initiatives in Pattaya.', image: '/assets/fct/charity/pattaya/shop-local-too.webp' },
        { title: 'Who It Helps', text: 'The program helps local operators, community groups, and residents by keeping more support circulating through the Pattaya community.', image: '/assets/fct/deals-local-life.jpg' },
        { title: 'How Support Helps', text: 'Support can help promote local traders, connect people with useful services, and keep community-focused projects visible.', image: '/assets/fct/hero-network.jpg' },
        { title: 'Get Involved', text: 'First Contact can collect your enquiry and connect you with the right local route if you want to support or participate in the program.', image: '/assets/fct/contact-community.jpg' },
      ]),
      program('pattaya', 'Save a Childs Eyes', 'Providing eye tests and glasses for underprivileged children who need help to learn at school.', '/assets/fct/charity/pattaya/save-a-childs-eyes.webp'),
      program('pattaya', 'LIVE LOVE program', 'Helping vulnerable children and carers build confidence, healthy choices, and happier futures.', '/assets/fct/charity/pattaya/live-love-program.webp'),
    ],
    completedArchiveSlug: 'pattaya-completed-charity-programs',
    completedPrograms: [
      {
        title: 'COVID Protection',
        date: 'Completed program',
        text: 'Community protection work supported safer local health outcomes during the Covid period.',
        image: '/assets/fct/charity/pattaya/covid-protection.webp',
      },
    ],
  },
  'phuket-charity-programs': {
    slug: 'phuket-charity-programs', location: 'Phuket',
    intro: 'We support several Phuket charities, primarily via the Rotary Club of Patong Beach, supporting children, safety, emergency response, education and local community wellbeing.',
    sourceName: 'Rotary Club of Patong Beach',
    sourceUrl: 'https://www.rotarypatong.org/',
    programs: [
      program('phuket', 'Save A Child Swim Program', 'Supporting basic swimming and water-survival skills for local school children.', '/assets/fct/charity/phuket/save-a-child-swim-program.png'),
      program('phuket', 'Safe Roads Project', 'Improving road safety with safer crossings, U-turns, lights, and road-safety upgrades.', '/assets/fct/charity/phuket/safe-roads-project.png'),
      program('phuket', 'Rescue Boat Patong Beach', 'Supporting Patong lifeguards with rescue capability and emergency sea-safety response.', '/assets/fct/charity/phuket/rescue-boat-patong-beach.png'),
      program('phuket', 'Tsunami Scholarship Program', 'Helping students with ongoing education support after the 2004 Indian Ocean tsunami.', '/assets/fct/charity/phuket/tsunami-scholarship-program.jpg'),
      program('phuket', 'AED Pads', 'Supporting rapid-response emergency care with AED equipment and replacement pads.', '/assets/fct/charity/phuket/aed-pads.png'),
    ],
  },
};

export const charityPrograms = Object.values(charityRegions).flatMap((region) =>
  region.programs.map((item) => ({
    ...item,
    location: region.location,
    regionSlug: region.slug,
    sourceName: region.sourceName,
    sourceUrl: region.sourceUrl,
  })),
);

export const completedCharityPages: CompletedCharityPage[] = Object.values(charityRegions)
  .filter((region) => region.completedArchiveSlug && region.completedPrograms?.length)
  .map((region) => ({
    slug: region.completedArchiveSlug as string,
    title: `${region.location} Completed Charity Programs`,
    location: region.location,
    intro: `Completed charity programs and past community support work in ${region.location}.`,
    returnHref: `/${region.slug}/`,
    programs: region.completedPrograms as CompletedCharityProgram[],
  }));
