import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Alpha",
  description:
    "Privacy Policy for Alpha Property & Gardening Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c8a96a]">
            Alpha Property & Gardening Services
          </span>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-3xl text-white/70">
            We respect your privacy and are committed to
            protecting the information you provide when
            contacting Alpha Property & Gardening Services.
          </p>
        </div>

        <div className="space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Information We Collect
            </h2>

            <p className="leading-8 text-white/70">
              When you request a quote or contact us, we may
              collect information such as your name, contact
              details, postcode, property information, service
              requirements and files you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              How We Use Your Information
            </h2>

            <p className="leading-8 text-white/70">
              Information submitted through our quote journey
              is used to understand your requirements, assess
              the requested work, communicate with you and
              provide relevant services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Uploaded Files
            </h2>

            <p className="leading-8 text-white/70">
              Please only upload photographs, videos and
              documents that are relevant to your enquiry.
              Avoid uploading unnecessary personal or sensitive
              information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Contact
            </h2>

            <p className="leading-8 text-white/70">
              If you have a question about privacy or the
              information you have provided, please contact
              Alpha Property & Gardening Services.
            </p>

            <div className="mt-4 space-y-2">
              <a
                href="tel:01775518068"
                className="block text-[#c8a96a]"
              >
                01775 518068
              </a>

              <a
                href="mailto:info@alphapropertyandgardening.co.uk"
                className="block text-[#c8a96a]"
              >
                info@alphapropertyandgardening.co.uk
              </a>
            </div>
          </section>

          <div className="border-t border-white/10 pt-6">
            <Link
              href="/request-a-quote/service-details"
              className="inline-flex rounded-full border border-[#c8a96a] px-6 py-3 text-sm font-semibold text-[#c8a96a] transition hover:bg-[#c8a96a] hover:text-black"
            >
              ← Back to Quote Request
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}