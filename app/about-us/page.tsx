import Link from "next/link";
import styles from "./about-us.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    icon: "✓",
    title: "Reliability",
    text: "We turn up, do the job and do it right.",
  },
  {
    icon: "♙",
    title: "Honesty",
    text: "Clear communication and no hidden costs.",
  },
  {
    icon: "◉",
    title: "Quality",
    text: "High standards in everything we do.",
  },
  {
    icon: "🤝",
    title: "Respect",
    text: "For our customers, our community and each other.",
  },
  {
    icon: "⌂",
    title: "Local Focus",
    text: "Proud to serve Spalding and surrounding areas.",
  },
  {
    icon: "♧",
    title: "Sustainability",
    text: "Working towards a cleaner, greener tomorrow.",
  },
];

const reasons = [
  {
    icon: "⌂",
    title: "Local & Trusted",
    text: "Based in Spalding, serving local homes, landlords and businesses.",
  },
  {
    icon: "✓",
    title: "Fully Insured",
    text: "For your peace of mind on every project.",
  },
  {
    icon: "♙",
    title: "Experienced Team",
    text: "Skilled, reliable and professional tradespeople.",
  },
  {
    icon: "♧",
    title: "High Quality Workmanship",
    text: "We take pride in every detail, big or small.",
  },
  {
    icon: "◉",
    title: "Competitive Pricing",
    text: "Great value without compromising on quality.",
  },
  {
    icon: "🤝",
    title: "Committed to Our Community",
    text: "Proud to support local people and local businesses.",
  },
];

const teamServices = [
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    title: "Garden & Property Maintenance",
    text: "Keeping your outdoor spaces and properties in top condition.",
    icon: "♧",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
    title: "Plumbing & Installations",
    text: "Expert plumbing, kitchen and bathroom installations and repairs.",
    icon: "🔧",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=85",
    title: "Bathrooms, Kitchens & Renovations",
    text: "Transforming spaces with quality and care.",
    icon: "▦",
  },
];

const testimonials = [
  {
    text: "Fantastic service from start to finish. The team were reliable, professional and did an amazing job on our garden and property repairs. Highly recommend!",
    name: "Homeowner, Spalding",
  },
  {
    text: "We use Alpha for all our property maintenance. Great communication, fair pricing and consistently high standards of work.",
    name: "Landlord, Holbeach",
  },
  {
    text: "Professional, friendly and trustworthy. Our new kitchen looks amazing — we couldn't be happier.",
    name: "Homeowner, Long Sutton",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage} />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>About Us</span>
            </div>

            <p className={styles.eyebrow}>ABOUT ALPHA</p>

            <h1>
              About Alpha
              <strong>
                One Team. Complete
                <br />
                Property Care.
              </strong>
            </h1>

            <p className={styles.heroText}>
              We&apos;re a local, reliable and professional team providing
              high-quality property and garden services across Spalding and
              surrounding areas. From everyday maintenance to full
              renovations, we make it easy to keep your property in top
              condition.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.goldButton}>
                Request a Free Quote <span>→</span>
              </Link>

              <a href="tel:01234567890" className={styles.outlineButton}>
                <span className={styles.phoneIcon}>⌕</span>
                Call 01234 567890
              </a>
            </div>
          </div>

          <div className={styles.heroStatement}>
            <span>Local People.</span>
            <span>Quality Work.</span>
            <span>Stronger Communities.</span>
            <i />
          </div>
        </section>

        {/* STORY */}
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <p className={styles.sectionLabel}>OUR STORY</p>

            <h2>
              Built on Experience.
              <br />
              Driven by Quality
            </h2>

            <p>
              Alpha Property &amp; Gardening Services was founded with a
              simple vision — to provide a reliable, honest and professional
              service that homeowners, landlords and businesses can trust.
            </p>

            <p>
              With years of hands-on experience across property maintenance,
              plumbing, kitchen and bathroom installations, and garden
              services, we saw a need for a local company that could do it all
              — properly.
            </p>

            <p>
              Today, Alpha is a growing, trusted name in Spalding and
              surrounding areas, known for quality workmanship, clear
              communication and a genuine commitment to our customers.
            </p>

            <div className={styles.storyQuote}>
              <span>&quot;More than a service,</span>
              <strong>it&apos;s our commitment to the community.&quot;</strong>
              <i />
            </div>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((item) => (
              <div className={styles.reasonCard} key={item.title}>
                <div className={styles.reasonIcon}>{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className={styles.teamSection}>
          <div className={styles.teamIntro}>
            <p className={styles.sectionLabel}>MEET OUR TEAM</p>

            <h2>
              Skilled.
              <br />
              Reliable.
              <br />
              Local.
            </h2>

            <p>
              Our team combines a range of skills and experience to cover all
              aspects of property and garden services. From groundwork to
              plumbing, from kitchens to landscaping — we work together to
              deliver a complete service you can rely on.
            </p>

            <Link href="/contact" className={styles.goldButton}>
              Get in Touch <span>→</span>
            </Link>
          </div>

          <div className={styles.teamCards}>
            {teamServices.map((item) => (
              <article className={styles.teamCard} key={item.title}>
                <div className={styles.teamImageWrap}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className={styles.teamCardContent}>
                  <div className={styles.teamIcon}>{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesHeading}>
            <p className={styles.sectionLabel}>OUR VALUES</p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((item) => (
              <div className={styles.valueItem} key={item.title}>
                <div className={styles.valueIcon}>{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className={styles.statsSection}>
          <div className={styles.stat}>
            <span className={styles.statIcon}>⌂</span>
            <div>
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>
          </div>

          <div className={styles.stat}>
            <span className={styles.statIcon}>♙</span>
            <div>
              <strong>300+</strong>
              <span>Happy Customers</span>
            </div>
          </div>

          <div className={styles.stat}>
            <span className={styles.statIcon}>▣</span>
            <div>
              <strong>5+</strong>
              <span>Years&apos; Experience</span>
            </div>
          </div>

          <div className={styles.stat}>
            <span className={styles.statIcon}>⌖</span>
            <div>
              <strong>Spalding &amp;</strong>
              <span>Surrounding Areas</span>
            </div>
          </div>

          <div className={styles.greenStat}>
            <span>♧</span>
            <div>
              <strong>A Cleaner Greener</strong>
              <small>Brighter Tomorrow</small>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsHeading}>
            <p className={styles.sectionLabel}>WHAT OUR CLIENTS SAY</p>
          </div>

          <div className={styles.testimonialLayout}>
            <div className={styles.testimonialCards}>
              {testimonials.map((item) => (
                <article
                  className={styles.testimonialCard}
                  key={item.name}
                >
                  <div className={styles.stars}>★★★★★</div>

                  <p>&quot;{item.text}&quot;</p>

                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>

            <div className={styles.workTogether}>
              <div className={styles.workIcon}>↗</div>

              <h2>Let&apos;s Work Together</h2>

              <p>
                Whether it&apos;s a small repair, garden maintenance or a
                full renovation, we&apos;re here to help.
              </p>

              <Link href="/contact" className={styles.goldButton}>
                Request a Free Quote <span>→</span>
              </Link>

              <a href="tel:01234567890" className={styles.workPhone}>
                ☎ &nbsp; Call 01234 567890
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}