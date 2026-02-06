"use client";

import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const HERO_IMAGES = [
  {
    src: "/hero-printer-1.png",
    alt: "Industrial printer producing high-quality colorful prints",
  },
  {
    src: "/hero-printer-2.png",
    alt: "Wide-format digital printer with vibrant roll output",
  },
  {
    src: "/hero-printer-3.png",
    alt: "Precision printing press with color calibration and detailed output",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl md:text-5xl lg:text-[2.75rem]"
            >
              Premium Printing & Branding Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-xl text-lg text-gray-600 sm:text-xl"
            >
              Customized printing services for businesses, events, and promotions. From visiting cards to large-format banners—we deliver quality on time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" leftIcon={<Package className="h-5 w-5" />}>
                  View Products
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200/50">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_IMAGES[activeIndex].src}
                    alt={HERO_IMAGES[activeIndex].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className="h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: i === activeIndex ? "#c41e3a" : "#cbd5e1",
                    width: i === activeIndex ? 24 : 8,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
