"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./our-work.module.css";

type Category =
  | "All Projects"
  | "Garden Services"
  | "Property Maintenance"
  | "Plumbing"
  | "Bathrooms"
  | "Kitchens"
  | "Tiling & Flooring"
  | "Roofing & Gutters";

type Project = {
  title: string;
  location: string;
  description: string;
  category: Exclude<Category, "All Projects">;
  before: string;
  after: string;
};

const projects: Project[] = [
  {
    title: "Garden Transformation",
    location: "Spalding, Lincolnshire",
    description:
      "Overgrown garden cleared, new lawn laid, fencing installed and patio area created.",
    category: "Garden Services",
    before:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bathroom Renovation",
    location: "Holbeach, Lincolnshire",
    description:
      "Full bathroom installation including new suite, tiling, lighting and plastering.",
    category: "Bathrooms",
    before:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kitchen Makeover",
    location: "Long Sutton, Lincolnshire",
    description:
      "Old kitchen removed and new modern supplied and fitted.",
    category: "Kitchens",
    before:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Full Property Decoration",
    location: "Pinchbeck, Lincolnshire",
    description:
      "Complete internal decoration including walls, ceilings, woodwork and feature walls.",
    category: "Property Maintenance",
    before:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Patio Installation",
    location: "Donington, Lincolnshire",
    description:
      "New patio area laid with paving, edging and gravel surrounds.",
    category: "Garden Services",
    before:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "New Guttering",
    location: "Spalding, Lincolnshire",
    description:
      "Old guttering removed and new uPVC guttering and downpipes fitted.",
    category: "Roofing & Gutters",
    before:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Boiler Replacement",
    location: "Holbeach, Lincolnshire",
    description:
      "Old boiler removed and new energy-efficient boiler installed.",
    category: "Plumbing",
    before:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Flooring Installation",
    location: "Surfleet, Lincolnshire",
    description:
      "New laminate flooring fitted throughout the ground floor.",
    category: "Tiling & Flooring",
    before:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Exterior Refresh",
    location: "Long Sutton, Lincolnshire",
    description:
      "External walls cleaned, repaired and repainted for a fresh, modern look.",
    category: "Property Maintenance",
    before:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
    after:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
];

const categories: Category[] = [
  "All Projects",
  "Garden Services",
  "Property Maintenance",
  "Plumbing",
  "Bathrooms",
  "Kitchens",
  "Tiling & Flooring",
  "Roofing & Gutters",
];

const categoryIcons: Record<Category, string> = {
  "All Projects": "▦",
  "Garden Services": "♧",
  "Property Maintenance": "🛠",
  Plumbing: "♢",
  Bathrooms: "▱",
  Kitchens: "▣",
  "Tiling & Flooring": "▦",
  "Roofing & Gutters": "⌂",
};

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Our Work</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <p className={styles.smallLabel}>OUR RECENT PROJECTS</p>

                <h1>
                  Our Work
                  <span>Real Projects. Real Results.</span>
                </h1>

                <p className={styles.heroDescription}>
                  Take a look at some of our recent property and garden
                  projects across Spalding and surrounding areas. From full
                  renovations to simple garden makeovers, we take pride in
                  delivering high-quality work for homeowners, landlords and
                  businesses.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Request a Free Quote <span>→</span>
                  </Link>

                  <a
                    href="tel:01234567890"
                    className={styles.phoneButton}
                  >
                    <span className={styles.phoneIcon}>☎</span>
                    Call 01234 567890
                  </a>
                </div>
              </div>

              <div className={styles.heroImageBox}>
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=90"
                  alt="Completed modern property project"
                />

                <div className={styles.heroQuote}>
                  <span>"Transforming</span>
                  <span>Properties.</span>
                  <span>Improving Lives."</span>
                  <i />
                </div>
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <div>
                <span>⌂</span>
                <strong>Quality Workmanship</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Trusted & Local</strong>
              </div>

              <div>
                <span>♧</span>
                <strong>Homeowners, Landlords & Businesses</strong>
              </div>

              <div>
                <span>◈</span>
                <strong>Indoor & Outdoor Projects</strong>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className={styles.projectsSection}>
          <div className={styles.container}>
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

            {/* PROJECT GRID */}
            <div className={styles.projectGrid}>
              {filteredProjects.map((project) => (
                <article
                  className={styles.projectCard}
                  key={project.title}
                >
                  <div className={styles.beforeAfter}>
                    <div className={styles.imageSide}>
                      <img
                        src={project.before}
                        alt={`${project.title} before`}
                      />
                      <span className={styles.imageLabel}>
                        Before
                      </span>
                    </div>

                    <div className={styles.arrowCircle}>→</div>

                    <div className={styles.imageSide}>
                      <img
                        src={project.after}
                        alt={`${project.title} after`}
                      />
                      <span
                        className={`${styles.imageLabel} ${styles.afterLabel}`}
                      >
                        After
                      </span>
                    </div>
                  </div>

                  <div className={styles.projectInfo}>
                    <h2>{project.title}</h2>

                    <div className={styles.location}>
                      <span>●</span>
                      {project.location}
                    </div>

                    <p>{project.description}</p>

                    <Link
                      href={`/${project.category
                        .toLowerCase()
                        .replace(/&/g, "and")
                        .replace(/\s+/g, "-")}`}
                      className={styles.categoryLink}
                    >
                      {project.category}
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className={styles.noProjects}>
                No projects found in this category.
              </div>
            )}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonialHeading}>
              <p>REAL PEOPLE. REAL FEEDBACK.</p>
              <h2>What Our Customers Say</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>

                <p>
                  “Brilliant job from start to finish. The garden looks
                  amazing and the team were professional, friendly and
                  reliable. Highly recommend!”
                </p>

                <strong>Homeowner, Spalding</strong>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>

                <p>
                  “Our new bathroom is perfect. Great communication,
                  excellent workmanship and completed on time. Will
                  definitely use Alpha again.”
                </p>

                <strong>Landlord, Holbeach</strong>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>

                <p>
                  “Reliable, tidy and high quality work. The team
                  decorated our full house and it looks like a new
                  home.”
                </p>

                <strong>Homeowner, Long Sutton</strong>
              </div>

              <div className={styles.socialBox}>
                <h3>See More of Our Work</h3>

                <p>
                  Follow us on social media for more before & after
                  photos, latest projects and updates.
                </p>

                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Facebook">
                    f
                  </a>
                  <a href="#" aria-label="Instagram">
                    ◎
                  </a>
                  <a href="#" aria-label="TikTok">
                    ♪
                  </a>
                  <a href="#" aria-label="YouTube">
                    ▶
                  </a>
                </div>

                <Link href="/contact" className={styles.followButton}>
                  Follow Us <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaIcon}>⌂</div>

            <div className={styles.ctaText}>
              <h2>Have a Project in Mind?</h2>
              <p>
                Get in touch today for a free, no-obligation quote. Our
                friendly team is ready to help.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a href="tel:01234567890" className={styles.ctaPhone}>
                ☎ &nbsp; Call 01234 567890
              </a>

              <Link href="/contact" className={styles.ctaQuote}>
                Request a Free Quote <span>→</span>
              </Link>
            </div>

            <div className={styles.ctaSlogan}>
              <strong>One Team.</strong>
              <strong>Complete Property Care.</strong>
              <i />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}