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
      description: "As part of UCLA Extension's UX program, I saw this project as an opportunity to conduct user research, identify pain points, and design a more intuitive onboarding experience for parents with young kids. By focusing on user needs, I explored ways to simplify account creation and login, reducing friction and enhancing engagement.",
      additionalInfo: "Mobile - iOS and Android.",
      role: "UX Researcher & Designer",
      timeline: "2024",
    },
    discovery: {
      stakeholderInterviews: {
        title: "Stakeholder Interviews",
        description: "I conducted interviews with product managers and developers to understand technical constraints and business goals.",
        keyFindings: [
          "Need for balance between security and ease of use",
          "Integration with existing systems is crucial",
          "User data privacy is a top priority"
        ]
      },
      userPersonas: {
        title: "User Personas",
        description: "Through user interviews and surveys, I identified three distinct user personas:",
        personas: [
          {
            name: "Jane Choi",
            role: "New Mom",
            goals: [
              "Quick access to daily tasks",
              "Share lists with family members",
              "Minimal learning curve"
            ]
          },
          {
            name: "Maya Lee",
            role: "Working Mom of Two",
            goals: [
              "Efficient task management",
              "Cross-device synchronization",
              "Simple authentication process"
            ]
          },
          {
            name: "Emma Yamamoto",
            role: "Stay-at-home Mom of Triplets",
            goals: [
              "Password management",
              "Easy account recovery",
              "Secure data storage"
            ]
          }
        ]
      },
      insights: {
        title: "Summary of Insights",
        findings: [
          "Parents prefer social login options over traditional email/password",
          "Multi-device access is crucial for managing family tasks",
          "Security concerns are balanced with convenience needs",
          "Account sharing between partners is a common requirement"
        ]
      },
      competitorAnalysis: {
        title: "Competitor Analysis",
        description: "I analyzed five leading family task management apps to identify patterns and opportunities.",
        competitors: [
          {
            name: "Competitor A",
            strengths: ["Simple interface", "Quick signup"],
            weaknesses: ["Limited sharing options", "No password recovery"]
          },
          {
            name: "Competitor B",
            strengths: ["Strong security", "Multiple login options"],
            weaknesses: ["Complex onboarding", "Poor cross-device sync"]
          }
        ],
        opportunities: [
          "Simplified social login integration",
          "Better account sharing features",
          "Improved password recovery process"
        ]
      }
    },
    process: {
      overview: {
        title: "The Process",
        steps: [
          {
            title: "Needfinding",
            points: [
              "Initial Assumptions",
              "Interviews",
              "Competitor Analysis"
            ]
          },
          {
            title: "Design Alternatives",
            points: [
              "Brain Storming",
              "Empathy map",
              "Personas",
              "Journey Maps",
              "Site Maps"
            ]
          },
          {
            title: "Prototype",
            points: [
              "Low fidelity",
              "Mid fidelity"
            ]
          },
          {
            title: "Evaluation",
            points: [
              "Qualitative Feedback",
            ]
          }
        ],
      }
    },
    needfinding: {
      title: "Needfinding",
      description: "To better understand the challenges parents face during app onboarding, I conducted user research through interviews and competitive analysis.",
      methods: [
        {
          title: "User Interviews",
          details: "Conducted in-depth interviews with parents to understand their daily routines and pain points with existing apps."
        },
        {
          title: "Competitive Analysis",
          details: "Analyzed five leading family task management apps to identify patterns and opportunities.",
          competitors: [
            {
              name: "Competitor A",
              strengths: ["Simple interface", "Quick signup"],
              weaknesses: ["Limited sharing options", "No password recovery"]
            },
            {
              name: "Competitor B",
              strengths: ["Strong security", "Multiple login options"],
              weaknesses: ["Complex onboarding", "Poor cross-device sync"]
            }
          ],
          opportunities: [
            "Simplified social login integration",
            "Better account sharing features",
            "Improved password recovery process"
          ]
        }
      ]
    },
    designAlternatives: {
      title: "Design Alternatives",
      description: "Based on the research findings, I explored different design solutions through various methods:",
      methods: [
        {
          title: "Brain Storming",
          details: "Generated multiple ideas and approaches to solve the authentication challenges identified during research."
        },
        {
          title: "Empathy Map",
          details: "Created empathy maps to better understand user feelings, pain points, and needs during the authentication process."
        },
        {
          title: "Personas",
          details: "Through user interviews and surveys, I identified three distinct user personas:",
          personas: [
            {
              name: "Jane Choi",
              role: "New Mom",
              goals: [
                "Quick access to daily tasks",
                "Share lists with family members",
                "Minimal learning curve"
              ]
            },
            {
              name: "Maya Lee",
              role: "Working Mom of Two",
              goals: [
                "Efficient task management",
                "Cross-device synchronization",
                "Simple authentication process"
              ]
            },
            {
              name: "Emma Yamamoto",
              role: "Stay-at-home Mom of Triplets",
              goals: [
                "Password management",
                "Easy account recovery",
                "Secure data storage"
              ]
            }
          ]
        },
        {
          title: "Journey Maps",
          details: "Created user journey maps to visualize the authentication flow and identify opportunities for improvement."
        },
        {
          title: "Site Maps",
          details: "Developed site maps to plan the information architecture and ensure intuitive navigation."
        }
      ]
    },
    prototype: {
      title: "Prototype",
      description: "I created iterative prototypes to test and refine the authentication flow:",
      methods: [
        {
          title: "Low Fidelity",
          details: "Created paper wireframes and basic digital mockups to quickly test different layout options and user flows."
        },
        {
          title: "Mid Fidelity",
          details: "Developed interactive prototypes with more detailed UI elements to validate the authentication process."
        }
      ]
    },
    evaluation: {
      title: "Evaluation",
      description: "I conducted user testing sessions to validate the design solutions:",
      methods: [
        {
          title: "Low-Fidelity Testing",
          details: "Gathered initial feedback from users about the basic layout and flow of the authentication process.",
          testingTitle: "Low-Fidelity Testing Results",
          testing: {
            good: [
              "Email verification felt standard",
              "Google signup was simple"
            ],
            bad: [
              "Survey cluttered signup",
              "Email confirmation timing discouraged users",
              "Security concerns (no password visibility)"
            ]
          }
        },
        {
          title: "Mid-Fidelity Testing",
          details: "Collected detailed feedback on the interactive prototype with more refined UI elements.",
          testingTitle: "Mid-Fidelity Testing Results",
          testing: {
            good: [
              "Password visibility toggle helpful",
              "Social login prominent",
              "Clear error messages"
            ],
            bad: [
              "Account recovery flow unclear",
              "Too many steps in email signup"
            ]
          }
        }
      ]
    }
  }
] 


// description: "I was the Executive Design Director of the Audience Experience team at Vox Media from 2016-2017. Any surface, on platform or off, where a reader might encounter a story from one of our brands was my responsibility. Success in this role meant collaboration across our platform team, the centralized brand team, as well as each editorial staff and their design groups.",
// additionalInfo: "Vox has grown into a massive company, and one of my focuses as the Executive Design Director over this group was to improve transparency and communication across the many subdivided design teams at the company, as well as to work alongside the rest of design leadership to create clarity in responsibilities and ownership for each group.",
// role: "Executive Design Director, 2016-2017",
// timeline: "2016-2017"