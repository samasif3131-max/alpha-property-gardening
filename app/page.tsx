import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  {
    title: "Property Maintenance",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
    description: "Repairs & general property maintenance",
    items: [
      "Painting & decorating",
      "Carpentry & joinery",
      "Tiling & general repairs",
      "Ongoing property maintenance",
    ],
    href: "/property-maintenance",
    icon: "⌁",
  },
  {
    title: "Plumbing Services",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85",
    description: "Plumbing repairs & fault finding",
    items: [
      "Leaks, taps & showers",
      "Radiators & pipework",
      "Drainage & hot water systems",
      "24/7 emergency call-outs",
    ],
    href: "/plumbing-services",
    icon: "⌁",
  },
  {
    title: "Bathroom Services",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    description: "Complete bathroom fitting",
    items: [
      "Walk-in showers",
      "Wall & floor tiling",
      "Plumbing & specialist trades managed",
      "Complete installation",
    ],
    href: "/bathroom-services",
    icon: "▣",
  },
  {
    title: "Kitchen Services",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85",
    description: "Full kitchen fitting",
    items: [
      "Worktops & units",
      "Plumbing & specialist trades managed",
      "Tiling & flooring",
      "Complete project management",
    ],
    href: "/kitchen-services",
    icon: "□",
  },
  {
    title: "Garden Maintenance",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85",
    description: "Professional garden maintenance",
    items: [
      "Lawn care & hedge cutting",
      "Garden clearances",
      "Fencing & decking",
      "Regular garden maintenance",
    ],
    href: "/garden-services",
    icon: "✦",
  },
];

const advicePages = [
  {
    title: "Property Care",
    text: "Practical advice for maintaining and protecting your property.",
    href: "/advice/property-maintenance-advice",
  },
  {
    title: "Plumbing",
    text: "Helpful guidance for common plumbing problems and maintenance.",
    href: "/advice/plumbing-advice",
  },
  {
    title: "Bathrooms",
    text: "Useful advice for bathroom maintenance and improvements.",
    href: "/advice/bathroom-advice",
  },
  {
    title: "Kitchens",
    text: "Planning, maintaining and improving your kitchen.",
    href: "/advice/kitchens-advice",
  },
  {
    title: "Garden Care",
    text: "Keep your garden healthy, tidy and well maintained.",
    href: "/advice/garden-maintenance-advice",
  },
  {
    title: "Seasonal Advice",
    text: "Practical property and garden advice throughout the year.",
    href: "/advice/seasonal-advice",
  },
  {
    title: "Landlord Advice",
    text: "Useful maintenance advice for landlords and letting agents.",
    href: "/advice/landlord-advice",
  },
];

function Arrow() {
  return <span className="homeArrow">→</span>;
}

function Check() {
  return <span className="homeCheck">✓</span>;
}

export default function HomePage() {
  return (
    <main className="alphaHome">
      <Header />

      {/* HERO */}
      <section className="alphaHero">
        <div className="alphaHeroImage" />
        <div className="alphaHeroOverlay" />

        <div className="alphaHeroContent alphaContainer">
          <div className="alphaHeroCopy">
            <div className="alphaEyebrow">
              <span />
              PROPERTY &amp; GARDEN MAINTENANCE
            </div>

            <h1>
              Property &amp; Garden
              <br />
              <span>Maintenance Services</span>
              <br />
              You Can Rely On
            </h1>

            <h2
              style={{
                margin: "0 0 18px",
                color: "#ffffff",
                fontSize: "24px",
                lineHeight: "1.25",
                fontWeight: 700,
              }}
            >
              One Team. Complete Property Care.
            </h2>

            <p>
              Alpha Property &amp; Gardening Services provides reliable
              property maintenance, repairs, plumbing, bathroom and kitchen
              services alongside professional garden maintenance for
              homeowners, landlords and letting agents across our service
              region.
            </p>

            <div className="alphaTrustPills">
              <div>
                <b>✓</b>
                <span>
                  <strong>Fully Insured</strong>
                  For peace of mind
                </span>
              </div>

              <div>
                <b>£</b>
                <span>
                  <strong>Fixed Quotations</strong>
                  Clear pricing
                </span>
              </div>

              <div>
                <b>◆</b>
                <span>
                  <strong>One Trusted Team</strong>
                  Multiple services
                </span>
              </div>

              <div>
                <b>24</b>
                <span>
                  <strong>24/7 Emergency</strong>
                  Call-outs available
                </span>
              </div>
            </div>

            <div className="alphaHeroButtons">
              <Link href="/request-a-quote" className="alphaGoldButton">
                Request a Free Quote
                <Arrow />
              </Link>

              <Link href="/services" className="alphaOutlineButton">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="alphaTrustBar">
        <div className="alphaContainer alphaTrustGrid">
          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">✓</div>
            <div>
              <strong>Fully Insured</strong>
              <span>For peace of mind</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">£</div>
            <div>
              <strong>Fixed Quotations</strong>
              <span>Clear pricing</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">◆</div>
            <div>
              <strong>One Trusted Team</strong>
              <span>Multiple services</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">24</div>
            <div>
              <strong>24/7 Emergency</strong>
              <span>Call-outs available</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="alphaServices" id="services">
        <div className="alphaContainer">
          <div className="alphaSectionHeading">
            <div>
              <div className="alphaSmallHeading">
                <span />
                OUR SERVICES
              </div>

              <h2>
                Property &amp; Garden Services <i />
              </h2>

              <p>
                Reliable property maintenance, repairs and specialist
                services, alongside professional garden maintenance.
              </p>
            </div>

            <Link href="/services" className="alphaTextLink">
              View All Services <Arrow />
            </Link>
          </div>

          <div className="alphaServicesGrid">
            {services.map((service) => (
              <article className="alphaServiceCard" key={service.title}>
                <Link href={service.href} className="alphaServiceImage">
                  <img src={service.image} alt={service.title} />

                  <div className="alphaServiceIcon">{service.icon}</div>
                </Link>

                <div className="alphaServiceBody">
                  <h3>{service.title}</h3>

                  <p className="alphaServiceLead">
                    {service.description}
                  </p>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href} className="alphaServiceLink">
                    View Service <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="alphaTrusted">
        <div className="alphaTrustedImage">
          <img
            src="/images/hero/trusted-homeowners.jpg"
            alt="Property maintenance for homeowners and landlords"
          />
        </div>

        <div className="alphaTrustedContent">
          <div className="alphaTrustedInner">
            <div className="alphaSmallHeading alphaLightHeading">
              <span />
              PROPERTY CARE FOR LANDLORDS
            </div>

            <h2>
              Property Maintenance for
              <br />
              <strong>Landlords &amp; Letting Agents</strong>
            </h2>

            <p>
              One reliable point of contact for property repairs, plumbing,
              bathrooms, kitchens, void-property work, garden maintenance and
              ongoing property care.
            </p>

            <div className="alphaTrustedButtons">
              <Link
                href="/landlords-letting-agents"
                className="alphaGoldButton"
              >
                Landlord Services <Arrow />
              </Link>

              <Link href="/contact" className="alphaOutlineButton">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ALPHA */}
      <section className="alphaWhy">
        <div className="alphaContainer">
          <div className="alphaWhyGrid">
            <div className="alphaWhyHeading">
              <div className="alphaSmallHeading alphaLightHeading">
                <span />
                WHY CHOOSE ALPHA?
              </div>

              <h2>
                Why Choose <br />
                <strong>Alpha?</strong>
              </h2>

              <p>
                One trusted team for property maintenance, repairs and
                professional garden care.
              </p>
            </div>

            <div className="alphaWhyItems">
              <div>
                <span>♧</span>
                <section>
                  <strong>One Team, Complete Care</strong>
                  <small>
                    Property and garden services managed by one trusted team
                  </small>
                </section>
              </div>

              <div>
                <span>★</span>
                <section>
                  <strong>High Quality Work</strong>
                  <small>Attention to detail on every job</small>
                </section>
              </div>

              <div>
                <span>♙</span>
                <section>
                  <strong>Experienced &amp; Reliable</strong>
                  <small>
                    Practical experience across property and garden
                    maintenance.
                  </small>
                </section>
              </div>

              <div>
                <span>▣</span>
                <section>
                  <strong>Clear Quotes</strong>
                  <small>No hidden costs</small>
                </section>
              </div>

              <div>
                <span>✓</span>
                <section>
                  <strong>Fully Insured</strong>
                  <small>
                    Public liability insurance for your peace of mind
                  </small>
                </section>
              </div>

              <div>
                <span>◷</span>
                <section>
                  <strong>Flexible Appointments</strong>
                  <small>To suit your schedule</small>
                </section>
              </div>

              <div>
                <span>⌖</span>
                <section>
                  <strong>Local &amp; Trusted</strong>
                  <small>
                    Serving our local property and garden maintenance region
                  </small>
                </section>
              </div>

              <div>
                <span>▤</span>
                <section>
                  <strong>Landlord Specialists</strong>
                  <small>Fast, reliable maintenance support</small>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="alphaEmergency">
        <div className="alphaContainer">
          <div className="alphaEmergencyInner">
            <div>
              <div className="alphaSmallHeading alphaLightHeading">
                <span />
                EMERGENCY PROPERTY SERVICES
              </div>

              <h2>
                24/7 Emergency Call-Outs
              </h2>

              <p>
                Urgent property and plumbing problems can happen at any
                time. Contact Alpha for emergency call-outs and practical
                support.
              </p>
            </div>

            <Link href="/contact" className="alphaGoldButton">
              Get Emergency Help <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="alphaQuoteSection">
        <div className="alphaContainer">
          <div className="alphaQuoteCard">
            <div className="alphaQuoteIcon">▣</div>

            <h3>Need Property or Garden Maintenance?</h3>

            <p>
              Tell us what you need and request a clear, no-obligation
              quotation from Alpha Property &amp; Gardening Services.
            </p>

            <Link href="/request-a-quote" className="alphaQuoteButton">
              Request a Quote <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS + ADVICE */}
      <section className="alphaAreas">
        <div className="alphaContainer">
          <div className="alphaAreasGrid">
            <div className="alphaAreasCopy">
              <div className="alphaSmallHeading">
                <span />
                AREAS WE COVER
              </div>

              <h2>Property &amp; Garden Services Across Our Region</h2>

              <p>
                Peterborough to Skegness; Long Sutton to Lincoln, plus
                surrounding areas within the coverage region.
              </p>

              <Link
                href="/areas-we-cover"
                className="alphaGoldSmallButton"
              >
                View Areas We Cover <Arrow />
              </Link>
            </div>

            <div className="alphaMap">
              <iframe
                title="Map showing Alpha Property & Gardening Services coverage region"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.75%2C52.45%2C0.65%2C53.25&layer=mapnik"
                loading="lazy"
              />
            </div>

            <div className="alphaAdvice">
              <div className="alphaAdviceHeading">
                <h3>Latest from Our Advice Hub</h3>

                <Link href="/advice">
                  View All Advice <Arrow />
                </Link>
              </div>

              {advicePages.map((article) => (
                <Link
                  href={article.href}
                  className="alphaArticle"
                  key={article.title}
                >
                  <div
                    style={{
                      width: "88px",
                      height: "62px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "5px",
                      background: "#063b2c",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 800,
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {article.title}
                  </div>

                  <div>
                    <strong>{article.title}</strong>
                    <small>{article.text}</small>
                    <em>Read More →</em>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}