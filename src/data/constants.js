// App-wide constants that could be shared across components

export const COMPANY_INFO = {
  name: 'Nomad Express Group',
  phone: {
    transportation: '(555) 123-4567',
    employment: '(555) 987-6543'
  },
  email: 'info@nomadexpress.com',
  established: '2014'
};

export const NAVIGATION_ITEMS = [
  { name: 'About Us', href: '#' },
  { name: 'Services', action: 'services' },
  { name: 'Our Team', action: 'team' },
  { name: 'Careers', action: 'careers' },
  { name: 'Contact Us', action: 'contact' }
];

export const QUOTE_FORM_FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'date', label: '24/09/2025', type: 'text', required: true },
  { name: 'zip', label: 'Origin ZIP code', type: 'text', required: true },
  { name: 'weight', label: 'Weight', type: 'text', required: true },
  { name: 'org', label: 'org', type: 'text', required: true },
  { name: 'truck', label: 'Trailer Style Request', type: 'select', required: true },
  { name: 'commodity', label: 'Commodity', type: 'text', required: true },
  { name: 'message', label: 'Special instructions', type: 'text', required: true }
];
