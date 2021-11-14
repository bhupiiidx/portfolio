const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'B.S',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bhupender Kumar Singh',
  role: 'Front End Engineer',
  description:
    'Creative Front-End Developer offering 1+ years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/bhupiidx',
    github: 'https://github.com/bhupiiidx',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pai International',
    description:
      'Online Based Ecommerce operates mainly in Bengaluru and Hyderabad ',
    stack: ['HTML', 'CSS', 'Javascript'],
    livePreview: 'https://pai.bangalore2.com/',
    projectStatus : {
      status:'Ongoing',
      orgoing:true
    },
  },
  {
    name: 'Mibook',
    description:
      'GST Registration and Filing for Small and Large Buisness in Bengaluru',
    stack: ['HTML', 'CSS', 'Javascript'],
    livePreview: 'http://mibook.bangalore2.com/',
    projectStatus : {
      status:'July 2021 to Aug 2021',
      orgoing:false
    },
  },
  {
    name: 'Emmery',
    description:
      'Employee Attendance, Salary, Chats Management System',
    stack: ['HTML', 'CSS', 'Javascript'],
    livePreview: 'http://emmerry.bangalore2.com/',
    projectStatus : {
      status:'Ongoing',
      orgoing:true
    },
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
  'Material UI',
  'JavaScript',
  'Jquery',
  'React',
  'Redux',
  'Python',
  'Django',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhupender81238@gmail.com',
}

export { header, about, projects, skills, contact }
