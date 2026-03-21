# CLAUDE.MD

## Project Overview

This project is a personal developer portfolio for Mike. The goal is to create a polished, modern portfolio website that highlights technical ability, project depth, and real-world execution.

The portfolio must do more than list projects. It should present selected GitHub projects as strong case studies with:

- clear descriptions
- technology stacks
- business/use-case context
- screenshots or visual previews
- links to GitHub repositories
- live demo links when available

The site should position Mike as:

- a full-stack developer
- an AI-assisted builder
- a workflow and automation-minded problem solver
- someone who can turn ideas into usable products

---

## Primary Goals

1. Build a modern, responsive portfolio website.
2. Showcase advanced GitHub projects in a way that looks credible and professional.
3. Capture screenshots from selected projects to provide visual proof and improve presentation.
4. Create clear sections for skills, experience, featured work, and contact.
5. Ensure the portfolio feels custom, polished, and recruiter/client ready.

---

## Success Criteria

The project is successful if:

- the portfolio looks professional on desktop and mobile
- featured GitHub projects are presented as case studies, not just cards
- every featured project includes a visual preview image or screenshot
- the content clearly communicates Mike’s strengths
- the design is clean, modern, and fast
- links, screenshots, and project metadata are accurate
- the project can be easily updated later with new work

---

## Core Portfolio Sections

The portfolio should include the following sections unless there is a strong reason to change them:

### 1. Hero Section

Must immediately communicate:

- who Mike is
- what he builds
- the kind of value he offers

Suggested direction:

- concise headline
- short supporting text
- primary CTA: View Projects
- secondary CTA: Contact / GitHub / Resume

### 2. About Section

Should explain:

- self-taught / practical builder identity if relevant
- full-stack and AI-assisted development approach
- focus on building functional, real-world solutions
- interest in automation, workflows, business systems, and web apps

### 3. Skills / Tech Stack

Organize clearly, not as an overwhelming wall of badges.

Suggested groups:

- Frontend
- Backend
- Database
- Dev Tools
- AI / Automation Tools
- Productivity / Collaboration Tools

### 4. Featured Projects

This is the most important section.

Each featured project should ideally include:

- project title
- short summary
- core problem it solves
- stack used
- screenshot or preview image
- GitHub link
- live demo link if available
- key features
- notable technical decisions
- outcome or impact if known

### 5. Additional Projects

For smaller or less polished projects, use a lighter layout.

### 6. Contact Section

Should be simple and professional.
Possible items:

- email
- GitHub
- LinkedIn
- call to collaborate

---

## Featured Project Standards

Not every GitHub repo should be featured. Prioritize quality over quantity.

### Include projects that show:

- advanced UI or frontend engineering
- full-stack architecture
- real workflows or useful systems
- AI-assisted or automation-heavy builds
- clean implementation and strong presentation potential
- originality or practical value

### Avoid featuring projects that are:

- unfinished with no clear value
- clones unless significantly improved
- visually broken
- too trivial
- missing enough context to explain them well

### Ideal number of featured projects

- 3 to 6 featured projects
- additional projects can be listed below if needed

---

## Project Content Rules

For every featured project, generate content in this structure:

### Required fields

- Title
- One-line summary
- Problem / Purpose
- Solution / What it does
- Stack
- Key features
- Screenshot / Preview
- GitHub URL
- Live URL if available

### Recommended fields

- Challenges solved
- Why this project matters
- My role
- Notable implementation details
- Future improvements

### Writing rules

- Be clear and direct
- Avoid vague hype
- Explain real value
- Use plain English where possible
- Do not overuse buzzwords
- Sound credible, not inflated

---

## Screenshot and Visual Capture Workflow

A major goal of this portfolio is to visually showcase GitHub projects.

### Screenshot priorities

For each selected project, try to collect:

1. landing page / dashboard screenshot
2. main workflow screenshot
3. standout feature screenshot
4. mobile screenshot if responsive and worth showing

### Preferred screenshot sources

1. local running version of the project
2. deployed live version
3. static preview from repository assets if no live UI exists

### Screenshot rules

- use clean browser windows
- avoid cluttered desktop backgrounds
- avoid showing bookmarks or personal data
- use consistent image sizes when possible
- prefer high-resolution screenshots
- crop for clarity
- capture the most impressive and informative screens
- ensure screenshots represent real functionality

### If a project cannot be run

Fallback options:

- use repository screenshots if available
- generate a clean mock presentation image only if clearly labeled or visually honest
- do not fabricate functionality that does not exist

### Output expectations

Save screenshots in a dedicated folder such as:
`/public/project-screenshots/`

Suggested naming format:

- `project-name-home.png`
- `project-name-dashboard.png`
- `project-name-mobile.png`

---

## GitHub Project Review Process

When reviewing Mike’s GitHub projects for inclusion:

### Step 1: Inventory

List candidate repositories with:

- repo name
- stack
- status
- visual quality potential
- complexity
- relevance to portfolio

### Step 2: Rank

Rank projects based on:

- technical depth
- polish
- uniqueness
- usefulness
- visual presentation strength
- alignment with target opportunities

### Step 3: Select

Choose the best 3 to 6 projects for featured placement.

### Step 4: Capture Visuals

Run or inspect the project and capture screenshots.

### Step 5: Write Case Study Content

Generate concise but strong descriptions.

### Step 6: Build Portfolio Presentation

Design layouts that elevate the work visually.

---

## Design Direction

The portfolio should feel:

- modern
- confident
- clean
- technical
- polished
- not overly flashy

### Preferred design qualities

- strong typography
- clear spacing
- premium card layout
- subtle motion
- excellent responsiveness
- readable contrast
- intentional hierarchy

### Avoid

- clutter
- too many colors
- random animations
- generic template look
- dense paragraphs
- too many tiny badges everywhere

---

## UX Requirements

- mobile responsive
- fast loading
- accessible contrast
- easy navigation
- clear calls to action
- smooth but subtle animation
- project previews should be easy to scan

---

## Technical Preferences

Unless the project already has a required stack, prefer:

- React
- Next.js
- TypeScript
- Tailwind CSS

Possible additions if needed:

- Framer Motion
- shadcn/ui
- simple CMS/content structure
- markdown or JSON-driven project data

### Code expectations

- reusable components
- clean folder structure
- typed props where appropriate
- maintainable styling
- no unnecessary complexity
- production-minded implementation

---

## Content Tone

The tone should be:

- professional
- confident
- clear
- builder-focused
- not robotic
- not exaggerated

The portfolio copy should make Mike sound experienced, practical, and capable of shipping real work.

---

## Agent Behavior Instructions

When working on this project:

- prioritize the portfolio’s credibility
- favor real project value over filler content
- present projects with screenshots whenever possible
- improve visual presentation without inventing fake outcomes
- keep content grounded in what the actual projects do
- maintain consistency across project cards and case studies

If information is missing:

- infer structure, not fake facts
- use placeholder notes only when necessary
- clearly separate confirmed details from proposed improvements

---

## File / Content Organization Suggestions

Suggested structure:

- `/app` or `/src`
- `/components`
- `/data/projects`
- `/public/project-screenshots`
- `/public/images`
- `/styles`

Project data can be stored in:

- JSON
- TypeScript data files
- markdown
- MDX

Use a structure that makes future updates easy.

---

## Deliverables

Expected outputs for this project:

1. finished portfolio UI
2. selected featured GitHub projects
3. cleaned-up project descriptions
4. screenshot assets for featured projects
5. project data structure for easy editing
6. responsive project showcase section
7. polished contact and about sections

---

## Non-Negotiables

- Do not feature weak projects just to fill space.
- Do not use misleading descriptions.
- Do not fabricate project results or fake screenshots.
- Do not let visual inconsistency reduce credibility.
- Do not bury the best work too low on the page.
- Do not create a portfolio that feels generic.

---

## Final Standard

Every decision should answer this question:

Does this make Mike look like a capable developer who builds real, impressive, and useful projects?

If not, revise it.
