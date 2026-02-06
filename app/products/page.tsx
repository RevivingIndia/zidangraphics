import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { productCategories } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Products | Zidan Graphics",
  description:
    "Explore our range of printing products: visiting cards, brochures, banners, corporate gifts, T-shirts, stickers, and more.",
};

const imgClass = "rounded-xl object-cover shadow-lg";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="From business cards to large-format banners—quality print products for every need."
      />

      {/* Hero: Digital Printing graphic - full width, show full image */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[180px] w-full overflow-hidden rounded-2xl bg-white shadow-md">
            <Image
              src="/products-digital-printing.png"
              alt="Digital Printing—versatile, full-colour printing for every application"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
            We combine digital and offset printing with in-house design support so you get
            sharp, consistent results—from visiting cards and brochures to large-format
            graphics and branded merchandise.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Design to print - desk with CMYK */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg order-first lg:order-none">
            <Image
              src="/products-printing-desk.png"
              alt="Design and print workflow—CMYK colour and professional setup"
              fill
              className={imgClass}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Visiting Cards & Marketing Collateral
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your visiting card is often the first tangible piece of your brand. We produce
              business cards in a variety of finishes and weights—350 GSM, matte or gloss,
              spot UV, and embossing. We also offer letterheads, envelopes, flyers, and
              brochures in full colour with design support. Digital and offset options to
              match your run size and timeline.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Proofing, bulk orders, and express turnaround available. Every batch is checked
              for alignment, colour consistency, and finish before dispatch.
            </p>
          </div>
        </section>

        {/* Large-format & quality - Canon + prints */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl lg:px-12 lg:py-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Banners, Posters & Large-Format
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For events, retail, exhibitions, and outdoor advertising we produce roll-up
              banners, posters, wall graphics, and backdrops. Fabric or vinyl, UV-resistant
              inks for outdoor use. Portable stands included where needed. Sizes and
              layouts customised to your space; installation support can be arranged.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Sharp, vibrant output even at large sizes. Standard turnaround five to seven
              working days with rush options.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/products-canon-prints.png"
              alt="Professional large-format printing and vivid colour output"
              fill
              className={imgClass}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Flatbed / precision - hummingbird */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg order-first lg:order-none">
            <Image
              src="/products-flatbed.png"
              alt="Precision digital printing and colour management at our facility"
              fill
              className={imgClass}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Precision & Colour Accuracy
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our facility uses modern digital and flatbed equipment with professional
              colour management so screen and print stay consistent. We offer soft and hard
              proofs for critical work. From short runs to large-scale campaigns, we
              control quality at every step.
            </p>
          </div>
        </section>

        {/* Large-format production - operator */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl lg:px-12 lg:py-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/products-large-format.png"
              alt="Large-format print production and custom graphics"
              fill
              className={imgClass}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Corporate Gifts, Apparel & More
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Branded merchandise—diaries, notepads, mugs, bags, T-shirts, and caps—with
              your logo via screen print, DTF, or engraving. We work with HR and marketing
              teams on giveaways, event kits, and welcome packs. Quality blanks, bulk
              discounts, and single-point coordination for large orders.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Stickers, labels, and packaging elements in various shapes and materials.
              Die-cutting and laminates for durability. We help keep your branding
              consistent across products and packaging.
            </p>
          </div>
        </section>

        {/* Our facility - woman at machine */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl text-center">
            Our Facility & Expertise
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
            Experienced team, modern equipment, and strict quality checks. We handle
            everything from urgent small jobs to large-scale campaigns with a single point
            of contact for quotes, artwork, and delivery.
          </p>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/products-facility.png"
              alt="Our printing facility and team at work"
              fill
              className={imgClass}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </section>

        {/* Browse by category */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#1a1a2e] group-hover:text-[#c41e3a]">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#c41e3a] px-6 py-3 font-medium text-white transition hover:bg-[#a01830]"
          >
            Get a Quote
          </Link>
        </p>
      </main>
    </>
  );
}
