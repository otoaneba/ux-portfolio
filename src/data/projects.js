export const projects = [
  {
    id: 1,
    title: "Rethinking Onboarding for Busy Parents",
    subtitle: "UX Research & Design Case Study",
    description: "Designing an intuitive authentication system for busy parents, focusing on simplicity and multi-device accessibility.",
    thumbnail: "/images/projects/auth-system-thumb.png", // You'll need to add this image
    tags: ["UX Research", "User Testing", "Prototyping", "Authentication"],
    highlights: [
      "Conducted user research with 3 distinct mom personas",
      "Iterative testing from low to high fidelity prototypes",
      "Simplified Google and email authentication flows",
      "Improved user feedback and confirmation systems"
    ],
    problem: {
      title: "Understanding the Pain Points of Parent-Friendly Onboarding",
      statement: "How can I improve onboarding for a to-do app for parents with young kids?", // Parents (especially moms) with young kids have their cognitive resources stretched thin on a daily basis, needing a simple, secure, and quick process to manage tasks across devices.
      need: "I aimed to identify the pain points parents encounter during the signup and login process, then design a more intuitive onboarding experience tailored for parents with young children. I needed to find out what pain points parents face during the signup and login process, and design a more intuitive onboarding experience for parents with young kids."
    },
    painPoints: [
      {
        category: "Signup Issues",
        points: [
          "Too many steps or cluttered forms overwhelm users",
          "Lack of confirmation after signup leaves users unsure",
          "Forgetting passwords or managing new ones is frustrating"
        ]
      },
      {
        category: "Login Issues",
        points: [
          "No clear indication of successful login",
          "Apps tied to one device lose data when switching",
          "Security concerns with password visibility"
        ]
      }
    ],
    personas: [
      {
        name: "Jane Choi",
        description: "New mom, prefers Google signup for simplicity, needs to share tasks with her husband."
      },
      {
        name: "Maya Lee",
        description: "Mom of two, wants minimal steps, gets stressed by complex apps."
      },
      {
        name: "Emma Yamamoto",
        description: "Veteran mom of triplets, uses email signup, frustrated by password overload."
      }
    ],
    testing: {
      lowFi: {
        good: ["Email verification felt standard", "Google signup was simple"],
        bad: [
          "Survey cluttered signup",
          "Email confirmation timing discouraged users",
          "Security concerns (no password visibility)"
        ]
      },
      midFi: {
        good: ["Google signup and email flow worked well", "Logout under hamburger menu preferred"],
        bad: [
          "No signup confirmation screen",
          "Survey purpose unclear",
          "Profile icon missing"
        ]
      },
      prototype: {
        good: ["Simple Google/email flows", "'Try without signing up' liked"],
        bad: [
          "'Sign up for free' implied costs",
          "Survey skippability needed",
          "Google logo should be colored"
        ]
      }
    },
    solutions: {
      signup: [
        "Google signup with colored logo, no cost implication",
        "Email signup with one required survey question",
        "Skippable second question",
        "Status indicator and confirmation screen"
      ],
      login: [
        "Streamlined email/password entry",
        "Eye icon for password visibility",
        "Profile icon on dashboard for confirmation",
        "Direct dashboard access after password reset"
      ],
      general: [
        "Light blue/yellow theme for calmness",
        "Consistent UI (drop shadows, no borders)",
        "Logout under hamburger menu only"
      ]
    },
    overview: {
      description: "As part of UCLA Extension’s UX program, I saw this project as an opportunity to conduct user research, identify pain points, and design a more intuitive onboarding experience for parents with young kids. By focusing on user needs, I explored ways to simplify account creation and login, reducing friction and enhancing engagement.",
      additionalInfo: "Mobile - iOS and Android.",
      role: "UX Researcher & Designer",
      timeline: "2024",
    }
  }
] 


// description: "I was the Executive Design Director of the Audience Experience team at Vox Media from 2016-2017. Any surface, on platform or off, where a reader might encounter a story from one of our brands was my responsibility. Success in this role meant collaboration across our platform team, the centralized brand team, as well as each editorial staff and their design groups.",
// additionalInfo: "Vox has grown into a massive company, and one of my focuses as the Executive Design Director over this group was to improve transparency and communication across the many subdivided design teams at the company, as well as to work alongside the rest of design leadership to create clarity in responsibilities and ownership for each group.",
// role: "Executive Design Director, 2016-2017",
// timeline: "2016-2017"