import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Services | Zidan Graphics",
  description:
    "Full-service printing and branding: design, print, finishing, and delivery. We handle your projects from concept to completion.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end printing and branding services—design, production, finishing, and delivery."
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none prose-headings:text-[#1a1a2e] prose-a:text-[#c41e3a]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-10">
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
              alt="Design and creative services at Zidan Graphics"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <h2>Design and Creative Services</h2>
          <p>
            Not every client has an in-house design team. At Zidan Graphics we offer
            professional design support for logos, visiting cards, brochures,
            banners, and social media assets. Our designers work with you to
            understand your brand, target audience, and message, and then create
            layouts that are both visually appealing and print-ready. We follow brand
            guidelines when provided and can also help define a simple visual
            identity if you are just starting out. Design services can be bundled
            with print orders for a single point of contact and consistent output.
          </p>
          <p>
            We use industry-standard software and are experienced in preparing files
            for both digital and offset printing. This means correct colour modes,
            resolution, bleed, and trim—so that what you approve is what you get.
            Revisions are included within agreed scope, and we deliver source files
            when needed for your records or future use. Whether you need a single
            brochure design or a full set of marketing materials, our design team
            is here to bring your ideas to life and ensure they translate well from
            screen to print.
          </p>

          <h2>Digital and Offset Printing</h2>
          <p>
            We operate both digital and offset printing capabilities to match the
            right technology to your job. Digital printing is ideal for short runs,
            variable data, and quick turnaround. It offers consistent quality and
            is cost-effective for quantities typically under 500 to 1000 pieces
            depending on the product. Offset printing, on the other hand, is best
            for high-volume runs where the per-unit cost drops significantly. It
            delivers excellent colour fidelity and is well-suited to brochures,
            catalogues, and standard stationery in large quantities. Our team will
            recommend the best option based on your quantity, timeline, and budget.
          </p>
          <p>
            Colour management is taken seriously at every step. We use calibrated
            monitors and proofing systems to minimise surprises between screen and
            print. For critical branding work we offer contract proofs so you can
            sign off on colour before the full run. We also maintain strict quality
            checks during production—colour consistency, registration, and
            finishing are all monitored. Whether your job is digital or offset, you
            can expect professional results that reflect your brand accurately.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&q=80"
              alt="Printing press and production"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>Finishing and Bindery</h2>
          <p>
            The way your printed pieces are finished can elevate them from good to
            great. We offer a full range of finishing services in-house: cutting,
            folding, stitching, binding, laminating, and more. Business cards can
            be rounded corner or standard; brochures can be saddle-stitched or
            perfect-bound. We have options for UV coating, spot UV, and embossing
            to add texture and emphasis. By keeping finishing under our roof we
            maintain control over quality and schedule, and you avoid the hassle of
            coordinating multiple vendors.
          </p>
          <p>
            For large or complex jobs we plan the finishing sequence in advance so
            that folding, trimming, and binding happen in the right order. We can
            also handle special requests such as perforations, numbering, and
            personalisation where technically feasible. Our bindery team is
            experienced in handling a variety of paper weights and sizes. When you
            place an order, we will outline the finishing options available for
            your product and recommend the most suitable choice for durability and
            appearance.
          </p>

          <h2>Large-Format and Signage</h2>
          <p>
            Large-format printing is a specialised service that we offer for
            banners, posters, backdrops, vehicle graphics, and point-of-sale
            materials. Our large-format printers produce vibrant, high-resolution
            output on a range of substrates including vinyl, fabric, and rigid
            boards. We can produce one-off exhibition graphics or bulk signage for
            multiple locations. Sizes are customised to your requirements, and we
            advise on the best material and finish for indoor versus outdoor use.
          </p>
          <p>
            For outdoor applications we use UV-resistant inks and durable
            materials to ensure longevity. Installation support can be arranged for
            complex or large installations. We also offer design support for
            large-format so that your artwork is optimised for scale and viewing
            distance. Whether you need a single roll-up banner or a full set of
            retail signage, our large-format service is designed to deliver
            impact and durability.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80"
              alt="Large format banners and signage"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>Corporate Gifting and Merchandise</h2>
          <p>
            Our corporate gifting service goes beyond sourcing—we help you choose
            products, apply your branding, and deliver on time for events,
            campaigns, or appreciation programmes. We work with a network of
            suppliers to offer diaries, notebooks, pens, mugs, bags, apparel, and
            many other items. Each product can be customised with your logo and
            messaging through print, embroidery, or engraving. We handle the entire
            process so you can focus on your core business while still making a
            strong impression with thoughtful, branded gifts.
          </p>
          <p>
            We offer volume discounts and can accommodate tight deadlines for
            events. Our team can suggest products that fit different budgets and
            occasions, and we can provide samples for approval before bulk
            production. Whether you need 50 gift sets for a conference or 5000
            items for a nationwide campaign, we scale our operations to meet your
            needs. Account management is available for repeat or large orders so
            you have a single point of contact for planning and execution.
          </p>

          <h2>Proofing and Quality Assurance</h2>
          <p>
            We believe that preventing errors is better than fixing them. That is
            why we offer multiple proofing options. Digital proofs are quick and
            suitable for layout and content approval. For colour-critical work we
            provide hard copy proofs that closely match the final print. Our
            quality assurance process includes pre-flight checks on incoming
            files, press-side checks during production, and final inspection
            before dispatch. We document specifications for each job so that
            reorders can be matched consistently.
          </p>
          <p>
            If something does not meet your expectations, we work with you to
            resolve it. Our goal is to build long-term relationships, and that
            only happens when you are confident in our output. We encourage
            clients to share feedback so we can improve our processes. Many of our
            clients have been with us for years because they trust our commitment
            to quality and our responsiveness when issues arise.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80"
              alt="Quality control and proofing"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>Delivery and Logistics</h2>
          <p>
            Getting your order to you on time is part of our service. We work with
            reliable courier partners and offer standard and express delivery
            options. For local clients we can arrange pick-up or same-day delivery
            where feasible. For out-of-town orders we pack carefully to prevent
            damage in transit and provide tracking information so you can monitor
            your shipment. Bulk orders can be shipped in phases if required, and we
            can coordinate with your events or launch dates.
          </p>
          <p>
            We also offer flexible payment terms for established clients and large
            orders. Invoices can be settled by bank transfer, cheque, or online
            payment as per your preference. Our accounts team is available to
            answer queries and provide documentation for your records. By
            integrating delivery and payment into our service offering we aim to
            make the entire experience of ordering print and branding from Zidan
            Graphics smooth and stress-free.
          </p>

          <h2>Working With Us</h2>
          <p>
            From the first enquiry to the final delivery, we aim to be
            professional, transparent, and responsive. You will get a clear quote
            with no hidden charges, realistic timelines, and a dedicated point of
            contact for your order. We welcome both one-off projects and ongoing
            partnerships. To discuss your next project or request a quote, visit
            our Contact page or reach out by phone or email. We look forward to
            serving you.
          </p>
        </div>

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
