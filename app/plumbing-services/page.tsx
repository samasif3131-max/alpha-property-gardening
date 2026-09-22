import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PlumbingServices.module.css";

const plumbingServices = [
  {
    title: "Leak Detection & Repairs",
    description:
      "Fast identification and repair of leaks to prevent further damage and save you money.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
    icon: "◉",
  },
  {
    title: "Toilet Repairs & Installations",
    description:
      "Fixing issues, replacing parts or installing new toilets with professional care.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: "▱",
  },
  {
    title: "Tap Repairs & Replacements",
    description:
      "Dripping or faulty taps fixed quickly and efficiently by experienced plumbers.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    icon: "♧",
  },
  {
    title: "Hot Water Systems",
    description:
      "Installation, repairs and maintenance for cylinders, immersion systems and more.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    icon: "▣",
  },
  {
    title: "Radiators & Heating",
    description:
      "Install, replace or repair radiators and heating pipework for reliable warmth.",
    image:
      "https://images.unsplash.com/photo-1631545806609-4b7c7b7f5b3d?auto=format&fit=crop&w=900&q=85",
    icon: "▤",
  },
  {
    title: "Blocked Pipes & Drains",
    description:
      "Clearing blockages in sinks, showers, baths and external drainage systems.",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
    icon: "✳",
  },
  {
    title: "General Plumbing Repairs",
    description:
      "All general plumbing work undertaken, big or small, with clear pricing.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
    icon: "⚒",
  },
  {
    title: "New Installations",
    description:
      "Full plumbing installations for bathrooms, kitchens and property refurbishments.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    icon: "⌂",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description: "Call, email or use our online form to tell us what you need.",
    icon: "☎",
  },
  {
    number: "02",
    title: "Free Assessment",
    description: "We discuss the issue and provide a clear quotation.",
    icon: "▣",
  },
  {
    number: "03",
    title: "Book A Time",
    description: "Choose a convenient date and time for your visit.",
    icon: "▤",
  },
  {
    number: "04",
    title: "We Get To Work",
    description: "Our plumber completes the work to a high standard.",
    icon: "⚒",
  },
  {
    number: "05",
    title: "Job Complete",
    description: "Everything is clean, tidy and fully tested before we leave.",
    icon: "✓",
  },
];

const recentProjects = [
  {
    title: "New Bathroom Installation",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Leak Repair",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Radiator Installation",
    location: "Suffleet, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1631545806609-4b7c7b7f5b3d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kitchen Plumbing",
    location: "Holbeach, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
];

const faqs = [
  {
    question: "Do you offer emergency plumbing services?",
    answer:
      "Yes. We provide emergency plumbing support for urgent leaks, blocked toilets, burst pipes and other plumbing problems.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We serve Spalding and surrounding areas including Pinchbeck, Sutterton, Holbeach, Long Sutton, Crowland and nearby villages.",
  },
  {
    question: "How much do plumbing repairs cost?",
    answer:
      "The cost depends on the issue and the required materials. We aim to provide clear pricing before work begins.",
  },
  {
    question: "How quickly can you attend?",
    answer:
      "For emergency issues, we aim to respond as quickly as possible. Appointment times depend on availability and location.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. We support landlords and letting agents with responsive repairs, maintenance and complete property care.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes. We operate with appropriate insurance and take care to complete every job safely and professionally.",
  },
];

export default function PlumbingServicesPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Our Services</Link>
            <span>›</span>
            <span>Plumbing Services</span>
          </div>

          <div className={styles.heroLayout}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>PROFESSIONAL PLUMBING SERVICES</p>

              <h1>
                Professional Plumbing
                <br />
                Services in Spalding
                <br />
                <span>and Surrounding Areas</span>
              </h1>

              <p className={styles.heroDescription}>
                Fast, reliable and affordable plumbing services for homes,
                landlords and businesses. From fixing leaks and blocked pipes
                to full airing plumbing installations, our experienced team is
                here to help.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/contact" className={styles.goldButton}>
                  Request a Free Quote <span>→</span>
                </Link>

                <a href="tel:01234567890" className={styles.outlineButton}>
                  ☎ &nbsp; Call 01234 567890
                </a>
              </div>
            </div>

            <div className={styles.heroChecklist}>
              <div>✓ 24/7 Emergency Call Outs</div>
              <div>✓ Leaks & Burst Pipes</div>
              <div>✓ Blocked Drains & Toilets</div>
              <div>✓ Tap & Toilet Repairs</div>
              <div>✓ Hot Water Systems</div>
              <div>✓ Radiators & Heating</div>
              <div>✓ Full Installations</div>
              <div>✓ Landlord & Letting Agent Support</div>
              <div>✓ Competitive Rates</div>
              <div>✓ Local & Reliable</div>

              <strong>
                Plumbing Solutions
                <br />
                You Can Count On
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className={styles.trustBar}>
        <div className={styles.trustItem}>
          <span>◷</span>
          <div>
            <strong>24/7 Emergency Support</strong>
            <small>Here when you need us</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>£</span>
          <div>
            <strong>Competitive Rates</strong>
            <small>Quality work at fair prices</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>♢</span>
          <div>
            <strong>Fully Insured</strong>
            <small>For your peace of mind</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>⌖</span>
          <div>
            <strong>Local & Reliable</strong>
            <small>Spalding and surrounding areas</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>♧</span>
          <div>
            <strong>Trusted by Homeowners</strong>
            <small>& Landlords</small>
          </div>
        </div>
      </section>

      {/* SERVICES + QUOTE FORM */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesMain}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>WHAT WE DO</p>
              <h2>Our Plumbing Services</h2>
              <p>
                We provide a complete range of plumbing services for domestic,
                commercial and rental properties.
              </p>
            </div>

            <Link href="/services" className={styles.viewAll}>
              View All Services →
            </Link>
          </div>

          <div className={styles.serviceGrid}>
            {plumbingServices.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceImageWrap}>
                  <img src={service.image} alt={service.title} />
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>

                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link href="/contact" className={styles.learnMore}>
                    Learn More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.quoteCard}>
          <h2>Get a Free Plumbing Quote</h2>

          <form className={styles.quoteForm}>
            <input type="text" name="name" placeholder="Name *" required />
            <input type="tel" name="phone" placeholder="Phone *" required />
            <input type="email" name="email" placeholder="Email *" required />
            <input
              type="text"
              name="postcode"
              placeholder="Postcode *"
              required
            />

            <label htmlFor="workType">Type of Work Required</label>

            <select id="workType" name="workType" defaultValue="">
              <option value="" disabled>
                Please select
              </option>
              <option value="emergency">Emergency Plumbing</option>
              <option value="leak">Leak Repair</option>
              <option value="bathroom">Bathroom Plumbing</option>
              <option value="kitchen">Kitchen Plumbing</option>
              <option value="installation">New Installation</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us more (optional)"
              rows={4}
            ></textarea>

            <button type="submit" className={styles.formButton}>
              Request My Free Quote →
            </button>
          </form>

          <div className={styles.quoteBenefits}>
            <div>
              <span>⚙</span>
              <small>Fast response</small>
            </div>

            <div>
              <span>♢</span>
              <small>No obligation</small>
            </div>

            <div>
              <span>▦</span>
              <small>Flexible appointments</small>
            </div>
          </div>
        </aside>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.whySection}>
        <div className={styles.whyImage}>
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85"
            alt="Professional plumber working under a sink"
          />
        </div>

        <div className={styles.whyContent}>
          <p className={styles.sectionEyebrow}>WHY CHOOSE US</p>

          <h2>Why Choose Alpha for Plumbing?</h2>

          <ul>
            <li>24/7 emergency call out service</li>
            <li>Experienced and qualified plumbers</li>
            <li>Clean, professional and respectful</li>
            <li>Work for homeowners, landlords and businesses</li>
            <li>Transparent pricing with no hidden costs</li>
            <li>Fully insured</li>
            <li>Local team based in Spalding</li>
            <li>Part of a complete property care service</li>
          </ul>
        </div>

        <div className={styles.testimonialCard}>
          <span className={styles.quoteMark}>“</span>
          <p>
            Fast, reliable and sorted the problem the same day. Highly
            recommend Alpha!
          </p>
          <div className={styles.stars}>★★★★★</div>
          <strong>Spalding Homeowner</strong>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>OUR SIMPLE PROCESS</p>
            <h2>How Our Plumbing Service Works</h2>
          </div>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <div className={styles.processItem} key={step.number}>
              <div className={styles.processIcon}>{step.icon}</div>
              <div>
                <span className={styles.processNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT PROJECTS + AREAS */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsColumn}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>OUR WORK</p>
              <h2>Recent Plumbing Projects</h2>
            </div>

            <Link href="/our-work" className={styles.viewAll}>
              View More Projects →
            </Link>
          </div>

          <div className={styles.projectGrid}>
            {recentProjects.map((project) => (
              <Link href="/our-work" className={styles.projectCard} key={project.title}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.areasCard}>
          <div>
            <p className={styles.sectionEyebrow}>LOCAL SERVICE</p>
            <h2>Areas We Cover</h2>
            <p>
              We provide plumbing services across Spalding and the surrounding
              areas including Donington, Pinchbeck, Sutterton, Holbeach, Long
              Sutton, Crowland and many more.
            </p>

            <Link href="/areas-we-cover" className={styles.goldButton}>
              View All Areas →
            </Link>
          </div>

          <div className={styles.mapVisual}>
            <span className={styles.mapPin}>●</span>
            <strong>Spalding</strong>
            <small>Lincolnshire</small>
          </div>
        </div>
      </section>

      {/* FAQ + EMERGENCY CTA */}
      <section className={styles.faqSection}>
        <div className={styles.faqColumn}>
          <p className={styles.sectionEyebrow}>COMMON QUESTIONS</p>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <strong>+</strong>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className={styles.emergencyCard}>
          <div className={styles.emergencyIcon}>☎</div>
          <div>
            <h2>Need a Plumber Now?</h2>
            <p>Call <strong>01234 567890</strong></p>
            <small>We’re available 24/7 for emergency call outs.</small>
          </div>

          <a href="tel:01234567890" className={styles.goldButton}>
            Call Now →
          </a>
        </aside>
      </section>

      <Footer />
    </main>
  );
}