'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Rocket,
  Server,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'
import { profile, skills, skillGroups, experience, projects, process } from './data'
import ThemeToggle from './components/ThemeToggle'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const Linkedin = ({ size = 17 }: { size?: number }) => (
  <span style={{ fontSize: size * 0.72, fontWeight: 800, lineHeight: 1 }}>in</span>
)
const Github = ({ size = 17 }: { size?: number }) => (
  <span style={{ fontSize: size * 0.62, fontWeight: 800, lineHeight: 1 }}>gh</span>
)
export default function Home() {
  const [menu, setMenu] = useState(false),
    [slide, setSlide] = useState(0),
    [sent, setSent] = useState(false),
    [image, setImage] = useState(true)
  const [title, setTitle] = useState(0)
  const titles = [
    'PHP Developer',
    'Laravel Developer',
    'Backend Engineer',
    'Full Stack Web Developer',
    'MySQL Specialist',
  ]
  useEffect(() => {
    const id = setInterval(() => setTitle((v) => (v + 1) % titles.length), 2600)
    return () => clearInterval(id)
  }, [titles.length])
  const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']
  const visible =
    typeof window !== 'undefined' && window.innerWidth < 700
      ? 1
      : typeof window !== 'undefined' && window.innerWidth < 1000
        ? 2
        : 3
  const max = Math.max(0, projects.length - visible)
  return (
    <main>
      <header className="header">
        <a className="brand" href="#home">
          <span>RI</span>
          <b>Rashid Ilyas</b>
        </a>
        <nav className="desktop-nav">
          {nav.map((n) => (
            <a key={n} href={'#' + n.toLowerCase()}>
              {n}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <a className="resume" href="/Rashid-Ilyas-Resume.pdf" download>
          Resume <ArrowUpRight size={15} />
        </a>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {nav.map((n) => (
              <a onClick={() => setMenu(false)} key={n} href={'#' + n.toLowerCase()}>
                {n}
              </a>
            ))}
            <ThemeToggle />
            <a className="resume" href="/Rashid-Ilyas-Resume.pdf">
              Download Resume <ArrowUpRight size={15} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
      <section id="home" className="hero section">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="show" variants={reveal}>
            <p className="eyebrow">
              <i /> Hello, I’m
            </p>
            <h1>
              Rashid <em>Ilyas.</em>
            </h1>
            <div className="title-line">
              <span>✦</span>
              <AnimatePresence mode="wait">
                <motion.strong
                  key={titles[title]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {titles[title]}
                </motion.strong>
              </AnimatePresence>
            </div>
            <p className="lede">{profile.intro}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                View my work <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href="#contact">
                Contact me <Mail size={16} />
              </a>
            </div>
            <div className="socials">
              <a href={profile.linkedin} aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={profile.github} aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href={'mailto:' + profile.email} aria-label="Email">
                <Mail size={17} />
              </a>
              <span>
                Follow along <i />
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="portrait">
            <div className="portrait-grid" />
            {image ? (
              <Image
                src="/images/profile.png"
                alt="Rashid Ilyas"
                fill
                onError={() => setImage(false)}
                sizes="(max-width: 700px) 80vw, 420px"
              />
            ) : (
              <div className="initials">RI</div>
            )}
            <span className="orbit one">PHP</span>
            <span className="orbit two">JS</span>
            <span className="orbit three">⌘</span>
          </div>
          <div className="portrait-caption">
            <span>
              <b>6+</b> years building
              <br />
              for the web
            </span>
            <span className="available">
              <i /> Available for work
            </span>
          </div>
        </motion.div>
      </section>
      <div className="stats section">
        <Stat n="6+" label="Years of experience" />
        <Stat n="4" label="Professional roles" />
        <Stat n="10+" label="Core technologies" />
        <Stat n="500+" label="LinkedIn connections" />
      </div>
      <div className="marquee">
        <div>
          {[...skills, ...skills].map((s, i) => (
            <span key={i}>
              {s} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
      <section id="about" className="section about">
        <motion.div className="section-intro" whileInView="show" initial="hidden" variants={reveal}>
          <p className="eyebrow">01 / About me</p>
          <h2>
            Turning complex ideas into <em>reliable</em> digital products.
          </h2>
        </motion.div>
        <div className="about-body">
          <p>
            As a PHP and Laravel developer, I have a strong understanding of modern web development
            and a proven record of delivering high-quality projects. I specialize in database
            design, backend development, API integration, and front-end implementation. I build
            robust and scalable web applications with clean, maintainable code.
          </p>
          <div className="highlights">
            <span>
              <MapPin size={16} /> Based in Lahore, Pakistan
            </span>
            <span>
              <Code2 size={16} /> Full Stack Development
            </span>
            <span>
              <Server size={16} /> PHP & Laravel Specialist
            </span>
            <span>
              <Zap size={16} /> Open to collaboration
            </span>
          </div>
        </div>
      </section>
      <section id="skills" className="section skills-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 / Expertise</p>
            <h2>Tools of the trade.</h2>
          </div>
          <p>
            Deep experience across the stack, from database architecture to polished front-end
            integration.
          </p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <motion.div
              className="skill-card"
              key={g.title}
              whileInView="show"
              initial="hidden"
              variants={reveal}
              transition={{ delay: i * 0.1 }}
            >
              <div className="skill-icon">
                {i === 0 ? (
                  <Server size={20} />
                ) : i === 1 ? (
                  <Globe2 size={20} />
                ) : (
                  <Database size={20} />
                )}
              </div>
              <h3>{g.title}</h3>
              {g.items.map(([name, level]) => (
                <div className="skill-row" key={name}>
                  <span>{name}</span>
                  <small>{level}</small>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
      <section id="experience" className="section experience">
        <div className="section-intro">
          <p className="eyebrow">03 / Experience</p>
          <h2>
            A track record of <em>shipping.</em>
          </h2>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <motion.article
              key={e.company}
              className="timeline-item"
              whileInView="show"
              initial="hidden"
              variants={reveal}
            >
              <div className="timeline-dot">0{i + 1}</div>
              <div className="timeline-content">
                <div>
                  <p className="period">{e.period}</p>
                  <h3>{e.role}</h3>
                  <h4>{e.company}</h4>
                </div>
                <p>{e.text}</p>
                {e.tags && (
                  <div className="tags">
                    {e.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section id="projects" className="section projects">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 / Selected work</p>
            <h2>
              Things I’ve helped <em>build.</em>
            </h2>
          </div>
          <div className="slider-controls">
            <button aria-label="Previous project" onClick={() => setSlide(Math.max(0, slide - 1))}>
              <ChevronLeft />
            </button>
            <button aria-label="Next project" onClick={() => setSlide(Math.min(max, slide + 1))}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="project-viewport">
          <motion.div
            className="project-track"
            animate={{ x: `calc(-${slide} * (33.333% + 16px))` }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            {projects.map((p, i) => (
              <article className="project-card" key={p.name}>
                <div className={'project-art art-' + (i % 5)}>
                  <span>
                    {p.name
                      .split(' ')
                      .map((x) => x[0])
                      .join('')
                      .slice(0, 3)}
                  </span>
                  <div>PROJECT / 0{i + 1}</div>
                </div>
                <div className="project-copy">
                  <p className="period">CASE STUDY</p>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href="#contact">
                    View details <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
        <div className="dots">
          {projects.slice(0, max + 1).map((_, i) => (
            <button
              className={i === slide ? 'active' : ''}
              aria-label={'Go to slide ' + (i + 1)}
              onClick={() => setSlide(i)}
              key={i}
            />
          ))}
        </div>
      </section>
      <div className="project-marquee">
        <div>
          {projects.map((p) => (
            <span key={p.name}>
              {p.name} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
      <section id="education" className="section education">
        <div className="education-card">
          <div className="edu-icon">
            <GraduationCap />
          </div>
          <div>
            <p className="eyebrow">05 / Education</p>
            <h2>University of the Punjab</h2>
            <p>
              Bachelor of Science in Computer Science <span>·</span> Web Development
            </p>
          </div>
          <strong>2016 — 2021</strong>
        </div>
      </section>
      <section className="section process">
        <div className="section-intro">
          <p className="eyebrow">06 / How I work</p>
          <h2>
            A thoughtful process, from <em>idea to impact.</em>
          </h2>
        </div>
        <div className="process-grid">
          {process.map(([n, t, icon]) => (
            <div className="process-item" key={n}>
              <span>{n}</span>
              <div className="process-symbol">
                {icon === 'Message' ? (
                  <MessageCircle />
                ) : icon === 'Compass' ? (
                  <Globe2 />
                ) : icon === 'Database' ? (
                  <Database />
                ) : icon === 'Code' ? (
                  <Code2 />
                ) : icon === 'ShieldCheck' ? (
                  <ShieldCheck />
                ) : (
                  <Rocket />
                )}
              </div>
              <h3>{t}</h3>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="section contact">
        <div className="contact-copy">
          <p className="eyebrow">07 / Say hello</p>
          <h2>
            Have a project in mind? <em>Let’s build.</em>
          </h2>
          <p>
            Have a project in mind or want to discuss an opportunity? Let’s build something valuable
            together.
          </p>
          <div className="contact-detail">
            <MapPin size={18} />
            <span>
              Lahore, Punjab, Pakistan
              <br />
              <small>Available for collaboration</small>
            </span>
          </div>
          <div className="contact-detail">
            <Mail size={18} />
            <span>
              {profile.email}
              <br />
              <small>Usually replies within 24 hours</small>
            </span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="contact-form"
        >
          {sent ? (
            <div className="success">
              <span>✓</span>
              <h3>Message prepared.</h3>
              <p>
                Thanks for reaching out. This demo form is ready to connect to your email service.
              </p>
              <button className="button primary" type="button" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <>
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Subject
                <input required name="subject" placeholder="How can I help?" />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me a little about your project..."
                />
              </label>
              <button className="button primary" type="submit">
                Send message <ArrowUpRight size={17} />
              </button>
              <small>Demo behavior — no email service configured yet.</small>
            </>
          )}
        </form>
      </section>
      <footer>
        <div className="brand">
          <span>RI</span>
          <b>Rashid Ilyas</b>
        </div>
        <p>Full Stack Developer · Building for the web.</p>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
          <a href={profile.linkedin}>
            <Linkedin size={17} />
          </a>
          <a href="#home" aria-label="Back to top">
            <ArrowUpRight size={17} />
          </a>
        </div>
        <small>© {new Date().getFullYear()} Rashid Ilyas. All rights reserved.</small>
      </footer>
    </main>
  )
}
function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="stat">
      <strong>{n}</strong>
      <span>{label}</span>
    </div>
  )
}
