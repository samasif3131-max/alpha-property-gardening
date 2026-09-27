import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PlumbingServices.module.css";

const plumbingServices = [
  {
    title: "Water Leak Repairs",
    description:
      "Suitable repairs for accessible water leaks involving pipework, taps, toilets, sinks, basins and plumbing fittings.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
    icon: "◉",
  },
  {
    title: "Burst Pipes & Pipework",
    description:
      "Urgent and planned repairs to suitable accessible water pipework, damaged sections and plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
    icon: "▣",
  },
  {
    title: "Tap Repairs & Replacement",
    description:
      "Suitable repairs and replacement of kitchen, basin and mixer taps, including accessible plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    icon: "♧",
  },
  {
    title: "Toilet & Cistern Repairs",
    description:
      "Repairs and replacements for suitable toilet, cistern, flushing and plumbing connection problems.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: "▱",
  },
  {
    title: "Sink & Basin Plumbing",
    description:
      "Suitable sink, basin, trap, waste connection and accessible pipework repairs and alterations.",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
    icon: "◈",
  },
  {
    title: "Bathroom Plumbing",
    description:
      "Suitable bathroom plumbing for repairs, replacement fittings and wider bathroom renovation projects.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    icon: "⌂",
  },
  {
    title: "Kitchen Plumbing",
    description:
      "Suitable kitchen plumbing including sink, tap, waste and water connections within renovation projects.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    icon: "▤",
  },
  {
    title: "General Plumbing Repairs",
    description:
      "Practical plumbing repairs, maintenance and suitable installations for homes, rental properties and renovations.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
    icon: "⚒",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description:
      "Call, email or use our online quote form to tell us what plumbing work you need.",
    icon: "☎",
  },
  {
    number: "02",
    title: "Assess The Work",
    description:
      "We discuss the plumbing problem or installation and establish the work required.",
    icon: "▣",
  },
  {
    number: "03",
    title: "Clear Quotation",
    description:
      "For planned work, we provide a clear quotation based on the agreed scope.",
    icon: "£",
  },
  {
    number: "04",
    title: "Arrange The Work",
    description:
      "We arrange a suitable appointment and coordinate the required plumbing work.",
    icon: "▤",
  },
  {
    number: "05",
    title: "Job Complete",
    description:
      "The agreed work is completed with the surrounding property requirements considered.",
    icon: "✓",
  },
];

const faqs = [
  {
    question: "Do you provide emergency plumbing services?",
    answer:
      "Yes. Alpha offers 24/7 emergency property and plumbing call-out support for suitable urgent plumbing problems across our service area. For emergencies, call 01775 518068.",
  },
  {
    question: "Can you repair water leaks?",
    answer:
      "Yes. Alpha can undertake suitable leak repairs involving accessible water pipework, taps, toilets, sinks, basins and plumbing fittings.",
  },
  {
    question: "Do you repair toilets?",
    answer:
      "Yes. We can undertake suitable toilet and cistern repairs, including leaks, flushing problems and faulty internal components.",
  },
  {
    question: "Can you replace taps?",
    answer:
      "Yes. Alpha can repair or replace suitable kitchen and bathroom taps and associated plumbing connections.",
  },
  {
    question: "Do you provide bathroom plumbing?",
    answer:
      "Yes. Suitable bathroom plumbing can be completed as a standalone service or as part of a complete bathroom renovation.",
  },
  {
    question: "Do you provide kitchen plumbing?",
    answer:
      "Yes. Suitable kitchen plumbing can be undertaken individually or incorporated into kitchen renovation and installation projects.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. Alpha provides plumbing and wider property-maintenance support for landlords, letting agents and property managers, including urgent repairs and void-property work.",
  },
  {
    question: "Do you undertake gas work?",
    answer:
      "Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "Can Alpha repair damage caused by a plumbing leak?",
    answer:
      "Depending on the work required, Alpha's wider property-maintenance services can often assess repairs to surrounding walls, ceilings, finishes or other affected areas in addition to the plumbing fault.",
  },
  {
    question: "How do I request a plumbing quote?",
    answer:
      "For planned work, use the online quote request form and provide as much information as possible about the problem or installation required. Photographs are useful where available. For urgent plumbing problems, call 01775 518068.",
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
              <p className={styles.eyebrow}>PLUMBING SERVICES</p>

              <h1>
                Plumbing Repairs,
                <br />
                Installations &
                <br />
                <span>Emergency Call-Outs</span>
              </h1>

              <p className={styles.heroDescription}>
                From a leaking tap or faulty toilet to urgent water leaks and
                plumbing required during a bathroom, kitchen or property
                renovation, Alpha Property & Gardening Services provides
                practical plumbing support for homeowners, landlords and
                letting agents.
              </p>

              <p className={styles.heroDescription}>
                Our plumbing service can be used for individual repairs or
                combined with other Alpha property services where several jobs
                need completing.
              </p>

              <div className={styles.emergencyNotice}>
                <span>24/7</span>
                emergency property and plumbing call-outs available.
              </div>

              <div className={styles.heroButtons}>
                <a
                  href="tel:01775518068"
                  className={styles.emergencyButton}
                >
                  ☎ CALL 01775 518068
                </a>

                <Link href="/request-a-quote" className={styles.goldButton}>
                  REQUEST A PLUMBING QUOTE <span>→</span>
                </Link>
              </div>

              <p className={styles.callNote}>
                For immediate plumbing emergencies, calling us is quicker than
                completing the online quote form.
              </p>
            </div>

            <div className={styles.heroChecklist}>
              <div>✓ Water Leak Repairs</div>
              <div>✓ Burst Pipes & Pipework</div>
              <div>✓ Leaking Taps</div>
              <div>✓ Toilet & Cistern Repairs</div>
              <div>✓ Sink & Basin Plumbing</div>
              <div>✓ Bathroom Plumbing</div>
              <div>✓ Kitchen Plumbing</div>
              <div>✓ Plumbing Installations</div>
              <div>✓ Landlord Plumbing Support</div>
              <div>✓ Emergency Call-Outs</div>

              <strong>
                One Team.
                <br />
                Complete Property Care.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p className={styles.sectionEyebrow}>PLUMBING SUPPORT</p>

          <h2>Plumbing Services From One Property Team</h2>

          <p>
            Plumbing problems can range from small everyday annoyances to
            urgent faults that need attention quickly.
          </p>

          <p>
            A dripping tap, leaking pipe, faulty toilet or damaged fitting
            might require a straightforward repair, while a bathroom, kitchen
            or wider property renovation can require several plumbing stages
            to be completed as part of the project.
          </p>

          <p>
            Alpha provides plumbing repairs, maintenance and suitable
            installations as a standalone service or alongside our wider
            property work.
          </p>

          <p>
            This means customers don't necessarily need to arrange one company
            for the plumbing and another for the surrounding property repairs,
            tiling, bathroom work, kitchen work or decorating.
          </p>

          <div className={styles.introHighlight}>
            <strong>One enquiry. One team. Complete property care.</strong>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className={styles.emergencySection}>
        <div className={styles.emergencyContent}>
          <p className={styles.sectionEyebrow}>EMERGENCY PLUMBING</p>

          <h2>24/7 Emergency Plumbing Call-Outs</h2>

          <p>
            Some plumbing problems cannot reasonably wait for a routine
            appointment.
          </p>

          <p>
            Alpha provides <strong>24/7 emergency plumbing call-out support</strong>{" "}
            across our service area for suitable urgent plumbing problems.
          </p>

          <div className={styles.emergencyGrid}>
            <div>✓ Significant water leaks</div>
            <div>✓ Burst or damaged water pipes</div>
            <div>✓ Overflowing plumbing fixtures</div>
            <div>✓ Leaking toilets</div>
            <div>✓ Failed plumbing fittings</div>
            <div>✓ Water escaping into the property</div>
            <div>✓ Urgent pipework problems</div>
          </div>

          <div className={styles.emergencyAction}>
            <div>
              <strong>Plumbing emergency?</strong>
              <span>Call Alpha directly for urgent plumbing problems.</span>
            </div>

            <a href="tel:01775518068" className={styles.largeCallButton}>
              ☎ 01775 518068
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesMain}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>WHAT WE DO</p>
              <h2>Plumbing Repairs & Services</h2>
              <p>
                Practical plumbing support for homeowners, landlords, letting
                agents and property renovation projects.
              </p>
            </div>
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

                  <Link
                    href="/request-a-quote"
                    className={styles.learnMore}
                  >
                    Request a Quote <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* QUOTE CARD */}
        <aside className={styles.quoteCard}>
          <h2>Request a Plumbing Quote</h2>

          <p className={styles.quoteIntro}>
            For planned plumbing work, tell us what you need and provide as
            much information as possible.
          </p>

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
              <option value="leak">Water Leak Repair</option>
              <option value="pipes">Burst Pipes / Pipework</option>
              <option value="taps">Tap Repair / Replacement</option>
              <option value="toilet">Toilet / Cistern Repair</option>
              <option value="bathroom">Bathroom Plumbing</option>
              <option value="kitchen">Kitchen Plumbing</option>
              <option value="installation">Plumbing Installation</option>
              <option value="landlord">Landlord Plumbing</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us more (optional)"
              rows={5}
            ></textarea>

            <button type="submit" className={styles.formButton}>
              REQUEST A PLUMBING QUOTE →
            </button>
          </form>

          <div className={styles.quoteBenefits}>
            <div>
              <span>✓</span>
              <small>Clear quotations</small>
            </div>

            <div>
              <span>☎</span>
              <small>Emergency support</small>
            </div>

            <div>
              <span>⌂</span>
              <small>Property care</small>
            </div>
          </div>
        </aside>
      </section>

      {/* LEAKS */}
      <section className={styles.infoSection}>
        <div className={styles.infoImage}>
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85"
            alt="Water leak plumbing repair"
          />
        </div>

        <div className={styles.infoContent}>
          <p className={styles.sectionEyebrow}>LEAK REPAIRS</p>

          <h2>Water Leak Repairs</h2>

          <p>
            Even a relatively small leak can cause damage if it is left
            unresolved.
          </p>

          <p>
            Alpha can investigate and repair suitable plumbing leaks around
            the property, including problems involving accessible pipework,
            taps, toilets, sinks, basins and plumbing fittings.
          </p>

          <p>
            Where a leak has also damaged surrounding areas of the property,
            Alpha's wider property-maintenance capability may allow associated
            repair work to be dealt with through the same team.
          </p>

          <div className={styles.bulletGrid}>
            <span>✓ Leaking pipes</span>
            <span>✓ Leaking joints</span>
            <span>✓ Dripping taps</span>
            <span>✓ Leaking toilets</span>
            <span>✓ Sink and basin leaks</span>
            <span>✓ Waste pipe leaks</span>
            <span>✓ Plumbing fitting leaks</span>
          </div>

          <Link href="/request-a-quote" className={styles.goldButton}>
            REQUEST A PLUMBING REPAIR QUOTE →
          </Link>
        </div>
      </section>

      {/* BURST PIPES */}
      <section className={styles.darkInfoSection}>
        <div>
          <p className={styles.sectionEyebrow}>PIPEWORK</p>

          <h2>Burst Pipes & Damaged Pipework</h2>

          <p>
            A damaged or burst water pipe can quickly create a serious property
            problem.
          </p>

          <p>
            Where appropriate, Alpha can respond to urgent pipework issues,
            identify the affected section and undertake suitable plumbing
            repairs.
          </p>

          <p>
            If water has affected walls, ceilings or other parts of the
            property, related repair work can also be assessed through our
            property-maintenance service.
          </p>

          <div className={styles.darkButtons}>
            <a href="tel:01775518068" className={styles.emergencyButton}>
              CALL 01775 518068
            </a>

            <Link href="/property-maintenance" className={styles.outlineButton}>
              VIEW PROPERTY MAINTENANCE →
            </Link>
          </div>
        </div>

        <div className={styles.pipeVisual}>
          <span>01</span>
          <strong>Water Pipework</strong>
          <small>Repairs & suitable alterations</small>
        </div>
      </section>

      {/* TAPS / TOILETS */}
      <section className={styles.twoColumnSection}>
        <article className={styles.textCard}>
          <p className={styles.sectionEyebrow}>TAPS</p>
          <h2>Tap Repairs & Replacement</h2>

          <p>
            Dripping, damaged or poorly functioning taps are common plumbing
            problems and can waste water as well as becoming increasingly
            inconvenient.
          </p>

          <p>
            Alpha can undertake suitable tap repairs and replacement work in
            kitchens, bathrooms and utility areas.
          </p>

          <div className={styles.simpleList}>
            <span>✓ Kitchen taps</span>
            <span>✓ Basin taps</span>
            <span>✓ Mixer taps</span>
            <span>✓ Replacement taps</span>
            <span>✓ Leaking tap connections</span>
            <span>✓ Associated accessible pipework</span>
          </div>

          <Link href="/request-a-quote" className={styles.textLink}>
            REQUEST A QUOTE →
          </Link>
        </article>

        <article className={styles.textCard}>
          <p className={styles.sectionEyebrow}>TOILETS</p>
          <h2>Toilet & Cistern Repairs</h2>

          <p>
            Toilet problems can range from constant running water to leaks,
            poor flushing or faulty internal components.
          </p>

          <p>
            Alpha can undertake suitable toilet and cistern repairs and
            replacements as part of our plumbing service.
          </p>

          <div className={styles.simpleList}>
            <span>✓ Leaking toilets</span>
            <span>✓ Faulty cistern components</span>
            <span>✓ Constantly running toilets</span>
            <span>✓ Flush problems</span>
            <span>✓ Toilet replacement</span>
            <span>✓ Plumbing connections</span>
          </div>

          <Link href="/bathroom-services" className={styles.textLink}>
            VIEW BATHROOM SERVICES →
          </Link>
        </article>
      </section>

      {/* BATHROOM + KITCHEN */}
      <section className={styles.featureSection}>
        <div className={styles.featureCard}>
          <div className={styles.featureImage}>
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
              alt="Bathroom plumbing"
            />
          </div>

          <div className={styles.featureBody}>
            <p className={styles.sectionEyebrow}>BATHROOMS</p>
            <h2>Bathroom Plumbing</h2>

            <p>
              Bathrooms contain several plumbing components and are a common
              source of leaks, worn fittings and installation work.
            </p>

            <p>
              Alpha can provide suitable bathroom plumbing as an individual
              service or as part of a complete bathroom renovation.
            </p>

            <div className={styles.simpleList}>
              <span>✓ Basin plumbing</span>
              <span>✓ Toilet plumbing</span>
              <span>✓ Shower-related plumbing</span>
              <span>✓ Tap replacement</span>
              <span>✓ Pipework and waste connections</span>
              <span>✓ Plumbing preparation</span>
            </div>

            <Link href="/bathroom-services" className={styles.textLink}>
              VIEW BATHROOM SERVICES →
            </Link>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureImage}>
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
              alt="Kitchen plumbing"
            />
          </div>

          <div className={styles.featureBody}>
            <p className={styles.sectionEyebrow}>KITCHENS</p>
            <h2>Kitchen Plumbing</h2>

            <p>
              Kitchen improvements frequently require plumbing alterations,
              repairs or new connections.
            </p>

            <p>
              Alpha can incorporate suitable plumbing work into kitchen
              repairs, replacements and renovation projects.
            </p>

            <div className={styles.simpleList}>
              <span>✓ Kitchen sink plumbing</span>
              <span>✓ Tap installation</span>
              <span>✓ Waste connections</span>
              <span>✓ Suitable water connections</span>
              <span>✓ Pipework alterations</span>
              <span>✓ Renovation plumbing</span>
            </div>

            <Link href="/kitchen-services" className={styles.textLink}>
              VIEW KITCHEN SERVICES →
            </Link>
          </div>
        </div>
      </section>

      {/* GAS SAFE */}
      <section className={styles.gasSection}>
        <div className={styles.gasIcon}>!</div>

        <div>
          <p className={styles.sectionEyebrow}>IMPORTANT SERVICE BOUNDARY</p>

          <h2>What About Gas Work?</h2>

          <p className={styles.gasStatement}>
            Alpha does not currently undertake work that legally requires Gas
            Safe registration.
          </p>

          <p>
            This means the website should not advertise Alpha as directly
            providing services such as gas boiler installation, gas boiler
            repairs, gas appliance installation, gas pipework, gas safety
            certificates or other work legally requiring Gas Safe
            registration.
          </p>

          <p>
            Our plumbing service remains focused on general water plumbing,
            repairs, suitable installations and property-maintenance work.
          </p>
        </div>
      </section>

      {/* RENOVATIONS */}
      <section className={styles.renovationSection}>
        <div className={styles.renovationContent}>
          <p className={styles.sectionEyebrow}>PROPERTY RENOVATIONS</p>

          <h2>Plumbing for Property Renovations</h2>

          <p>
            Plumbing often forms an important part of larger renovation
            projects.
          </p>

          <p>
            Where Alpha is renovating a bathroom, kitchen or wider property,
            suitable plumbing work can be coordinated with the surrounding
            preparation, installation and finishing work.
          </p>

          <p>
            This reduces the need for the customer to organise separate
            companies for each stage.
          </p>

          <Link href="/property-renovations" className={styles.goldButton}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </div>

        <div className={styles.renovationSteps}>
          <div>
            <strong>01</strong>
            <span>Plumbing</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Property Work</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Finishing</span>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className={styles.landlordSection}>
        <div className={styles.landlordContent}>
          <p className={styles.sectionEyebrow}>LANDLORDS & LETTING AGENTS</p>

          <h2>Plumbing Services for Landlords & Letting Agents</h2>

          <p>
            Plumbing problems are among the common maintenance issues
            encountered in rental properties.
          </p>

          <p>
            Alpha can support landlords, letting agents and property managers
            with routine and urgent plumbing requirements alongside wider
            property maintenance.
          </p>

          <div className={styles.landlordGrid}>
            <span>✓ Tenant-reported leaks</span>
            <span>✓ Tap repairs</span>
            <span>✓ Toilet repairs</span>
            <span>✓ Sink and basin plumbing</span>
            <span>✓ Pipework problems</span>
            <span>✓ Plumbing during void-property work</span>
            <span>✓ Bathroom repairs</span>
            <span>✓ Kitchen plumbing</span>
            <span>✓ Renovation plumbing</span>
            <span>✓ Emergency call-outs</span>
          </div>

          <Link
            href="/landlords-letting-agents"
            className={styles.goldButton}
          >
            VIEW LANDLORD & LETTING AGENT SERVICES →
          </Link>
        </div>
      </section>

      {/* VOID PROPERTIES */}
      <section className={styles.voidSection}>
        <div className={styles.voidImage}>
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
            alt="Vacant property maintenance"
          />
        </div>

        <div className={styles.voidContent}>
          <p className={styles.sectionEyebrow}>VOID PROPERTIES</p>

          <h2>Plumbing Work for Vacant & Void Properties</h2>

          <p>
            Vacant properties often reveal maintenance problems that need
            resolving before the next tenant moves in or before renovation
            work begins.
          </p>

          <p>
            Alpha can inspect and undertake suitable plumbing repairs as part
            of a wider void-property maintenance or refurbishment programme.
          </p>

          <p>
            Plumbing can then be combined with decorating, flooring, kitchen,
            bathroom, garden or general property work where necessary.
          </p>

          <Link href="/property-maintenance" className={styles.textLink}>
            VIEW PROPERTY MAINTENANCE →
          </Link>
        </div>
      </section>

      {/* ONE TEAM */}
      <section className={styles.oneTeamSection}>
        <div className={styles.oneTeamContent}>
          <p className={styles.sectionEyebrow}>THE ALPHA ADVANTAGE</p>

          <h2>More Than Just the Plumbing</h2>

          <p>
            A plumbing problem can sometimes leave another job behind.
          </p>

          <p>
            A leak may damage a wall or ceiling. Replacing bathroom fittings
            may require tiling or resealing. Kitchen plumbing may form part of
            a wider renovation.
          </p>

          <p>
            Because Alpha provides multiple property services, we can assess
            the surrounding work as well as the original plumbing problem.
          </p>

          <div className={styles.serviceLinks}>
            <Link href="/property-maintenance">
              Property Maintenance →
            </Link>
            <Link href="/property-renovations">
              Property Renovations →
            </Link>
            <Link href="/bathroom-services">
              Bathroom Services →
            </Link>
            <Link href="/kitchen-services">
              Kitchen Services →
            </Link>
            <Link href="/tiling-flooring">
              Tiling & Flooring →
            </Link>
            <Link href="/painting-decorating">
              Painting & Decorating →
            </Link>
          </div>

          <div className={styles.oneTeamTag}>
            One Team. Complete Property Care.
          </div>
        </div>
      </section>

      {/* QUOTATIONS */}
      <section className={styles.quotationSection}>
        <div>
          <p className={styles.sectionEyebrow}>CLEAR PRICING</p>
          <h2>Clear Plumbing Quotations</h2>

          <p>
            For non-emergency planned plumbing work, Alpha prefers to provide
            clear quotations based on the agreed scope rather than simply
            presenting customers with an unexplained hourly rate.
          </p>

          <p>
            The cost will depend on the fault, access, materials and work
            required.
          </p>

          <p>
            If additional problems are discovered that were not reasonably
            visible when the original work was assessed, these should be
            discussed before additional work proceeds.
          </p>

          <p>
            Emergency call-outs should have their pricing and call-out terms
            explained clearly to the customer before or at attendance wherever
            reasonably possible.
          </p>
        </div>

        <Link href="/request-a-quote" className={styles.goldButton}>
          REQUEST A PLUMBING QUOTE →
        </Link>
      </section>

      {/* SERVICE AREA */}
      <section className={styles.areaSection}>
        <div>
          <p className={styles.sectionEyebrow}>SERVICE AREA</p>

          <h2>Plumbing Services Across Our Region</h2>

          <p>
            Alpha provides plumbing repairs and suitable installations
            throughout our regional service area, extending{" "}
            <strong>
              from Peterborough to Skegness and from Long Sutton to Lincoln
            </strong>
            , including surrounding towns, villages and rural communities.
          </p>
        </div>

        <div className={styles.areaActions}>
          <a href="tel:01775518068" className={styles.largeCallButton}>
            ☎ 01775 518068
          </a>

          <Link href="/areas-we-cover" className={styles.outlineDarkButton}>
            VIEW AREAS WE COVER →
          </Link>
        </div>
      </section>

      {/* FAQ */}
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

          <p className={styles.sectionEyebrow}>URGENT PLUMBING PROBLEM?</p>

          <h2>Need a Plumber?</h2>

          <p>
            For urgent plumbing problems, call Alpha directly rather than
            waiting for an online quote response.
          </p>

          <a href="tel:01775518068" className={styles.largeCallButton}>
            01775 518068
          </a>

          <small>
            24/7 emergency property and plumbing call-outs available.
          </small>
        </aside>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div>
          <p className={styles.sectionEyebrow}>PLUMBING SERVICES</p>

          <h2>Need a Plumber?</h2>

          <p>
            Whether you've got a leaking tap, faulty toilet, damaged
            pipework, plumbing required during a renovation or an urgent water
            leak, tell Alpha what needs attention.
          </p>
        </div>

        <div className={styles.finalActions}>
          <Link href="/request-a-quote" className={styles.goldButton}>
            REQUEST A PLUMBING QUOTE
          </Link>

          <a href="tel:01775518068" className={styles.finalCallButton}>
            24/7 EMERGENCY CALL — 01775 518068
          </a>
        </div>

        <strong className={styles.finalTag}>
          One Team. Complete Property Care.
        </strong>
      </section>

      <Footer />
    </main>
  );
}