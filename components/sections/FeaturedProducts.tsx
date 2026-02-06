"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredProducts } from "@/data/dummy";

export default function FeaturedProducts() {
  return (
    <section id="services" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Products"
          subtitle="Best-sellers for businesses and events."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#1a1a2e]">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-2 text-sm font-medium text-[#c41e3a]">
                  {product.price}
                </p>
                <Link href="/contact" className="mt-3 block">
                  <Button variant="outline" size="sm" className="w-full">
                    Order Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
