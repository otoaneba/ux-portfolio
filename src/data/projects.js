export const projects = [
  {
    id: 1,
    title: "Mom-Friendly Authentication System",
    subtitle: "UX Research & Design Case Study",
    description: "Designing an intuitive authentication system for busy moms, focusing on simplicity and multi-device accessibility.",
    thumbnail: "/images/projects/auth-system-thumb.png", // You'll need to add this image
    tags: ["UX Research", "User Testing", "Prototyping", "Authentication"],
    highlights: [
      "Conducted user research with 3 distinct mom personas",
      "Iterative testing from low to high fidelity prototypes",
      "Simplified Google and email authentication flows",
      "Improved user feedback and confirmation systems"
    ],
    problem: {
      statement: "Moms with young kids face inconveniences when creating accounts or logging into apps, needing a simple, secure, and quick process to manage tasks across devices.",
      need: "A signup and login feature that's easy, integrates with familiar accounts (e.g., Google), and ensures multi-device access without hassle, tailored to busy moms."
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
    }
  }
] 