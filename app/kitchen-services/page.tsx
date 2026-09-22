"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./KitchenServices.module.css";

const services = [
  {
    title: "Full Kitchen Installations",
    text: "Complete kitchen design and installation tailored to your home, style and budget.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kitchen Refurbishments",
    text: "Give your existing kitchen a fresh new look with replacement doors, worktops and more.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Worktops & Sinks",
    text: "Wide range of laminate, oak, quartz and granite worktops with expert fitting.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Appliances & Fitting",
    text: "Supply and installation of ovens, hobs, extractor fans, fridges, dishwashers and more.",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Plumbing & Electrics",
    text: "All plumbing, electrical and gas work completed by qualified tradespeople.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Tiling & Flooring",
    text: "Professional wall and floor tiling, vinyl, laminate and more to complete your kitchen.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85",
  },
];

const projects = [
  {
    title: "Modern Handleless Kitchen",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Family Kitchen Renovation",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Rental Property Kitchen",
    location: "Surfleet, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Traditional Style Kitchen",
    location: "Holbeach, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
];

const faqs = [
  "How much does a new kitchen cost?",
  "How long does a kitchen installation take?",
  "Do you supply kitchen units and appliances?",
  "Can you help with the kitchen design?",
  "Do you work with landlords and letting agents?",
  "What areas do you cover?",
];

export default function KitchenServicesPage() {
  return (
    <main className={styles.page}>
            <Header />
      
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#services">Our Services</Link>
            <span>›</span>
            <span>Kitchens</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1>
                Kitchen Installation
                <br />
                &amp; Renovation Services
              </h1>

              <h2>in Spalding and Surrounding Areas</h2>

              <p>
                From modern, handleless designs to classic family kitchens,
                we supply and install high-quality kitchens tailored to your
                home, style and budget. Our experienced team manages the entire
                process, including plumbing, electrics, tiling and finishing,
                for a stress-free transformation.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/#quote" className={styles.primaryButton}>
                  Request a Free Quote <span>→</span>
                </Link>

                <a href="tel:01234567890" className={styles.phoneButton}>
                  ☎ &nbsp; Call 01234 567890
                </a>
              </div>
            </div>

            <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=90"
                alt="Modern kitchen installation"
              />
            </div>

            <div className={styles.heroList}>
              <ul>
                <li>Complete Kitchen Installations</li>
                <li>Supply &amp; Fit or Fit-Only</li>
                <li>Modern &amp; Traditional Styles</li>
                <li>Worktops, Sinks &amp; Appliances</li>
                <li>Plumbing, Electrics &amp; Gas</li>
                <li>Tiling, Flooring &amp; Decorating</li>
                <li>Kitchen Refurbishments</li>
                <li>Space-Saving Solutions</li>
                <li>Project Management</li>
                <li>Clean, Tidy &amp; Reliable Team</li>
              </ul>

              <div className={styles.heroSignature}>
                Kitchens
                <br />
                <strong>Built Around You</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefit}>
          <span>◇</span>
          <div>
            <strong>High Quality Materials</strong>
            <small>Built to last</small>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>£</span>
          <div>
            <strong>Competitive Pricing</strong>
            <small>Great value for money</small>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>✓</span>
          <div>
            <strong>Fully Insured</strong>
            <small>For your peace of mind</small>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>♧</span>
          <div>
            <strong>Experienced Team</strong>
            <small>Skilled, reliable &amp; professional</small>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>⌂</span>
          <div>
            <strong>Local &amp; Trusted</strong>
            <small>Spalding and surrounding areas</small>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionHeader}>
          <div>
            <h2>
              Our Kitchen Services <span />
            </h2>
            <p>
              We offer a complete kitchen installation service, from design
              and product selection to final finishing touches.
            </p>
          </div>

          <Link href="#quote" className={styles.viewLink}>
            View All Kitchen Services →
          </Link>
        </div>

        <div className={styles.servicesLayout}>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                  <span className={styles.serviceIcon}>
                    {index === 0 && "⌂"}
                    {index === 1 && "⌕"}
                    {index === 2 && "≋"}
                    {index === 3 && "▣"}
                    {index === 4 && "⚡"}
                    {index === 5 && "◇"}
                  </span>
                </div>

                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <Link href="#quote">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* QUOTE FORM */}
          <aside className={styles.quoteCard} id="quote">
            <h2>Get a Free Kitchen Quote</h2>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you! We will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Name *" required />
              <input type="tel" placeholder="Phone *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Postcode *" required />

              <select defaultValue="">
                <option value="" disabled>
                  Type of Work Required
                </option>
                <option>New Kitchen Installation</option>
                <option>Kitchen Refurbishment</option>
                <option>Worktops & Sinks</option>
                <option>Appliances & Fitting</option>
                <option>Plumbing & Electrics</option>
                <option>Tiling & Flooring</option>
              </select>

              <textarea
                placeholder="Tell us more about your project (optional)"
                rows={4}
              />

              <button type="submit">
                Request My Free Quote <span>→</span>
              </button>
            </form>

            <div className={styles.quoteFeatures}>
              <div>
                <strong>▣</strong>
                <span>Free quote</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>No obligation</span>
              </div>

              <div>
                <strong>◷</strong>
                <span>Quick response</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className={styles.beforeAfterSection}>
        <div className={styles.beforeAfter}>
          <div>
            <span className={styles.photoLabel}>Before</span>
            <img
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1000&q=85"
              alt="Kitchen before renovation"
            />
          </div>

          <div>
            <span className={styles.photoLabel}>After</span>
            <img
              src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85"
              alt="Kitchen after renovation"
            />
          </div>
        </div>

        <div className={styles.chooseUs}>
          <h2>Why Choose Alpha for Your Kitchen?</h2>

          <ul>
            <li>Experienced and reliable team</li>
            <li>End-to-end project management</li>
            <li>High quality materials and workmanship</li>
            <li>Competitive and transparent pricing</li>
            <li>Minimal disruption to your home</li>
            <li>All trades in one team</li>
            <li>Trusted by homeowners, landlords and letting agents</li>
            <li>Local to Spalding and surrounding areas</li>
          </ul>
        </div>

        <div className={styles.landlordBox}>
          <h2>Kitchens for Landlords &amp; Letting Agents</h2>

          <p>
            We work with landlords and letting agents to deliver durable,
            stylish and practical kitchens for rental properties.
          </p>

          <ul>
            <li>Hard-wearing materials</li>
            <li>Cost-effective solutions</li>
            <li>Quick turnaround times</li>
            <li>Minimal disruption to tenants</li>
            <li>Trusted by local agents</li>
          </ul>

          <Link href="/landlords-letting-agents">
            Find Out More →
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.sectionTitle}>
          <h2>Our Kitchen Installation Process</h2>
        </div>

        <div className={styles.processGrid}>
          <div className={styles.processItem}>
            <span>01</span>
            <div>
              <h3>Get in Touch</h3>
              <p>Call, email or use our online form.</p>
            </div>
          </div>

          <div className={styles.processItem}>
            <span>02</span>
            <div>
              <h3>Consultation</h3>
              <p>We discuss your ideas, measure up and provide a quote.</p>
            </div>
          </div>

          <div className={styles.processItem}>
            <span>03</span>
            <div>
              <h3>Design &amp; Plan</h3>
              <p>Help with layout, products and final details.</p>
            </div>
          </div>

          <div className={styles.processItem}>
            <span>04</span>
            <div>
              <h3>Installation</h3>
              <p>Our skilled team completes the work to a high standard.</p>
            </div>
          </div>

          <div className={styles.processItem}>
            <span>05</span>
            <div>
              <h3>Enjoy Your New Kitchen</h3>
              <p>A practical, stylish space built to last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>
              Recent Kitchen Projects <span />
            </h2>
          </div>

          <Link href="#projects" className={styles.viewLink}>
            View More Projects →
          </Link>
        </div>

        <div className={styles.projectsGrid} id="projects">
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <img src={project.image} alt={project.title} />

              <div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL + AREAS */}
      <section className={styles.bottomSection}>
        <div className={styles.testimonial}>
          <h2>What Our Clients Say</h2>

          <div className={styles.stars}>★★★★★</div>

          <blockquote>
            “Alpha did a fantastic job on our new kitchen. The team were
            professional, tidy and completed the work on time. We’re really
            happy with the result and would highly recommend them.”
          </blockquote>

          <strong>Homeowner, Spalding</strong>
        </div>

        <div className={styles.areas}>
          <h2>Areas We Cover</h2>

          <p>
            We provide kitchen installation services across Spalding and the
            surrounding areas including Donington, Pinchbeck, Surfleet,
            Holbeach, Long Sutton, Crowland and many more.
          </p>

          <div className={styles.mapBox}>
            <iframe
              title="Spalding map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.22%2C52.74%2C-0.09%2C52.82%26layer=mapnik%26marker=52.787%2C-0.151"
              loading="lazy"
            />
          </div>

          <a
            href="https://www.google.com/maps/search/Spalding,+Lincolnshire"
            target="_blank"
            rel="noreferrer"
            className={styles.mapButton}
          >
            View All Areas →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <h2>
            Frequently Asked Questions <span />
          </h2>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details key={faq} className={styles.faqItem}>
                <summary>
                  {faq}
                  <span>+</span>
                </summary>

                <p>
                  Contact our team for a free consultation and we can discuss
                  your requirements, timescale and project in more detail.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div>
          <h2>Ready to Transform Your Kitchen?</h2>
          <p>
            Speak to our friendly team today and arrange your free,
            no-obligation kitchen quote.
          </p>
        </div>

        <Link href="#quote">
          Request a Free Quote →
        </Link>
      </section>
      <Footer />
    </main>
  );
}