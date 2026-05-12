# Project Spec: Nicholas Nelson Portfolio

## Source of truth
This document is the single source of truth for scope, content, visual direction, and implementation rules.

If implementation changes intentionally, update this file and the decision log in the same change.

## Goal
Create a professional GitHub Pages portfolio for Nicholas Nelson that presents him as an Applied AI Systems Student building toward applied AI engineering and AI systems design roles.

## Audience
- Professors reviewing the final project
- Early-career recruiters
- Cybersecurity or AI reviewers
- Anyone assessing professional direction

## Product shape
- Main homepage with concise recruiter-facing sections
- Focus hub for orienting deeper review
- Direction page for role-fit and evaluation standards
- Projects page with client-side search and modal-based deep dive
- Simple, reliable GitHub Pages deployment
- Accessible, responsive, and easy to scan

## Structure
### Main scroll narrative
1. Hero
2. About
3. Career direction
4. Professional focus areas
5. Featured projects
6. Skills and tools
7. Contact and links

### Focus pages
- Focus hub
- Direction
- Projects

## Required identity
- Public-facing identity: Applied AI Systems Student
- Career direction: Applied AI Engineering and AI Systems Design
- Tone: polished, direct, credible, structured, future-facing

## Style rules
- Stitch-inspired Liquid Glass system with deep midnight surfaces
- High-contrast typography using Hanken Grotesk plus JetBrains Mono
- Electric blue accent reserved for primary actions, filters, and status emphasis
- Blur-based elevation, hairline borders, and subtle technical grid texture
- No fake hacker aesthetic
- Use a modern AI-lab feel without generic cyberpunk styling
- Motion should support hierarchy and interaction, not become the point of the page

## Required proof
- StoryLens AI
- Revised midterm project
- UNSW-NB15 intrusion detection project
- Taro App
- Sakila Movies
- Skills and tools
- GitHub link
- LinkedIn link
- Email link
- Hosted site link
- README with live URL
- Searchable projects surface with explicit pending states where facts are not yet verified
- Modal detail view for projects without inventing unverified evidence

## Drift control rules
1. Read this file before making major changes.
2. Compare implementation against the spec.
3. If implementation changes on purpose, update this file first or in the same commit.
4. Record major changes in docs/DECISION_LOG.md.
5. Keep placeholder project details marked clearly as TODO until verified.

## Acceptance criteria
- The career direction is obvious within the first screen.
- The site shows proof, not hype.
- The applied AI direction is visible across the homepage and focus routes.
- StoryLens AI, the revised midterm project, UNSW-NB15, Taro App, and Sakila Movies are clearly represented.
- The projects page supports client-side search and deeper modal review.
- Public pages contain only recruiter-facing content relevant to the applied AI direction.
- The site works as a static export on GitHub Pages.
- The README contains the live site URL.
- No unsupported claims or invented experience.
