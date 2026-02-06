"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CorporateBulk() {
  return (
    <section id="corporate" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm sm:gap-16 lg:grid-cols-2 lg:p-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              Corporate & Bulk Printing
            </h2>
            <p className="mt-4 text-gray-600">
              From annual reports and catalogues to event kits and employee merchandise—we handle large orders with the same attention to detail. Dedicated account support and volume discounts for repeat clients.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c41e3a]" />
                Bulk visiting cards & letterheads
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c41e3a]" />
                Brochures, catalogues & reports
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c41e3a]" />
                Promotional merchandise & gifting
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c41e3a]" />
                Event branding & signage
              </li>
            </ul>
            <Link href="/contact" className="mt-8 inline-block">
              <Button size="lg" leftIcon={<FileText className="h-5 w-5" />}>
                Request Corporate Quote
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[280px] overflow-hidden rounded-xl bg-gray-100 sm:min-h-[320px] lg:aspect-[4/3]"
          >
            <Image
              src="/corporate-bulk-printing.png"
              alt="Custom t-shirt printing workshop with apparel stack, printing equipment, and design samples"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
