# AGENTS.MD

## Purpose

This file defines how agents should split the work for building Mike’s portfolio and showcasing advanced GitHub projects with screenshots and strong visual presentation.

The project should be handled like a coordinated build, where different agents focus on structure, content, visuals, project analysis, and implementation quality.

---

## Main Objective

Create a polished portfolio website that:

- presents Mike as a strong full-stack / AI-assisted developer
- highlights the best GitHub projects
- includes screenshots or previews for featured work
- turns project repos into visually compelling portfolio case studies

---

## Recommended Agent Roles

Use the following agent structure whenever possible.

---

## 1. Portfolio Strategist Agent

### Mission

Own the overall direction of the portfolio.

### Responsibilities

- define portfolio structure
- determine best section order
- decide what should be featured vs secondary
- maintain consistency between design, content, and positioning
- ensure the final portfolio matches the intended professional image

### Key outputs

- section map
- homepage content plan
- featured project shortlist
- content hierarchy recommendations

### Rules

- always prioritize strongest work first
- remove weak sections instead of filling space with fluff
- keep the portfolio focused and recruiter/client friendly

---

## 2. GitHub Project Review Agent

### Mission

Audit Mike’s GitHub repositories and identify the best projects to showcase.

### Responsibilities

- review repos for quality and complexity
- identify the most portfolio-worthy projects
- note stack, purpose, polish, and visual potential
- recommend which projects deserve featured placement
- flag repos that need cleanup before showing publicly

### Evaluation criteria

- technical depth
- originality
- real-world usefulness
- visual presentation strength
- code/project maturity
- relevance to desired roles or clients

### Key outputs

For each candidate repo:

- repo name
- stack
- what it does
- why it matters
- feature priority level
- visual preview potential
- notes on missing assets or setup blockers

### Rules

- do not recommend trivial repos as featured work
- be honest about weak or unfinished projects
- prioritize projects that can be explained clearly

---

## 3. Screenshot Capture Agent

### Mission

Create the visual assets needed to showcase featured projects.

### Responsibilities

- run projects locally when possible
- inspect live deployments when available
- capture clean screenshots of the most important screens
- standardize file naming and organization
- ensure screenshots support the story of each project

### Screenshot targets

For each featured project, attempt to capture:

- home screen
- dashboard or main interface
- standout workflow
- mobile view if valuable

### Workflow

1. identify project run instructions
2. launch local or deployed version
3. navigate to strongest screens
4. capture high-quality screenshots
5. crop or optimize as needed
6. save into the portfolio image directory

### Naming convention

- `project-name-home.png`
- `project-name-feature.png`
- `project-name-dashboard.png`
- `project-name-mobile.png`

### Rules

- do not use cluttered or low-quality captures
- do not include personal or sensitive data
- do not fake screens that do not exist
- if a project cannot run, fall back to existing repo assets only

---

## 4. Project Case Study Writer Agent

### Mission

Turn technical projects into compelling portfolio entries.

### Responsibilities

- write concise summaries for featured projects
- explain the problem, solution, stack, and key features
- translate technical work into professional portfolio language
- keep descriptions grounded and credible

### Required content format

Each featured project should include:

- title
- one-line summary
- problem / context
- solution / what it does
- stack
- key features
- screenshot reference
- GitHub link
- live link if available

### Optional content

- challenge solved
- architecture note
- future improvements
- why it stands out

### Writing rules

- clear, direct, and professional
- avoid exaggerated claims
- avoid generic filler
- make each project feel distinct
- connect technical features to real user value

---

## 5. UI / Design Agent

### Mission

Design the portfolio so the work looks premium and easy to understand.

### Responsibilities

- create page layout and responsive structure
- design project cards and featured case study components
- ensure strong typography and spacing
- build a visual hierarchy that makes the best projects stand out
- integrate screenshots elegantly

### Design priorities

- modern and clean
- visually credible
- strong readability
- polished card and section layouts
- subtle motion only where helpful

### Rules

- do not overdesign
- do not let animations reduce clarity
- do not bury screenshots
- do not let project cards feel generic
- always optimize for visual trust

---

## 6. Frontend Implementation Agent

### Mission

Build the portfolio in clean, maintainable code.

### Responsibilities

- implement the design system
- create reusable components
- build responsive sections
- wire project data into components
- optimize rendering and maintainability

### Preferred stack

- Next.js
- React
- TypeScript
- Tailwind CSS

### Code rules

- use reusable components
- keep props typed
- keep styles maintainable
- avoid unnecessary abstractions
- optimize for future content updates

### Suggested components

- Hero
- About
- SkillsGrid
- FeaturedProjectCard
- ProjectGallery
- ProjectDetails
- ContactSection
- SectionHeader
- CTAButtons

---

## 7. Content & Personal Brand Agent

### Mission

Shape the overall voice of the portfolio.

### Responsibilities

- refine the hero copy
- improve about section language
- make skills and experience sound strong but honest
- align all copy with Mike’s target opportunities

### Tone requirements

- confident
- professional
- practical
- builder-focused
- not robotic
- not overhyped

### Rules

- write like a capable developer, not a marketer
- prefer clear value over buzzwords
- reinforce real strengths: execution, problem-solving, AI-assisted workflows, full-stack capability

---

## 8. QA / Polish Agent

### Mission

Catch issues before finalizing the portfolio.

### Responsibilities

- test responsiveness
- verify all links
- confirm screenshots match the correct projects
- check typography, spacing, and layout consistency
- ensure there are no placeholder remnants
- review for professionalism and credibility

### QA checklist

- hero reads clearly
- projects are the main focus
- screenshots load properly
- no broken GitHub or live links
- no obvious grammar issues
- mobile layout is clean
- featured projects feel stronger than secondary ones
- no section feels like filler

---

## Agent Workflow Order

Recommended order of execution:

1. Portfolio Strategist Agent
2. GitHub Project Review Agent
3. Screenshot Capture Agent
4. Project Case Study Writer Agent
5. UI / Design Agent
6. Frontend Implementation Agent
7. Content & Personal Brand Agent
8. QA / Polish Agent

---

## Shared Standards Across All Agents

All agents must follow these principles:

### 1. Prioritize credibility

The portfolio should feel real, polished, and trustworthy.

### 2. Favor strongest projects

Only high-value projects should receive featured treatment.

### 3. Use visuals whenever possible

Screenshots are an important proof and presentation asset.

### 4. Keep everything consistent

Typography, spacing, copy tone, image treatment, and project structure should align.

### 5. Never invent facts

Do not fabricate metrics, users, results, or project functionality.

### 6. Build for future updates

The system should make it easy to add or swap projects later.

---

## Decision Rules

### When selecting featured projects

Choose the project if it scores well in:

- technical depth
- visual appeal
- clarity of purpose
- portfolio relevance
- implementation quality

### When selecting screenshots

Choose screens that:

- immediately show usefulness
- look polished
- represent real functionality
- support the written project narrative

### When writing project descriptions

Lead with:

- what it is
- what problem it solves
- why it matters
- how it was built

---

## Minimum Deliverables Per Featured Project

Each featured project should ideally have:

- 1 strong summary
- 1 to 3 screenshots
- stack list
- GitHub link
- live link if available
- 3 to 5 key features
- short explanation of purpose/value

---

## Folder / Asset Recommendations

Suggested structure:

- `/public/project-screenshots`
- `/data/projects`
- `/components/projects`
- `/components/layout`
- `/components/sections`

If using structured project data, each project entry should contain:

- slug
- title
- summary
- description
- stack
- githubUrl
- liveUrl
- featured
- screenshots
- highlights

---

## Red Flags Agents Should Catch

- weak projects included just to add volume
- inconsistent screenshot quality
- vague project descriptions
- broken links
- too much text with too little visual proof
- layouts that hide the best work
- portfolio tone that feels generic or AI-written
- screenshots that do not match the actual project

---

## Final Agent Standard

Every agent should optimize for this result:

A portfolio that makes Mike look like a serious builder with real technical skill, strong execution, and visually proven project work.
