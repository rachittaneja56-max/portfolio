import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import portrait from "./assets/Profile.jpeg";
import resume from "./assets/resume.pdf";

const projects = [
  {
    number: "01",
    title: "Custom OIDC Auth Provider",
    category: "IDENTITY / AUTHENTICATION",
    summary: "An OpenID Connect provider with application registration, client credentials, and an authentication flow designed for integration into other products.",
    detail: "Next.js · TypeScript · OAuth / OIDC",
    image: "/projects/CustomAuth.png",
    href: "https://auth.rachittaneja.in/",
    cta: "Explore project"
  },
  {
    number: "02",
    title: "Parcha95",
    category: "FULL-STACK / PRODUCT",
    summary: "A form-building application exploring type-safe APIs, monorepo organization, and the decisions behind a full-stack product.",
    detail: "Next.js · TypeScript · tRPC",
    image: "/projects/Parcha95.png",
    href: "https://parcha95.rachittaneja.in/",
    cta: "Explore project"
  },
  {
    number: "03",
    title: "KulhadCSS",
    category: "DEVELOPER TOOLS",
    summary: "A small utility-first CSS engine built in JavaScript, exploring how styling tools are designed and delivered to developers.",
    detail: "JavaScript · CSS · npm",
    image: null,
    href: "https://github.com/rachittaneja56-max/KulhadCss",
    cta: "View code"
  }
];

function External({ children, href, className = "" }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Work", "#work"],
    ["Writing", "#writing"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[#dcded9] bg-[#F8F8F5]/95 backdrop-blur-lg">
        <nav aria-label="Primary" className="mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3 text-[15px] font-bold tracking-[-0.04em] text-[#1d2324]" aria-label="Rachit Taneja, home">
            <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#1d2324] text-[13px] tracking-[-0.03em] text-white">RT</span>
            <span>Rachit Taneja<span className="text-[#526D64]">.</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map(([name, href]) => <a key={name} href={href} className="text-[13px] font-medium text-[#565e5d] transition hover:text-[#1d2324]">{name}</a>)}
            <External href="https://github.com/rachittaneja56-max" className="flex items-center gap-1.5 border-b border-[#1d2324] pb-[3px] text-[13px] font-semibold text-[#1d2324]">GitHub <ArrowUpRight size={14}/></External>
          </div>
          <button type="button" className="rounded border border-[#cbd0ca] p-2 text-[#1d2324] md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </nav>
        {menuOpen && <div className="flex flex-col gap-1 border-t border-[#dcded9] px-5 py-3 md:hidden">{nav.map(([name,href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#1d2324]">{name}</a>)}</div>}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.35fr_.65fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="eyebrow mb-7"><span className="signal-dot"/> SOFTWARE ENGINEERING / APPLIED AI</p>
            <h1 className="max-w-[780px] text-[clamp(3.5rem,7.4vw,7.6rem)] font-semibold leading-[0.98] tracking-[-0.082em] text-[#1d2324]">
              I build software<span className="text-[#526D64]">.</span><br/>
              I explore <span className="italic font-medium">why</span> it works.
            </h1>
            <p className="mt-8 max-w-[610px] text-[17px] leading-[1.85] text-[#505c5a] md:text-[19px]">
              I'm a computer science student working across full-stack systems, developer tools and applied AI. I care about what's happening under the hood—not just whether the demo runs.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#work" className="group inline-flex items-center gap-3 rounded-[5px] bg-[#1d2324] px-6 py-[15px] text-[13px] font-semibold text-[#fff] transition hover:bg-[#38564a]">Selected work <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
              <a href="#writing" className="inline-flex items-center gap-2 px-2 py-[14px] text-[13px] font-semibold text-[#1d2324] hover:underline underline-offset-4">Read what I'm learning <ArrowRight size={16}/></a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#dcded9] pt-5 text-[11px] uppercase tracking-[0.10em] text-[#64706d]">
              <span>Based in India</span><span>Learning in public</span><span>Building from first principles</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[425px] lg:justify-self-end">
            <div className="aspect-[4/4.8] overflow-hidden rounded-[6px] bg-[#d7ddd6]">
              <img src={portrait} alt="Portrait of Rachit Taneja" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[285px] rounded-[5px] border border-[#d6d9d2] bg-[#fff] p-5 shadow-[0_10px_35px_rgba(0,0,0,.05)] sm:-left-8">
              <p className="eyebrow !mb-2">NOW / NOV 2026</p>
              <p className="text-[15px] font-semibold tracking-[-0.025em] text-[#1d2324]">Deepening my fundamentals in AI systems and software architecture.</p>
            </div>
          </div>
        </section>

        <div className="border-y border-[#dcded9] bg-[#edf0ea]">
          <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 px-5 py-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#57635e] sm:px-8 lg:px-12">
            <span>Understand the problem</span><span>Build the system</span><span>Test the assumptions</span><span>Explain the trade-offs</span>
          </div>
        </div>

        <section id="work" className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 className="section-heading mt-4">Things I've built.</h2>
            </div>
            <p className="max-w-[365px] text-[14px] leading-7 text-[#65716c]">A few projects across identity infrastructure, full-stack products, and developer tooling.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project,i) => (
              <article key={project.title} className={"group flex flex-col overflow-hidden rounded-[6px] border border-[#d6dcd5] bg-white "+(i===2?"md:col-span-2 md:flex-row":"")}>
                <div className={"relative min-h-[215px] overflow-hidden bg-[#e4e8e0] "+(i===2?"md:w-[40%]":"")}>
                  {project.image ? <img src={project.image} alt={project.title+" application screenshot"} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy"/> :
                    <div className="flex h-full min-h-[215px] items-center justify-center bg-[#1e332e] p-10"><div className="font-mono text-[clamp(2.6rem,5vw,4rem)] font-bold tracking-[-0.08em] text-[#e5f3e6]">kulhad<span className="text-[#a3c7ab]">.css</span></div></div>}
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4 text-[10px] font-medium tracking-[0.12em] text-[#6d7973]"><span>{project.category}</span><span>{project.number} / 03</span></div>
                  <div>
                    <h3 className="text-[clamp(1.65rem,2.8vw,2.1rem)] font-semibold tracking-[-0.05em] text-[#1d2324]">{project.title}</h3>
                    <p className="mt-3 max-w-[550px] text-[14px] leading-[1.8] text-[#5b6662]">{project.summary}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#e6e8e4] pt-4">
                    <span className="text-[11px] text-[#77817b]">{project.detail}</span>
                    <External href={project.href} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#1d2324] underline-offset-4 hover:underline">{project.cta}<ArrowUpRight size={14}/></External>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className="scroll-mt-24 border-y border-[#dcded9] bg-[#1d2927] text-[#f5f7f2]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <p className="eyebrow !text-[#9db4aa]">02 / WRITING & EXPLAINING</p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.065em]">Learning deeply.<br/>Explaining clearly.</h2>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="border-l-2 border-[#a4c1ae] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#a9bcb0]">IN DEVELOPMENT / DECODED</p>
                <p className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.03em]">An interactive series exploring AI from first principles.</p>
                <p className="mt-3 text-[14px] leading-7 text-[#b4c4bc]">Short explanations, visual experiments, and the engineering ideas underneath modern AI systems. First articles in preparation.</p>
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="text-[12px] text-[#c8d3cc]">Existing notes on JavaScript internals and web engineering.</p>
                <a href="https://blogs.rachittaneja.in/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-white underline underline-offset-4">Explore my writing <ArrowUpRight size={15}/></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 mx-auto grid max-w-[1240px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[.55fr_1fr] lg:gap-20 lg:px-12 lg:py-32">
          <div><p className="eyebrow">03 / A BIT ABOUT ME</p><h2 className="section-heading mt-4">Curiosity first.<br/>Engineering always.</h2></div>
          <div className="max-w-[680px]">
            <p className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-medium leading-[1.55] tracking-[-0.03em] text-[#26322e]">I'm a computer science undergraduate who learns best by building, breaking things, and asking how the system actually works.</p>
            <p className="mt-6 text-[15px] leading-[1.95] text-[#596560]">My interests span backend engineering, authentication, developer experience, and applied AI. I want to understand the foundations as well as the frameworks—and make technical ideas easier for other people to grasp.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["JavaScript / TypeScript","React & Node.js","Python","APIs & Databases","Applied AI","Systems thinking"].map(skill=><span key={skill} className="border border-[#ccd3cd] px-3 py-2 text-[11px] font-medium text-[#4f5c55]">{skill}</span>)}
            </div>
            <External href={resume} className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#243d34] underline underline-offset-4">View resume <ArrowUpRight size={15}/></External>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-[#dcded9] bg-[#eaece6]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <p className="eyebrow">04 / SAY HELLO</p>
            <div className="mt-5 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="text-[clamp(2.6rem,5.5vw,5.3rem)] font-semibold leading-[1.1] tracking-[-0.075em] text-[#1d2324]">Have something<br/>interesting in mind?</h2>
                <p className="mt-4 max-w-[530px] text-[14px] leading-7 text-[#5b6662]">I'm always interested in thoughtful collaborations, software problems, and conversations about engineering.</p>
              </div>
              <a href="mailto:rachittaneja6@gmail.com" className="inline-flex items-center gap-3 rounded-[5px] bg-[#1d2324] px-6 py-4 text-[13px] font-semibold text-white">Get in touch <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1d2324] text-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 py-7 text-[12px] text-[#b7c1bc] sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} Rachit Taneja · Designed and built with care.</span>
          <div className="flex items-center gap-5">
            <External href="https://github.com/rachittaneja56-max" className="flex items-center gap-2 hover:text-white"><Github size={16}/> GitHub</External>
            <External href="https://www.linkedin.com/in/rachit-taneja-b98985382/" className="flex items-center gap-2 hover:text-white"><Linkedin size={16}/> LinkedIn</External>
            <a href="mailto:rachittaneja6@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail size={16}/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
