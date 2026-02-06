import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Printer,
  Scissors,
  LayoutGrid,
  Gift,
  CheckCircle2,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Zidan Graphics",
  description:
    "Full-service printing and branding: design, print, finishing, and delivery. We handle your projects from concept to completion.",
};

const serviceCards = [
  {
    title: "Design & Creative",
    description:
      "Professional design for logos, visiting cards, brochures, banners, and social assets. Print-ready files and brand consistency.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    alt: "Design and creative services",
    icon: Palette,
  },
  {
    title: "Digital & Offset Printing",
    description:
      "Short runs or high volume—we match the right technology to your job. Calibrated colour and consistent quality.",
    image: "/products-digital-printing.png",
    alt: "Digital and offset printing",
    icon: Printer,
  },
  {
    title: "Finishing & Bindery",
    description:
      "Cutting, folding, stitching, binding, laminating, UV coating, and embossing. All under one roof.",
    image: "/products-facility.png",
    alt: "Finishing and bindery",
    icon: Scissors,
  },
  {
    title: "Large-Format & Signage",
    description:
      "Banners, posters, backdrops, vehicle graphics, and POS materials. UV-resistant options for outdoor use.",
    image: "/banners-posters.png",
    alt: "Large format and signage",
    icon: LayoutGrid,
  },
  {
    title: "Corporate Gifting",
    description:
      "Branded merchandise, diaries, apparel, and more. We source, brand, and deliver for events and campaigns.",
    image: "/corporate-gifts.png",
    alt: "Corporate gifting and merchandise",
    icon: Gift,
  },
  {
    title: "Proofing & Quality",
    description:
      "Digital and hard-copy proofs, pre-flight checks, and final inspection. We get it right before it ships.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    alt: "Quality control and proofing",
    icon: CheckCircle2,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#1a1a2e]">
        <Image
          src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 to-[#1a1a2e]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            End-to-end printing and branding—design, production, finishing, and delivery. One partner from concept to completion.
          </p>
        </div>
      </section>

      <main className="bg-white">
        {/* Service cards grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#c41e3a]/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c41e3a] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#1a1a2e]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Alternating detail sections */}
        <section className="border-t border-gray-100 bg-gray-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 order-2 lg:order-1">
                <Image
                  src="/visiting-cards.png"
                  alt="Visiting cards and stationery design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  Design and Creative Services
                </h2>
                <p className="mt-4 text-gray-600">
                  We offer professional design support for logos, visiting cards, brochures, banners, and social media assets. Our designers work with you to understand your brand and create print-ready layouts. Design can be bundled with print for a single point of contact.
                </p>
                <p className="mt-4 text-gray-600">
                  We use industry-standard software and prepare files for both digital and offset printing—correct colour modes, resolution, bleed, and trim. Revisions are included within scope, and we deliver source files when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  Digital and Offset Printing
                </h2>
                <p className="mt-4 text-gray-600">
                  Digital printing suits short runs, variable data, and quick turnaround. Offset is best for high volume where per-unit cost drops. We recommend the right option based on quantity, timeline, and budget.
                </p>
                <p className="mt-4 text-gray-600">
                  Colour management is taken seriously—calibrated monitors, contract proofs for critical work, and quality checks during production. You get professional results that reflect your brand accurately.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/products-printing-desk.png"
                  alt="Printing production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 order-2 lg:order-1">
                <Image
                  src="/flyers-brochures.png"
                  alt="Finishing and bindery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  Finishing and Bindery
                </h2>
                <p className="mt-4 text-gray-600">
                  Cutting, folding, stitching, binding, laminating, UV coating, spot UV, and embossing—all in-house. Business cards, brochures, and catalogues finished to your specification. We plan the finishing sequence for complex jobs and handle special requests like perforations and personalisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  Large-Format and Signage
                </h2>
                <p className="mt-4 text-gray-600">
                  Banners, posters, backdrops, vehicle graphics, and point-of-sale materials. High-resolution output on vinyl, fabric, and rigid boards. We advise on materials for indoor vs outdoor use and offer UV-resistant inks and installation support where needed.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/products-large-format.png"
                  alt="Large format printing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery strip */}
        <section className="border-t border-gray-200 bg-[#1a1a2e] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c41e3a]">
                  <Truck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold">Delivery & Logistics</h3>
                  <p className="text-sm text-gray-300">
                    Standard and express options, tracking, and careful packing.
                  </p>
                </div>
              </div>
              <div className="hidden h-12 w-px bg-gray-600 md:block" />
              <p className="text-center text-gray-300 md:text-left max-w-md">
                We work with reliable courier partners. Local pick-up or same-day delivery where feasible. Flexible payment terms for established clients.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-gray-600">
              Get a clear quote with no hidden charges and a dedicated point of contact.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#c41e3a] px-8 py-4 font-medium text-white transition hover:bg-[#a01830]"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
