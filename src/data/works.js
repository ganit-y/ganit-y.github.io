// All case study content lives here. Add / edit projects in one place.
//
// Each project has a `summary` statement, `meta` rows, and a list of
// `sections`. A section has a left-rail `kicker`, a big `heading`, and an
// array of content `blocks`. Supported block types:
//   { type: "lead",  text }                     – large intro paragraph
//   { type: "text",  text }                     – body paragraph
//   { type: "group", label, items: [] }         – sub-headed paragraphs
//   { type: "list",  items: [] }                – bulleted list
//   { type: "stats", items: [{ value, label }] }– metric callouts
//   { type: "image", label, tone }              – visual placeholder
export const works = [
  {
    slug: "project-immune",
    title: "Project Immune",
    subtitle:
      "An autonomous security product that fixes misconfigurations on its own – taken from the trusted few toward the mainstream.",
    tags: ["UX Strategy", "0→1 Product", "Adoption & Growth", "Enterprise Security"],
    cover: "#1C1C1C",
    cardImage: "/assets/exports/Immune 9.png",
    heroImage: "/assets/exports/Immune 9.png",
    meta: [
      { label: "Role", value: "Sole Product Designer" },
      { label: "Team", value: "3 PMs · ~20 engineers" },
      { label: "Contribution", value: "Strategy · IA · Journeys · Prototyping" },
    ],
    sections: [
      {
        kicker: "Intro",
        heading: "What is Immune?",
        blocks: [
          {
            type: "lead",
            text: "Most cyber-attacks exploit known, preventable misconfigurations. The real problem is that organizations don't fix them – they're worried about the productivity impact.",
          },
          {
            type: "text",
            text: "Immune, part of Microsoft Defender, fixes those misconfigurations autonomously, but only where it predicts no productivity impact. For it to succeed it had to earn the user's trust and confidence to let it act on its own – while keeping the user feeling completely in control.",
          },
          {
            type: "group",
            label: "My role",
            items: [
              "I was the sole product designer on Immune, from its earliest days.",
              "I owned the UX end to end: strategy, information architecture, user journeys, prototyping and usability validation.",
              "I worked alongside 3 PMs and a ~20-person engineering team.",
            ],
          },
        ],
      },
      {
        kicker: "The challenge",
        heading:
          "We needed to find the adoption blockers that could tank our public preview.",
        blocks: [
          {
            type: "text",
            text: "Design partners loved Immune, but while they might be okay with incomplete features and early-stage technology, public-preview customers are far less patient. The numbers backed up the worry.",
          },
          {
            type: "stats",
            tone: "negative",
            items: [
              {
                value: "<37%",
                label: "of private-preview customers reached ring 3",
              },
              {
                value: "<22%",
                label: "adopted Immune onto more than half of eligible devices",
              },
            ],
          },
          {
            type: "text",
            text: "At that time new PMs joined the team and suspected the numbers were purely a fault in the user experience.",
          },
        ],
      },
      {
        kicker: "Research & insights",
        heading: "I ran a workshop so every hypothesis was based on shared facts.",
        blocks: [
          {
            type: "text",
            text: "Since I felt the new PMs hadn't grasped the user journey yet, I pushed back on their claims and instead ran a workshop on the current journey. This way any theory would be grounded in shared facts rather than assumptions.",
          },
          {
            type: "image",
            src: "/assets/exports/Immune 1 cropped.png",
            label: "User journey map – Awareness → Evaluation → Try it out → Adopt & activate",
            tone: "light",
            contained: true,
          },
          {
            type: "text",
            text: "Following the workshop, the PM and CXE checked five hypotheses against the data:",
          },
          {
            type: "list",
            items: [
              "Value proposition – Confirmed",
              "Trust / confidence – Disputed",
              "Customer journey friction points – Confirmed",
              "Compliance issues – Confirmed",
              "Customer engagement – Confirmed",
            ],
          },
          {
            type: "text",
            text: "We concluded that adoption had stalled for several reasons – only some of them UX.",
          },
        ],
      },
      {
        kicker: "Design strategy",
        heading: "Evolution, not revolution.",
        blocks: [
          {
            type: "lead",
            text: "Because the foundation – trust – was already solid, Immune didn't need a rebuild. It needed targeted moves: a handful of small but critical steps to make the value legible and smooth the path to public preview.",
          },
        ],
      },
      {
        kicker: "Concepts",
        heading: "First-time experience",
        blocks: [
          {
            type: "group",
            label: "Problem",
            items: [
              "The first page users saw was a one-pager showing everything Immune can do for their org.",
              "The value was reflected in a detailed way that might build trust, but didn't help users understand the bigger picture – the result was cognitive overload.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/Immune 4.png",
            contained: true,
            frameless: true,
          },
          {
            type: "group",
            label: "Suggested solution",
            items: [
              "Break the first-time experience into multiple steps – progressive disclosure of terminology and features.",
              "Demonstrate value first: what Immune is, what it's good for, and proof of value.",
              "Make the new UX a base for trial and free experiences.",
            ],
          },
          {
            type: "gallery",
            frameless: true,
            shadow: true,
            items: [
              { src: "/assets/exports/Immune 5-1.png" },
              { src: "/assets/exports/Immune 6-1.png" },
              { src: "/assets/exports/Immune 3-1.png" },
            ],
            label: "From a single overwhelming one-pager to a guided, multi-step onboarding.",
          },
        ],
      },
      {
        kicker: "Concepts",
        heading: "New information architecture",
        blocks: [
          {
            type: "group",
            label: "Problem",
            items: [
              "The current IA wasn't aligned with the jobs to be done we identified in the workshop.",
              "As a result, users might miss features and available actions that help disarm concerns and raise confidence while onboarding.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/Immune 8.png",
            contained: true,
          },
          {
            type: "group",
            label: "Suggested solution",
            items: [
              "Tracking – the product's day-to-day jobs, such as block events and reactive actions.",
              "Management – setup jobs, such as rings creation, management, and exceptions.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/Immune 10.png",
            contained: true,
            label: "The reorganised information architecture.",
          },
        ],
      },
      {
        kicker: "Concepts",
        heading: "Block events page",
        blocks: [
          {
            type: "group",
            label: "Problem",
            items: [
              "Monitoring block events is the only way customers can validate no major productivity impact – crucial for building trust in Immune.",
              "To monitor it, users had to actively dig through many layers; the data was distributed across table rows with no consolidated view.",
              "Some users weren't even aware there are response actions they can take around block events.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/Immune 7.png",
            contained: true,
            frameless: true,
          },
          {
            type: "group",
            label: "Suggested solution",
            items: [
              "Create a consolidated page for all events across all security controls.",
              "Provide a list of insights over aggregated events to help admins know how to respond.",
              "Emphasize and recommend response actions right from the table view.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/Immune 2-1.png",
            contained: true,
            frameless: true,
            shadow: true,
            label: "Consolidated block-events page with insights and recommended actions.",
          },
        ],
      },
      {
        kicker: "Reflection",
        heading:
          "These solutions were the last milestone before the project was discontinued.",
        blocks: [
          {
            type: "group",
            label: "Our previous work was validated",
            items: [
              "The trust foundation we'd built didn't just ship – the research proved it landed. Customers genuinely trust Immune to do its job.",
            ],
          },
          {
            type: "group",
            label: "Reframed the team's understanding",
            items: [
              "Our research overturned the assumption that trust was the blocker – it was value legibility and friction. That reframed the team's plan for public preview.",
            ],
          },
          {
            type: "group",
            label: "A lot of work ahead",
            items: [
              "These concepts were a starting point, scoped to specific moments. With more time, I'd have pushed further on proof of value and external communication.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "get-started-guide",
    title: "“Get started” guide",
    subtitle:
      "Turning a hands-on, one-person onboarding into a self-serve in-product experience – built as a shared pattern across Microsoft Defender.",
    tags: ["Onboarding", "UX-Led", "UX Patterns", "Enterprise Security"],
    cover: "#323232",
    cardImage: "/assets/exports/GetStarted 12.png",
    meta: [
      { label: "Role", value: "Product Designer (end to end)" },
      { label: "Driver", value: "No PM – I owned it" },
      { label: "Contribution", value: "Journey mapping · Research · UX · Rollout spec" },
    ],
    sections: [
      {
        kicker: "Intro",
        heading: "How “Get started” started",
        blocks: [
          {
            type: "list",
            items: [
              "Exposure Management, part of Microsoft Defender, was a powerful new product that gave security teams real value, but provided almost no in-product guidance – a few notifications and scattered action cards.",
              "Onboarding leaned on our CXE, who personally walked each new customer through their first weeks. It worked, but it didn't scale, and it capped how many customers reached value.",
              "We needed an in-product experience that lets users feel in control and self-serve their way in – built as a shared pattern across Microsoft Defender.",
            ],
          },
          {
            type: "group",
            label: "My role",
            items: [
              "I was brought in for the onboarding, on the strength of the Immune guide I'd already shipped, which customers found helpful.",
              "This feature had no PM driver – it was only reviewed from time to time.",
              "I drove it end to end: mapping the journey, running the audit and research, and designing the experience and its horizontal-rollout spec, working closely with the CXE.",
            ],
          },
        ],
      },
      {
        kicker: "The challenge",
        heading: "There isn't one single onboarding path that's right for everyone.",
        blocks: [
          {
            type: "text",
            text: "Most onboarding processes are based on a sequence of steps. Exposure Management doesn't work that way – there's no single right path, because the best first move depends on each user's environment, priorities, and goals.",
          },
          {
            type: "text",
            text: "The guidance had to lead people through a process that isn't linear: help each user start with whatever was right for them, while still giving enough direction and a sense of progress.",
          },
        ],
      },
      {
        kicker: "Research & insights",
        heading: "Push gets dismissed. Pull gets used.",
        blocks: [
          {
            type: "text",
            text: "A literature review confirmed what we all know about onboarding: forced tutorials, videos, and coach-marks – push guidance – get dismissed and forgotten. People want to use the product, not sit through a lesson.",
          },
          {
            type: "text",
            text: "What works is pull: contextual help, surfaced where and when users need it. Good onboarding doesn't teach the product; it makes users feel in control (autonomy) and capable of real tasks (competence).",
          },
          {
            type: "group",
            label: "Mapping the real onboarding",
            items: [
              "I asked our CXE to map the onboarding process he runs: the questions he asks, the prerequisites he checks before a customer can even begin, and what he steers them toward first.",
              "That turned his hard-won, in-person expertise into the actual content the in-product guidance would carry.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 2.png",
            label: "Onboarding guidance map – set up your environment / choose how you want to start",
            tone: "light",
            contained: true,
          },
          {
            type: "group",
            label: "Auditing the landscape",
            items: [
              "I scanned how others – competitors and internal teams – guide new users, plus my own Immune guidance.",
              "I identified a few forms: a side panel, a banner, a full-page guide, and a first-run welcome.",
              "The contextual side panel stood out – it's the format I'd already built for Immune, where customers told us it worked, so I used it as a proven foundation.",
            ],
          },
        ],
      },
      {
        kicker: "Design strategy",
        heading: "My design strategy came down to four principles.",
        blocks: [
          {
            type: "list",
            emphasizeLead: true,
            items: [
              "Pull, not push – guidance is contextual and on-demand, never forced in front of users.",
              "Support autonomy and competence – help users feel in control and succeed at real tasks, rather than lecture them.",
              "Design for reuse – build on existing components and shape it as a horizontal pattern, not a one-off.",
              "Show progress – a visible sense of momentum: where they are, what's next, what's done.",
            ],
          },
        ],
      },
      {
        kicker: "Solution",
        heading: "Formats I ditched",
        blocks: [
          {
            type: "group",
            label: "A wizard panel",
            items: [
              "A wizard implies a linear process – but there's no single right path here. Rather than march users through fixed steps, I wanted to let them choose their path.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 9.png",
            label: "A wizard panel",
            contained: true,
            frameless: true,
            shadow: true,
          },
          {
            type: "group",
            label: "An overlay panel",
            items: [
              "An overlay works as a companion, but it floats over the page, cut off from the content. I wanted guidance that could point into the page – sitting beside the content, not on top of it.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 10.png",
            label: "An overlay panel",
            contained: true,
            frameless: true,
            shadow: true,
          },
          {
            type: "group",
            label: "Top section in the dashboard",
            items: [
              "Reusing the existing “guided steps” component claims the prime spot and pushes the real content down – which breaks the “pull, not push” principle.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 11.png",
            label: "Top section in the dashboard",
            contained: true,
            frameless: true,
            shadow: true,
          },
        ],
      },
      {
        kicker: "Solution",
        heading: "A contextual “Get started” side panel.",
        blocks: [
          {
            type: "lead",
            text: "A side panel that lives across Exposure Management and adapts to where the user is and what they're trying to do. Every move traces back to a principle.",
          },
          {
            type: "group",
            label: "Two ways in",
            items: [
              "It opens by asking how you'd like to start: Optimize your environment (a short, task-based setup for admins) or Choose your journey (explore by what matters most to your org). There's no required order – the user decides where to begin.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 4.png",
            label: "Two ways in",
            contained: true,
            frameless: true,
            shadow: true,
          },
          {
            type: "group",
            label: "Two levels",
            items: [
              "Choosing a card drops the pane into a second level with further guidance: a checklist of concrete tasks, or a set of paths linking straight to the relevant screen.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 5.png",
            label: "Two levels",
            contained: true,
            frameless: true,
            shadow: true,
          },
          {
            type: "group",
            label: "A new glossary",
            items: [
              "Unfamiliar terms get a plain definition plus two actions: “show me where I can find it on this page,” or “go to the relevant page.” It explains a concept and takes you to it.",
            ],
          },
          {
            type: "image",
            src: "/assets/exports/GetStarted 6.png",
            label: "A new glossary",
            contained: true,
            frameless: true,
            shadow: true,
          },
          {
            type: "group",
            label: "Bridges for what moved",
            items: [
              "Because several products were folded into Exposure Management, returning users can ask to find their data and be pointed to where those experiences live now.",
            ],
          },
        ],
      },
      {
        kicker: "Reflection",
        heading: "The guide was implemented by two different teams.",
        blocks: [
          {
            type: "text",
            text: "Wider adoption is still pending – a matter of engineering capacity. Here's what I'd have done with more time:",
          },
          {
            type: "group",
            label: "User research",
            items: [
              "Learn from user feedback and do more research – see where the guidance fails and what we can do better.",
            ],
          },
          {
            type: "group",
            label: "Campaign with dev teams",
            items: [
              "First, because I believe they over-estimate the effort it would take to adopt this. Second, so they'd build the pieces that got deprioritized.",
            ],
          },
          {
            type: "group",
            label: "Contribute the new patterns",
            items: [
              "The glossary is a composition of existing components – I'd have contributed it to the design system as first-class components, not one-off compositions.",
            ],
          },
        ],
      },
    ],
  },
];

export const getWork = (slug) => works.find((w) => w.slug === slug);
