import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About Us | Zidan Graphics",
  description:
    "Learn about Zidan Graphics—our story, values, and commitment to premium printing and branding solutions for businesses.",
};

const sectionImage = "rounded-xl object-cover shadow-lg";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Quality printing and branding solutions built on trust, innovation, and decades of experience."
      />

      {/* Hero image - full width */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-gray-100 min-h-[200px] sm:min-h-[260px]">
        <Image
          src="/hero-printer-1.png"
          alt="Premium printing and branding at Zidan Graphics"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Our Story - image right */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Zidan Graphics began with a simple belief: every business deserves access to
              high-quality printing and branding that reflects their vision. What started as
              a small print shop has grown into a full-service graphics and printing
              company serving thousands of clients across the region.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The name &quot;Zidan&quot; reflects our focus on growth and excellence. Whether you
              are a startup needing your first set of business cards or a large
              corporation planning a nationwide campaign, we have the expertise,
              equipment, and commitment to deliver on time and within budget.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg order-first lg:order-none">
            <Image
              src="/corporate-bulk-printing.png"
              alt="Our printing workspace and custom apparel production"
              fill
              className={sectionImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Mission and Values - image left */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl lg:px-12 lg:py-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/hero-printer-2.png"
              alt="State-of-the-art printing equipment and quality output"
              fill
              className={sectionImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Our Mission and Values
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to help brands communicate effectively through outstanding
              print and visual solutions. We are guided by quality first, customer focus,
              transparency, and continuous improvement. Every job is checked for
              consistency, colour accuracy, and finish.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We listen before we recommend. Clear pricing, honest delivery estimates, and
              straightforward communication define how we work. We see ourselves as an
              extension of your team.
            </p>
          </div>
        </section>

        {/* Why Choose Us - centered with image */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl text-center">
            Why Choose Zidan Graphics?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
            We combine technical capability, experienced people, and a genuine commitment
            to customer satisfaction. State-of-the-art digital and offset presses, in-house
            design support, competitive pricing, and express options when you need them.
          </p>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/hero-printer-3.png"
              alt="Precision printing and colour calibration at our facility"
              fill
              className={sectionImage}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </section>

        {/* Team and Culture + Commitment - two columns text, one image */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Our Team and Culture
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team is the backbone of Zidan Graphics. We invest in training and
              skill development so that our team stays updated with the latest techniques
              and technologies. Many of our senior team members have been with us for over
              a decade—you benefit from their deep knowledge and continuity.
            </p>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl mt-10">
              Quality and Sustainability
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every print job goes through multiple checks. We use premium materials and
              offer proofs before full production. Where possible, we source sustainable
              papers and eco-friendly inks and recycle waste. Great print and
              responsibility go hand in hand.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/banners-posters.png"
              alt="Our range of printing and branding capabilities"
              fill
              className={sectionImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Facilities and Looking Ahead - CTA block */}
        <section className="py-12 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl lg:px-12 lg:py-12">
          <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl text-center">
            Our Facilities and the Future
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            Our facility is equipped with modern printing machinery, professional colour
            management, and in-house bindery. We maintain robust IT for file handling and
            order tracking. We are committed to staying at the forefront of technology
            and remaining your trusted partner for print and branding—today and for years
            to come.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#c41e3a] px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#a01830]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
