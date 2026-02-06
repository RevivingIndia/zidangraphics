import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Zidan Graphics",
  description:
    "Get in touch for quotes, orders, and support. Visit us, call, or send a message—we're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get a quote, place an order, or ask a question. We're here to help."
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Get a Quote</h2>
            <ContactForm />
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Visit or Call</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-medium shrink-0">Address:</span>
                <span>123 Print Street, Industrial Area, City – 1100XX</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium shrink-0">Phone:</span>
                <a href="tel:+919876543210" className="text-[#c41e3a] hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <span className="font-medium shrink-0">Email:</span>
                <a
                  href="mailto:hello@zidangraphics.com"
                  className="text-[#c41e3a] hover:underline"
                >
                  hello@zidangraphics.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="prose prose-gray max-w-none prose-headings:text-[#1a1a2e] prose-a:text-[#c41e3a]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-10">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
              alt="Contact and customer service"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <h2>How to Get a Quote</h2>
          <p>
            Getting a quote from Zidan Graphics is straightforward. You can reach
            us by phone, email, or through the contact form on this page. When you
            get in touch, please share as much detail as possible about your
            requirement: the type of product (e.g. visiting cards, brochures,
            banners), quantity, size or dimensions, and your preferred timeline.
            If you have existing artwork or design files, you can share them
            after the initial enquiry—we will confirm the format we need. Our team
            typically responds to quote requests within 24 hours on working days.
            For urgent jobs we can sometimes provide a ballpark estimate over the
            phone and confirm in writing shortly after.
          </p>
          <p>
            We believe in transparent pricing. Our quotes include the cost of
            production, standard finishing, and often local delivery unless
            otherwise stated. If your job involves special finishes, multiple
            options, or out-of-town delivery we will spell that out so there are
            no surprises. You are under no obligation to place an order after
            receiving a quote—we are happy to answer questions and help you plan
            even if you are still comparing options. Once you are ready to
            proceed we will confirm the order, collect any remaining details or
            files, and keep you updated on production and delivery.
          </p>

          <h2>Visiting Our Facility</h2>
          <p>
            We welcome clients who prefer to discuss their requirements in person
            or want to see samples and paper options. Our facility is located at
            123 Print Street in the Industrial Area, and we have a dedicated
            reception and meeting space. We recommend scheduling a visit in
            advance so that the right team members are available and we can
            prepare relevant samples or proofs. During your visit you can see our
            production floor (subject to safety and operational constraints),
            review paper and finish options, and finalise specifications for your
            order. For first-time clients a visit can be especially helpful to
            understand our capabilities and build confidence in our processes.
          </p>
          <p>
            If you are bringing artwork or samples, please carry them along. We
            can also show you previous work (with client permission) to give you
            an idea of the quality and range we offer. Parking is available on
            site, and we are accessible by public transport. Our team will guide
            you on the best way to reach us when you fix an appointment. We look
            forward to hosting you and showing you why so many businesses choose
            Zidan Graphics for their printing and branding needs.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl my-10">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
              alt="Meeting and consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <h2>What to Expect After You Contact Us</h2>
          <p>
            Once you send an enquiry or submit the contact form, we aim to
            acknowledge it the same day and provide a detailed response within 24
            working hours. If your requirement is complex we might need a bit more
            time to check specifications and prepare an accurate quote—we will let
            you know. Our response will typically include a price, proposed
            timeline, and any clarifications we need from you (e.g. file format,
            colour mode, or delivery address). You can reply with questions or
            confirm that you would like to place the order. We will then send a
            formal order confirmation and, if applicable, an invoice or payment
            link. Production starts once we have your approval and any required
            files or deposits.
          </p>
          <p>
            Throughout the production process we keep you informed. If there are
            any delays—for example due to machine availability or unexpected
            issues—we will notify you as soon as we know. We believe that
            communication is key to a good client experience, and we encourage
            you to reach out at any stage if you have concerns or need updates.
            After delivery we follow up to ensure you are satisfied with the
            order. Your feedback helps us improve and also helps us serve you
            better on future jobs. We treat every contact as the start of a
            potential long-term relationship, and we are committed to making the
            process smooth and professional from first touch to final delivery.
          </p>

          <h2>Support for Existing Orders</h2>
          <p>
            If you have already placed an order and need to check status, change
            a detail, or report an issue, the same channels apply: call us, email
            us, or use the contact form and mention your order reference. Our
            customer service team can look up your order and provide a status
            update. For reorders we often have your previous specifications on
            file, which speeds up the process—you can simply ask for a repeat
            order and we will confirm price and timeline. We also support clients
            who need design help, file preparation, or advice on the best product
            for their need. Do not hesitate to ask; we are here to help you get
            the best result from your print and branding investment.
          </p>

          <h2>Business Hours and Response Times</h2>
          <p>
            Our office and production facility operate on working days during
            standard business hours. Phone and email are monitored during this
            time, and we strive to answer calls promptly. If you call outside
            hours you can leave a message and we will get back to you on the next
            working day. For the contact form, submissions are received
            electronically and queued for response—again, we aim for within 24
            working hours. For urgent printing needs we may be able to arrange
            express handling; mention your deadline when you get in touch and we
            will do our best to accommodate. We value your time and aim to make
            every interaction with Zidan Graphics efficient and helpful. Thank
            you for your interest—we look forward to hearing from you.
          </p>

          <h2>Why Reach Out Early</h2>
          <p>
            Even if your project is a few weeks away, getting in touch early can
            help. We can reserve capacity for large orders, suggest alternatives
            if certain materials are in short supply, and plan production to
            avoid last-minute rushes. Early contact also gives you time to
            approve proofs and make small changes without affecting your
            deadline. For corporate gifting and event-based orders we especially
            recommend connecting as soon as you have a rough idea of quantity and
            date. We will work with you to lock in a timeline and keep you
            updated so that when the big day arrives, your order is ready and
            delivered on time. No question is too small—whether you are checking
            paper options, file specs, or delivery zones, we are happy to help.
          </p>
        </div>
      </main>
    </>
  );
}
