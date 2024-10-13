const topicsArray = [
  { title: "Trending Now", link: "#" },
  { title: "DSA", link: "#" },
  { title: "Web Tech", link: "#" },
  { title: "Foundational Courses", link: "#" },
  { title: "Data Science", link: "#" },
  { title: "Practice Problem", link: "#" },
  { title: "Python", link: "#" },
  { title: "Machine Learning", link: "#" },
  { title: "JavaScript", link: "#" },
  { title: "System Design", link: "#" },
  { title: "Django", link: "#" },
  { title: "DevOps Tutorial", link: "#" },
  { title: "Java", link: "#" },
  { title: "C", link: "#" },
  { title: "C++", link: "#" },
  { title: "ReactJS", link: "#" },
  { title: "NodeJS", link: "#" },
  { title: "CP Live", link: "#" },
  { title: "Aptitude", link: "#" },
  { title: "Puzzles", link: "#" },
  { title: "Projects", link: "#" },
];

const contentArray = [
  {
    title: "Overview",
    desc: "This is a data structures and algorithms (DSA) course with a strong focus on passing coding interviews for software engineering jobs.",
  }, {
    title: "Introduction",
    desc: "Before we start the course, let's talk about some basics that you'll need to succeed.",
    topic: "DSA",
  }, {
    title: "Arrays and strings",
    desc: "Arrays and strings are two of the most fundamental data structures seen in algorithm problems.",
    topic: "Arrays",
  }, {
    title: "Hashing",
    desc: "Hashing can be used to implement a hash map - arguably the most powerful data structure or algorithm.",
    topic: "Hashing",
  }, {
    title: "Linked lists",
    desc: "Linked lists are like arrays - they're an ordered collection of elements. The main difference is how they are implemented.",
    topic: "Linked lists",
  }, {
    title: "Stacks and queues",
    desc: "Stacks and queues are data structures defined by their interfaces. They're a good example of how a simple idea can be used to implement efficient algorithms, and how data structures & algorithms show up in our everyday lives.",
    topic: "Stacks and Queues",
  },
];

const comments = [
  {
    userName: "Abhishek Sharma",
    text: "Nice Content",
    likes: "4",
  },
  {
    userName: "Sumit Yadav",
    text: "Awesome",
    likes: "0",
  },
  {
    userName: "Shruti Chandrakar",
    text: "Beautiful Explanation",
    likes: "100",
  }
];

const workflowData = [
  {
    id: 1,
    articles: "Shubham",
    author: "Laddu Singh",
    assignTo: "laddubhai@email.com",
    status: "Pending",
  },
  {
    id: 2,
    articles: "Sumit",
    author: "Sumit SKY",
    assignTo: "yadavaskyst@gmail.com",
    status: "Success",
  },
  {
    id: 3,
    articles: "Vinit",
    author: "Vinit Singh",
    assignTo: "vinit@email.com",
    status: "Pending",
  },
  {
    id: 4,
    articles: "Arti",
    author: "Arti Soni",
    assignTo: "artisoni@email.com",
    status: "Success",
  },
  {
    id: 5,
    articles: "Mayank",
    author: "Mayank Singh",
    assignTo: "mayank@email.com",
    status: "Pending",
  },
  {
    id: 6,
    articles: "Abhijeet",
    author: "Abhijeet Singh",
    assignTo: "abhijeet@email.com",
    status: "Success",
  },
  {
    id: 7,
    articles: "Vikas",
    author: "Vikas Grewal",
    assignTo: "vvvvvvikkkasss@email.com",
    status: "Pending",
  },
];

const articleManagementData = [
  {
    id: 1,
    title: "No Title",
    author: "Laddu Singh",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 2,
    title: "No Title",
    author: "Sumit SKY",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 3,
    title: "No Title",
    author: "Vinit Singh",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 4,
    title: "No Title",
    author: "Arti Soni",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 5,
    title: "No Title",
    author: "Mayank Singh",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 6,
    title: "No Title",
    author: "Abhijeet Singh",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
  {
    id: 7,
    title: "No Title",
    author: "Vikas Grewal",
    collection: "Article",
    lastModified: "10:23 PM 08 Oct 2024",
  },
];

const existingCourseTypes = ["Technology", "Science", "Business"];

const courseManagementData = [
  {
    title: "Introduction to JavaScript",
    desc: "A beginner's course on JavaScript fundamentals.",
    courseType: "Programming",
    model: "Free",
    status: "Published",
  },
  {
    title: "Advanced CSS Techniques",
    desc: "Learn advanced layouts and animations with CSS.",
    courseType: "Design",
    model: "Paid",
    status: "Under Review",
  },
  {
    title: "React Basics",
    desc: "An introduction to React components, hooks, and state.",
    courseType: "Programming",
    model: "Free",
    status: "Published",
  },
  {
    title: "Digital Marketing 101",
    desc: "Overview of digital marketing strategies.",
    courseType: "Marketing",
    model: "Paid",
    status: "Published",
  },
  {
    title: "Data Science with Python",
    desc: "A comprehensive guide to data analysis using Python.",
    courseType: "Data Science",
    model: "Free",
    status: "Under Review",
  },
  {
    title: "SEO Fundamentals",
    desc: "Learn the basics of search engine optimization.",
    courseType: "Marketing",
    model: "Paid",
    status: "Pending Approval",
  },
  {
    title: "Machine Learning Concepts",
    desc: "Introduction to machine learning algorithms and applications.",
    courseType: "Data Science",
    model: "Free",
    status: "Published",
  },
  {
    title: "UI/UX Design Principles",
    desc: "A guide to creating user-friendly interfaces.",
    courseType: "Design",
    model: "Paid",
    status: "Published",
  },
];

const cmsSection = [
  {
    communityName: "Edulearn",
    collections: ["PG_Search", "UG_Search"],
  },
  {
    communityName: "Test",
    collections: ["Article"],
  },
];

export { topicsArray, contentArray, comments, workflowData, existingCourseTypes, articleManagementData, courseManagementData, cmsSection };