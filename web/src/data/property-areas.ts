export type PropertyArea = {
  slug: string;
  name: string;
  intro: string;
  image: string;
};

export const propertyAreas: PropertyArea[] = [
  { slug: 'koh-samui', name: 'Koh Samui', intro: 'Luxury villas, sea-view homes, beachfront estates, apartments, and land across Koh Samui.', image: '/assets/fct/property-areas/koh-samui.jpg' },
  { slug: 'koh-phangan', name: 'Koh Phangan', intro: 'Koh Phangan villas, island homes, land, sea-view property, and investment listings.', image: '/assets/fct/property-areas/koh-phangan.jpg' },
  { slug: 'bangkok', name: 'Bangkok', intro: 'Bangkok condos, houses, CBD residences, Sukhumvit homes, and investment property routes.', image: '/assets/fct/property-areas/bangkok.jpg' },
  { slug: 'pattaya', name: 'Pattaya', intro: 'Pattaya, Jomtien, Wong Amat, Pratumnak, Na Jomtien, and East Pattaya sales listings.', image: '/assets/fct/property-areas/pattaya.jpg' },
  { slug: 'phuket', name: 'Phuket', intro: 'Phuket villas, penthouses, condos, land, and luxury investment property listings.', image: '/assets/fct/property-areas/phuket.jpg' },
  { slug: 'krabi', name: 'Krabi', intro: 'Krabi villas, coastal homes, land, resort-area property, and investment listings.', image: '/assets/fct/property-building.jpg' },
  { slug: 'chiang-mai', name: 'Chiang Mai', intro: 'Chiang Mai homes, condos, land, and lifestyle property listings.', image: '/assets/fct/property-areas/chiang-mai.jpg' },
  { slug: 'hua-hin', name: 'Hua Hin', intro: 'Hua Hin villas, condos, golf-area homes, coastal homes, and retirement property listings.', image: '/assets/fct/property-areas/hua-hin.jpg' },
];

export const propertyAreaBySlug = Object.fromEntries(propertyAreas.map((area) => [area.slug, area]));
