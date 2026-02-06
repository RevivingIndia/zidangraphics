import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gift, Package, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Gifting | Zidan Graphics",
  description:
    "Branded corporate gifts, promotional merchandise, and event giveaways. Customised with your logo for clients, employees, and partners.",
};

const productCategories = [
  {
    title: "Stationery & Desk",
    description: "Diaries, notebooks, pens, card holders, coasters—useful and professional.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
    alt: "Branded stationery",
  },
  {
    title: "Apparel & Lifestyle",
    description: "T-shirts, polo shirts, caps, mugs, bags. Screen print or embroidery.",
    image: "/tshirts.png",
    alt: "Branded apparel",
  },
  {
    title: "Tech & Premium",
    description: "USB drives, power banks, laptop sleeves. Premium gifts for key clients.",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
    alt: "Tech and premium gifts",
  },
];

const occasions = [
  { label: "Festivals & New Year", sub: "Diwali, company anniversaries" },
  { label: "Conferences & Events", sub: "Goody bags, speaker gifts" },
  { label: "Employee Appreciation", sub: "Welcome kits, performance rewards" },
  { label: "Client Retention", sub: "Ongoing gifting programmes" },
];

const processSteps = [
  { step: 1, title: "Share your needs", text: "Occasion, budget, quantity, timeline." },
  { step: 2, title: "We suggest products", text: "Options that fit, with samples if needed." },
  { step: 3, title: "Approve & produce", text: "Branding and production with clear lead times." },
  { step: 4, title: "Delivery on time", text: "Single or multiple addresses, phased if required." },
];

export default function CorporateGiftingPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#1a1a2e]">
        <Image
          src="/corporate-gifts.png"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/85 to-[#1a1a2e]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Corporate Gifting
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Impress clients and teams with branded gifts that reflect your company&apos;s values. Sourced, branded, and delivered by us.
          </p>
        </div>
      </section>

      <main className="bg-white">
        {/* Why it matters - image + copy */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 rounded-2xl bg-gray-50 p-6 lg:grid-cols-2 lg:gap-16 lg:p-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <Image
                src="/corporate-bulk-printing.png"
                alt="Corporate bulk printing and gifting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                Why Corporate Gifting Matters
              </h2>
              <p className="mt-4 text-gray-600">
                Corporate gifting strengthens relationships with clients, appreciates employees, and builds lasting brand recall. A well-chosen, well-branded gift shows you value the relationship and care about quality and presentation.
              </p>
              <p className="mt-4 text-gray-600">
                At Zidan Graphics we specialise in sourcing, branding, and delivering corporate gifts that align with your brand and budget—from festivals and conferences to client appreciation programmes. We work with businesses of all sizes so the process is simple and the end product reflects your brand positively.
              </p>
            </div>
          </div>
        </section>

        {/* Product categories - cards with images */}
        <section className="border-t border-gray-100 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Our Range of Corporate Gifts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Stationery, apparel, tech accessories, and more—each customised with your logo through print, embroidery, or engraving.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {productCategories.map((cat) => (
                <article
                  key={cat.title}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#c41e3a]/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600">{cat.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Customisation - image right */}
        <section className="border-t border-gray-100 bg-gray-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c41e3a] text-white">
                  <Gift className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  Customisation and Branding
                </h2>
                <p className="mt-4 text-gray-600">
                  Every gift is customised with your logo and brand colours. We use quality inks and techniques—screen printing, pad printing, engraving—so branding lasts. We can arrange custom packaging, pouches, or thank-you inserts for a complete unboxing experience.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1521572163471-6314dda3dab0?w=800&q=80"
                  alt="Branded merchandise and packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Occasions - icon strip */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Occasions and Use Cases
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Festivals, events, employee appreciation, or ongoing client programmes—we deliver quality and on-time for every occasion.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {occasions.map((occ) => (
                <div
                  key={occ.label}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#c41e3a]/30 hover:bg-gray-50/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c41e3a]/10 text-[#c41e3a]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e]">{occ.label}</h3>
                    <p className="mt-1 text-sm text-gray-600">{occ.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="border-t border-gray-100 bg-gray-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              How It Works
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c41e3a] bg-white text-xl font-bold text-[#c41e3a]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-[#1a1a2e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  {item.step < 4 && (
                    <div className="absolute -right-4 top-7 hidden h-0.5 w-8 bg-gray-200 lg:block" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volume & pricing strip */}
        <section className="border-t border-gray-200 bg-[#1a1a2e] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c41e3a]">
                  <Package className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold">Volume & Pricing</h3>
                  <p className="text-sm text-gray-300">
                    Competitive pricing that improves with volume. Transparent quotes—no hidden charges.
                  </p>
                </div>
              </div>
              <p className="text-center text-gray-300 md:text-left max-w-md">
                From modest giveaways to premium gifts for key clients. Dedicated account management and flexible payment terms for repeat or large orders.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Start your corporate gifting order
            </h2>
            <p className="mt-4 text-gray-600">
              Share your occasion, quantity, and budget—we&apos;ll suggest products and send a quote. Visit us to see samples in person.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c41e3a] px-8 py-4 font-medium text-white transition hover:bg-[#a01830]"
            >
              Request a Quote for Gifting
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
