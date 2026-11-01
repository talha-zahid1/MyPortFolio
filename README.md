# My Developer Portfolio

This is my responsive, single-page developer portfolio. I’m a Software Engineering student and full-stack developer based in Karachi, Pakistan. The site introduces my background and skills, presents selected projects, and gives visitors ways to contact me and download my CV.

## Portfolio contents

- **Home:** My introduction, developer summary, education, and shortcuts to my work and contact sections.
- **Skills & technologies:** Interactive technology logos, an animated SVG orbit, and a summary of my focus areas: backend, frontend, databases, authentication, and performance.
- **Featured work:** A selectable showcase of my projects, with descriptions, technology tags, screenshots, live demos where available, and source repositories.
- **Contact:** My GitHub, LinkedIn, email, and WhatsApp links, plus a Web3Forms-backed message form. I also list my location and spoken languages.
- **CV:** A download link to my CV at `public/Muhammad_Talha_CV.pdf`.

### Featured projects

I define the showcase in `src/Cards/Projects.jsx`. It includes:

1. **Task Management System (TaskFlow):** Team task management with a four-stage workflow; React, Tailwind CSS, Django, and PostgreSQL.
2. **TalentRank-AI:** Resume screening and candidate ranking API; FastAPI, PostgreSQL, Elasticsearch, and Docker.
3. **ApiSentinel:** API key generation, rotation, revocation, and monitoring; Django REST Framework, React, and Vite.
4. **Weather UI:** Weather information and forecasts; React and Tailwind CSS.
5. **Chatbot AI-Backend API:** REST API with session-based authentication; Node.js, Express, and MySQL.
6. **Nearby Places Recommender:** Location and preference-based places API; Node.js and Express.

The first project is selected when the page loads. For projects without a live URL, the Live button shows a “Not deployed yet” message.

## Tech stack

- React 19 with JavaScript and JSX
- Vite 8 for local development and production builds
- Tailwind CSS 4 through the Vite plugin
- Framer Motion for scroll, hover, and entrance animations
- Lucide React and React Icons for interface icons
- Web3Forms for contact form submission

I use a dark purple palette, the Itim font loaded from Google Fonts, locally bundled project images and technology logos, and responsive Tailwind utility classes.

## Requirements

- Node.js and npm versions compatible with the installed Vite release
- A Web3Forms access key to enable contact form submissions

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

Run the configured ESLint checks with:

```bash
npm run lint
```

## Environment configuration

To configure the site, create a `.env` file in the project root. My contact form submits to Web3Forms, and the social buttons read their destinations from Vite environment variables:

```dotenv
VITE_WEB3FORMS_KEY=your_web3forms_access_key
VITE_git_hub_url=https://github.com/your-account
VITE_linkedin_url=https://www.linkedin.com/in/your-profile
VITE_gmail_url=mailto:you@example.com
VITE_p_no=https://wa.me/your-number
```

These variable names are case-sensitive and must keep the `VITE_` prefix to be available in the browser. My Web3Forms key is included in the client bundle because the browser sends the form directly to Web3Forms; I treat it as a public client-side key, configure provider-side restrictions where available, and never put private server credentials in `VITE_` variables. I restart the Vite server after changing `.env` values. `.env` is ignored by Git; if I share this repository, I can document the required settings in an `.env.example` file using blank or placeholder values.

## Project structure

```text
public/
  Muhammad_Talha_CV.pdf   Downloadable CV
  favicon.svg             Browser tab icon
src/
  App.jsx                 Top-level page and section order
  main.jsx                React mount point and global stylesheet import
  config.js               Reads public Vite environment variables
  index.css               Tailwind import, font theme, and global styles
  Components/
    Navbar.jsx            Desktop/mobile navigation and CV download
    HeroSection.jsx       Introductory profile and education
    SkillsSection.jsx     Technology logos, orbit, and specialization
    ExperienceSection.jsx Project section heading and showcase
    ContactSection.jsx    Social links, contact form, and profile details
  Cards/
    Projects.jsx          Project data, selected-project panel, and cards
    SkillsOrbit.jsx       Animated SVG technology orbit
    Specialization.jsx    Full-stack focus and capability list
    MailBox.jsx           Animated contact illustration
  assets/                 Project screenshots, portrait, and technology logos
```



