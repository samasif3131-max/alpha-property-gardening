import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./areas-we-cover.module.css";


const towns = [
  "Peterborough",
  "Spalding",
  "Long Sutton",
  "Holbeach",
  "Boston",
  "Skegness",
  "Lincoln",
  "Sleaford",
  "Bourne",
  "Crowland",
  "Pinchbeck",
  "Surfleet",
  "Moulton",
  "Donington",
  "Gosberton",
  "Swinstead",
  "Quadring",
  "Sutton Bridge",
  "WalpoIe",
  "Wisbech",
  "March",
  "Whittlesey",
  "Market Deeping",
  "Stamford",
  "Surrounding villages",
];

const townImages = [
  {
    name: "Peterborough",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Spalding",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Boston",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Skegness",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Long Sutton",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Lincoln",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",
  },
];

export default function AreasWeCoverPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Areas We Cover</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <h1>Areas We Cover</h1>

                <h2>Local Service. Real Support.</h2>

                <p>
                  We provide professional property and garden services across
                  South and East Lincolnshire, covering from Peterborough to
                  Skegness and from Long Sutton to Lincoln.
                </p>

                <p>
                  Whether you&apos;re a homeowner, landlord, letting agent or
                  business, our local team is ready to help.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Request a Free Quote <span>→</span>
                  </Link>

                  <a
                    href="tel:01234567890"
                    className={styles.secondaryButton}
                  >
                    <span className={styles.phoneIcon}>☎</span>
                    Call 01234 567890
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroCityImage}></div>

                <div className={styles.serviceBox}>
                  <div>✓ Property Maintenance</div>
                  <div>✓ Garden Services</div>
                  <div>✓ Plumbing</div>
                  <div>✓ Bathrooms</div>
                  <div>✓ Kitchens</div>
                  <div>✓ And More...</div>
                </div>

                <div className={styles.heroQuote}>
                  Local People.
                  <br />
                  Local Areas.
                  <br />
                  <strong>Stronger Communities.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE INTRO */}
        <section className={styles.coverageSection}>
          <div className={styles.coverageContainer}>
            <div className={styles.coverageText}>
              <span className={styles.sectionLabel}>
                OUR COVERAGE AREA
              </span>

              <h2>
                From Peterborough to Skegness
                <br />
                and Long Sutton to Lincoln
              </h2>

              <p>
                We cover the towns, villages and surrounding areas within this
                region. If you&apos;re unsure whether we cover your location,
                just get in touch — we&apos;re always happy to help.
              </p>

              <div className={styles.featureGrid}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>⌖</div>
                  <h3>Wide Coverage</h3>
                  <p>
                    From Peterborough
                    <br />
                    to Skegness and
                    <br />
                    Lincoln.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>♙</div>
                  <h3>Local Team</h3>
                  <p>
                    Based in Spalding,
                    <br />
                    serving homes,
                    <br />
                    landlords and businesses.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>▣</div>
                  <h3>Fast Response</h3>
                  <p>
                    Quick, reliable and
                    <br />
                    flexible booking
                    <br />
                    for our service areas.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>♧</div>
                  <h3>Reliable & Local</h3>
                  <p>
                    A trusted, professional
                    <br />
                    service you can
                    <br />
                    count on.
                  </p>
                </div>
              </div>

              <div className={styles.notSureBox}>
                <div className={styles.locationBig}>⌖</div>

                <div>
                  <h3>Not Sure If We Cover Your Area?</h3>
                  <p>
                    If you&apos;re outside the highlighted area, get in touch
                    anyway — we may still be able to help.
                  </p>

                  <Link href="/contact" className={styles.smallButton}>
                    Get in Touch <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* REAL MAP */}
            <div className={styles.mapWrapper}>
              <iframe
                title="Areas We Cover - Spalding Lincolnshire"
                src="https://www.google.com/maps?q=Spalding%2C%20Lincolnshire%2C%20UK&z=9&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              ></iframe>

              <div className={styles.mapLabel}>
                <span className={styles.mapPin}>●</span>
                <strong>Spalding</strong>
              </div>

              <div className={styles.mapAreas}>
                <span>Our Service Area</span>
                <span>Areas We Cover</span>
              </div>
            </div>
          </div>
        </section>

        {/* TOWNS */}
        <section className={styles.townsSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>MAIN TOWNS & AREAS</span>

              <h2>We Cover Your Area</h2>
            </div>

            <div className={styles.headingLine}></div>
          </div>

          <div className={styles.townsGrid}>
            {towns.map((town, index) => (
              <div className={styles.townItem} key={`${town}-${index}`}>
                <span className={styles.check}>✓</span>
                <span>{town}</span>
              </div>
            ))}
          </div>

          <div className={styles.handWritten}>
            If you&apos;re not
            <br />
            sure, just ask!
            <br />
            <span>We&apos;re happy to help.</span>
          </div>
        </section>

        {/* TOWN IMAGES */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            {townImages.map((town) => (
              <Link
                href="/contact"
                className={styles.galleryCard}
                key={town.name}
              >
                <img
                  src={town.image}
                  alt={`${town.name} service area`}
                  loading="lazy"
                />

                <div className={styles.galleryOverlay}>
                  {town.name}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GREEN BENEFITS STRIP */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>⌂</div>

            <div>
              <h3>Local Knowledge</h3>
              <p>We know the area</p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>♧</div>

            <div>
              <h3>Trusted Service</h3>
              <p>By local people</p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>♧</div>

            <div>
              <h3>Supporting Communities</h3>
              <p>Proud to work locally</p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>♢</div>

            <div>
              <h3>Homes, Landlords & Businesses</h3>
              <p>We&apos;ve got you covered</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>⌂</div>

            <div>
              <h2>Have a Project in Mind?</h2>
              <p>
                Get in touch today for a free, no-obligation quote. Our
                friendly team is ready to help.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <a
                href="tel:01234567890"
                className={styles.ctaPhone}
              >
                ☎ &nbsp; Call 01234 567890
              </a>

              <Link href="/contact" className={styles.ctaQuote}>
                Request a Free Quote →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}