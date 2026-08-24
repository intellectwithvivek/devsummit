/** Getting-there instructions, one Accordion item each. */
export interface TravelOption {
  id: string
  label: string
  detail: string
}

export const travelOptions: TravelOption[] = [
  {
    id: 'metro',
    label: 'Metro — Purple Line to Kadugodi Tree Park',
    detail:
      'Kadugodi Tree Park is the closest station, an eight-minute walk to the venue gate. Trains run every five minutes from 05:00 to 23:00. Coming from the city centre, board the Purple Line eastbound at Majestic and stay on to the end — about 55 minutes. Volunteers in violet lanyards meet each train from 08:00 on both mornings.',
  },
  {
    id: 'cab',
    label: 'Cab and auto',
    detail:
      'Set your destination to "KTPO Convention Centre, Whitefield" — not "Whitefield", which drops you two kilometres short. Drop-off is at Gate 2 on Whitefield Main Road; Gate 1 is exhibitor loading and will be closed to cars. Expect 60 to 90 minutes from Indiranagar in morning traffic, and rather more on Friday evening.',
  },
  {
    id: 'parking',
    label: 'Parking',
    detail:
      'Free on-site parking for 400 cars in the P2 basement, entered from the service road behind the venue. It fills by 09:15 on day one. Two-wheeler parking is uncapped and always has room. There are six EV chargers on the P2 upper level, first-come and free while you are at the event.',
  },
  {
    id: 'airport',
    label: 'From the airport',
    detail:
      'Kempegowda International is 35 kilometres north. A cab is 60 to 80 minutes outside peak hours. The BMTC Vayu Vajra KIA-7 runs to Whitefield roughly hourly and is a third of the price if you are not in a hurry.',
  },
  {
    id: 'access',
    label: 'Step-free access and quiet room',
    detail:
      'Every hall, the foyer and both workshop rooms are step-free, with lifts to the P2 parking level. Accessible toilets are beside Hall A and the Main Hall. A quiet room with low lighting and no audio feed is open next to Workshop Room 2 for the whole event. Mail us any access need at least a week ahead and we will confirm the arrangement in writing.',
  },
]

/** Past-edition photos for the Carousel. */
export interface PastEdition {
  id: string
  year: string
  caption: string
  src: string
  alt: string
}

export const pastEditions: PastEdition[] = [
  {
    id: '2025-keynote',
    year: '2025',
    caption: 'The opening keynote in the Main Hall, 1,800 seats full by 09:20.',
    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=800&fit=crop&q=70',
    alt: 'A speaker alone on a wide conference stage in front of a full seated audience.',
  },
  {
    id: '2025-hallway',
    year: '2025',
    caption: 'The hallway track, which is where half the value of any conference lives.',
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=800&fit=crop&q=70',
    alt: 'Attendees standing in conversation in a bright, high-ceilinged conference foyer.',
  },
  {
    id: '2025-workshop',
    year: '2025',
    caption: 'A ninety-minute workshop, forty seats, laptops open.',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=70',
    alt: 'A workshop room where a facilitator presents to two rows of seated participants with laptops.',
  },
  {
    id: '2024-hall',
    year: '2024',
    caption: 'DevSummit 2024, the year we outgrew the old hall.',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop&q=70',
    alt: 'A wide conference hall with a lit stage and an audience seated at round tables.',
  },
  {
    id: '2024-mixer',
    year: '2024',
    caption: 'The mixer on the lawn, which ran two hours past its slot.',
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop&q=70',
    alt: 'An evening outdoor gathering under strings of warm festoon lights.',
  },
  {
    id: '2024-community',
    year: '2024',
    caption: 'A community meetup we hosted in the run-up to the main event.',
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop&q=70',
    alt: 'A speaker presenting to a small seated group around a long table in a brick-walled room.',
  },
]

/** Photography used elsewhere on the site, kept in one place. */
export const media = {
  heroStage: {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1400&h=1000&fit=crop&q=75',
    alt: 'A speaker on a darkened conference stage beside a large projected slide, facing a full audience.',
  },
  audience: {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=70',
    alt: 'Rows of seated attendees watching a talk in a dimly lit conference hall.',
  },
  speakerStage: {
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop&q=70',
    alt: 'Attendees gathered outdoors in the evening under festoon lighting.',
  },
} as const
