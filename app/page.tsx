import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      "Plumbing & electrics",
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
      "Plumbing & electrics",
      "Tiling & flooring",
      "Complete project management",
    ],
    href: "/kitchen-services",
    icon: "□",
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
                  Spalding & surrounding
                </span>
              </div>
            </div>

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
            <div className="alphaTrustIcon">♧</div>
            <div>
              <strong>100+</strong>
              <span>Happy Customers</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">★</div>
            <div>
              <strong>5★</strong>
              <span>Rated Service</span>
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
            <div className="alphaTrustIcon">➤</div>
            <div>
              <strong>Wide Coverage</strong>
              <span>Spalding & surrounding areas</span>
            </div>
          </div>

          <div className="alphaTrustItem">
            <div className="alphaTrustIcon">⌕</div>
            <div>
              <strong>01234 567890</strong>
              <span>Get in touch today</span>
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
              From one-off jobs to regular maintenance, we provide reliable,
              high-quality property and garden services across Spalding and
              the surrounding areas.
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
                  <strong>Local & Trusted</strong>
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

      {/* RECENT WORK */}
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

      {/* REVIEWS */}
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
                <article className="alphaReviewCard" key={review.name}>
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

              <Link href="/contact" className="alphaQuoteButton">
                Request a Quote <Arrow />
              </Link>

              <a href="tel:01234567890">Or call 01234 567890</a>
            </div>
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

              <p>
                We provide our services across Spalding and the surrounding
                areas including Donington, Pinchbeck, Surfleet, Holbeach, Long
                Sutton, Crowland and many more.
              </p>

              <Link
                href="/areas-we-cover"
                className="alphaGoldSmallButton"
              >
                View All Areas <Arrow />
              </Link>
            </div>

            {/* REAL OPENSTREETMAP */}
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

      {/* SEPARATE FOOTER COMPONENT */}
      <Footer />
    </main>
  );
}