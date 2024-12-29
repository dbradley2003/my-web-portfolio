export interface Project {
  title: string;
  desc: string;
  content: string;
  techStack: string[];
  date: string;
  href?: string;
}

export const projects: Project[] = [
  {
    title: "Forex Trade Analysis",
    desc: "A simulation platform that allows users to trade foreign exchange currencies and analyze market trends.",
    content: `
Using an LSTM model and time series data to predict future trends
Utilized standard database design principles to handle future scalability
Data visualization of real-time data
Websockets for real-time updates of data of currency rates`,

    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "HTML5",
      "CSS3",
      "LSTM Models",
      "APIs",
    ],
    date: "2023-10-01",
    href: "https://teamupnow.org",
  },
  {
    title: "TeamUp",
    desc: `
    TeamUp is a platform that connects film students to collaborate on creative projects 
  and build professional experience. 
    `,
    content: `
    Web Sockets for real-time updates on posts and messages
Microsoft Authentication for secure login 
Docker for containerization and deployment 
  GitHub Actions for CI/CD pipelines 
    `,
    techStack: [
      "Django",
      "React",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
      "WebSockets",
      "MSAL-React",
    ],
    date: "2023-10-01",
    href: "https://teamupnow.org",
  },
];
