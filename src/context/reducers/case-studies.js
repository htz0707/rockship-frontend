import {
  SET_CASE_STUDIES,
  SET_ITEM_CASE_STUDY,
  SET_ITEM_FILTER,
} from "../types/case-studies";

const initialState = {
  caseStudies: [
    {
      id: 1,
      title: "Justotter - SOLUTION MADE FOR RESTAURANTS",
      name: "justotter",
      src: "/banner-case-studies.png",
      company: "JustOTTER",
      duration: "Ongoing",
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
        "We have developed a modular restaurant operation system that allows restaurants to deploy a fully integrated system based on their specific needs.",
        "Rockship has been instrumental in assisting JustOtter with prototyping the solution and addressing key product challenges, such as building a digitalized menu and integrating blockchain for restaurant loyalty programs. We approach the restaurant business by breaking it down into clusters of software modules.",
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
      name: "worknow",
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
      companySize: "1-10",
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
          title: "Linh Hoang |",
          name: "CEO Circo",
          data: [
            "Worknow integrates well with our system and drive more bookings for our services. We love their space provider dashboard which provides notifications for new bookings in real-time and their seamless guess checking process.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "ROVO - SPORTS BUSINESS MANAGEMENT",
      name: "rovo",
      src: "/rovo_cover.png",
      company: "Rovo",
      duration: "10 months",
      program: "Web",
      description:
        "Rockship talents played a pivotal role in assisting Rovo with the successful release of essential modules, including Customer relationship management & Facility bookings",
      hashtags: [
        { id: 1, name: "sports-facilities" },
        { id: 2, name: "fitness-business" },
        { id: 3, name: "gyms" },
        { id: 4, name: "studios" },
        { id: 5, name: "academies" },
        { id: 6, name: "tournaments-organisers" },
      ],
      market: "Singapore",
      industry: "Health & Fitness",
      features: 15,
      companySize: "1-10",
      highlights: [
        {
          id: 1,
          name: "Team as a Service",
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
          name: "Customer-centric",
          src: "/target.svg",
          color: "#D8FFE0",
        },
        {
          id: 4,
          name: "Transparent process",
          src: "/transparent.svg",
          color: "#D8FFE0",
        },
        {
          id: 5,
          name: "Result-oriented",
          src: "/double-tap.svg",
          color: "#D8ECFF",
        },
      ],
      challenges: [
        "Rovo is a community for sports and fitness people.",
        "The core engineering team at Rovo is primarily dedicated to developing the mobile platform that connects sport players, and they lack the capacity to explore different product ideas, such as a booking platform for sport facilities. Consequently, it becomes challenging to rapidly assemble a team to effectively validate new product concepts.",
      ],
      solutions: [
        "As Rovo wished to scale up across Singapore and India, Rockship provided them with dedicated resources, including 4  tech-savvy software engineers. The team worked together and connected with the top CEO and CTO to gather valuable guidance on new product concepts: Rovo for Business.",
        "Rovo for Business offers sports and fitness business owners the convenience of managing their operations on the go. This platform contains many modules that serve the needs of the savvy sports & fitness business owner.",
      ],
      mains: [
        {
          id: 1,
          content:
            "Rockship talents played a pivotal role in assisting Rovo with the successful release of essential modules, including:",
          data: [
            {
              id: 1,
              name: "Customer relationship management (CRM): Provide fitness business owners with a comprehensive set of features to efficiently enhance customer relationships including:",
            },
            {
              id: 2,
              name: "Facility bookings: Allows fitness business owners to create and manage their facilities. This platform also facilitates sport players in easily discovering and reserving facilities based on their individual demands.",
            },
          ],
        },
        {
          id: 2,
          title: "On-demand booking",
          content:
            "This project serves as a testament to Rockship's capabilities in offering a proficient and dependable pool of technology talents to meet the evolving requirements of enterprises, enabling them to effectively build and scale their businesses.",
          src: "/worknow1.png",
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Ritesh |",
          name: "CEO Rovo",
          data: [
            "Rockship is a great choice for extended your development team. With their talented developer pool, they helped us release key features fast by supplementing our team. Their work was top-notch.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "ISENSE - GLOBAL DIGITAL FLAVOR HUB",
      name: "isense",
      src: "/isense.svg",
      company: "iSense",
      duration: "Ongoing",
      program: "Web",
      description:
        "Rockship and iSense have collaborated to develop an MVP version of a marketplace that connects flavor houses with procurement teams. This platform allows flavor houses to upload their flavor documentation, which can be accessed by procurement teams for requesting samples. ",
      hashtags: [
        { id: 1, name: "flavor-houses" },
        { id: 2, name: "B2B-marketplace" },
        { id: 3, name: "digitization" },
        { id: 4, name: "procurement" },
      ],
      market: "Global",
      industry: "Food Technology",
      features: 15,
      companySize: "2-10",
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
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],
      reviews: [],
    },
    {
      id: 5,
      title: "CAMELLO DELIVERY ROBOT",
      name: "camello",
      src: "/otsaw.svg",
      company: "OTSAW",
      duration: "15 months",
      program: "Web, App, Robot Interface",
      description:
        "OTSAW is the world’s leading innovative and responsible robotic solutions provider in the Facilities Management industry. Camello is an autonomous mobile robot from OTSAW that enables last-mile delivery service - the step in which the package is delivered from the distribution hub to the buyer’s doorstep. ",
      hashtags: [
        { id: 1, name: "IMDA" },
        { id: 2, name: "autonomous-robotics" },
        { id: 3, name: "last-mile" },
        { id: 4, name: "artificial-intelligence" },
        { id: 5, name: "QR-code" },
        { id: 6, name: "delivery" },
      ],
      market: "Singapore",
      industry: "Logistics",
      features: 28,
      companySize: "11-50",
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
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],
      challenges: [
        "OTSAW is the world’s leading innovative and responsible robotic solutions provider in the Facilities Management industry. Camello is an autonomous mobile robot from OTSAW that enables last-mile delivery service - the step in which the package is delivered from the distribution hub to the buyer’s doorstep ",
        "OTSAW has successfully designed and manufactured the hardware component of the robot. However, in order to optimize its functionality and ensure seamless operation, there exists a requirement for a skilled team to develop a sophisticated operating system.",
      ],
      solutions: [
        "In a collaborative effort, Rockship has joined forces to construct a robust operating system that seamlessly integrates an Operator web platform, a Customer mobile application, and a Robot interface. ",

        "This comprehensive solution is meticulously designed to ensure a harmonious alignment with the existing hardware infrastructure, delivering a cohesive and efficient user experience across all platforms.",
      ],
      mains: [
        {
          id: 1,
          title: "Operator website",
          content:
            "Operating website allows operators of delivery service companies to manage their orders and delivery robot control. They will be able to create new orders for customers then load goods into a specific robot compartment as well as tracking delivery progress, monitoring robot location and its location through the operator web.",
          src: "/otsaw1.svg",
        },
        {
          id: 2,
          title: "Delivery robot interface",
          content: [
            "Developed by OTSAW, hardware of Camello robot is equipped with 3D LIDAR sensors, a camera, sonar, two weatherproof compartments with a total capacity of 100L and independent four-wheel drive with differential steering, according to a graphic provided by IMDA.",

            "OTSAW has selected our Rockship team to completely design and develop Camello robot interface. After our UI/UX researching phase, we created a clean, easy-to-use, and mobile responsive site to make it compatible with the resolution of robot tablet and guide customer to the information they need quickly.",
          ],
          src: "/otsaw2.svg",
        },
        {
          id: 3,
          title: "Customer mobile app",
          content: [
            "Based on OTSAW requirements, we develop the customer mobile app from UI/UX designing to software implementation with intensive research and information architecture as foundation, the design communicates sophisticated simplicity with usability at top of mind.",

            "Users have to download the app to collect/use the Camello. A defined QR code will be issued to be scanned using the app for the robot compartment to open and users to collect their parcel.",

            "Users can also track the estimated delivery time and location of the parcel to be collected through this app.",
          ],
          src: "/otsaw3.svg",
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "OTSAW’s Member",
          name: "",
          data: [
            "This operating system has elevated our delivery service to new heights, providing us with a competitive edge in the market.",

            "The app is a fantastic addition, providing me with the ability to track my parcels and receive timely updates!",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Liveo - SEAMLESS LIVE STREAMING",
      name: "liveo",
      src: "/liveo.png",
      company: "Liveo",
      duration: "9 months",
      program: "App",
      description:
        "Liveo is a platform designed to facilitate effective engagement between celebrities and their fans. It provides fans with exclusive access to the stars' premium content. ",
      hashtags: [
        { id: 1, name: "livestreaming" },
        { id: 2, name: "images" },
        { id: 3, name: "videos" },
        { id: 4, name: "virtual-currency" },
        { id: 5, name: "fan-celeb-interactions" },
        { id: 6, name: "real-time" },
      ],
      market: "Vietnam",
      industry: "Video Streaming",
      features: 12,
      companySize: "1-10",
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
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],
      challenges: [
        "Liveo is a platform designed to facilitate effective engagement between celebrities and their fans. It provides fans with exclusive access to the stars' premium content. ",

        "The challenges lie in developing the application with advanced capabilities to seamlessly handle a wide sophisticated range of media formats, including images, videos, and live streaming.",
      ],
      solutions: [
        "Rockship showcased its exceptional capabilities by successfully building and launching the Liveo app in a remarkably efficient timeframe of nine months. ",

        "This accomplishment resulted in the creation of a thriving fan community platform that gained significant popularity. The Liveo app offers a range of key features that contribute to its success, including:",
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Liveo's Member",
          name: "",
          data: [
            "As a fan, I must say that using the Liveo platform has been an incredible experience.",

            "Being a fan of various celebrities, Liveo has become my go-to platform for exclusive content. The level of engagement it provides is exceptional.",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "IURA - LEGAL CONSULTING NETWORK",
      name: "iura",
      src: "/iura.svg",
      company: "IURA",
      duration: "6 months",
      program: "App",
      description:
        "IURA is a startup company that provides legal consulting services. One of the biggest problems they faced was finding the best matched lawyer for their clients. ",
      hashtags: [
        { id: 1, name: "legal-consulting" },
        { id: 2, name: "call-routing" },
        { id: 3, name: "lawyers" },
        { id: 4, name: "matching-algorithms" },
      ],
      market: "Vietnam",
      industry: "Legal",
      features: 18,
      companySize: "1-10",
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
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],
      challenges: [
        "IURA is a startup company that provides legal consulting services. One of the biggest problems they faced was finding the best matched lawyer for their clients. The current process was manual or sometimes based on referrals from lawyers who already knew their clients. This made it hard to scale and keep track of clients as well as maintain quality control over all services provided.These challenges highlighted the need for an efficient and streamlined solution.",
      ],
      solutions: [
        "Rockship collaborated closely with the business owner and stakeholders throughout the development process; and successfully implemented two key solutions to address the challenges faced in legal consulting",
      ],
      mains: [
        {
          id: 1,
          title: "Legal Consultation",
          content:
            "Working with IURA, Rockship developed a user-friendly app that caters specifically to senior resident lawyers, ensuring simple and intuitive navigation. The focus was on creating a clean and clutter-free design that allows lawyers to easily find information and perform necessary actions. This user-friendly approach enhances the overall client experience and ensures optimal usability.",
          src: "/iura1.svg",
        },
        {
          id: 2,
          title: "Call Routing Logics",
          content: [
            "To match clients with the most suitable lawyers, Rockship incorporated a sophisticated call routing logic algorithm. This algorithm analyzes various factors including the lawyer's specialty area, availability, and expertise. By leveraging this algorithm, IURA can efficiently match client requests with lawyers, ensuring accurate and reliable legal consultation.",
          ],
          src: "/iura2.svg",
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Tuan Ha | ",
          name: "CEO IURA",
          data: [
            "The development of IURA was completed within just a 6-month timeframe, delivering a comprehensive solution for legal consulting. The enhanced client experience and efficient service delivery have led to our notable growth in business and client satisfaction.",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "MATH MAVENS - MATHS SKILLS LEARNING",
      name: "math mavens",
      src: "/Math Maven.svg",
      company: "Math Mavens",
      duration: "24 months",
      program: "App",
      description:
        "Math Mavens is a distinguished institution dedicated to offering exceptional academic assistance in the field of mathematics, specifically tailored to primary students.",
      hashtags: [
        { id: 1, name: "mathematics" },
        { id: 2, name: "math-worksheets" },
        { id: 3, name: "math-quizzes" },
        { id: 4, name: "artificial-intelligence" },
        { id: 5, name: "#game-based-learning" },
        { id: 6, name: "delivery" },
      ],
      market: "Singapore",
      industry: "Education",
      features: 16,
      companySize: "11-50",
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
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],
      challenges: [
        "Math Mavens is a distinguished institution dedicated to offering exceptional academic assistance in the field of mathematics, specifically tailored to primary students. Their founding principle centers around providing high-quality Primary Mathematics education, facilitated by a team of seasoned and committed educators.",

        "One of the key challenges that Math Mavens encounters is ensuring the development of a robust parental partnership and actively supporting students. To address this, Math Mavens must effectively deliver its supplementary practice lessons in a manner that sparks and sustains every student's enthusiasm for Mathematics beyond the confines of the classroom.",
      ],
      solutions: [
        "Rockship has played a pivotal role in building the Math Mavens application that enables students to access math practice materials anytime and anywhere. This tool consists of 2 primary modules:",
      ],
      mains: [
        {
          id: 1,
          title: "Math Worksheets",
          content:
            "This module covers a wide range of primary school math skills, including numbers and counting, fractions, decimals, shapes, and more. It serves as a valuable resource for students to engage in math homework, facilitating practice and advancement in their mathematical proficiency.",
          src: "/mathmaven_screen1.svg",
        },
        {
          id: 2,
          title: "Math Quizzes",
          content: [
            "This module has been designed as an engaging game-based tool that facilitates student learning through interactive number play. It serves as a captivating resource, allowing students to acquire and develop math skills in an enjoyable manner.",
          ],

          src: "/mathmaven_screen2.svg",
        },
        {
          id: 3,
          title: "Further description",
          content: [
            "Maths Mavens is a valuable app designed not only for students, but also for teachers and parents. In details:",

            "By providing a platform for students to revise and master Math Mavens' materials at their own pace, the application promotes independent learning and education at one's own rhythm. This flexibility can benefit students with different learning styles and preferences.",
            "For teachers and parents, the ability to track students' progress anytime, anywhere is a significant advantage. The app allows them to gain a clearer understanding of students' strengths, weaknesses, and areas in need of additional support. Armed with this information, teachers can provide targeted guidance and customize their teaching strategies to better meet the individual needs of each student. Parents can also actively participate in their child's learning journey, supporting and encouraging their progress.",
          ],
        },
      ],
      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "TzeTsien Sum | ",
          name: "Parent",
          data: [
            "My younger son has been at Math Mavens since the middle of P4, and it's been a very positive experience. Math Mavens lessons are rigorous and stretch the students, and these are reinforced by weekly worksheets that the students have to complete and turn in before the start of the next lesson. My son was initially taught by Ms Patricia Eng, and later by Mr Wong Tuck Weng - both of them were experienced, committed and caring. Mr Wong had an extremely quick turnaround for homeworks - often marking it within 30 minutes of us sending in the scan, and he would also quickly respond to messages asking about particularly tricky questions. Math Mavens pivoted very quickly and adapted to Pandemic lockdown conditions seamlessly.",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "TEDEZ - COHORT BASED LEARNING",
      name: "tedez",
      src: "/tedez.svg",
      company: "WorldLine Technology",
      duration: "Ongoing",
      program: "Web",
      description:
        "TedEZ has been established as a groundbreaking cohort-based model that revolutionizes the educational landscape. The platform empowers content creators to effortlessly tailor their educational materials to meet the unique needs of end users.",
      hashtags: [
        { id: 1, name: "cohort-based" },
        { id: 2, name: "group-learning" },
        { id: 3, name: "community" },
        { id: 4, name: "workshops" },
        { id: 5, name: "courses" },
        { id: 6, name: "power-mentor" },
      ],
      market: "Vietnam",
      industry: "Education",
      features: 10,
      companySize: "51-100",
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
          name: "Child-friendly",
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],

      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Tram Le | ",
          name: "TedEZ Co-Founder",
          data: ["Do feel that I found the right partner in you (Rockship)!"],
        },
      ],
    },
    {
      id: 10,
      title: "OMMICHANNEL PAYMENT SOLUTION",
      name: "ommichandel",
      src: "/person-paying-with-nfc-technology-restaurant 1.png",
      company: "Undisclosed",
      duration: "12 months",
      program: "Payment Terminal",
      description:
        "This comprehensive solution encompasses online, payment terminal, and kiosk payment options. Our team is proud to have provided the necessary support to enable them to achieve their goals successfully.",
      hashtags: [
        { id: 1, name: "payment-solutions" },
        { id: 2, name: "payment-terminal" },
        { id: 3, name: "QR-code" },
        { id: 4, name: "credit-card" },
      ],
      market: "Singapore",
      industry: "Fintech",
      features: 9,
      companySize: "1-10",
      highlights: [
        {
          id: 1,
          name: "Technologically advanced",
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
          name: "Well-planned",
          src: "/target.svg",
          color: "#D8FFE0",
        },
        {
          id: 4,
          name: "Cross-functional",
          src: "/milestone.svg",
          color: "#D8ECFF",
        },
        {
          id: 5,
          name: "User-friendly",
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],

      reviews: [],
    },
    {
      id: 11,
      title: "MEIMEI - COSMETIC SURGERY JOURNEY",
      name: "meimei",
      src: "/meimei.svg",
      company: "Rockship",
      duration: "Ongoing",
      program: "App",
      description:
        "Rockship has introduced a groundbreaking solution in the form of a mobile app: Mei Mei. This app utilizes facial scanning technology to assess your face and provide recommendations on the necessary cosmetic procedures to enhance your appearance. ",
      hashtags: [
        { id: 1, name: "face-scan" },
        { id: 2, name: "O2O-platform" },
        { id: 3, name: "community" },
        { id: 4, name: "consultancy" },
        { id: 5, name: "surgeons" },
        { id: 6, name: "cosmetic-surgery" },
      ],
      market: "Vietnam",
      industry: "Healthcare",
      features: "10+",
      companySize: "51-100",
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
          name: "Consistent process",
          src: "/milestone.svg",
          color: "#D8ECFF",
        },
        {
          id: 5,
          name: "AI-powered",
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],

      reviews: [],
    },
    {
      id: 12,
      title: "META.US - SOCIAL MEDIA FOR GAMERS",
      name: "meta.us",
      src: "/metaus_artwork.svg",
      company: "meta.us",
      duration: "24 months",
      program: "App",
      description:
        "Meta is a free gaming social network platform. Meta synthesizes some popular game such as Dota, Mobile Legends for gamers to make friends and team up against each other. ",
      hashtags: [
        { id: 1, name: "IT-talents" },
        { id: 2, name: "Team-as-a-Service" },
        { id: 3, name: "community" },
        { id: 4, name: "social" },
        { id: 5, name: "game-sponsor" },
        { id: 6, name: "gamers" },
      ],
      market: "Singapore",
      industry: "E-sports",
      features: "10+",
      companySize: "1-10",
      challenges: [
        "The team at Meta.us is actively developing a cutting-edge platform that facilitates meaningful engagement between brands and the thriving community of gamers. Nevertheless, they currently encounter a deficit in the latest frontend capabilities, specifically pertaining to the proficiency in VueJS, which was a relatively novel technology during that period.",
      ],
      solutions: [
        "Rockship engaged the services of two software engineers with the objective of delivering the frontend component of the Meta.us platform. Additionally, our team extended further support by providing a backend developer to strengthen the Python infrastructure for Meta.us.",
        "We provide our support to the Meta.us team by allocating engineers who are responsible for delivering the following features:",
      ],
      mains: [
        {
          id: 1,
          title: "Account System",
          data: [
            { id: 1, name: "User login via Steam account" },
            { id: 2, name: "Gamer Profile" },
          ],

          src: "/images/meta.png",
        },
        {
          id: 2,
          title: "Community Forum",
          data: [
            { id: 1, name: "Discussion forum" },
            { id: 2, name: "Chat and interact with other gamers" },
            { id: 3, name: "Tournament event for gaming" },
          ],
          src: "/metaus_2.png",
        },
        {
          id: 3,
          title: "Marketplace",
          data: [
            { id: 1, name: "Listing of game items" },
            { id: 2, name: "Trading of game items" },
          ],
          src: "/metaus_3.png",
        },
        {
          id: 4,
          title: "",
          content: [
            "We maintain a close and collaborative relationship with our client, conducting meetings twice a week to ensure effective communication and progress tracking. Our dedicated engineers diligently provide daily updates and commit code regularly to the client's repository. The client's appointed Technical Lead thoroughly reviews and merges the code changes.",
          ],
        },
        {
          id: 5,
          title: "",
          content: [
            "Our engineers take significant ownership in the testing and verification process, thereby eliminating the necessity for a dedicated Quality Assurance team. This proactive approach ensures the project's overall quality and timely delivery.",
          ],
        },
      ],
      highlights: [
        {
          id: 1,
          name: "Team as a Service",
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
          name: "Customer-centric",
          src: "/target.svg",
          color: "#D8FFE0",
        },
        {
          id: 4,
          name: "Transparent process",
          src: "/milestone.svg",
          color: "#D8ECFF",
        },
        {
          id: 5,
          name: "Result-oriented",
          src: "/double-tap-purple.svg",
          color: "#D8FFE0",
        },
      ],

      reviews: [
        {
          id: 1,
          src: "/ceo.png",
          title: "Alan Chou |",
          name: "CEO meta.us",
          data: [
            "Rockship helped us with the development of our frontend for meta.us. I have found them to be flexible and willing to go the extra mile in meeting client needs.",
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
