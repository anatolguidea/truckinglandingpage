// App-wide constants and configuration
export const COMPANY_INFO = {
  name: 'Nomad Express Group',
  phone: {
    transportation: '(508) 292-3152',
    employment: '(815) 207-3622'
  },
  email: 'office@nomadexpressgroup.com',
  hrEmail: 'hr@nomadexpressgroup.com',
  established: '2018',
  address: {
    street: '1019 Caton Farm Rd',
    city: 'Lockport',
    state: 'IL',
    zip: '60441'
  },
  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed'
  },
  mcNumber: 'MC-123456',
  dotNumber: 'DOT-789012'
};

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  fleet: '/fleet',
  careers: '/careers',
  apply: '/apply',
  //gallery: '/gallery',
  faq: '/faq',
  contact: '/contact',
  quote: '/quote',
  privacy: '/privacy-policy',
  terms: '/terms'
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: ROUTES.home },
  { name: 'About', href: ROUTES.about },
  { name: 'Services', href: ROUTES.services },
  { name: 'Fleet', href: ROUTES.fleet },
  { name: 'Careers', href: ROUTES.careers },
  //{ name: 'Gallery', href: ROUTES.gallery },
  { name: 'Contact', href: ROUTES.contact }
];

export const SERVICE_TYPES = [
  {
    slug: 'full-truckload',
    title: 'Full Truckload (FTL)',
    description: 'Complete trailer loads for faster, direct delivery',
    icon: '/truck0.jpg'
  },
  {
    slug: 'ltl',
    title: 'Less Than Truckload (LTL)',
    description: 'Cost-effective shipping for smaller loads',
    icon: '/logistics.jpg'
  },
  {
    slug: 'heavy-haul',
    title: 'Heavy Haul Loads',
    description: 'Specialized transportation for oversized and heavy freight',
    icon: '/heavyhaul.jpg'
  },
  {
    slug: 'refrigerated',
    title: 'Refrigerated Transport',
    description: 'Temperature-controlled shipping for perishables',
    icon: '/refrigerated.jpg'
  }
];

export const FLEET_TYPES = [
  {
    name: 'RGN Trailers',
    description: 'Removable Gooseneck trailers for heavy haul and oversized equipment',
    image: '/heavyhaul.jpg',
    specs: ['Up to 80,000 lbs capacity', 'Removable gooseneck design', 'Ideal for construction equipment']
  },
  {
    name: 'Step Decks',
    description: 'Lower deck height for tall cargo',
    image: '/flatbed.jpg',
    specs: ['48ft-53ft length', 'Lower clearance', 'Heavy haul capable']
  },
  {
    name: 'Flatbeds',
    description: 'Open deck trailers for oversized loads',
    image: '/flatbed.jpg',
    specs: ['48ft-53ft length', 'Up to 48,000 lbs', 'Tarping available']
  },
  {
    name: 'Conestoga Trailers',
    description: 'Enclosed trailers with roll-back tarp system for protected oversized cargo',
    image: '/truck0.jpg',
    specs: ['48ft-53ft length', 'Roll-back tarp system', 'Weather protection']
  },
  {
    name: 'Reefers',
    description: 'Refrigerated trailers with temperature control',
    image: '/refrigerated.jpg',
    specs: ['53ft length', 'Temperature: -20°F to 70°F', 'GPS monitoring']
  },
  {
    name: 'Dry Vans',
    description: 'Standard enclosed trailers for general freight',
    image: '/truck0.jpg',
    specs: ['53ft length', '26 pallets', '45,000 lbs capacity']
  }
];

export const FAQ_CATEGORIES = {
  shipping: {
    title: 'Shipping & Services',
    questions: [
      {
        q: 'What areas do you serve?',
        a: 'We operate in all 48 contiguous United States. We have extensive coverage across major metropolitan areas and can arrange transportation to virtually any location.'
      },
      {
        q: 'How do I get a shipping quote?',
        a: 'You can request a quote through our online form, call us directly at (555) 123-4567, or email info@nomadexpress.com. We typically respond within 24 hours.'
      },
      {
        q: 'What types of freight do you transport?',
        a: 'We handle flatbed, refrigerated, dry van, and specialized freight including machinery, steel, building materials, food products, and general commodities.'
      },
      {
        q: 'How long does shipping take?',
        a: 'Transit times vary based on distance and service type. Cross-country shipments typically take 5-7 days, while regional deliveries can be completed in 1-3 days.'
      },
      {
        q: 'Do you offer expedited shipping?',
        a: 'Yes, we offer expedited services for time-sensitive freight. Contact us to discuss your specific timeline requirements.'
      }
    ]
  },
  payment: {
    title: 'Payment & Billing',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, ACH transfers, and offer net terms for qualified customers. Payment terms are discussed during quote approval.'
      },
      {
        q: 'When is payment due?',
        a: 'Payment terms vary by customer and shipment type. We offer net 30 terms for established customers and COD options for new clients.'
      },
      {
        q: 'Do you offer freight insurance?',
        a: 'Yes, we provide comprehensive cargo insurance. All shipments are covered according to industry standards, and additional coverage can be arranged.'
      }
    ]
  },
  safety: {
    title: 'Safety & Insurance',
    questions: [
      {
        q: 'What safety certifications do you have?',
        a: 'We maintain DOT compliance, FMCSA registration, and have an excellent safety rating. All drivers undergo regular training and background checks.'
      },
      {
        q: 'How do you ensure cargo safety?',
        a: 'We use GPS tracking, secure loading procedures, and experienced drivers. All equipment undergoes regular maintenance and safety inspections.'
      }
    ]
  },
  drivers: {
    title: 'Driver Requirements',
    questions: [
      {
        q: 'What are the requirements to drive for Nomad Express Group?',
        a: 'You need a valid CDL Class A license, clean driving record, at least 2 years of experience, and must pass our background check and drug screening.'
      },
      {
        q: 'What benefits do you offer drivers?',
        a: 'We offer competitive pay, health insurance, 401(k), home time, safety bonuses, and excellent equipment. Our drivers also receive 24/7 dispatch support.'
      },
      {
        q: 'Do you hire owner-operators?',
        a: 'Yes, we welcome owner-operators. Contact our driver recruitment team at (555) 987-6543 to learn more about our owner-operator program.'
      }
    ]
  }
};

