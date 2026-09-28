"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./our-work.module.css";

type Category =
  | "All Projects"
  | "Property Maintenance"
  | "Property Renovations"
  | "Plumbing"
  | "Bathrooms"
  | "Kitchens"
  | "Tiling & Flooring"
  | "Painting & Decorating"
  | "Roofing & Gutters"
  | "Garden Services"
  | "Landlord & Rental Properties";

type Project = {
  slug: string;
  title: string;
  location: string;
  customerType?: string;
  description: string;
  category: Exclude<Category, "All Projects">;
  services: string[];
  image: string;
  alt: string;
  completed?: string;
};

/*
  IMPORTANT:
  Do not add projects here unless they are genuine Alpha projects.

  When genuine projects become available, add them in this format:

  {
    slug: "genuine-project-slug",
    title: "Genuine Alpha Project",
    location: "Genuine Location",
    customerType: "Homeowner",
    description:
      "Genuine description of the work completed by Alpha.",
    category: "Bathrooms",
    services: [
      "Bathroom Services",
      "Plumbing Services",
      "Tiling & Flooring",
    ],
    image: "/images/projects/genuine-project-after.webp",
    alt: "Completed project by Alpha",
    completed: "Month 2026",
  }

  Only use genuine Alpha work and genuine photographs.
*/

const projects: Project[] = [];

const categories: Category[] = [
  "All Projects",
  "Property Maintenance",
  "Property Renovations",
  "Plumbing",
  "Bathrooms",
  "Kitchens",
  "Tiling & Flooring",
  "Painting & Decorating",
  "Roofing & Gutters",
  "Garden Services",
  "Landlord & Rental Properties",
];

const categoryIcons: Record<Category, string> = {
  "All Projects": "▦",
  "Property Maintenance": "◆",
  "Property Renovations": "⌂",
  Plumbing: "◇",
  Bathrooms: "▱",
  Kitchens: "▣",
  "Tiling & Flooring": "▦",
  "Painting & Decorating": "✦",
  "Roofing & Gutters": "⌂",
  "Garden Services": "♧",
  "Landlord & Rental Properties": "▤",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.projectCard}>
      <Link
        href={`/our-work/${project.slug}`}
        className={styles.projectImageLink}
        aria-label={`View ${project.title}`}
      >
        <div className={styles.projectImage}>
          <img src={project.image} alt={project.alt} loading="lazy" />

          <span className={styles.projectCategory}>
            {project.category}
          </span>
        </div>
      </Link>

      <div className={styles.projectInfo}>
        <p className={styles.projectType}>{project.category}</p>

        <h3>{project.title}</h3>

        <div className={styles.projectMeta}>
          <span>
            <strong>Area:</strong> {project.location}
          </span>

          {project.customerType && (
            <span>
              <strong>Customer:</strong> {project.customerType}
            </span>
          )}

          {project.completed && (
            <span>
              <strong>Completed:</strong> {project.completed}
            </span>
          )}
        </div>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        {project.services.length > 0 && (
          <div className={styles.projectServices}>
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        )}

        <Link
          href={`/our-work/${project.slug}`}
          className={styles.viewProject}
        >
          View Project <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Projects");

  useEffect(() => {
    document.title =
      "Our Work | Property Maintenance & Renovations | Alpha";

    const description =
      "See examples of Alpha’s growing portfolio of property maintenance, renovation and garden projects across our service region.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const hasProjects = projects.length > 0;
  const hasFilteredProjects = filteredProjects.length > 0;

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Our Work</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>
                  SEE THE WORK BEHIND ALPHA
                </p>

                <h1>
                  Our Work
                  <span>
                    Real projects. Real properties. Real results.
                  </span>
                </h1>

                <div className={styles.goldLine} />

                <p className={styles.heroLead}>
                  Alpha Property &amp; Gardening Services works across
                  property maintenance, repairs, renovations, plumbing,
                  bathrooms, kitchens, decorating, flooring, gardens and
                  wider property improvement.
                </p>

                <p className={styles.heroDescription}>
                  This is where we show genuine examples of that work as
                  our portfolio grows. Only genuine work completed by
                  Alpha will be presented here as an Alpha project.
                </p>

                <div className={styles.heroButtons}>
                  <Link
                    href="/request-a-quote"
                    className={styles.primaryButton}
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>

                  <Link
                    href="/services"
                    className={styles.secondaryButton}
                  >
                    View Our Services
                  </Link>
                </div>
              </div>

              <div className={styles.heroStatement}>
                <div className={styles.statementIcon}>◆</div>

                <p>One property.</p>
                <p>Multiple jobs.</p>

                <strong>One team.</strong>

                <div className={styles.statementLine} />

                <span>
                  Genuine work.
                  <br />
                  Honest presentation.
                </span>
              </div>
            </div>

            <div className={styles.heroTrust}>
              <div>
                <span>✓</span>
                <strong>Genuine Alpha Projects</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Real Property Work</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Before &amp; After When Available</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Growing Portfolio</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className={styles.introduction}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.introHeading}>
                <p className={styles.sectionEyebrow}>
                  OUR PORTFOLIO
                </p>

                <h2>See the work behind Alpha.</h2>

                <div className={styles.goldLineDark} />
              </div>

              <div className={styles.introText}>
                <p>
                  Our work portfolio is designed to grow alongside the
                  business. As genuine Alpha projects are completed,
                  suitable photographs and project details can be added
                  here.
                </p>

                <p>
                  We believe a portfolio should show real property
                  maintenance projects, renovations, bathroom and
                  kitchen work, plumbing repairs, decorating, flooring,
                  gardens and landlord property work — not stock
                  photographs presented as completed Alpha jobs.
                </p>

                <div className={styles.introHighlight}>
                  <strong>
                    Only genuine Alpha work belongs in the portfolio.
                  </strong>

                  <span>
                    {" "}
                    Real projects. Real properties. Real results.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED PROJECTS
        ====================================================== */}
        {hasProjects && (
          <section className={styles.featuredSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeading}>
                <div>
                  <p className={styles.sectionEyebrow}>
                    FEATURED WORK
                  </p>

                  <h2>Featured Alpha Projects</h2>
                </div>

                <p>
                  A selection of genuine projects showing the range of
                  property work carried out by Alpha.
                </p>
              </div>

              <div className={styles.featuredGrid}>
                {projects.slice(0, 6).map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            PROJECT FILTERS / EMPTY STATE
        ====================================================== */}
        <section
          className={`${styles.projectsSection} ${
            !hasProjects ? styles.emptyPortfolioSection : ""
          }`}
        >
          <div className={styles.container}>
            {hasProjects && (
              <>
                <div className={styles.sectionHeading}>
                  <div>
                    <p className={styles.sectionEyebrow}>
                      ALPHA PORTFOLIO
                    </p>

                    <h2>Latest Work</h2>
                  </div>

                  <p>
                    Explore genuine Alpha projects by type of work.
                  </p>
                </div>

                <div className={styles.filters}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`${styles.filterButton} ${
                        activeCategory === category
                          ? styles.activeFilter
                          : ""
                      }`}
                    >
                      <span className={styles.filterIcon}>
                        {categoryIcons[category]}
                      </span>

                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {!hasProjects ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>◆</div>

                <p className={styles.emptyEyebrow}>
                  GENUINE ALPHA PROJECTS
                </p>

                <h2>Our Project Portfolio Is Growing</h2>

                <div className={styles.emptyLine} />

                <p className={styles.emptyLead}>
                  We’re building this section with genuine
                  photographs and details from Alpha projects.
                </p>

                <p>
                  We’d rather show real work than fill this page with
                  stock images presented as our own. As the portfolio
                  grows, you’ll be able to explore property
                  maintenance, renovations, bathrooms, kitchens,
                  gardens and landlord projects here.
                </p>

                <div className={styles.emptyPrinciples}>
                  <div>
                    <span>01</span>
                    <strong>Real Alpha Work</strong>
                    <p>
                      Projects will only be added when the work has
                      genuinely been completed by Alpha.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Genuine Photography</strong>
                    <p>
                      Portfolio photographs will come from genuine
                      Alpha projects.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Useful Project Details</strong>
                    <p>
                      Future project details will explain the work,
                      scope and result clearly.
                    </p>
                  </div>
                </div>

                <h3>What You’ll See Here</h3>

                <p>
                  As our portfolio grows, we’ll share genuine before,
                  during and after photographs from suitable Alpha
                  projects, together with clear details about the work
                  completed and services involved.
                </p>

                <div className={styles.emptyButtons}>
                  <Link
                    href="/services"
                    className={styles.primaryButton}
                  >
                    View Our Services
                    <span>→</span>
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className={styles.secondaryButtonDark}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.filters}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`${styles.filterButton} ${
                        activeCategory === category
                          ? styles.activeFilter
                          : ""
                      }`}
                    >
                      <span className={styles.filterIcon}>
                        {categoryIcons[category]}
                      </span>

                      <span>{category}</span>
                    </button>
                  ))}
                </div>

                {hasFilteredProjects ? (
                  <div className={styles.projectGrid}>
                    {filteredProjects.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={styles.noProjects}>
                    <h3>No projects in this category yet.</h3>

                    <p>
                      As genuine Alpha projects are completed,
                      relevant examples will be added here.
                    </p>

                    <Link
                      href="/services"
                      className={styles.textLink}
                    >
                      View Our Services →
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* =====================================================
            PORTFOLIO STANDARDS
        ====================================================== */}
        <section className={styles.standardsSection}>
          <div className={styles.container}>
            <div className={styles.standardsGrid}>
              <div>
                <p className={styles.sectionEyebrow}>OUR STANDARD</p>

                <h2>
                  Honest project information matters.
                </h2>

                <div className={styles.goldLineDark} />
              </div>

              <div className={styles.standardsContent}>
                <p>
                  Portfolio images should accurately represent the work
                  carried out by Alpha. Customer privacy should also be
                  respected when photographing private properties.
                </p>

                <div className={styles.standardList}>
                  <div>
                    <span>✓</span>
                    <p>
                      Town or general area rather than a private
                      residential address.
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      Genuine photographs from the relevant project.
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      Accurate descriptions of the work completed.
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      Customer permission where required for
                      portfolio use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaContent}>
                <p className={styles.ctaEyebrow}>
                  START YOUR PROJECT
                </p>

                <h2>Have a Property Project of Your Own?</h2>

                <p>
                  Every job is different. Whether you need a small
                  repair, ongoing property maintenance, a complete
                  renovation or help with the garden, tell Alpha what
                  you need.
                </p>

                <div className={styles.ctaSlogan}>
                  One Team. Complete Property Care.
                </div>
              </div>

              <div className={styles.ctaActions}>
                <Link
                  href="/request-a-quote"
                  className={styles.ctaPrimary}
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/services"
                  className={styles.ctaSecondary}
                >
                  View All Services
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.ctaPhone}
                >
                  ☎ &nbsp; 01775 518068
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}