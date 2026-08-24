import type { TrackId } from './event'

export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  /** Placeholder portrait. Swap for real headshots when you fork this. */
  avatar: string
  /** One line. It shows up in a Popover, so it has to earn its space. */
  bio: string
  talk: string
  track: TrackId
  /** Featured speakers fill the twelve-up grid on the homepage. */
  featured?: boolean
}

/**
 * Eighteen announced speakers of the forty-eight in the programme.
 * Portraits come from i.pravatar.cc so the template has faces with no asset
 * pipeline; `img` is pinned per speaker so a given person keeps a stable face.
 */
export const speakers: Speaker[] = [
  {
    id: 'ananya-rao',
    name: 'Ananya Rao',
    title: 'Principal Engineer',
    company: 'Zerodha',
    avatar: 'https://i.pravatar.cc/240?img=44',
    bio: 'Has spent six years making a trading UI stay responsive on the worst phone in the room.',
    talk: 'Rendering 40,000 Ticks a Second Without Dropping a Frame',
    track: 'web',
    featured: true,
  },
  {
    id: 'karthik-menon',
    name: 'Karthik Menon',
    title: 'Staff ML Engineer',
    company: 'Sarvam AI',
    avatar: 'https://i.pravatar.cc/240?img=12',
    bio: 'Builds evaluation harnesses for Indic language models and argues about tokenizers.',
    talk: 'Your Eval Set Is Lying to You',
    track: 'ai',
    featured: true,
  },
  {
    id: 'priya-nambiar',
    name: 'Priya Nambiar',
    title: 'Head of Platform',
    company: 'Razorpay',
    avatar: 'https://i.pravatar.cc/240?img=32',
    bio: 'Runs the team that owns the deploy pipeline for four hundred services.',
    talk: 'We Deleted Our Staging Environment. Here Is What Broke.',
    track: 'devops',
    featured: true,
  },
  {
    id: 'daniel-osei',
    name: 'Daniel Osei',
    title: 'Design Systems Lead',
    company: 'Figma',
    avatar: 'https://i.pravatar.cc/240?img=15',
    bio: 'Maintains a component library that 900 designers and 2,000 engineers both have opinions about.',
    talk: 'A Design System Nobody Forks',
    track: 'design',
    featured: true,
  },
  {
    id: 'meera-krishnan',
    name: 'Meera Krishnan',
    title: 'Engineering Director',
    company: 'Atlassian',
    avatar: 'https://i.pravatar.cc/240?img=47',
    bio: 'Went from IC to director and back to IC once, on purpose, and will tell you why.',
    talk: 'The Promotion You Should Turn Down',
    track: 'career',
    featured: true,
  },
  {
    id: 'rohan-shetty',
    name: 'Rohan Shetty',
    title: 'Browser Engineer',
    company: 'Chrome, Google',
    avatar: 'https://i.pravatar.cc/240?img=33',
    bio: 'Works on the paint pipeline and has strong feelings about layout thrashing.',
    talk: 'What the Browser Is Actually Doing While You Wait',
    track: 'web',
    featured: true,
  },
  {
    id: 'lin-wei',
    name: 'Lin Wei',
    title: 'Infrastructure Architect',
    company: 'Grab',
    avatar: 'https://i.pravatar.cc/240?img=26',
    bio: 'Migrated a monolith across three regions without a maintenance window.',
    talk: 'Zero-Downtime Migrations Are Mostly Bookkeeping',
    track: 'devops',
    featured: true,
  },
  {
    id: 'aisha-farouk',
    name: 'Aisha Farouk',
    title: 'Accessibility Engineer',
    company: 'Shopify',
    avatar: 'https://i.pravatar.cc/240?img=45',
    bio: 'Audits interfaces with a screen reader on, every day, and finds the same six bugs.',
    talk: 'The Six Accessibility Bugs in Every Component Library',
    track: 'design',
    featured: true,
  },
  {
    id: 'vikram-desai',
    name: 'Vikram Desai',
    title: 'Founding Engineer',
    company: 'Hasura',
    avatar: 'https://i.pravatar.cc/240?img=68',
    bio: 'Writes query planners and explains them at a whiteboard until they make sense.',
    talk: 'Query Planning for People Who Write Application Code',
    track: 'web',
    featured: true,
  },
  {
    id: 'sofia-marchetti',
    name: 'Sofia Marchetti',
    title: 'Research Engineer',
    company: 'Hugging Face',
    avatar: 'https://i.pravatar.cc/240?img=20',
    bio: 'Works on inference cost and thinks most agent frameworks are three functions in a trench coat.',
    talk: 'Agents Without the Framework',
    track: 'ai',
    featured: true,
  },
  {
    id: 'arjun-pillai',
    name: 'Arjun Pillai',
    title: 'SRE Lead',
    company: 'Swiggy',
    avatar: 'https://i.pravatar.cc/240?img=59',
    bio: 'On call for the peak-hour order pipeline. Has opinions about alert fatigue.',
    talk: 'Deleting 80% of Our Alerts Made Us Faster',
    track: 'devops',
    featured: true,
  },
  {
    id: 'nadia-hassan',
    name: 'Nadia Hassan',
    title: 'Technical Recruiter turned Engineer',
    company: 'Independent',
    avatar: 'https://i.pravatar.cc/240?img=41',
    bio: 'Screened 4,000 resumes, then learned to code, and can tell you what actually gets read.',
    talk: 'What Your Resume Looks Like From the Other Side',
    track: 'career',
    featured: true,
  },
  {
    id: 'sanjay-iyer',
    name: 'Sanjay Iyer',
    title: 'Distinguished Engineer',
    company: 'Flipkart',
    avatar: 'https://i.pravatar.cc/240?img=51',
    bio: 'Owns the checkout path on the busiest shopping day in the country.',
    talk: 'Load Testing for a Day That Happens Once a Year',
    track: 'devops',
  },
  {
    id: 'grace-adeyemi',
    name: 'Grace Adeyemi',
    title: 'Product Designer',
    company: 'Linear',
    avatar: 'https://i.pravatar.cc/240?img=49',
    bio: 'Designs keyboard-first interfaces and measures them in keystrokes saved.',
    talk: 'Designing for the Keyboard First',
    track: 'design',
  },
  {
    id: 'tanvi-bhatt',
    name: 'Tanvi Bhatt',
    title: 'Applied Scientist',
    company: 'Amazon',
    avatar: 'https://i.pravatar.cc/240?img=24',
    bio: 'Works on retrieval quality and has strong views on chunking strategies.',
    talk: 'Retrieval Is a Ranking Problem, Not a Database Problem',
    track: 'ai',
  },
  {
    id: 'imran-qureshi',
    name: 'Imran Qureshi',
    title: 'Open Source Maintainer',
    company: 'Vite core team',
    avatar: 'https://i.pravatar.cc/240?img=53',
    bio: 'Maintains a build tool used by two million projects and answers issues at 2am.',
    talk: 'Maintaining a Build Tool Without Burning Out',
    track: 'career',
  },
  {
    id: 'chen-yu',
    name: 'Chen Yu',
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    avatar: 'https://i.pravatar.cc/240?img=14',
    bio: 'Ships a payments form that has to work in 46 countries and every browser.',
    talk: 'One Form, Forty-Six Countries',
    track: 'web',
  },
  {
    id: 'leela-varma',
    name: 'Leela Varma',
    title: 'CTO',
    company: 'Ultrahuman',
    avatar: 'https://i.pravatar.cc/240?img=36',
    bio: 'Built a hardware-plus-app company from four engineers to sixty.',
    talk: 'Hiring Your First Ten Engineers',
    track: 'career',
  },
]

export const featuredSpeakers = speakers.filter((s) => s.featured)

export function speakerById(id: string): Speaker | undefined {
  return speakers.find((s) => s.id === id)
}
