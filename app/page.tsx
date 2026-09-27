import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PHONE_DISPLAY = "01775 518068";
const PHONE_TEL = "tel:01775518068";

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
    linkText: "View Property Maintenance Services",
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
    linkText: "View Plumbing Services",
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
    linkText: "View Bathroom Services",
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
    linkText: "View Kitchen Services",
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
    linkText: "View Garden Services",
    icon: "✦",
  },
];

const recentWork = [
  {
    title: "Garden Transformation",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Bathroom Renovation",
    location: "Donington, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Kitchen Installation",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Patio & Landscaping",
    location: "Surfleet, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Property Maintenance",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Spalding",
    text: "Excellent service from start to finish. The team transformed our garden and were professional, reliable and tidy. Highly recommended!",
  },
  {
    name: "James T.",
    role: "Letting Agent, Spalding",
    text: "We use Alpha for all our rental properties. Quick response, great communication and high quality work every time.",
  },
  {
    name: "Kelly R.",
    role: "Donington",
    text: "Our new bathroom looks amazing. Friendly team, great workmanship and completed on time.",
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

      {/* =========================================
          HERO
      ========================================= */}
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
              Property &amp; Garden
              <br />
              <span>Maintenance Services</span>
              <br />
              You Can Rely On
            </h1>

            <h2 className="alphaHeroProposition">
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
                <b>◈</b>
                <span>
                  <strong>Fixed Quotations</strong>
                  Clear pricing
                </span>
              </div>

              <div>
                <b>✓</b>
                <span>
                  <strong>One Trusted Team</strong>
                  Multiple services
                </span>
              </div>

              <div>
                <b>⌁</b>
                <span>
                  <strong>Fully Insured</strong>
                  For peace of mind
                </span>
              </div>

              <div>
                <b>◷</b>
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

      {/* =========================================
          TRUST BAR
      ========================================= */}
      <section className="alphaTrustBar">
        <div className="alphaContainer alphaTrustGrid">
          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">◈</div>
            <div>
              <strong>Fixed Quotations</strong>
              <span>Clear pricing</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">✓</div>
            <div>
              <strong>One Trusted Team</strong>
              <span>Multiple services</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">✓</div>
            <div>
              <strong>Fully Insured</strong>
              <span>For peace of mind</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">◷</div>
            <div>
              <strong>24/7 Emergency</strong>
              <span>Call-outs available</span>
            </div>
          </div>

          <div className="alphaTrustItem alphaPhoneTrustItem">
            <div className="alphaTrustIcon">⌕</div>
            <div>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              <span>Get in touch today</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SERVICES
      ========================================= */}
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
                Complete property care covering maintenance, plumbing,
                bathrooms, kitchens and garden maintenance.
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

                  <Link
                    href={service.href}
                    className="alphaServiceLink"
                  >
                    {service.linkText} <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          LANDLORDS
      ========================================= */}
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
                Landlord &amp; Agent Services <Arrow />
              </Link>

              <Link
                href="/contact"
                className="alphaOutlineButton"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE ALPHA
      ========================================= */}
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
                  <strong>Practical Experience</strong>
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
                    Based in Spalding, covering surrounding areas
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

      {/* =========================================
          EMERGENCY
      ========================================= */}
      <section className="alphaEmergency">
        <div className="alphaContainer">
          <div className="alphaEmergencyInner">
            <div className="alphaSmallHeading alphaLightHeading">
              <span />
              24/7 EMERGENCY CALL-OUTS
            </div>

            <h2>Need Emergency Help?</h2>

            <p>
              Plumbing emergencies can happen at any time. Alpha provides
              24/7 emergency call-outs for urgent plumbing problems.
            </p>

            <div className="alphaEmergencyCallText">
              Need Emergency Help? Call{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </div>

            <div className="alphaEmergencyButtons">
              <a
                href={PHONE_TEL}
                className="alphaEmergencyCallButton"
              >
                CALL {PHONE_DISPLAY}
              </a>

              <Link
                href="/plumbing-services"
                className="alphaEmergencyLink"
              >
                View Emergency Plumbing Services <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          RECENT WORK
      ========================================= */}
      <section className="alphaRecent">
        <div className="alphaContainer">
          <div className="alphaSectionHeading alphaRecentHeading">
            <div>
              <div className="alphaSmallHeading">
                <span />
                OUR WORK
              </div>

              <h2>
                Recent Work <i />
              </h2>

              <p>Real projects. Real results.</p>
            </div>

            <Link href="/our-work" className="alphaTextLink">
              View More Work <Arrow />
            </Link>
          </div>

          <div className="alphaRecentGrid">
            {recentWork.map((work) => (
              <Link
                href="/our-work"
                className="alphaRecentCard"
                key={work.title}
              >
                <div className="alphaRecentImage">
                  <img src={work.image} alt={work.title} />
                  <span>View Project</span>
                </div>

                <h3>{work.title}</h3>
                <p>{work.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          REVIEWS
      ========================================= */}
      <section className="alphaReviews">
        <div className="alphaContainer">
          <div className="alphaSectionHeading">
            <div>
              <div className="alphaSmallHeading">
                <span />
                CUSTOMER REVIEWS
              </div>

              <h2>
                What Our Customers Say <i />
              </h2>
            </div>

            <Link href="/reviews" className="alphaTextLink">
              Read All Reviews <Arrow />
            </Link>
          </div>

          <div className="alphaReviewsGrid">
            <div className="alphaReviewCards">
              {testimonials.map((review) => (
                <article
                  className="alphaReviewCard"
                  key={review.name}
                >
                  <div className="alphaStars">★★★★★</div>

                  <p>“{review.text}”</p>

                  <div className="alphaReviewer">
                    <div>{review.name.charAt(0)}</div>

                    <section>
                      <strong>{review.name}</strong>
                      <small>{review.role}</small>
                    </section>
                  </div>
                </article>
              ))}
            </div>

            <div className="alphaQuoteCard">
              <div className="alphaQuoteIcon">▣</div>

              <h3>Need a Quote?</h3>

              <p>
                Get a free, no-obligation quote today. Tell us what you need
                and we’ll get back to you quickly.
              </p>

              <Link
                href="/request-a-quote"
                className="alphaQuoteButton"
              >
                Request a Quote <Arrow />
              </Link>

              <a href={PHONE_TEL}>
                Or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          AREAS + ADVICE
      ========================================= */}
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
                View All Areas <Arrow />
              </Link>
            </div>

            <div className="alphaMap">
              <iframe
                title="Map showing Spalding and surrounding areas"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.42%2C52.68%2C0.02%2C52.90&layer=mapnik&marker=52.787%2C-0.154"
                loading="lazy"
              />

              <div className="alphaMapLabel">
                <span>●</span>
                Spalding
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

      {/* =========================================
          MOBILE EMERGENCY BAR
      ========================================= */}
      <div className="alphaMobileEmergencyBar">
        <a href={PHONE_TEL}>CALL</a>
        <span>24/7 EMERGENCY</span>
        <Link href="/request-a-quote">GET A QUOTE</Link>
      </div>

      <Footer />
    </main>
  );
}