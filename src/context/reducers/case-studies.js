import {
  SET_CASE_STUDIES,
  SET_ITEM_CASE_STUDY,
  SET_ITEM_FILTER,
} from "../types/case-studies";

const initialState = {
  caseStudies: [
    {
      id: 1,
      title: "Justotter",
      src: "/banner-case-studies.png",
      company: "JustOTTER",
      duration: "Duration",
      program: "Web, App",
      description:
        "Rockship aids JustOtter in prototyping and overcoming product challenges, including digitalizing menus, integrating blockchain for loyalty programs, and streamlining restaurant operations, encompassing menu ordering and queue management.",
      hashtags: [
        { id: 1, name: "restaurants" },
        { id: 2, name: "loyalty" },
        { id: 3, name: "QRcode-based" },
        { id: 4, name: "queue" },
        { id: 5, name: "table-ordering" },
        { id: 6, name: "kitchen" },
      ],
      market: "Singapore",
      industry: "Hospitality",
      features: 18,
      companySize: "15",
      highlights: [
        {
          id: 1,
          name: "Speed of development",
          src: "/startup.svg",
          color: "#FFE8E8",
        },
        {
          id: 2,
          name: "Scalable",
          src: "/analytics.svg",
          color: "#FFF4D8",
        },
        {
          id: 3,
          name: "Reach to purpose",
          src: "/target.svg",
          color: "#D8FFE0",
        },
        {
          id: 4,
          name: "Consistent process",
          src: "/milestone.svg",
          color: "#D8ECFF",
        },
        {
          id: 5,
          name: "User-friendly",
          src: "/double-tap.svg",
          color: "#E9D8FF",
        },
      ],
      challenges: [
        "Many restaurant businesses rely on multiple software solutions for different purposes, which often leads to the challenge of integrating these solutions and the associated overhead costs. Additionally, the majority of restaurant staff members are not well-versed in selecting the right technology and often rely on referrals from other establishments. As a result, restaurants often find themselves dependent on outdated technologies.",
        "However, when the pandemic strikes, technology becomes a crucial tool for local businesses to compete with one another. It provides them with the opportunity to adapt and stay relevant in the market. Furthermore, prominent restaurant chains like Luckin Coffee and HeyTea have successfully leveraged technology as a competitive advantage, further highlighting the importance of technological advancements in the industry.",
      ],
      solutions: [
        "We have developed a modular restaurant operation system that allows restaurants to deploy a fully integrated system based on their specific needs. Rockship has been instrumental in assisting JustOtter with prototyping the solution and addressing key product challenges, such as building a digitalized menu and integrating blockchain for restaurant loyalty programs. We approach the restaurant business by breaking it down into clusters of software modules.",
        "We also prioritize the importance of a beautiful user experience design to ensure that the system is user-friendly and intuitive for restaurant staff to utilize.",
      ],
      mains: [
        {
          id: 1,
          title: "Menu Interface",
          data: [
            { id: 1, name: "Signup/Login" },
            { id: 2, name: "Store Management" },
            { id: 3, name: "Dashboard" },
          ],
          src: "/justotter1.png",
        },
        {
          id: 2,
          title: "Customer Management",
          data: [
            { id: 1, name: "Loyalty Program" },
            { id: 2, name: "Marketing Campaign" },
          ],
          src: "/justotter2.png",
        },
        {
          id: 3,
          title: "Queue management",
          data: [
            { id: 1, name: "Reservation" },
            { id: 2, name: "QR-code based queue" },
          ],
          src: "/justotter3.png",
        },
        {
          id: 4,
          title: "Inventory management",
          data: [
            { id: 1, name: "Table" },
            { id: 2, name: "Ordering" },
            { id: 3, name: "Dashboard" },
          ],
          src: "/justotter4.png",
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "J S |",
          name: "CEO JustOtter",
          data: [
            "Loyalty Program enables our store to design the strategy for customer engagement better using data.",
            "Table Ordering enables our restaurants to overcome staff shortage after the pandemic while still serving the same set of customer",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "WORKNOW - BOOKING ON DEMANDING",
      src: "/worknow.png",
      company: "Rockship",
      duration: "6 months",
      program: "Web, App",
      description:
        "WorkNow is the workspace booking platform enables business to manage their hybrid workforce efficiently through the extensive suites of solutions: space provider management platform, on-demand booking UI, and office brokerage solution",
      hashtags: [
        { id: 1, name: "office" },
        { id: 2, name: "booking-platform" },
        { id: 3, name: "workspace" },
        { id: 4, name: "hybrid" },
        { id: 5, name: "remote" },
        { id: 6, name: "management" },
      ],
      market: "Vietnam",
      industry: "Coworking",
      features: 16,
      companySize: "15",
      highlights: [
        {
          id: 1,
          name: "Rapid development",
          src: "/startup.svg",
          color: "#FFE8E8",
        },
        {
          id: 2,
          name: "Scalable",
          src: "/analytics.svg",
          color: "#FFF4D8",
        },
        {
          id: 3,
          name: "Insightful UI/UX research",
          src: "/target.svg",
          color: "#D8FFE0",
        },
        {
          id: 4,
          name: "Multi-purpose",
          src: "/milestone.svg",
          color: "#D8ECFF",
        },
        {
          id: 5,
          name: "AI-powered",
          src: "/double-tap.svg",
          color: "#E9D8FF",
        },
      ],
      challenges: [
        "WorkNow is an advanced online platform that connects users with esteemed space providers, offering on-demand office services. This platform was born out of the realization that an increasing number of startup companies have shifted to hybrid or remote working setups.",
        "The main challenge for WorkNow is to identify the types of office services that should be offered to enterprises in Vietnam, taking into consideration their concerns regarding the effectiveness of hybrid or remote working methods.",
      ],
      solutions: [
        "Rockship has been a strong supporter of WorkNow since its initial entry into the Vietnam market. We collaborated closely with numerous space providers in Vietnam, conducting interviews using advanced AI-based tools. This allowed us to engage with popular brands such as Circo and MindX Startup Space, among others. Additionally, Rockship connected with multiple startup companies that either consider or have already embraced more flexible working arrangements.",
        "After thoroughly immersing ourselves in the market and gathering insights from both providers and users, Rockship discovered that most companies prefer an all-in-one office solution rather than one tailored for a specific purpose.",
        "Based on that valuable insight, we utilized our Systematic Prototype process and officially launched WorkNow in January 2023, after just six months of development. WorkNow was carefully designed as a full-fledged office solution for both Workspace Providers and Business Customers, enabling them to effortlessly manage bookings, track transaction history, and handle payments. Businesses that utilize WorkNow also benefit from enhanced visibility into their hybrid/remote resources through the management dashboard.",
      ],
      mains: [
        {
          id: 1,
          title: "On-demand booking",
          content:
            "Allows Clients to view and select locations, types of workspaces according to each location, book with the desired location at anytime and in anywhere.",
          src: "/worknow1.png",
        },
        {
          id: 2,
          title: "Hybrid workforce management",
          content:
            "Allows Corporate Clients to expand their “offices” with diverse and rich locations to create better working conditions for employees.",
          src: "/worknow2.png",
        },
        {
          id: 3,
          title: "Queue management",
          content:
            "Dashboard for Space providers to manage locations, bookings and customer database.",
          src: "/worknow3.png",
        },
        {
          id: 4,
          content:
            "Prior to WorkNow, space providers had to manually track client bookings using Excel spreadsheets. Our platform offers a comprehensive toolset to enhance the management of workspaces, enabling space providers to operate more efficiently. Unlike the cumbersome manual check-in process employed by most space providers, we offer a QR code system that allows space users to check in conveniently. Overall, WorkNow significantly improves space operations for providers, optimizing their efficiency.",
        },
        {
          id: 5,
          content:
            "In response to the growing trend of companies adopting hybrid workforces, WorkNow has also developed a tool specifically designed to facilitate effective management of such work models. Leveraging the inventories provided by WorkNow, this tool enables companies to seamlessly operate their hybrid workforces.",
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Sarah |",
          name: "Freelancer, Expat in HCMc",
          data: [
            "I had a great experience using Worknow. The process was seamless, and I found the perfect office space that matched all my requirements. Highly recommended!",
          ],
        },
        {
          id: 2,
          src: "/ceo.png",
          title: "J S |",
          name: "CEO JustOtter",
          data: [
            "Worknow was a game-changer for our company. We needed a flexible workspace solution, and it delivered beyond our expectations. The platform's user-friendly interface and extensive network of providers made finding the right office space a breeze. Thank you!",
          ],
        },
      ],
    },
  ],
  itemCaseStudy: {},
  itemFilter: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASE_STUDIES:
      return {
        ...state,
        caseStudies: action.payload,
      };
    case SET_ITEM_CASE_STUDY:
      return {
        ...state,
        itemCaseStudy: action.payload,
      };
    case SET_ITEM_FILTER:
      return {
        ...state,
        itemFilter: action.payload,
      };
    default:
      return state;
  }
};

const caseStudiesReducer = { reducer, initialState };

export default caseStudiesReducer;
