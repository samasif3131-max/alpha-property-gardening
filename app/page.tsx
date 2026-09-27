import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const coverageText =
  "Peterborough to Skegness; Long Sutton to Lincoln, plus surrounding areas within the coverage region.";

const services = [
  {
    title: "Garden Services",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85",
    description: "Lawn mowing",
    items: [
      "Hedge cutting",
      "Garden clearances",
      "Fencing & decking",
      "Regular maintenance",
    ],
    href: "/garden-services",
    icon: "✦",
  },
  {
    title: "Property Maintenance",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
    description: "Repairs & fault finding",
    items: [
      "Painting & decorating",
      "Carpentry & joinery",
      "Tiling & general maintenance",
    ],
    href: "/property-maintenance",
    icon: "⌁",
  },
  {
    title: "Plumbing Services",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85",
    description: "Leak detection & repairs",
    items: [
      "Taps, showers & radiators",
      "Pipework & drainage",
      "Hot water systems",
    ],
    href: "/plumbing-services",
    icon: "⌁",
  },
  {
    title: "Bathroom Installation",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    description: "Complete bathroom fitting",
    items: [
      "Walk-in showers",
      "Wall & floor tiling",
      "Plumbing & specialist trades managed",
      "Design & installation",
    ],
    href: "/bathroom-services",
    icon: "▣",
  },
  {
    title: "Kitchen Installation",
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
];

const articles = [
  {
    title: "Top 5 Garden Maintenance Tips for Autumn",
    text: "Keep your garden in great condition this season.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "How to Spot a Water Leak in Your Home",
    text: "Early signs and what to do.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "A Landlord's Guide to Property Maintenance",
    text: "Essential checks to keep tenants happy.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80",
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
              RELIABLE. PROFESSIONAL. LOCAL.
            </div>

            <h1>
              One Team.
              <br />
              <span>Complete</span>
              <br />
              Property Care.
            </h1>

            <p>
              Garden maintenance, property repairs, plumbing, bathrooms,
              kitchens and more — all from one trusted local team.
            </p>

            <div className="alphaTrustPills">
              <div>
                <b>◈</b>
                <span>
                  <strong>Reliable</strong>
                  & Professional
                </span>
              </div>

              <div>
                <b>✓</b>
                <span>
                  <strong>Fully Insured</strong>
                  For peace of mind
                </span>
              </div>

              <div>
                <b>⌁</b>
                <span>
                  <strong>Quality</strong>
                  Workmanship
                </span>
              </div>

              <div>
                <b>⌖</b>
                <span>
                  <strong>Local & Trusted</strong>
                  Wide service coverage
                </span>
              </div>
            </div>

            <p className="alphaEmergencyHero">
              24/7 emergency call-outs available
            </p>

            <div className="alphaHeroButtons">
              <Link href="/contact" className="alphaGoldButton">
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
            <div className="alphaTrustIcon">➤</div>
            <div>
              <strong>Wide Coverage</strong>
              <span>Peterborough to Skegness</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">⌖</div>
            <div>
              <strong>Service Area</strong>
              <span>Long Sutton to Lincoln</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">◈</div>
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
                Our Services <i />
              </h2>

              <p>
                Everything you need to keep your property and garden in top
                condition.
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

      {/* LANDLORDS & LETTING AGENTS */}
      <section className="alphaLandlordSection">
        <div className="alphaContainer">
          <div className="alphaLandlordCard">
            <div className="alphaLandlordContent">
              <div className="alphaSmallHeading">
                <span />
                LANDLORDS & LETTING AGENTS
              </div>

              <h2>
                One contractor. Multiple services.
                <br />
                <strong>Complete property oversight.</strong>
              </h2>

              <p>
                One trusted point of contact for property maintenance,
                plumbing, gardens, bathrooms, kitchens, voids and ongoing
                property support.
              </p>

              <div className="alphaLandlordServices">
                <span>Property maintenance</span>
                <span>Plumbing</span>
                <span>Gardens</span>
                <span>Bathrooms</span>
                <span>Kitchens</span>
                <span>Voids</span>
                <span>Tenant liaison</span>
                <span>Before/after photos</span>
                <span>Fixed quotations</span>
              </div>

              <div className="alphaLandlordButtons">
                <Link
                  href="/contact"
                  className="alphaGoldButton"
                >
                  LANDLORD & AGENT SERVICES
                  <Arrow />
                </Link>
              </div>

              <p className="alphaMyAlphaMessage">
                Coming to My Alpha: manage properties, jobs, quotes,
                appointments, photos and invoices from one account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY HOMEOWNERS */}
      <section className="alphaTrusted">
        <div className="alphaTrustedImage">
          <img
            src="/images/hero/trusted-homeowners.jpg"
            alt="Professional property maintenance"
          />
        </div>

        <div className="alphaTrustedContent">
          <div className="alphaTrustedInner">
            <div className="alphaSmallHeading alphaLightHeading">
              <span />
              ONE TEAM. ONE CONTACT.
            </div>

            <h2>
              Trusted by Homeowners,
              <br />
              <strong>Landlords & Letting Agents</strong>
            </h2>

            <p>
              From one-off jobs to regular maintenance, Alpha provides
              reliable, high-quality property and garden services across our
              wider service area.
            </p>

            <div className="alphaTrustedButtons">
              <Link href="/contact" className="alphaGoldButton">
                Request a Free Quote <Arrow />
              </Link>

              <Link href="/about-us" className="alphaOutlineButton">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
                One trusted team for your property, garden and home
                improvement needs.
              </p>
            </div>

            <div className="alphaWhyItems">
              <div>
                <span>♧</span>
                <section>
                  <strong>One Team, Complete Care</strong>
                  <small>
                    All your property and garden needs in one place
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
                  <strong>Experienced & Reliable</strong>
                  <small>Skilled team with a proven track record</small>
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
                  <strong>Wide Service Coverage</strong>
                  <small>
                    Peterborough to Skegness; Long Sutton to Lincoln
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

      {/* 24/7 EMERGENCY CTA */}
      <section className="alphaEmergencySection">
        <div className="alphaContainer">
          <div className="alphaEmergencyCard">
            <div>
              <div className="alphaSmallHeading alphaLightHeading">
                <span />
                24/7 EMERGENCY SUPPORT
              </div>

              <h2>24/7 Emergency Call-Outs Available</h2>

              <p>
                For urgent property and plumbing issues, Alpha can provide
                emergency call-out support across the service area.
              </p>
            </div>

            <Link href="/contact" className="alphaGoldButton">
              GET EMERGENCY HELP
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="alphaQuoteSection">
        <div className="alphaContainer">
          <div className="alphaQuoteWideCard">
            <div>
              <div className="alphaSmallHeading">
                <span />
                FREE QUOTATIONS
              </div>

              <h2>Need a Quote?</h2>

              <p>
                Tell us what you need and we’ll get back to you with a clear,
                no-obligation quotation.
              </p>
            </div>

            <Link href="/contact" className="alphaGoldButton">
              Request a Free Quote <Arrow />
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

              <h2>Areas We Cover</h2>

              <p>{coverageText}</p>

              <Link
                href="/areas-we-cover"
                className="alphaGoldSmallButton"
              >
                View All Areas <Arrow />
              </Link>
            </div>

            {/* WIDER SERVICE AREA MAP */}
            <div className="alphaMap">
              <iframe
                title="Map showing Alpha Property & Gardening Services coverage area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.75%2C52.45%2C0.65%2C53.25&layer=mapnik"
                loading="lazy"
              />

              <div className="alphaMapLabel">
                <span>●</span>
                Alpha Service Area
              </div>
            </div>

            <div className="alphaAdvice">
              <div className="alphaAdviceHeading">
                <h3>Latest from Our Advice Hub</h3>

                <Link href="/advice">
                  View All Articles <Arrow />
                </Link>
              </div>

              {articles.map((article) => (
                <Link
                  href="/advice"
                  className="alphaArticle"
                  key={article.title}
                >
                  <img src={article.image} alt={article.title} />

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

      {/* MOBILE EMERGENCY BAR */}
      <div className="alphaMobileEmergencyBar">
        <Link href="/contact">CALL</Link>

        <span>24/7 EMERGENCY</span>

        <Link href="/contact">GET A QUOTE</Link>
      </div>
    </main>
  );
}