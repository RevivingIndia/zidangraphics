"use client";

import { Award, IndianRupee, Truck, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyChooseUs } from "@/data/dummy";

const icons = {
  Quality: Award,
  Pricing: IndianRupee,
  Delivery: Truck,
  Design: Palette,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We combine quality, speed, and value so you get the best print experience."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 text-center transition-colors hover:border-[#c41e3a]/30 hover:bg-white hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c41e3a] text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 font-semibold text-[#1a1a2e]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
