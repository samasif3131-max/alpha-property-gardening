import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./ServiceLandingPage.module.css";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  services: string[];
  benefits: string[];
};

type Props = {
  data: ServicePageData;
};

export default function ServiceLandingPage({ data }: Props) {
  return (
    <main className={styles.page}>
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: `url("${data.heroImage}")`,
          }}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {data.eyebrow}
            </div>

            <h1>
              {data.title}
              <br />
              <span>{data.highlightedTitle}</span>
            </h1>

            <p className={styles.heroText}>{data.description}</p>

            <div className={styles.heroActions}>
              <Link href="/request-a-quote" className={styles.primaryButton}>
                Request a Free Quote
                <span>→</span>
              </Link>

              <Link href="/contact" className={styles.secondaryButton}>
                Talk To Our Team
                <span>→</span>
              </Link>
            </div>

            <div className={styles.trustRow}>
              <div>
                <span>✓</span>
                Fully Insured
              </div>

              <div>
                <span>✓</span>
                Local &amp; Trusted
              </div>

              <div>
                <span>✓</span>
                Quality Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <div className={styles.sectionEyebrow}>
                <span />
                {data.eyebrow}
              </div>

              <h2>
                {data.introTitle}
              </h2>
            </div>

            <div>
              <p className={styles.introText}>
                {data.introText}
              </p>

              <Link
                href="/request-a-quote"
                className={styles.textButton}
              >
                Get Your Free Quote
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <div className={styles.sectionEyebrow}>
                <span />
                WHAT WE DO
              </div>

              <h2>
                Our {data.eyebrow}
                <span> Services</span>
              </h2>
            </div>

            <p>
              Professional, reliable and practical solutions
              tailored around your property.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {data.services.map((service, index) => (
              <div className={styles.serviceCard} key={service}>
                <div className={styles.cardTop}>
                  <span>0{index + 1}</span>
                  <span>✦</span>
                </div>

                <div className={styles.cardIcon}>
                  {["⌂", "✓", "◆", "◇", "✦"][index % 5]}
                </div>

                <h3>{service}</h3>

                <p>
                  Professional {service.toLowerCase()} delivered
                  with care, attention to detail and dependable
                  workmanship.
                </p>

                <Link href="/request-a-quote">
                  Get a Quote
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyCard}>
            <div className={styles.whyImage}>
              <div className={styles.imageBadge}>
                <strong>ALPHA</strong>
                <small>ONE TEAM. COMPLETE PROPERTY CARE.</small>
              </div>
            </div>

            <div className={styles.whyContent}>
              <div className={styles.sectionEyebrow}>
                <span />
                WHY CHOOSE ALPHA?
              </div>

              <h2>
                One Team.
                <br />
                <span>Complete Care.</span>
              </h2>

              <p>
                From small jobs to larger property projects,
                our local team provides a dependable service
                designed around your property and your schedule.
              </p>

              <div className={styles.benefitList}>
                {data.benefits.map((benefit) => (
                  <div key={benefit}>
                    <span>✓</span>
                    <div>
                      <strong>{benefit}</strong>
                      <small>
                        Professional service with clear communication
                        from start to finish.
                      </small>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/request-a-quote"
                className={styles.darkButton}
              >
                Request a Free Quote
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeading}>
            <div className={styles.sectionEyebrow}>
              <span />
              HOW IT WORKS
            </div>

            <h2>
              Simple.
              <br />
              <span>Professional.</span>
            </h2>

            <p>
              We keep the process straightforward so you always
              know what happens next.
            </p>
          </div>

          <div className={styles.processGrid}>
            {[
              ["01", "Tell Us What You Need"],
              ["02", "Get Your Quote"],
              ["03", "We Complete The Work"],
              ["04", "Enjoy Complete Care"],
            ].map(([number, title]) => (
              <div className={styles.processItem} key={number}>
                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>
                    Clear communication, dependable scheduling
                    and professional workmanship.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.ctaImage} />

        <div className={styles.ctaOverlay} />

        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.sectionEyebrow}>
              <span />
              READY TO GET STARTED?
            </div>

            <h2>
              Let's Take Care
              <br />
              <span>Of Your Property.</span>
            </h2>

            <p>
              Tell us what you need and our local team will
              help you find the right solution.
            </p>

            <div className={styles.ctaActions}>
              <Link
                href="/request-a-quote"
                className={styles.primaryButton}
              >
                Request a Free Quote
                <span>→</span>
              </Link>

              <a
                href="tel:01234567890"
                className={styles.phone}
              >
                <span>☎</span>
                <div>
                  <small>GET IN TOUCH</small>
                  <strong>01234 567890</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}