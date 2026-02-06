"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/dummy";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  const current = testimonials[index];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by businesses and event organisers across the country."
        />
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm"
              >
                <div className="flex gap-1 text-[#c41e3a]">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg text-gray-700">
                  &ldquo;{current.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">{current.name}</p>
                    <p className="text-sm text-gray-500">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#c41e3a]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-[#c41e3a] w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#c41e3a]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
