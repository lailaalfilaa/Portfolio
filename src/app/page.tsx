"use client";

import { useState } from "react";
import {
  SiFigma,
  SiMaze,
  SiClickup,
  SiNotion,
  SiVscodium,
  SiAndroidstudio,
  SiXampp,
  SiFlutter,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
} from "react-icons/si";
import { FaPalette } from "react-icons/fa";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  tools: string[];
  process: string[];
};

type Organization = {
  number: string;
  date: string;
  role: string;
  event: string;
  description: string;
  images: string[];
};

type Creative = {
  number: string;
  date: string;
  role: string;
  title: string;
  description: string;
  views: string;
  images: string[];
};

/* =========================================================
   PROJECT DATA
========================================================= */

const mobileProjects: Project[] = [
  {
    title: "Dampingin",
    category: "Mobile App",
    image: "/images/dampingin.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
    "/images/dampingin5.jpg",
    "/images/dampingin6.jpg",
    "/images/dampingin7.jpg",
    "/images/dampingin8.jpg",
    "/images/dampingin9.jpg",
    "/images/dampingin10.jpg",
    "/images/dampingin11.jpg",
  ],

    description:
      "Aplikasi mobile yang dirancang untuk membantu pengguna mendapatkan pendampingan secara lebih mudah, terstruktur, dan intuitif.",
    tools: ["Figma", "User Research", "User Flow", "Wireframing", "Prototype"],
    process: ["Research", "Define", "Design", "Prototype"],
  },
  {
    title: "Eatzy",
    category: "Mobile App",
    image: "/images/eatzy.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
  ],

    description:
      "Konsep aplikasi mobile yang membantu pengguna menemukan pengalaman kuliner dengan interface yang sederhana dan mudah digunakan.",
    tools: ["Figma", "User Flow", "UI Design", "Prototyping"],
    process: ["Research", "User Flow", "Design"],
  },
  {
    title: "FindCine",
    category: "Mobile App",
    image: "/images/findcine.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
  ],

    description:
      "Aplikasi mobile untuk membantu pengguna menemukan dan mengeksplorasi film berdasarkan kebutuhan serta preferensi mereka.",
    tools: ["Figma", "UX Research", "Wireframe", "UI Design", "Prototype"],
    process: ["Research", "Define", "Design", "Testing"],
  },
  {
    title: "Kelana",
    category: "Mobile App",
    image: "/images/kelana.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
  ],

    description:
      "Konsep aplikasi perjalanan yang dirancang untuk memberikan pengalaman eksplorasi destinasi secara lebih praktis dan terorganisir.",
    tools: ["Figma", "User Flow", "Wireframe", "High-Fidelity"],
    process: ["Research", "Define", "Design"],
  },
];

const websiteProjects: Project[] = [
  {
    title: "Katalog Aset",
    category: "Website",
    image: "/images/katalogaset.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
  ],

    description:
      "Website katalog aset yang dirancang untuk membantu pengelolaan dan pencarian data aset secara lebih terstruktur.",
    tools: ["Figma", "UI Design", "Design System", "Prototype"],
    process: ["Research", "Information Architecture", "Design"],
  },
  {
    title: "Dashboard Sistem Input Data",
    category: "Dashboard",
    image: "/images/dashboard.jpg",

    images: [
    "/images/dkb.jpg",
    "/images/dkb1.jpg",
    "/images/dkb2.jpg",
    "/images/dkb3.jpg",
    "/images/dkb4.jpg",
    "/images/dkb5.jpg",
    "/images/dkb6.jpg",
    "/images/dkb7.jpg",
  ],

    description:
      "Dashboard untuk mendukung proses input dan pengelolaan data dengan tampilan yang lebih terstruktur dan mudah dipahami.",
    tools: ["Figma", "Dashboard Design", "UI Design", "Prototype"],
    process: ["Research", "Define", "Design"],
  },
  {
    title: "Snapshoot",
    category: "Website",
    image: "/images/snapshot.jpg",

    images: [
    "/images/dampingin1.jpg",
    "/images/dampingin2.jpg",
    "/images/dampingin3.jpg",
    "/images/dampingin4.jpg",
  ],

    description:
      "Konsep website dengan pendekatan visual editorial yang mengutamakan hierarchy, readability, dan pengalaman pengguna.",
    tools: ["Figma", "Visual Design", "UI Design", "Prototype"],
    process: ["Research", "Design", "Prototype"],
  },
];

/* =========================================================
   ORGANIZATION DATA
========================================================= */

const organizationItems: Organization[] = [
  {
    number: "01",
    date: "NOVEMBER 2023",
    role: "DIVISI PERLENGKAPAN",
    event: "Sistem Informasi Peduli Anak (SIPA)",
    description:
      "Mengelola perlengkapan kegiatan dan memastikan kebutuhan acara tersedia dengan baik, sekaligus mendukung edukasi Canva bagi siswa SD.",
    images: [
      "/images/sipa1.jpg",
      "/images/sipa2.jpg",
      "/images/sipa3.jpg",
    ],
  },
  {
    number: "02",
    date: "SEPTEMBER 2023",
    role: "DIVISI SENIOR PENDAMPING",
    event: "Eksplorasi Diri Sistem Informasi (EDISI)",
    description:
      "Mendampingi kelompok yang terdiri dari 11 mahasiswa baru selama rangkaian kegiatan. Memberikan evaluasi serta menjadi penghubung komunikasi antara peserta dan panitia.",
    images: [
      "/images/edisi1.jpg",
      "/images/edisi2.jpg",
      "/images/edisi3.jpg",
      "/images/edisi4.jpg",
    ],
  },
];

/* =========================================================
   TALENT MODEL DATA
========================================================= */

const creativeItems: Creative[] = [
  {
    number: "01",
    date: "MEI 2024",
    role: "TALENT MODEL",
    title: "Review Makanan",
    description:
      "Berkolaborasi sebagai talent model dalam produksi konten review makanan untuk Cangru’an Kuliner.",
    views: ">25.5K views",
    images: [
      "/images/makanan.jpg",
    ],
  },
  {
    number: "02",
    date: "DESEMBER 2023",
    role: "TALENT MODEL",
    title: "Review Body Care",
    description:
      "Berkolaborasi sebagai talent model dalam produksi konten review produk body care untuk Si Jie Beauty.",
    views: ">14.9K views",
    images: [
      "/images/siji.jpg",
    ],
  },
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#about" className="logo" onClick={closeMenu}>
          <span>BL</span>
          <strong>Baiq Laila Alfila</strong>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

           <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#additional-experience" onClick={closeMenu}>
            Additional Experience
          </a>

          <a href="#background" onClick={closeMenu}>
            Background
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================
   ABOUT
   HERO = ABOUT
========================================================= */

function AboutSection() {
  return (
    <div id="about">
      {/* =================================================
          HERO / ABOUT INTRO
      ================================================= */}

      <section className="hero">
        <div className="hero-background-text">
          PORTFOLIO
        </div>

        <div className="hero-content">

          <h1>
            Baiq Laila
            <br />
            <em>Alfila</em>
          </h1>

          <div className="hero-role">
    <span>UI/UX <b>Designer</b></span>
  <span className="role-divider">|</span>
  <span>Frontend <b>Developer</b></span>
</div>

          <p className="hero-description">
            I’m interested in the space between people, problems,
            and technology turning user needs into digital
            experiences that feel clear, intuitive, and purposeful.
          </p>

          <div className="hero-meta">
            <div>
              <strong>3.77</strong>
              <span>GPA / 4.00</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>GRADUATE</span>
            </div>

            <div>
              <strong>22</strong>
              <span>Y.O</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a
              className="primary-button"
              href="#projects"
            >
              View selected works
              <span>↗</span>
            </a>
          </div>

        </div>

        {/* HERO PHOTO */}

        <div className="hero-photo-wrapper">

          <div className="photo-decoration one" />
          <div className="photo-decoration two" />

          <div className="hero-photo">
            <img
              src="/images/profile.jpg"
              alt="Baiq Laila Alfila"
            />
          </div>

          <div className="photo-card photo-card-one">
            <strong>Digital Product</strong>
            Interface · Research · Development
          </div>

          <div className="photo-card photo-card-two">
            <span className="green-dot" />
            Open to opportunities
          </div>

        </div>
      </section>
    </div>
  );
}

 {/* =================================================
              INTERNSHIP
          ================================================= */}
function ExperienceSection() {
  return (
    <section id="experience" className="about-profile">

      <div className="career-section">

        <div className="career-block internship-block">

          <div className="career-heading">
            <h3>Experience</h3>
          </div>

          <div className="internship-list">

            <InternshipCard
              number="01"
              date="FEBRUARI 2025 — JUNI 2025"
              role="UI/UX DESIGNER"
              company="Dinas Kependudukan dan Pencatatan Sipil Kota Surabaya"
              division="Divisi Pengelolaan Informasi Administrasi Kependudukan"
              images={[
                "/images/dispenduk1.jpg",
                "/images/dispenduk2.jpg",
                "/images/dispenduk3.jpg",
                "/images/dispenduk4.jpg",
                "/images/dispenduk5.jpg",
              ]}
            />

            <InternshipCard
              number="02"
              date="OKTOBER 2024 — JANUARI 2025"
              role="UI/UX DESIGNER"
              company="PT Perkebunan Nusantara I Regional 4"
              division="Divisi Pengadaan dan TI"
              images={[
                "/images/ptpn1.jpg",
                "/images/ptpn2.jpg",
                "/images/ptpn3.jpg",
              ]}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   INTERNSHIP CARD
========================================================= */

type InternshipCardProps = {
  number: string;
  date: string;
  role: string;
  company: string;
  division: string;
  images: string[];
};

function InternshipCard({
  number,
  date,
  role,
  company,
  division,
  images,
}: InternshipCardProps) {

  const [currentImage, setCurrentImage] = useState(0);


  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };


  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };


  return (
    <article className="internship-card">


      {/* =============================================
          INFORMATION
      ============================================= */}

      <div className="internship-info">

        <div className="internship-number">
          {number}
        </div>

        <div className="internship-copy">

          <div className="career-year">
            {date}
          </div>

          <span className="career-role">
            {role}
          </span>

          <h4>
            {company}
          </h4>

          <strong>
            {division}
          </strong>

        </div>

      </div>


      {/* =============================================
          IMAGE SLIDER
      ============================================= */}

      <div className="internship-slider">

        <div className="internship-image">

          <img
            src={images[currentImage]}
            alt={`${company} internship`}
          />

          <div className="internship-image-number">
            {String(currentImage + 1).padStart(2, "0")}
            {" / "}
            {String(images.length).padStart(2, "0")}
          </div>

        </div>


        {/* CONTROLS */}

        <div className="internship-controls">

          <div className="internship-dots">

            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  index === currentImage
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentImage(index)
                }
                aria-label={`Foto ${index + 1}`}
              />
            ))}

          </div>


          <div className="internship-arrows">

            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
            >
              →
            </button>

          </div>

        </div>

      </div>

    </article>
  );
}

{/* =================================================
          MARQUEE
      ================================================= */}
function MarqueeSection() {
  return (
    <div className="marquee">
      <div>
        UI/UX DESIGNER <span>✦</span>
        PRODUCT DESIGN <span>✦</span>
        USER EXPERIENCE <span>✦</span>
        DIGITAL PRODUCT <span>✦</span>
        UI/UX DESIGNER <span>✦</span>
        PRODUCT DESIGN <span>✦</span>
        USER EXPERIENCE <span>✦</span>
      </div>
    </div>
  );
}

/* =========================================================
   SKILLS
========================================================= */

function SkillsSection() {
  const designSkills = [
    { name: "UI Design", icon: "✦" },
    { name: "User Research", icon: "○" },
    { name: "User Flow", icon: "⌁" },
    { name: "Wireframing", icon: "⊞" },
    { name: "High-Fidelity Design", icon: "▱" },
    { name: "Prototyping", icon: "▷" },
    { name: "Usability Testing", icon: "⌁" },
    { name: "Design System", icon: "▱" },
  ];

  const developmentSkills = [
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

   const toolsSkills = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <FaPalette /> },
  { name: "Maze", icon: <SiMaze /> },
  { name: "ClickUp", icon: <SiClickup /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "VS Code", icon: <SiVscodium /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "XAMPP", icon: <SiXampp /> },
];

  return (
    <section id="skills" className="section skills-section">

      {/* INTRO */}
      <div className="skills-heading">
        <div className="skills-title">
          <h2>
            <i>Tools</i>{" "}
            I work with
          </h2>
        </div>

        <div className="skills-description">
          <p>
            Tools dan kemampuan yang saya gunakan untuk
            merancang serta mengembangkan produk digital.
          </p>

          <span className="skills-description-line" />
        </div>
      </div>

      {/* SKILLS CONTENT */}
      <div className="skills-showcase">

        {/* DESIGN */}
        <div className="skills-row">
          <div className="skills-category">
            <div className="skills-category-number">
              <span>01</span>
            </div>

            <div className="skills-category-copy">
              <small>UIUX</small>

              <h3>
                Design &
                <br />
                <i>Research</i>
              </h3>

              <p>
                 Merancang pengalaman dan interface digital
                 berdasarkan kebutuhan pengguna dan tujuan produk.
              </p>
            </div>
          </div>

          <div className="skills-pills">
            {designSkills.map((skill) => (
              <div className="skill-pill" key={skill.name}>
                <span className="skill-pill-icon">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DEVELOPMENT */}
        <div className="skills-row">
          <div className="skills-category">
            <div className="skills-category-number">
              <span>02</span>
            </div>

            <div className="skills-category-copy">
              <small>DEVELOPMENT</small>

              <h3>
                Build
                <br />
                <i>&amp; Develop</i>
              </h3>

              <p>
                Mengembangkan rancangan interface
                menjadi produk digital yang nyata.
              </p>
            </div>
          </div>

          <div className="skills-pills">
            {developmentSkills.map((skill) => (
              <div className="skill-pill" key={skill.name}>
                <span className="skill-pill-icon">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-row">
          <div className="skills-category">
            <div className="skills-category-number">
              <span>03</span>
            </div>

            <div className="skills-category-copy">
              <small>TOOLS</small>

              <h3>
                Tools
                <br />
                <i>&amp; Software</i>
              </h3>

              <p>
                Tools yang digunakan untuk mendukung proses
                design, development, dan collaboration.
              </p>
            </div>
          </div>

          <div className="skills-pills">
            {toolsSkills.map((skill) => (
              <div className="skill-pill" key={skill.name}>
                <span className="skill-pill-icon">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   MOBILE PROJECT CARD
========================================================= */

function MobileProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <button className="mobile-project-card" onClick={onClick}>
      <div className="mobile-project-image">
        <img src={project.image} alt={project.title} />

        <span className="mobile-project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="mobile-project-overlay">
          <span>View project</span>
          <span>↗</span>
        </div>
      </div>

      <div className="mobile-project-info">
        <div>
          <span>{project.category.toUpperCase()}</span>

          <h3>{project.title}</h3>
        </div>

        <strong className="mobile-project-arrow">↗</strong>
      </div>
    </button>
  );
}

/* =========================================================
   WEBSITE PROJECT CARD
========================================================= */

function WebsiteProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <button className="project-card" onClick={onClick}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="project-view">
          View project <span>↗</span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <span>{project.category.toUpperCase()}</span>

          <h3>{project.title}</h3>
        </div>

        <strong>↗</strong>
      </div>
    </button>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const projectImages = project.images?.length
    ? project.images
    : [project.image];

  const nextImage = () => {
    setCurrentImage((current) =>
      current === projectImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? projectImages.length - 1 : current - 1
    );
  };

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div
        className="gallery-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          className="gallery-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* IMAGE */}
        <img
          className="gallery-modal-image"
          src={projectImages[currentImage]}
          alt={`${project.title} ${currentImage + 1}`}
        />

        {/* LEFT */}
        {projectImages.length > 1 && (
          <button
            className="gallery-modal-arrow gallery-modal-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* RIGHT */}
        {projectImages.length > 1 && (
          <button
            className="gallery-modal-arrow gallery-modal-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>
        )}

        {/* NUMBER */}
        {projectImages.length > 1 && (
          <div className="gallery-modal-counter">
            {String(currentImage + 1).padStart(2, "0")}
            {" / "}
            {String(projectImages.length).padStart(2, "0")}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-heading-row">
        <h2>
          Selected works
        </h2>

        <p>
          Beberapa project yang merepresentasikan pendekatan
          saya dalam design, problem solving, dan digital
          product.
        </p>
      </div>

      {/* MOBILE APPLICATION */}
      <div className="project-category">
        <div className="category-title">

          <div>
            <h3>MOBILE APPLICATION</h3>
          </div>
        </div>

        <div className="mobile-project-grid">
          {mobileProjects.map((project, index) => (
            <MobileProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>

      {/* WEBSITE & DASHBOARD */}
      <div className="project-category">
        <div className="category-title">

          <div>
            <h3>WEBSITE &amp; DASHBOARD</h3>
          </div>
        </div>

        <div className="project-grid website-project-grid">
          {websiteProjects.map((project, index) => (
            <WebsiteProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ADDITIONAL EXPERIENCE
========================================================= */

function AdditionalExperienceSection() {
  const [activeImages, setActiveImages] = useState<
    Record<string, number>
  >({});

  const changeImage = (
    id: string,
    total: number,
    direction: number
  ) => {
    setActiveImages((prev) => {
      const current = prev[id] ?? 0;

      const next =
        (current + direction + total) % total;

      return {
        ...prev,
        [id]: next,
      };
    });
  };

  return (
    <section
      id="additional-experience"
      className="additional-experience-section"
    >
      <div className="additional-experience-inner">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="additional-experience-heading">
          <h2>
            Additional <i>Experience</i>
          </h2>

          <p>
            Berbagai pengalaman yang membantu mengembangkan
            kemampuan komunikasi, kerja sama, kreativitas, dan adaptasi.
          </p>
        </div>


        {/* =================================================
            ORGANIZATION
        ================================================= */}

        <div className="additional-experience-category">

          <div className="additional-experience-category-title">
            <div>
              <small>VOLUNTEER</small>
              <h3>Volunteer</h3>
            </div>
          </div>


          <div className="additional-experience-grid">

            {organizationItems.map((item) => {
              const activeIndex =
                activeImages[`organization-${item.number}`] ?? 0;

              return (
                <article
                  className="additional-experience-card"
                  key={`organization-${item.number}`}
                >

                  {/* TEXT */}
                  <div className="additional-experience-copy">

                    <div className="additional-experience-meta">
                      <span>{item.number}</span>
                      <span>{item.date}</span>
                    </div>

                    <span className="additional-experience-role">
                      {item.role}
                    </span>

                    <h4>{item.event}</h4>

                    <p>{item.description}</p>

                  </div>


                  {/* FOTO */}
                  <div className="additional-experience-visual">

                    <div className="additional-experience-image">

                      <img
                        src={item.images[activeIndex]}
                        alt={`${item.event} activity`}
                      />


                      {/* IMAGE NUMBER */}
                      {item.images.length > 1 && (
                        <span className="additional-experience-image-number">
                          {String(activeIndex + 1).padStart(2, "0")}
                          {" / "}
                          {String(item.images.length).padStart(2, "0")}
                        </span>
                      )}


                      {/* ARROWS */}
                      {item.images.length > 1 && (
                        <div className="additional-experience-arrows">

                          <button
                            type="button"
                            onClick={() =>
                              changeImage(
                                `organization-${item.number}`,
                                item.images.length,
                                -1
                              )
                            }
                            aria-label="Previous image"
                          >
                            ←
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              changeImage(
                                `organization-${item.number}`,
                                item.images.length,
                                1
                              )
                            }
                            aria-label="Next image"
                          >
                            →
                          </button>

                        </div>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        </div>


        {/* =================================================
            TALENT MODEL
        ================================================= */}

        <div className="additional-experience-category">

          <div className="additional-experience-category-title">
            <div>
              <small>TALENT MODEL</small>
              <h3>Talent Model</h3>
            </div>
          </div>


          <div className="additional-experience-grid">

            {creativeItems.map((item) => {
              const activeIndex =
                activeImages[`creative-${item.number}`] ?? 0;

              return (
                <article
                  className="additional-experience-card"
                  key={`creative-${item.number}`}
                >

                  {/* TEXT */}
                  <div className="additional-experience-copy">

                    <div className="additional-experience-meta">
                      <span>{item.number}</span>
                      <span>{item.date}</span>
                    </div>

                    <span className="additional-experience-role">
                      {item.role}
                    </span>

                    <h4>{item.title}</h4>

                    <p>{item.description}</p>

                    {item.views && (
                      <strong className="additional-experience-views">
                        {item.views}
                      </strong>
                    )}

                  </div>


                  {/* FOTO */}
                  <div className="additional-experience-visual">

                    <div className="additional-experience-image">

                      <img
                        src={item.images[activeIndex]}
                        alt={item.title}
                      />


                      {/* IMAGE NUMBER */}
                      {item.images.length > 1 && (
                        <span className="additional-experience-image-number">
                          {String(activeIndex + 1).padStart(2, "0")}
                          {" / "}
                          {String(item.images.length).padStart(2, "0")}
                        </span>
                      )}


                      {/* ARROWS */}
                      {item.images.length > 1 && (
                        <div className="additional-experience-arrows">

                          <button
                            type="button"
                            onClick={() =>
                              changeImage(
                                `creative-${item.number}`,
                                item.images.length,
                                -1
                              )
                            }
                            aria-label="Previous image"
                          >
                            ←
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              changeImage(
                                `creative-${item.number}`,
                                item.images.length,
                                1
                              )
                            }
                            aria-label="Next image"
                          >
                            →
                          </button>

                        </div>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

 {/* =================================================
    BACKGROUND
================================================= */}
function BackgroundSection() {
  return (
    <section id="background" className="background-section">
      <div className="background-inner">

        {/* HEADER */}
        <div className="background-heading">
          <h2>
            My <i>Background.</i>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="background-content">

          {/* INTRO */}
          <div className="background-intro">
            <span className="background-small-title">
              A LITTLE ABOUT MY JOURNEY
            </span>

            <p className="background-lead">
              Saya memiliki ketertarikan pada bagaimana desain dan
              teknologi dapat bekerja bersama untuk menciptakan
              pengalaman digital yang lebih baik.
            </p>

            <p>
              Berawal dari bidang Sistem Informasi, saya mengembangkan
              minat pada UI/UX Design dan Frontend Development.
              Saya menikmati proses memahami kebutuhan pengguna,
              merancang interface, hingga mengubahnya menjadi
              pengalaman digital yang dapat digunakan.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="background-education">

            <div className="education-header">
              <span>EDUCATION</span>
            </div>

            <article className="education-item">
              <div className="education-year">
                2022
                <span>—</span>
                2026
              </div>

              <div className="education-info">
                <small>Computer Science</small>

                <h3>
                  Information System
                </h3>

                <p>
                  Universitas Pembangunan Nasional "Veteran" Jawa Timur
                </p>

                <div className="education-line" />

                <span className="education-focus">
                  Surabaya, Jawa Timur
                </span>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function ContactSection() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-inner">
        <p>GET IN TOUCH</p>

<h2>
  Let&apos;s create
  <br />
  <i>something good.</i>
</h2>

        <div className="contact-links">
          <a
            href="https://wa.me/6281350753080"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-label">WHATSAPP</span>
            <span className="contact-value">
              0813 5075 3080 <b>↗</b>
            </span>
          </a>

          <a
            href="https://instagram.com/lailalfila"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-label">INSTAGRAM</span>
            <span className="contact-value">
              @lailalfila <b>↗</b>
            </span>
          </a>

          <a
            href="mailto:baiqlailaalfilaa@gmail.com"
            className="contact-link"
          >
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">
              baiqlailaalfilaa@gmail.com <b>↗</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="logo">
          <span>BL</span>
          <strong>Baiq Laila Alfila</strong>
        </div>

      </div>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        © 2026 Baiq Laila Alfila. Designed &amp; built with
        intention.
      </div>
    </footer>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <Navbar />

      <main>

        {/* 01 — ABOUT / HERO */}
        <AboutSection />

        {/* 02 — EXPERIENCE / INTERNSHIP */}
        <ExperienceSection />

        {/* MARQUEE */}
        <MarqueeSection />

        {/* 03 — PROJECTS */}
        <ProjectsSection
          onSelectProject={setSelectedProject}
        />

        {/* 04 — SKILLS */}
        <SkillsSection />

        {/* 05 — ORGANIZATION */}
        <AdditionalExperienceSection />

        {/* 06 — BACKGROUND */}
        <BackgroundSection />

        {/* 08 — CONTACT */}
        <ContactSection />

      </main>

      <Footer />

      {/* PROJECT MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}