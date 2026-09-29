import type { Metadata } from "next";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./about-us.module.css";

export const metadata: Metadata = {
  title: "About Alpha Property & Gardening Services",
  description:
    "Learn more about Alpha Property & Gardening Services, our property maintenance, repairs, renovations and garden services.",
};

const propertyServices = [
  "Property maintenance and repairs",
  "Property renovations",
  "Plumbing",
  "Bathroom installations and renovations",
  "Kitchen installations and renovations",
  "Tiling and flooring",
  "Painting and decorating",
  "Roofing and gutter maintenance",
  "Garden maintenance",
  "Garden clearances",
  "Landlord and letting-agent maintenance",
  "Void-property work",
  "Recurring property and garden maintenance",
  "24/7 emergency property and plumbing call-outs",
];

const homeownerServices = [
  "Repairs",
  "Plumbing",
  "Decorating",
  "Bathrooms",
  "Kitchens",
  "Flooring",
  "Renovations",
  "Garden maintenance",
];

const landlordServices = [
  "Tenant-reported repairs",
  "Plumbing",
  "Decorating",
  "Flooring",
  "Bathroom work",
  "Kitchen work",
  "Garden maintenance",
  "Void-property preparation",
  "Renovation",
  "Emergency call-outs",
];

const quotationPoints = [
  "What work is included",
  "What materials are included",
  "What the customer is supplying",
  "What is excluded",
  "What happens if additional work is discovered",
];

const processSteps = [
  {
    number: "01",
    title: "Understand the Job",
    text: "We start by finding out what the customer actually needs.",
  },
  {
    number: "02",
    title: "Assess the Property",
    text: "Where necessary, the relevant area is assessed before work is quoted.",
  },
  {
    number: "03",
    title: "Agree the Scope",
    text: "We make clear what is included in the agreed job before work proceeds.",
  },
  {
    number: "04",
    title: "Clear Quotation",
    text: "Alpha prefers fixed quotations based on the agreed work rather than unexplained hourly pricing.",
  },
  {
    number: "05",
    title: "Complete the Work",
    text: "The agreed work is carried out according to the agreed scope.",
  },
  {
    number: "06",
    title: "Keep the Relationship",
    text: "For customers with recurring property needs, Alpha can continue supporting the property over time.",
  },
];

const values = [
  {
    number: "01",
    title: "Clear Communication",
    text: "Customers should understand what work has been agreed.",
  },
  {
    number: "02",
    title: "Practical Solutions",
    text: "We focus on what the property actually needs rather than unnecessarily complicating the job.",
  },
  {
    number: "03",
    title: "Reliable Property Care",
    text: "From a small repair to a larger project, the work should be approached properly.",
  },
  {
    number: "04",
    title: "Long-Term Relationships",
    text: "For homeowners, landlords and agents with ongoing maintenance requirements, Alpha aims to become the team they contact again.",
  },
];

const faqs = [
  {
    question: "What does Alpha Property & Gardening Services do?",
    answer:
      "Alpha provides property maintenance, repairs, renovations and garden services including plumbing, bathrooms, kitchens, tiling, flooring, decorating, roofing, gutter maintenance and garden work.",
  },
  {
    question: "Do you take on small jobs?",
    answer:
      "Yes. Alpha works on smaller individual repairs as well as multi-service maintenance and larger renovation projects.",
  },
  {
    question: "Do you undertake complete property renovations?",
    answer:
      "Yes. Alpha can undertake wider property renovations involving several rooms and services.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. Alpha works with landlords, letting agents and property managers for repairs, void-property work, recurring maintenance and renovations.",
  },
  {
    question: "Do you provide emergency call-outs?",
    answer:
      "Yes. Alpha provides 24/7 emergency property and plumbing call-out support for suitable urgent problems. Call 01775 518068.",
  },
  {
    question: "Do you undertake gas work?",
    answer:
      "Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Alpha's wider service area extends from Peterborough to Skegness and from Long Sutton to Lincoln, including many surrounding towns and villages.",
  },
  {
    question: "What is My Alpha?",
    answer:
      "My Alpha is the client platform being developed to help customers and property professionals manage properties, jobs, quotes, appointments, photographs, documents, invoices and other Alpha records in one place.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the online quote request process and provide details of the work you need. Photographs are helpful where available.",
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
              <span>About Alpha</span>
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
              Alpha Property &amp; Gardening Services provides property
              maintenance, repairs, renovations and garden services for
              homeowners, landlords, letting agents and property managers.
            </p>

            <p className={styles.heroText}>
              The business was built around a straightforward idea:
            </p>

            <h2 className={styles.heroStatementText}>
              Property care should not require a different contractor for
              every job.
            </h2>

            <p className={styles.heroText}>
              From everyday repairs and plumbing problems to bathrooms,
              kitchens, decorating, flooring, gardens and complete
              renovations, Alpha brings a broad range of practical property
              services together through one team.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/services" className={styles.goldButton}>
                VIEW OUR SERVICES <span>→</span>
              </Link>

              <Link
                href="/request-a-quote"
                className={styles.outlineButton}
              >
                REQUEST A QUOTE
              </Link>

              <a
                href="tel:01775518068"
                className={styles.outlineButton}
              >
                CALL 01775 518068
              </a>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <p className={styles.sectionLabel}>WHY ALPHA EXISTS</p>

            <h2>Why We Built Alpha</h2>

            <p>
              Property maintenance can become unnecessarily complicated.
            </p>

            <p>A customer might have:</p>

            <ul className={styles.simpleList}>
              <li>A plumbing problem</li>
              <li>A damaged wall</li>
              <li>A bathroom requiring repair</li>
              <li>Decorating that needs finishing</li>
              <li>Flooring to replace</li>
              <li>A garden that needs clearing</li>
            </ul>

            <p>
              Traditionally, that can mean contacting several different
              companies and coordinating several different visits.
            </p>

            <p>Alpha was built to provide a simpler option.</p>

            <p>
              Where the work falls within our services, customers can bring
              the complete list to one team.
            </p>

            <div className={styles.storyQuote}>
              <strong>One enquiry. One team. One point of contact.</strong>
              <i />
            </div>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.visualCard}>
              <span className={styles.visualNumber}>01</span>
              <h3>One Enquiry</h3>
              <p>
                Bring the property requirements together rather than starting
                with several different contractors.
              </p>
            </div>

            <div className={styles.visualCard}>
              <span className={styles.visualNumber}>02</span>
              <h3>One Team</h3>
              <p>
                A broad range of practical property services coordinated
                through Alpha.
              </p>
            </div>

            <div className={styles.visualCard}>
              <span className={styles.visualNumber}>03</span>
              <h3>One Point of Contact</h3>
              <p>
                Keep communication simpler across maintenance, repairs and
                improvement work.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesIntro}>
            <p className={styles.sectionLabel}>WHAT WE DO</p>

            <h2>Complete Property Care</h2>

            <p>
              Alpha provides a broad range of property and garden services.
            </p>

            <p>
              Alpha is a property maintenance, repair and renovation business
              with garden services, bringing a broad range of practical
              property care together through one team.
            </p>

            <Link href="/services" className={styles.goldButton}>
              VIEW ALL SERVICES <span>→</span>
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            {propertyServices.map((service) => (
              <div className={styles.serviceItem} key={service}>
                <span>✓</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SCALE */}
        <section className={styles.scaleSection}>
          <div className={styles.scaleHeader}>
            <p className={styles.sectionLabel}>
              FROM SMALL JOBS TO RENOVATIONS
            </p>

            <h2>No Job Is Too Big or Too Small</h2>

            <p>
              Alpha is designed to support customers across very different
              types of work.
            </p>
          </div>

          <div className={styles.scaleGrid}>
            <article>
              <span>01</span>
              <h3>Small Repair</h3>
              <p>
                A leaking tap, damaged fitting or minor property repair.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Multiple Maintenance Jobs</h3>
              <p>
                Several repairs completed through one enquiry.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Room Improvement</h3>
              <p>
                Decorating, flooring, plumbing or general improvement work.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Bathroom or Kitchen Renovation</h3>
              <p>
                A complete room transformation involving several services.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>Complete Property Renovation</h3>
              <p>
                Multiple rooms and services brought together as one larger
                project.
              </p>
            </article>
          </div>

          <div className={styles.centerStatement}>
            <strong>One Team. Complete Property Care.</strong>
          </div>
        </section>

        {/* HOMEOWNERS */}
        <section className={styles.audienceSection}>
          <div
            className={`${styles.audienceImage} ${styles.homeownersImage}`}
          />

          <div className={styles.audienceContent}>
            <p className={styles.sectionLabel}>WHO WE WORK WITH</p>

            <h2>Homeowners</h2>

            <p>
              For homeowners, Alpha can help with everyday maintenance as well
              as larger improvement projects.
            </p>

            <ul className={styles.serviceList}>
              {homeownerServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Rather than starting again with a new company every time
              another job appears, customers can build an ongoing
              relationship with Alpha.
            </p>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={styles.audienceSectionReverse}>
          <div className={styles.audienceContent}>
            <p className={styles.sectionLabel}>
              LANDLORDS &amp; AGENTS
            </p>

            <h2>Landlords &amp; Letting Agents</h2>

            <p>
              Alpha is also being built around the needs of landlords,
              letting agents and property managers.
            </p>

            <p>
              Rental properties often require multiple types of work over
              time.
            </p>

            <ul className={styles.serviceList}>
              {landlordServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              The goal is to reduce the number of separate contractors the
              landlord or agent needs to coordinate.
            </p>

            <Link
              href="/landlords-letting-agents"
              className={styles.goldButton}
            >
              VIEW LANDLORD &amp; LETTING AGENT SERVICES <span>→</span>
            </Link>
          </div>

          <div
            className={`${styles.audienceImage} ${styles.landlordImage}`}
          />
        </section>

        {/* TEAM */}
        <section className={styles.teamSection}>
          <div className={styles.teamIntro}>
            <p className={styles.sectionLabel}>THE TEAM</p>

            <h2>The Alpha Team</h2>

            <p>
              Alpha currently operates with a practical three-person team
              covering property maintenance, garden work, plumbing, bathrooms,
              kitchens and wider property improvement work.
            </p>

            <p>The team structure currently includes:</p>
          </div>

          <div className={styles.teamCards}>
            <article className={styles.teamCard}>
              <div className={styles.teamIcon}>⌂</div>

              <h3>Property &amp; Garden Maintenance</h3>

              <p>
                Two members of the team focus on general property maintenance,
                repairs, garden maintenance and practical property work.
              </p>
            </article>

            <article className={styles.teamCard}>
              <div className={styles.teamIcon}>🔧</div>

              <h3>Plumbing, Bathrooms &amp; Kitchens</h3>

              <p>
                One member of the team focuses on plumbing, bathroom fitting,
                kitchen installation and associated property work.
              </p>
            </article>

            <article className={styles.teamCard}>
              <div className={styles.teamIcon}>+</div>

              <h3>Simple Communication</h3>

              <p>
                The advantage of a small team is straightforward communication
                and the ability to coordinate multiple services around the
                same property.
              </p>
            </article>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.processHeader}>
            <p className={styles.sectionLabel}>HOW WE WORK</p>

            <h2>A Practical Approach to Property Work</h2>

            <p>
              Alpha&apos;s approach is based around understanding the job,
              agreeing the scope clearly and completing the work properly.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article
                className={styles.processCard}
                key={step.number}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.pricingSection}>
          <div className={styles.pricingContent}>
            <p className={styles.sectionLabel}>FIXED QUOTATIONS</p>

            <h2>Clear Pricing</h2>

            <p>
              Where practical, Alpha prefers fixed quotations based on the
              agreed scope of work.
            </p>

            <p>The aim is to make it clear:</p>

            <ul className={styles.serviceList}>
              {quotationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              If hidden problems or previously inaccessible issues are
              discovered during a project, we’ll discuss any additional work
              with the customer before proceeding wherever reasonably
              possible.
            </p>
          </div>
        </section>

        {/* HONEST SCOPE */}
        <section className={styles.gasSection}>
          <div className={styles.gasInner}>
            <p className={styles.sectionLabel}>HONEST SCOPE</p>

            <h2>Clear About What We Do</h2>

            <p>
              Alpha provides a broad range of property services, while
              remaining clear about work that falls outside our current scope
              or requires separately regulated expertise.
            </p>

            <div className={styles.gasNotice}>
              <h3>Gas Work</h3>

              <p>
                <strong>
                  Alpha does not currently undertake work that legally
                  requires Gas Safe registration.
                </strong>
              </p>

              <p>
                That means regulated gas work is not currently advertised as a
                direct Alpha service.
              </p>
            </div>
          </div>
        </section>

        {/* EMERGENCY */}
        <section className={styles.emergencySection}>
          <div className={styles.emergencyContent}>
            <p className={styles.sectionLabel}>
              24/7 EMERGENCY SUPPORT
            </p>

            <h2>When Property Problems Cannot Wait</h2>

            <p>
              Alpha provides{" "}
              <strong>
                24/7 emergency property and plumbing call-out support
              </strong>{" "}
              for suitable urgent issues across the service area.
            </p>

            <p>
              This may include appropriate urgent plumbing and property
              problems where immediate assessment is needed.
            </p>

            <div className={styles.emergencyCall}>
              <span>FOR AN EMERGENCY: CALL 01775 518068</span>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className={styles.areaSection}>
          <div className={styles.areaContent}>
            <p className={styles.sectionLabel}>SERVICE AREA</p>

            <h2>Serving a Wide Regional Area</h2>

            <p>
              Alpha operates across a broad regional service area covering:
            </p>

            <div className={styles.areaRange}>
              <strong>Peterborough through to Skegness</strong>
              <span>and</span>
              <strong>Long Sutton through to Lincoln</strong>
            </div>

            <p>
              with many surrounding towns, villages and rural communities in
              between.
            </p>

            <div className={styles.areaLocations}>
              <span>Peterborough</span>
              <span>Market Deeping</span>
              <span>Bourne</span>
              <span>Spalding</span>
              <span>Holbeach</span>
              <span>Long Sutton</span>
              <span>Boston</span>
              <span>Sleaford</span>
              <span>Lincoln</span>
              <span>Horncastle</span>
              <span>Spilsby</span>
              <span>Skegness</span>
            </div>

            <Link
              href="/areas-we-cover"
              className={styles.goldButton}
            >
              VIEW ALL AREAS WE COVER <span>→</span>
            </Link>
          </div>
        </section>

        {/* MY ALPHA */}
        <section className={styles.myAlphaSection}>
          <div className={styles.myAlphaContent}>
            <p className={styles.sectionLabel}>THE FUTURE OF ALPHA</p>

            <h2>Building More Than a Maintenance Company</h2>

            <p>
              Alpha&apos;s long-term direction goes beyond individual jobs.
            </p>

            <p>
              The business is being developed around a proper client
              relationship and property-management system.
            </p>

            <div className={styles.myAlphaBox}>
              <span className={styles.myAlphaLogo}>MY ALPHA</span>

              <h3>My Alpha is currently being developed.</h3>

              <p>
                The aim is to give customers and landlords better visibility
                over:
              </p>

              <div className={styles.myAlphaGrid}>
                <span>Properties</span>
                <span>Jobs</span>
                <span>Quotes</span>
                <span>Appointments</span>
                <span>Photos</span>
                <span>Documents</span>
                <span>Invoices</span>
                <span>Payments</span>
                <span>Maintenance history</span>
                <span>Recurring work</span>
              </div>

              <p>
                For landlords and agents, this will also support multiple
                properties under one account.
              </p>
            </div>
          </div>
        </section>

        {/* ONE TEAM */}
        <section className={styles.oneTeamSection}>
          <div className={styles.oneTeamContent}>
            <p className={styles.sectionLabel}>
              WHY ONE TEAM MATTERS
            </p>

            <h2>Fewer Contractors. Simpler Property Care.</h2>

            <p>
              The strongest reason to choose Alpha is the breadth of practical
              property services available through one relationship.
            </p>

            <div className={styles.workflowExample}>
              <div>
                <span>PROPERTY REPAIR</span>
                <b>→</b>
                <span>PLUMBING</span>
                <b>→</b>
                <span>DECORATING</span>
                <b>→</b>
                <span>FLOORING</span>
                <b>→</b>
                <span>GARDEN MAINTENANCE</span>
              </div>

              <div>
                <span>STRIP-OUT</span>
                <b>→</b>
                <span>PLUMBING</span>
                <b>→</b>
                <span>BATHROOM</span>
                <b>→</b>
                <span>TILING</span>
                <b>→</b>
                <span>DECORATING</span>
              </div>
            </div>

            <p>
              Instead of rebuilding the contractor list at every stage, Alpha
              aims to keep those requirements together.
            </p>

            <h3>One enquiry. One team. One point of contact.</h3>
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesHeading}>
            <p className={styles.sectionLabel}>OUR VALUES</p>

            <h2>What Matters to Us</h2>

            <p>
              Simple principles that reflect how Alpha aims to work with
              customers and their properties.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((item) => (
              <article
                className={styles.valueItem}
                key={item.title}
              >
                <div className={styles.valueNumber}>
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className={styles.trustSection}>
          <div className={styles.trustContent}>
            <p className={styles.sectionLabel}>TRUST SECTION</p>

            <h2>Building Trust Through the Work</h2>

            <p>
              We believe trust should be built through the quality of the
              work, clear communication and genuine customer experiences.
            </p>

            <div className={styles.trustGrid}>
              <span>Real project photographs</span>
              <span>Genuine customer reviews</span>
              <span>Clear quotations</span>
              <span>Professional communication</span>
              <span>Before-and-after work</span>
              <span>Consistent job records</span>
              <span>Repeat customer relationships</span>
            </div>

            <Link href="/our-work" className={styles.goldButton}>
              VIEW OUR WORK <span>→</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <p className={styles.sectionLabel}>
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2>About Alpha FAQs</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <article
                className={styles.faqCard}
                key={faq.question}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <p className={styles.sectionLabel}>GET IN TOUCH</p>

            <h2>Need Help With Your Property?</h2>

            <p>
              Whether you have one repair, several maintenance jobs or a
              larger renovation planned, tell Alpha what needs doing.
            </p>

            <p>
              We&apos;ll assess the requirements and help you determine the
              next step.
            </p>

            <h3>One Team. Complete Property Care.</h3>

            <div className={styles.finalButtons}>
              <Link
                href="/request-a-quote"
                className={styles.goldButton}
              >
                REQUEST A QUOTE <span>→</span>
              </Link>

              <Link
                href="/services"
                className={styles.outlineButton}
              >
                VIEW OUR SERVICES
              </Link>

              <a
                href="tel:01775518068"
                className={styles.outlineButton}
              >
                CALL 01775 518068
              </a>
            </div>

            <a
              href="mailto:info@alphapropertyandgardening.co.uk"
              className={styles.emailLink}
            >
              info@alphapropertyandgardening.co.uk
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}