type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  location: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Dolby Laboratories GmbH',
    location: 'Nürnberg, Germany',
    title: 'Senior Engineer, Entertainment',
    start: 'July 2024',
    end: 'Present',
    link: 'https://dolby.com',
    id: 'work5',
  },
  {
    company: 'Dolby Laboratories',
    location: 'San Francisco, USA',
    title: 'Engineer, Entertainment',
    start: 'July 2021',
    end: 'June 2024',
    link: 'https://dolby.com',
    id: 'work4',
  },
  {
    company: 'Georgia Institute of Technology',
    location: 'Atlanta, USA',
    title: 'Graduate Research Assistant',
    start: 'August 2019',
    end: 'May 2021',
    link: 'https://gatech.edu',
    id: 'work3',
  },
  {
    company: 'SensiBol Audio Technologies',
    location: 'Mumbai, India',
    title: 'Music Research Engineer',
    start: 'April 2018',
    end: 'April 2019',
    link: 'https://sensibol.com',
    id: 'work2',
  },
  {
    company: 'Infosys Limited',
    location: 'Manila, Phillipines',
    title: 'Senior Systems Engineer',
    start: 'May 2015',
    end: 'October 2017',
    link: 'https://infosys.com',
    id: 'work1',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Audio Effects Framework in C++',
    description:
      'An Audio Effects Framework that provides developers an API to create audio effects processing plugins.',
    link: 'https://github.com/Rishikeshdaoo/AudioEffectsFramework',
    video: 'https://youtu.be/NgGLyauAIhE?si=sM4fSW0vQN4VYipP',
    id: 'project1',
  },
  {
    name: 'Implementation of Schroeder reverb in Java as a Windows desktop application',
    description:
      "A basic Reverb algorithm based on Schroeder's algorithm coded in Java.",
    link: 'https://github.com/Rishikeshdaoo/Reverberator',
    video: '',
    id: 'project2',
  },
  {
    name: 'Chord Recommendation System',
    description:
      'A chord recommendation system that can aid musicians in composing music. The system recommends favourable choices for next chord in the progression based on the chords played by the user as input to the system.',
    link: 'https://github.com/Rishikeshdaoo/Chord-Recommendation-System',
    video: '',
    id: 'project3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/rishikeshdaoo',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rishikeshdaoo',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/the_seekers_project',
  },
]

export const EMAIL = 'rishikesh.daoo(at)gmail(dot)com'
