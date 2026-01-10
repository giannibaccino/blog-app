import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });
const userData: Prisma.UserCreateInput[] = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne@demo.com",
    phone: "1-770-736-8031",
    website: "hildegard.org",
    address: {
      create: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo_lat: "-37.3159",
        geo_lng: "81.1496",
      },
    },
    company: {
      create: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    posts: {
      create: [
        {
          title: "Async JavaScript explained",
          body: "Promises and async/await simplify async code.",
        },
        {
          title: "Prisma with SQLite",
          body: "Prisma works great for local development using SQLite.",
        },
        {
          title: "Clean architecture",
          body: "Separating concerns improves maintainability.",
        },
      ],
    },
  },

  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin@demo.com",
    phone: "010-692-6593",
    website: "anastasia.net",
    address: {
      create: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo_lat: "-43.9509",
        geo_lng: "-34.4618",
      },
    },
    company: {
      create: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    posts: {
      create: [
        {
          title: "React fundamentals",
          body: "Components are the building blocks of React.",
        },
        {
          title: "State management",
          body: "Local state vs global state decisions.",
        },
        { title: "API design", body: "Consistency is key in REST APIs." },
        { title: "Error handling", body: "Fail fast and log properly." },
      ],
    },
  },

  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "clementine@demo.com",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    address: {
      create: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo_lat: "-68.6102",
        geo_lng: "-47.0653",
      },
    },
    company: {
      create: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    posts: {
      create: [
        { title: "TypeScript basics", body: "Types help catch bugs early." },
        { title: "Enums vs unions", body: "Both have different use cases." },
        {
          title: "Code readability",
          body: "Readable code is easier to debug.",
        },
      ],
    },
  },

  {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "patricia@demo.com",
    phone: "493-170-9623",
    website: "kale.biz",
    address: {
      create: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo_lat: "29.4572",
        geo_lng: "-164.2990",
      },
    },
    company: {
      create: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    posts: {
      create: [
        {
          title: "Scaling Node.js",
          body: "Horizontal scaling improves reliability.",
        },
        { title: "Environment configs", body: "Use env files wisely." },
        { title: "Authentication", body: "JWT is stateless and scalable." },
      ],
    },
  },

  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "chelsey@demo.com",
    phone: "(254)954-1289",
    website: "demarco.info",
    address: {
      create: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo_lat: "-31.8129",
        geo_lng: "62.5342",
      },
    },
    company: {
      create: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    posts: {
      create: [
        {
          title: "UI design principles",
          body: "Whitespace improves readability.",
        },
        { title: "Accessibility", body: "ARIA labels matter." },
        { title: "Design systems", body: "Consistency speeds development." },
      ],
    },
  },

  {
    name: "Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "dennis@demo.com",
    phone: "1-477-935-8478",
    website: "ola.org",
    address: {
      create: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo_lat: "-71.4197",
        geo_lng: "71.7478",
      },
    },
    company: {
      create: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    posts: {
      create: [
        { title: "DevOps basics", body: "Automation reduces errors." },
        { title: "CI/CD pipelines", body: "Deploy early, deploy often." },
        { title: "Monitoring", body: "Metrics tell the real story." },
      ],
    },
  },

  {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "kurtis@demo.com",
    phone: "210.067.6132",
    website: "elvis.io",
    address: {
      create: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo_lat: "24.8918",
        geo_lng: "21.8984",
      },
    },
    company: {
      create: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    posts: {
      create: [
        { title: "Database normalization", body: "Avoid redundant data." },
        { title: "Indexes explained", body: "Indexes speed up queries." },
        { title: "Query optimization", body: "Measure before optimizing." },
      ],
    },
  },

  {
    name: "Nicholas Runolfsdottir",
    username: "Maxime_Nienow",
    email: "nicholas@demo.com",
    phone: "586.493.6943",
    website: "jacynthe.com",
    address: {
      create: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo_lat: "-14.3990",
        geo_lng: "-120.7677",
      },
    },
    company: {
      create: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    posts: {
      create: [
        { title: "Software testing", body: "Tests increase confidence." },
        { title: "Unit vs integration tests", body: "Both are important." },
        { title: "Mocking", body: "Mocks isolate behavior." },
      ],
    },
  },

  {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "glenna@demo.com",
    phone: "(775)976-6794",
    website: "conrad.com",
    address: {
      create: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo_lat: "24.6463",
        geo_lng: "-168.8889",
      },
    },
    company: {
      create: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    posts: {
      create: [
        { title: "Agile methodology", body: "Iterate and adapt." },
        { title: "Scrum roles", body: "Clear ownership improves flow." },
        { title: "Kanban boards", body: "Visualize your work." },
      ],
    },
  },

  {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "clementina@demo.com",
    phone: "024-648-3804",
    website: "ambrose.net",
    address: {
      create: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo_lat: "-38.2386",
        geo_lng: "57.2232",
      },
    },
    company: {
      create: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
    posts: {
      create: [
        { title: "Security basics", body: "Never trust user input." },
        { title: "Password hashing", body: "Always hash passwords." },
        { title: "OWASP top 10", body: "Know common vulnerabilities." },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
