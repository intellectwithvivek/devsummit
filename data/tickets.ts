export interface Tier {
  id: 'early-bird' | 'regular' | 'vip'
  name: string
  /** Display price, already formatted. */
  price: string
  /** Numeric price in INR, for the Event JSON-LD offers. */
  amount: number
  period: string
  description: string
  features: string[]
  badge?: string
  highlighted?: boolean
  /** schema.org offer availability. */
  availability: 'InStock' | 'SoldOut' | 'PreOrder'
}

export const tiers: Tier[] = [
  {
    id: 'early-bird',
    name: 'Early bird',
    price: '₹4,900',
    amount: 4900,
    period: '+ GST',
    description: 'The same ticket as Regular, bought before the deadline.',
    badge: 'Ends soon',
    availability: 'InStock',
    features: [
      'Both conference days',
      'All five tracks',
      'Lunch and chai, both days',
      'Talk recordings within two weeks',
      'Community mixer on the lawn',
    ],
  },
  {
    id: 'regular',
    name: 'Regular',
    price: '₹7,900',
    amount: 7900,
    period: '+ GST',
    description: 'Full access. What most people buy.',
    highlighted: true,
    badge: 'Most popular',
    availability: 'InStock',
    features: [
      'Both conference days',
      'All five tracks',
      'Lunch and chai, both days',
      'Talk recordings within two weeks',
      'Community mixer on the lawn',
      'One hands-on workshop seat',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '₹14,900',
    amount: 14900,
    period: '+ GST',
    description: 'For people who came for the workshops and the speakers.',
    availability: 'InStock',
    features: [
      'Everything in Regular',
      'All twelve workshops, reserved seats',
      'Front-block seating in the Main Hall',
      'Speaker dinner on Thursday night',
      'Office-hours slot with a speaker of your choice',
      'Recordings on the Monday after',
    ],
  },
]

/** Comparison rows for the table on /tickets. */
export interface CompareRow {
  feature: string
  early: string
  regular: string
  vip: string
}

export const comparison: CompareRow[] = [
  { feature: 'Conference days', early: 'Both', regular: 'Both', vip: 'Both' },
  { feature: 'Track access', early: 'All five', regular: 'All five', vip: 'All five' },
  { feature: 'Workshop seats', early: 'None', regular: '1 reserved', vip: 'All 12' },
  { feature: 'Talk recordings', early: 'Two weeks', regular: 'Two weeks', vip: 'Next Monday' },
  { feature: 'Main Hall seating', early: 'General', regular: 'General', vip: 'Front block' },
  { feature: 'Community mixer', early: 'Included', regular: 'Included', vip: 'Included' },
  { feature: 'Speaker dinner', early: '—', regular: '—', vip: 'Included' },
  { feature: 'Speaker office hours', early: '—', regular: '—', vip: 'One slot' },
  { feature: 'Name change up to', early: '3 Nov', regular: '9 Nov', vip: 'On the door' },
]

export const groupDiscount = {
  title: 'Bringing the team?',
  body: 'Five or more tickets on one invoice takes 20% off, and ten or more takes 30%. Student and community-organiser rates are separate — mail us and we will sort it out.',
}
