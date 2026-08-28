window.PortfolioData = {
    personal: {
        name: "Adrian Cerenado",
        initials: "AC",
        title: "Web Developer",
        status: "AVAILABLE FOR OPPORTUNITIES",
        introduction: "Hi, I'm Adrian Cerenado — a developer passionate about web applications, system development, problem solving, and continuous learning.",
        fullBio: "I am a junior full-stack developer and IT support specialist who focuses on building useful, reliable, and user-friendly digital experiences. With hands-on experience developing database-driven web systems and troubleshooting IT infrastructure, I enjoy translating complex technical challenges into clean, accessible software. My development style values clarity, structural organization, and practical efficiency.",
        focusedOn: [
            "Web Development",
            "System Development",
            "Database Management",
            "UI/UX Design",
            "IT Support",
            "AI Integration"
        ],
        email: "adriancerenado2@gmail.com",
        socials: {
            facebook: "https://www.facebook.com/share/1HWYCBjPuV/",
            instagram: "https://www.instagram.com/adrnz.1?igsh=bmU4bm11YWJiaWxm",
            github: "https://github.com/Adriannn13",
            email: "mailto:adriancerenado2@gmail.com"
        }
    },
    skills: [
        { name: "PHP", category: "Development" },
        { name: "JavaScript", category: "Development" },
        { name: "HTML", category: "Development" },
        { name: "CSS", category: "Development" },
        { name: "TypeScript", category: "Development" },
        { name: "MySQL", category: "Database" },
        { name: "Database Design", category: "Database" },
        { name: "SQL", category: "Database" },
        { name: "Bootstrap", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "Responsive Design", category: "Frontend" },
        { name: "UI/UX", category: "Frontend" },
        { name: "Git", category: "Tools" },
        { name: "GitHub", category: "Tools" },
        { name: "VS Code", category: "Tools" },
        { name: "XAMPP", category: "Tools" },
        { name: "System Analysis", category: "Other" },
        { name: "Troubleshooting", category: "Other" },
        { name: "Technical Support", category: "Other" },
        { name: "AI Integration", category: "Other" }
    ],
    projects: [
        {
            id: "jemmerific",
            name: "Jemmerific Catering Services",
            category: "Web Application / Booking System",
            shortDescription: "A catering management and booking platform designed to help customers explore packages, schedule events, and communicate with administrators while allowing administrators to manage bookings, availability, packages, and customers.",
            tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AI Integration"],
            imageBg: "linear-gradient(135deg, #6D5DFB 0%, #3F30C2 100%)",
            imageIcon: "🍽️",
            dashboardMock: [
                { label: "Bookings", val: "22" },
                { label: "Revenue", val: "₱657.3K" },
                { label: "Avg Pax", val: "84" }
            ],
            featuredDashboardImage: "assets/catering_admin.png",
            caseStudy: {
                overview: "Jemmerific Catering Services is a web-based reservation and booking platform designed to streamline operations for a local catering business. The system bridges the gap between client package selection and administrative event coordination.",
                problem: "The local catering provider relied on manual entry, paper logs, and back-and-forth messaging to finalize menu selections, guest counts, and dates. This resulted in scheduling errors, double-bookings, and layout calculation mistakes.",
                solution: "Developed a robust PHP & MySQL reservation system where clients browse catering options, customize menus, receive instant estimates, and submit bookings. An admin dashboard provides scheduling calendars, customer records, package adjustments, and status updates.",
                keyFeatures: [
                    "Interactive Custom Menu Builder",
                    "Real-time Availability Calendar Check",
                    "Admin Dashboard with Bookings, Availability & Package Settings",
                    "AI-assisted Catering Package Customizer (suggests items based on budget)"
                ],
                role: "Lead Developer & Database Architect",
                techStack: ["PHP", "MySQL (MariaDB)", "JavaScript", "Bootstrap 5", "AJAX", "CSS3"],
                challenges: "Ensuring double-bookings do not occur on overlapping dates under high-concurrency requests.",
                solutions: "Designed atomic SQL transaction queries and dynamic date-locking mechanisms. When a user holds a checkout session, the database locks the slot temporarily, preventing competing reservations.",
                results: "Reduced customer reservation time by 60% and fully eliminated double-booking errors during its operational pilot.",
                lessonsLearned: "Learned the value of atomic database transactions, scheduling mechanics, and how crucial clear form validation is for end-users.",
                screenshots: [
                    { url: "assets/catering_landing.png", caption: "Landing Page - Premium Event Plan Platform" },
                    { url: "assets/catering_signin.png", caption: "Sign In Portal - Secured Authentication Screen" },
                    { url: "assets/catering_signup.png", caption: "User Registration - Input Validations and Dynamic Password Strengths" },
                    { url: "assets/catering_admin.png", caption: "Admin Dashboard - Analytics & Performance Overview System" },
                    { url: "assets/catering_client.png", caption: "Client Dashboard - Self-Service Scheduling and Event Reservation" }
                ],
                githubUrl: "https://github.com/adriancerenado/jemmerific",
                liveUrl: ""
            }
        },
        {
            id: "car-marketplace",
            name: "Car Marketplace & Costing System",
            category: "Web Application",
            shortDescription: "A vehicle marketplace and management platform with integrated vehicle cost tracking and pricing calculations.",
            tags: ["PHP", "MySQL", "JavaScript"],
            imageBg: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
            imageIcon: "🚗",
            dashboardMock: [
                { label: "Inventory", val: "10 Cars" },
                { label: "Revenue", val: "₱1.14M" },
                { label: "Customers", val: "2" }
            ],
            featuredDashboardImage: "assets/car_admin.png",
            caseStudy: {
                overview: "The Car Marketplace & Costing System is a specialized management portal designed to streamline inventory tracking, cost calculations, and sales for vehicle dealerships.",
                problem: "Dealerships struggle to calculate accurate profit margins because vehicle costs change dynamically (repair costs, import taxes, parts, storage fees) before a sale is finalized.",
                solution: "Created a comprehensive costing calculator linked directly to the car listings database. Admins input repair and logistics expenses, which automatically compute the optimal selling price and potential margins.",
                keyFeatures: [
                    "Dynamic Profit Margin Calculator",
                    "Inventory Management & Status Filters",
                    "Responsive Marketplace Front-end",
                    "Expense Ledger per Vehicle"
                ],
                role: "Full-Stack Developer",
                techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript (Vanilla)"],
                challenges: "Developing a calculation module that accurately tracked and aggregated floating-point currency calculations without rounding errors.",
                solutions: "Calculated and stored costs in minor units (cents/integers) and formatted output on render, resolving float rounding inaccuracies.",
                results: "Enabled dealership managers to track precise expenses per vehicle, leading to an estimated 15% increase in gross profit margins due to better price optimization.",
                lessonsLearned: "Learned database normalization for ledger architectures and basic financial software engineering principles.",
                screenshots: [
                    { url: "assets/car_landing.png", caption: "Marketplace Inventory - Clean Customer-Facing Vehicle Listings" },
                    { url: "assets/car_signin.png", caption: "Admin Sign In - Legaspi Car Yard Secure Credentials Portal" },
                    { url: "assets/car_signup.png", caption: "Account Setup - User Registration Form" },
                    { url: "assets/car_admin.png", caption: "Dealer Management Dashboard - Sales & Revenue Analytics" },
                    { url: "assets/car_inventory.png", caption: "Cost Calculation Portal - Vehicle Profit and Margin Audits" }
                ],
                githubUrl: "https://github.com/adriancerenado/car-marketplace",
                liveUrl: ""
            }
        },
        {
            id: "mycats",
            name: "MYCATS",
            category: "Web Application / Cat Management System",
            shortDescription: "A centralized web-based cat management and information platform where visitors can learn about cats and cat care, while registered users can create and manage their own cat profiles, health records, vaccinations, reminders, adoption activities, and community interactions. Administrators oversee users, cats, content, adoption processes, reports, and the overall system.",
            tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            imageBg: "linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)",
            imageIcon: "🐱",
            dashboardMock: [
                { label: "Users", val: "4" },
                { label: "Cats Tracked", val: "6" },
                { label: "Adoptions", val: "1" }
            ],
            featuredDashboardImage: "assets/mycats_admin.png",
            caseStudy: {
                overview: "MYCATS is a centralized web-based feline profile management and health tracking system designed to streamline pet ownership tasks, health logs, vaccinations, and adoption processes.",
                problem: "Pet owners struggle to keep track of disjointed medical documents, vaccination cards, deworming alerts, and vet schedules across multiple cats. Similarly, administrators of community foster networks rely on manual entries to process adoptions.",
                solution: "Developed a comprehensive portal where users build profiles for their cats, track detailed vaccination schedules, setup reminders for deworming, and view vet recommendations. A dedicated admin console handles system audits, vetting reports, adoption approvals, and user permissions.",
                keyFeatures: [
                    "Feline Health Ledger & Vaccination Reminders",
                    "Dynamic Cat Profile Builder & Gallery",
                    "Integrated Adoption Application Flow",
                    "Admin Panel with System Stats, User Auditing & Adoption Processing"
                ],
                role: "Lead Full-Stack Developer",
                techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
                challenges: "Designing a schema that handles dynamic medical log records (vaccinations, dewormings) per cat while supporting push/alert schedules without database bloating.",
                solutions: "Created a relational schema splitting log events into separate transactional tables, indexing cat_id and query date columns, and setting cron timers on dates to evaluate warning dates.",
                results: "Created a platform capable of tracking thousands of felines, successfully managing adoption requests and automated vaccination alerts during client evaluations.",
                lessonsLearned: "Enhanced knowledge in schema normalization, date aggregation logic, and client-facing system administration dashboards.",
                screenshots: [
                    { url: "assets/mycats_landing.png", caption: "Landing Page - Feline Management Center with Stats Overview" },
                    { url: "assets/mycats_signin.png", caption: "Login Portal - Secure Administrative and Member Access Screen" },
                    { url: "assets/mycats_signup.png", caption: "Registration Page - Free User Signup with Safety Validations" },
                    { url: "assets/mycats_client.png", caption: "User Dashboard - Cat Roster, Reminders, and Health Records" },
                    { url: "assets/mycats_admin.png", caption: "Admin Console - Full System Administration Overview" }
                ],
                githubUrl: "https://github.com/adriancerenado/mycats",
                liveUrl: ""
            }
        }
    ],
    experience: [
        {
            year: "2026 — Present",
            role: "Web Developer",
            organization: "Freelance (AI-based)",
            description: "Building responsive web applications and providing technical digital solutions for clients.",
            responsibilities: [
                "Web development utilizing PHP, JS, and CSS systems",
                "Custom database design and maintenance using MySQL",
                "Technical troubleshooting and system analysis",
                "Client consultation and user requirement gathering"
            ]
        }
    ],
    certifications: [
        {
            id: "cert-customer-support",
            name: "IT Customer Support Basics",
            organization: "Cisco Networking Academy",
            date: "Jul 2026",
            credentialId: "d1031735-676a-4590-a80f-225dae6cd0cf",
            category: "IT",
            image: "assets/badge_customer_support.png",
            url: "https://www.credly.com/badges/d1031735-676a-4590-a80f-225dae6cd0cf/public_url"
        },
        {
            id: "cert-cisco-ai",
            name: "AI Fundamentals: Language and Vision in AI",
            organization: "Cisco Networking Academy",
            date: "Aug 2026",
            credentialId: "1b7066d0-7e88-4aac-87d8-bd1d2e42bbd9",
            category: "Development",
            image: "assets/badge_cisco_ai.png",
            url: "https://www.credly.com/badges/1b7066d0-7e88-4aac-87d8-bd1d2e42bbd9/public_url"
        },
        {
            id: "cert-ibm-ai",
            name: "AI Fundamentals: Language and Vision in AI",
            organization: "IBM SkillsBuild",
            date: "Aug 2026",
            credentialId: "5205d5fa-f446-41cf-974d-632f6b74fa28",
            category: "Development",
            image: "assets/badge_ibm_ai.png",
            url: "https://www.credly.com/badges/5205d5fa-f446-41cf-974d-632f6b74fa28/public_url"
        }
    ],
    currentlyLearning: [
        { name: "TypeScript & Next.js", progress: "70%" },
        { name: "Docker Containerization", progress: "45%" },
        { name: "RESTful API Development with Node.js", progress: "60%" }
    ],
    blog: [
        {
            id: "building-catering-system",
            title: "How I Built a Catering Booking System",
            category: "Web Development",
            excerpt: "Building a production catering booking system comes with unique challenges, from double-booking prevention to dynamic pricing calculators. Here is how I solved them.",
            date: "Aug 12, 2026",
            readTime: "6 min read",
            content: `### Introduction
A few months ago, a local business owner asked me if I could build a booking system for Jemmerific Catering Services. At first, I thought, "How hard could this be? Just a couple of PHP scripts, a booking form, and a database."

But once I got into the actual workflow, I quickly realized that booking a catering event is a lot more complex than scheduling a simple appointment. You have to handle fluctuating guest counts, menu package selections, event themes, calendar availability, and staff resources simultaneously.

### The Real Battle: Dealing with Concurrent Bookings
My biggest technical challenge was preventing double-bookings. I couldn't just check availability on the frontend because two users might load the checkout page at the same time and select the same date. If both submitted their details, they would both get booked.

To solve this, I had to learn about MySQL transactions. Instead of doing a simple database insertion, I used InnoDB's \`SELECT ... FOR UPDATE\` statement. This locked the target date block during the checkout sequence. If the query confirmed that the caterer's booking threshold was reached, the system rolled back the transaction and showed a polite message to the user.

### Why Visual Feedback Matters
Another thing I realized is that clients want to see exactly what they are paying for. I built a dynamic menu package customizer that calculates pricing in real-time as users add or remove dishes. Doing this with AJAX made the user interface feel smooth and responsive, which kept users engaged.

### What I Learned
Building Jemmerific was a huge learning curve for me. It forced me to think about edge cases, database integrity, and how to communicate technical limitations back to users through a friendly interface.`
        },
        {
            id: "first-stack-lessons",
            title: "What I Learned Building My First Full-Stack System",
            category: "Career",
            excerpt: "Moving from simple frontend widgets to full database integration is a major milestone. Here are the 5 lessons I learned along the way.",
            date: "Jul 28, 2026",
            readTime: "5 min read",
            content: `### The Transition
We all start by building static landing pages with HTML and CSS. But transitioning to full-stack development—where your UI is completely database-driven—feels like starting all over again.

When I built the Car Marketplace & Costing System, I was hit with multiple conceptual shifts. Here's a raw look at what I learned during that project.

### 1. Planning is 80% of the Work
In my early projects, I used to open VS Code and start typing code immediately. That was a mistake. I ended up rewriting database queries and table fields five times because I didn't think about how data associated with other tables. Now, I don't write a single line of code until I've mapped out the database schema on paper.

### 2. The Danger of Float Rounding Errors
In the Car Marketplace project, managers needed to track repairs and costs to calculate precise profit margins. I initially stored monetary values as standard floats in MySQL. Pretty soon, the totals were off by a few cents due to floating-point rounding errors. I learned the hard way that you should store currency as integers (cents) in the database and convert it back to decimal format only when displaying it to the user.

### 3. Error Handling is Part of UI
When things break, the browser shouldn't show a blank screen or a scary database stack trace. If a query fails, I wrap it in a PHP \`try-catch\` block and return a clear, friendly warning.

### Moving Forward
Full-stack development is about connecting components securely. Every mistake I made on this marketplace tracker taught me how to write cleaner PHP, organize SQL indexes, and build better systems.`
        },
        {
            id: "database-design-booking",
            title: "Designing a Database for a Booking System",
            category: "Database",
            excerpt: "Deep dive into database normalization, relationships, and optimization techniques specifically for reservations and scheduling applications.",
            date: "Jun 15, 2026",
            readTime: "8 min read",
            content: `### Why Schema Design Matters
When I was starting out with databases, normalization felt like a dry academic concept that had no relevance to real-world projects. But when I built the MYCATS platform—which tracks multiple cats, medical logs, vaccinations, and adoption statuses—I quickly saw how a poorly normalized database leads to headaches.

If you duplicate database columns (like copying owner details inside every cat record), updating a user's email becomes a nightmare.

### Normalizing to 3NF
To keep the MYCATS database organized, I normalized the structure to Third Normal Form (3NF). I split the data into separate tables:
* \`users\`: Account and contact details.
* \`cats\`: Feline profiles linked to user IDs.
* \`vaccinations\`: Available vaccine types.
* \`medical_logs\`: A junction table linking a specific cat to a vaccine on a specific date.

This made it simple to track health records without duplicating owner or cat details, keeping the data clean.

### Speeding Up Queries with Indexes
When pulling logs for hundreds of cats, page load speed can slow down. I noticed that searching for cats by vaccination dates was taking too long as the database grew. I solved this by adding a database index on the date query column:
\`CREATE INDEX idx_log_date ON medical_logs(log_date);\`

This simple index reduced query response times significantly. Designing a database isn't just about making tables—it's about thinking how your data will scale.`
        }
    ],
    githubMock: {
        username: "Adriannn13",
        totalContributions: "384",
        repos: [
            {
                name: "SysProTech-",
                description: "Team Adrian - Systems project interface and collaboration repository.",
                language: "HTML",
                stars: 1,
                forks: 0,
                updated: "Jul 2026"
            },
            {
                name: "Portfolio",
                description: "Personal responsive developer portfolio showcasing web applications, system structures, and technical credentials.",
                language: "HTML",
                stars: 1,
                forks: 0,
                updated: "Jul 2026"
            }
        ]
    }

};

