import type { Metadata } from "next";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Alpha Property & Gardening Services",
  description:
    "Privacy information for Alpha Property & Gardening Services, including how enquiry, quotation and customer information is used.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "80px 24px",
          lineHeight: 1.7,
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          PRIVACY POLICY
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ maxWidth: 760, marginBottom: 48 }}>
          This notice explains how Alpha Property &amp; Gardening Services
          uses personal information provided through our website, contact
          forms, quote requests and customer communications.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2>Who We Are</h2>
          <p>
            Alpha Property &amp; Gardening Services is the organisation
            responsible for the personal information described in this notice.
          </p>

          <p>
            Phone:{" "}
            <a href="tel:01775518068">01775 518068</a>
            <br />
            Email:{" "}
            <a href="mailto:info@alphapropertyandgardening.co.uk">
              info@alphapropertyandgardening.co.uk
            </a>
            <br />
            Website: alphapropertyandgardening.co.uk
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Information We May Collect</h2>

          <p>Depending on how you contact us, this may include:</p>

          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postcode and property details</li>
            <li>Information about the work you need</li>
            <li>Information about an existing job or quotation</li>
            <li>Photographs or documents you choose to provide</li>
            <li>Your marketing preferences</li>
          </ul>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Why We Use Your Information</h2>

          <p>We may use your information to:</p>

          <ul>
            <li>Respond to your enquiry</li>
            <li>Prepare and manage quotations</li>
            <li>Arrange appointments or assessments</li>
            <li>Manage agreed work and customer records</li>
            <li>Communicate with you about your enquiry or service</li>
            <li>Keep appropriate business and financial records</li>
            <li>
              Send marketing or property-care updates where you have chosen
              to receive them
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Lawful Basis</h2>

          <p>
            The lawful basis used depends on why we are processing the
            information. Quote and enquiry information may be used to take
            steps at your request before entering into a contract or to
            manage an agreed service. Marketing communications are sent where
            you have provided the relevant consent. Other processing may be
            carried out where required by law or where a legitimate business
            interest applies.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Who We May Share Information With</h2>

          <p>
            We may use trusted service providers where needed to operate our
            website and business, such as hosting, email, form, CRM,
            document-storage or payment providers.
          </p>

          <p>
            Information is shared only where there is a relevant business,
            contractual or legal reason to do so. We do not sell your personal
            information.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>How Long We Keep Information</h2>

          <p>
            We keep personal information only for as long as reasonably needed
            for the purpose for which it was collected, including any period
            required for accounting, legal, contractual or dispute-resolution
            purposes.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Your Privacy Rights</h2>

          <p>
            Depending on the circumstances, you may have rights regarding your
            personal information, including rights to access, correct, erase
            or restrict certain processing, and to object to certain uses of
            your information.
          </p>

          <p>
            To ask about your information or exercise a relevant right, email
            us at{" "}
            <a href="mailto:info@alphapropertyandgardening.co.uk">
              info@alphapropertyandgardening.co.uk
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Marketing</h2>

          <p>
            Our quote and enquiry forms may include an optional marketing
            consent choice. We will use that preference when sending
            occasional updates, offers or property-care information.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Cookies and Website Use</h2>

          <p>
            Our website may use necessary technologies to operate the site.
            Where additional analytics, marketing or other non-essential
            technologies are introduced, the relevant information and choices
            will be provided as required.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2>Questions or Complaints</h2>

          <p>
            Please contact Alpha first if you have a question or concern about
            how your information is used.
          </p>

          <p>
            You can also contact the Information Commissioner&apos;s Office
            (ICO) if you believe your personal data has not been handled
            appropriately.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2>Updates to This Notice</h2>

          <p>
            We may update this privacy notice when our services, systems or
            data-processing practices change. The latest version will be
            published on this page.
          </p>

          <p>
            Last updated: September 28, 2026
          </p>
        </section>

        <p>
          <Link href="/request-a-quote">Back to Request a Quote →</Link>
        </p>
      </main>

      <Footer />
    </>
  );
}
