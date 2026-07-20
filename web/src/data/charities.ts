export type CharityProgram = {
  slug: string;
  title: string;
  text: string;
  image: string;
};

export type CharityRegion = {
  slug: string;
  location: string;
  intro: string;
  programs: CharityProgram[];
};

const program = (region: string, title: string, text: string, image: string, slug?: string): CharityProgram => ({
  slug: slug ?? `${region}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
  title,
  text,
  image,
});

export const charityRegions: Record<string, CharityRegion> = {
  'bangkok-charity-programs': {
    slug: 'bangkok-charity-programs', location: 'Bangkok',
    intro: 'We support practical education, health, water and community projects in Bangkok through trusted local partners.',
    programs: [
      program('bangkok', 'Clean Drinking Water Systems', 'Supporting clean drinking water systems, sanitation, and hygiene education for rural schools and communities.', '/assets/fct/drinking-scaled.jpg'),
      program('bangkok', "Kid's Day Out", "Rotary nursing scholarships help students in financial hardship and support Thailand's need for registered nurses.", '/assets/fct/hero-community.jpg'),
      program('bangkok', 'Polio Plus', 'Helping stateless children access preparatory education, Thai language support, and safer pathways into school.', '/assets/fct/contact-community.jpg'),
      program('bangkok', 'Low Income Communities', 'Supporting waste-management learning, sorting bins, composting, and reusable water bottles at a rural school.', '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg'),
      program('bangkok', 'Youth', 'Choose the Rotary category you prefer, or let the foundation allocate support where it is most helpful.', '/assets/fct/past-event-songkran-family-beach-party-13-april.jpeg'),
    ],
  },
  'chiang-mai-charity-programs': {
    slug: 'chiang-mai-charity-programs', location: 'Chiang Mai',
    intro: 'We support Chiang Mai projects focused on children, healthcare, education, water safety and practical community care.',
    programs: [
      program('chiang-mai', "Children's Water Safety and Drowning Prevention", 'Supporting water survival training for local students, helping children build basic swimming and water-safety skills.', '/assets/fct/chiang-mai-water-safety.jpg'),
      program('chiang-mai', 'BCMF B.K. Kee Patient House', 'Helping provide support and accommodation for patients and families who travel to Chiang Mai for medical treatment.', '/assets/fct/chiang-mai-patient-house.jpg'),
      program('chiang-mai', 'B.E.A.M. GED Program', 'Supporting education pathways and opportunities for young people through GED learning and wider community education.', '/assets/fct/chiang-mai-beam-ged.jpg'),
      program('chiang-mai', 'School Vision Screening', 'Screening school children for eyesight issues and helping children access spectacles so poor vision does not hold back learning.', '/assets/fct/chiang-mai-vision-screening.jpg'),
      program('chiang-mai', 'Cultivating a Peace Culture in School', 'Helping students build confidence, discipline and non-violent conflict resolution through peace-culture education.', '/assets/fct/chiang-mai-peace-culture.jpg'),
      program('chiang-mai', 'Winter Clothing and School Supplies Appeal', 'Collecting and distributing winter clothing and school supplies for communities that need practical seasonal support.', '/assets/fct/chiang-mai-winter-supplies.jpg'),
      program('chiang-mai', 'Water and Sanitation Project', 'Improving access to cleaner water and sanitation infrastructure for communities across Northern Thailand.', '/assets/fct/chiang-mai-water-sanitation.jpg'),
      program('chiang-mai', 'Teddy Trekkers Initiative', 'A hands-on initiative supporting children and families through outreach, care packages and community visits.', '/assets/fct/chiang-mai-teddy-trekkers.jpg'),
      program('chiang-mai', 'Mae Tao Clinic Child Protection', 'Supporting child protection and education work connected with the Mae Tao Clinic community.', '/assets/fct/chiang-mai-child-protection.jpg'),
      program('chiang-mai', 'Free Food for the Poor Initiative', 'Helping provide food support to vulnerable people and families who need practical assistance.', '/assets/fct/chiang-mai-free-food.jpg'),
    ],
  },
  'hua-hin-charity-programs': {
    slug: 'hua-hin-charity-programs', location: 'Hua Hin',
    intro: 'We support Hua Hin projects focused on children, literacy, healthcare, water safety and emergency response.',
    programs: [
      program('hua-hin', 'Hua Hin Youth Football Championship for Literacy', 'Supporting youth sport, literacy, teamwork, and school community participation in Hua Hin.', '/assets/fct/hero-community.jpg'),
      program('hua-hin', 'Ultrasound Technology Project', 'Helping hospitals improve diagnostic capability through new ultrasound technology and Rotary support.', '/assets/fct/contact-community.jpg'),
      program('hua-hin', 'Police Help Save Lives', 'AED donation and lifesaving training for Hua Hin Police Department first responders.', '/assets/fct/hua-hin-charity-golf-classic-20261127.jpeg'),
      program('hua-hin', 'World Water Day Service Project', 'Providing drinking water support for local government and community service teams during the hot season.', '/assets/fct/drinking-scaled.jpg'),
      program('hua-hin', 'Children Of The Forest', 'Supporting education, healthcare, and child protection for migrant and stateless children and families.', '/assets/fct/PHOTO-2025-10-11-09-28-41-2.jpg'),
      program('hua-hin', 'Library Books For Local Schools', 'Promoting education and literacy with Thai storybooks and dictionaries for school libraries.', '/assets/fct/hero-network.jpg'),
      program('hua-hin', 'Lifesaving Training For Students', 'Hands-on CPR, AED, and choking response training for students in the Hua Hin region.', '/assets/fct/beach-walk-community.jpg'),
      program('hua-hin', 'University Social Responsibility', 'Student-led service work creating practical support and positive experiences for local children.', '/assets/fct/ai-community-meeting.jpeg'),
      program('hua-hin', 'Eyeglasses For Children', 'Providing prescription eyeglasses for children through school support and local partner initiatives.', '/assets/fct/contact-community.jpg'),
      program('hua-hin', 'Water Safety And Drowning Prevention', 'Training children in practical water safety and drowning prevention skills.', '/assets/fct/beach-1-scaled.jpg'),
    ],
  },
  'koh-samui-charity-programs': {
    slug: 'koh-samui-charity-programs', location: 'Koh Samui',
    intro: 'We support Koh Samui and Koh Phangan charities through practical local projects and trusted community groups.',
    programs: [
      program('koh-samui', 'Koh Samui Surf Lifesaving Club', 'Supporting ocean safety, lifesaving skills, and swimming confidence for local children and families.', '/assets/fct/beach-walk-community.jpg', 'koh-samui-surf-lifesaving-club'),
      program('koh-samui', 'Think Pink Samui', 'Supporting breast imaging services, screening days, awareness campaigns, and early detection for women on Koh Samui.', '/assets/fct/gym-copy-scaled.jpg', 'think-pink-samui'),
      program('koh-samui', 'Support 4 Autism', 'Helping the Learning Center for Magical Autistic Children with teachers, transport, supplies, activities, and family support.', '/assets/fct/hero-community.jpg', 'support-4-autism-samui'),
      program('koh-samui', 'Swim 4 Life', 'Free water-safety and swimming lessons for local children, helping reduce child drowning risk on Samui.', '/assets/fct/beach-1-scaled.jpg', 'swim-4-life-samui'),
      program('koh-samui', 'Defibs 4 Samui', 'Supporting public emergency response by helping place AED defibrillators with rescue teams around Samui.', '/assets/fct/contact-community.jpg', 'defibs-4-samui'),
      program('koh-samui', 'Food 4 Life', 'Providing essential supplies to local families affected by hardship and the collapse of tourism during Covid.', '/assets/fct/alexandra-tran-VW0bzb90oMA-unsplash-scaled.jpg', 'food-4-life-samui'),
    ],
  },
  'pattaya-charity-programs': {
    slug: 'pattaya-charity-programs', location: 'Pattaya',
    intro: 'We support Pattaya charity projects focused on young people, health, education, peace and local community connection.',
    programs: [
      program('pattaya', 'Young Entrepreneurs Fair', 'Supporting young people with practical enterprise experience and community-led opportunities.', '/assets/fct/hero-network.jpg'),
      program('pattaya', 'Rotary Drinking Water', 'Helping provide access to safe drinking water and practical health support for local communities.', '/assets/fct/drinking-scaled.jpg'),
      program('pattaya', 'COVID Protection', 'Community protection work supporting safer local health outcomes.', '/assets/fct/pattaya-covid-protection.webp'),
      program('pattaya', 'Promoting Peace', 'Children use art to express peace, with proceeds supporting scholarships and local Rotary charities.', '/assets/fct/pattaya-promoting-peace.webp'),
      program('pattaya', 'Shop Local Too!', 'Encouraging local support and community connection through Rotary Pattaya initiatives.', '/assets/fct/pattaya-shop-local-too.webp'),
      program('pattaya', 'Save a Childs Eyes', 'Providing eye tests and glasses for underprivileged children who need help to learn at school.', '/assets/fct/pattaya-save-a-childs-eyes.webp'),
      program('pattaya', 'LIVE LOVE program', 'Helping vulnerable children and carers build confidence, healthy choices, and happier futures.', '/assets/fct/pattaya-live-love-program.webp'),
    ],
  },
  'phuket-charity-programs': {
    slug: 'phuket-charity-programs', location: 'Phuket',
    intro: 'We support Phuket charities focused on children, safety, emergency response, education and community wellbeing.',
    programs: [
      program('phuket', 'Save A Child Swim Program', 'Supporting basic swimming and water-survival skills for local school children.', '/assets/fct/beach-walk-community.jpg'),
      program('phuket', 'Safe Roads Project', 'Improving road safety with safer crossings, U-turns, lights, and road-safety upgrades.', '/assets/fct/pattaya-circuit.png'),
      program('phuket', 'Rescue Boat Patong Beach', 'Supporting Patong lifeguards with rescue capability and emergency sea-safety response.', '/assets/fct/tours-islands.jpg'),
      program('phuket', 'Tsunami Scholarship Program', 'Helping students with ongoing education support after the 2004 Indian Ocean tsunami.', '/assets/fct/hero-community.jpg'),
      program('phuket', 'AED Pads', 'Supporting rapid-response emergency care with AED equipment and replacement pads.', '/assets/fct/contact-community.jpg'),
    ],
  },
};

export const charityPrograms = Object.values(charityRegions).flatMap((region) =>
  region.programs.map((item) => ({ ...item, location: region.location, regionSlug: region.slug })),
);
