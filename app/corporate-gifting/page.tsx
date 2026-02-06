import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Corporate Gifting | Zidan Graphics",
  description:
    "Branded corporate gifts, promotional merchandise, and event giveaways. Customised with your logo for clients, employees, and partners.",
};

export default function CorporateGiftingPage() {
  return (
    <>
      <PageHero
        title="Corporate Gifting"
        subtitle="Impress clients and teams with branded gifts that reflect your company's values."
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none prose-headings:text-[#1a1a2e] prose-a:text-[#c41e3a]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-10">
            <Image
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80"
              alt="Corporate gifts and branded merchandise"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <h2>Why Corporate Gifting Matters</h2>
          <p>
            Corporate gifting is more than a gesture—it is a way to strengthen
            relationships with clients, appreciate employees, and create lasting
            brand recall. A well-chosen, well-branded gift shows that you value the
            relationship and have paid attention to quality and presentation. At
            Zidan Graphics we specialise in sourcing, branding, and delivering
            corporate gifts that align with your brand and budget. Whether you are
            planning for a festival, a conference, an anniversary, or an ongoing
            client appreciation programme, we can help you choose the right
            products and execute at scale.
          </p>
          <p>
            The right gift can open doors, reinforce partnerships, and make
            recipients feel valued. It can also serve as a subtle marketing tool:
            every time someone uses your branded diary, pen, or mug, they are
            reminded of your company. We work with businesses of all sizes—from
            startups giving their first set of client gifts to large corporations
            running nationwide gifting campaigns. Our goal is to make the process
            simple for you while ensuring that the end product reflects your
            brand positively and delights the recipient.
          </p>

          <h2>Our Range of Corporate Gifts</h2>
          <p>
            We offer a wide variety of products that can be customised with your
            logo and messaging. Stationery items such as diaries, notebooks,
            notepads, and pens are perennially popular—they are useful, professional,
            and fit most budgets. We source quality blanks and apply your branding
            through print, engraving, or embossing. Desk accessories like card
            holders, desk organisers, and coasters are another category that works
            well for corporate clients and events. For a more personal touch we
            offer mugs, water bottles, and bags that recipients can use daily,
            keeping your brand visible in their routine.
          </p>
          <p>
            Apparel and lifestyle items are also part of our range. Custom
            T-shirts, polo shirts, caps, and jackets are ideal for events, team
            building, or as welcome kits for new employees. We can do screen
            printing or embroidery depending on the item and design. Tech
            accessories such as USB drives, power banks, and laptop sleeves are
            appreciated in professional settings. We keep adding new products based
            on client demand and market trends, so if you have something specific
            in mind, we can often source it and brand it for you. Minimum order
            quantities vary by product; our team will provide options that work
            for your quantity and timeline.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1521572163471-6314dda3dab0?w=1200&q=80"
              alt="Branded apparel and merchandise"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>Customisation and Branding</h2>
          <p>
            Every gift we produce can be customised to reflect your brand. We work
            with your logo files and brand colours to ensure consistency. For
            print we use quality inks and techniques that last—whether it is
            screen printing on fabric, pad printing on mugs, or engraving on metal
            or leather. We can also suggest placement and sizing so that the
            branding is visible but tasteful. For large orders we provide proofs
            or samples so you can approve before we go into full production.
          </p>
          <p>
            Packaging is part of the experience. We can arrange custom boxes,
            pouches, or wrapping that align with your brand and the occasion.
            Unboxing a corporate gift should feel special; we help you achieve
            that without blowing the budget. If you have specific packaging
            requirements or want to include a thank-you card or insert, we can
            incorporate that into the solution. The aim is to deliver a
            end-to-end gifting experience that you are proud to send and that
            recipients are happy to receive.
          </p>

          <h2>Occasions and Use Cases</h2>
          <p>
            Corporate gifting fits many occasions. Festival greetings—such as
            Diwali, New Year, or company anniversaries—are a common time for
            businesses to send gifts to clients and partners. We help you select
            products and packaging that suit the occasion and your brand voice.
            Conferences and events are another major use case: goody bags,
            speaker gifts, and participant giveaways all need to be ordered in
            bulk and delivered on time. We have experience supporting events of
            various scales and can work to your event date.
          </p>
          <p>
            Employee appreciation is equally important. Welcome kits for new
            joiners, performance rewards, or year-end thank-you gifts can all be
            sourced and branded through us. Consistent gifting programmes for
            long-standing clients or top performers help build loyalty and
            morale. We can set up repeat orders or standing arrangements so that
            you do not have to re-plan every time. Whatever the occasion, we
            bring the same attention to quality, branding, and delivery so that
            your gifting initiative succeeds.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
              alt="Corporate event and gifting"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>Process and Timelines</h2>
          <p>
            When you approach us for corporate gifting we start by understanding
            your needs: occasion, budget, quantity, and timeline. We then suggest
            products that fit and provide samples if required. Once you approve the
            product and branding we move to production. Lead times depend on the
            product, quantity, and customisation—typically we need two to four
            weeks for standard orders, but we can accommodate rush requests when
            possible. We will give you a clear timeline at the outset so you can
            plan your campaign or event accordingly.
          </p>
          <p>
            We handle logistics as well. Gifts can be shipped to a single address
            (e.g. your office for distribution) or to multiple addresses if you
            provide a list. For very large orders we can arrange phased delivery.
            Our team will keep you updated at each stage so there are no last-minute
            surprises. We understand that corporate gifting often ties to important
            dates and events, and we take our commitment to delivery deadlines
            seriously.
          </p>

          <h2>Volume and Pricing</h2>
          <p>
            We offer competitive pricing that improves with volume. Bulk orders
            typically qualify for better per-unit rates, and we can pass those
            savings on to you. Our quotes are transparent—we break down product
            cost, branding cost, and logistics so you know exactly what you are
            paying for. There are no hidden charges. We also work with different
            price points: from modest giveaways for large groups to premium gifts
            for key clients. Whatever your budget, we can suggest options that
            look good and stay within range.
          </p>
          <p>
            For repeat or large clients we offer dedicated account management and
            flexible payment terms. We can maintain a catalogue of your preferred
            products and branding so that reorders are quick and consistent. Our
            goal is to be your long-term partner for corporate gifting, not just
            a one-time vendor. Building that relationship means we invest in
            understanding your brand and your needs so that every order runs
            smoothly and every gift reflects your company in the best light.
          </p>

          <h2>Getting Started</h2>
          <p>
            To get started with corporate gifting, get in touch with us through
            our Contact page. Share your occasion, approximate quantity, and
            budget, and we will come back with product suggestions and a quote.
            You can also visit us to see samples in person if that helps. We look
            forward to helping you create memorable, branded experiences for your
            clients, partners, and team.
          </p>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#c41e3a] px-6 py-3 font-medium text-white transition hover:bg-[#a01830]"
          >
            Request a Quote for Gifting
          </Link>
        </p>
      </main>
    </>
  );
}
