"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Link2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "website",
    title: "Website Solution",
    description:
      "Custom websites from landing pages to full web portals. Modern design, fast performance, and mobile-friendly.",
    icon: Globe,
    href: "/contact",
  },
  {
    id: "app",
    title: "App Solution",
    description:
      "Mobile and web apps built for your business. User-friendly interfaces and scalable solutions.",
    icon: Smartphone,
    href: "/contact",
  },
  {
    id: "hosting",
    title: "Hosting",
    description:
      "Reliable, secure hosting so your site and apps stay online. We manage servers so you can focus on your business.",
    icon: Server,
    href: "/contact",
  },
  {
    id: "domain",
    title: "Domain",
    description:
      "Register and manage your domain name. Get a professional web address that matches your brand.",
    icon: Link2,
    href: "/contact",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function DigitalSolutions() {
  return (
    <section
      id="digital-solutions"
      className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e] to-[#16213e] py-16 sm:py-20 lg:py-24"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#c41e3a] blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.04, 0.08, 0.04],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/2 h-72 w-72 rounded-full bg-blue-500/30 blur-[100px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c41e3a]/50 bg-[#c41e3a]/10 px-4 py-1.5 text-sm font-medium text-[#f4a0a8]">
            <Sparkles className="h-4 w-4" />
            New at Zidan Graphics
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Digital Solutions — Now Under One Roof
          </h2>
          <p className="mt-3 text-gray-300 sm:text-lg">
            Beyond print: we now build websites, apps, and keep you online with hosting and domains. One partner for your brand, offline and on.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.id} variants={item}>
                <Link href={s.href} className="block h-full group">
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#c41e3a]/40 hover:bg-white/10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#c41e3a] text-white"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{s.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-[#c41e3a] group-hover:underline">
                      Get started →
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Visual strip with your digital solution imagery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { src: "/digital-web-solutions.png", alt: "Web solutions", label: "Web Solutions" },
              { src: "/digital-web-design.png", alt: "Web design and development", label: "Web Design & Development" },
              { src: "/digital-app-development.png", alt: "App development", label: "App Development" },
            ].map((slide, i) => (
              <motion.div
                key={slide.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video overflow-hidden rounded-xl bg-white/5"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-center text-sm font-medium text-white">
                  {slide.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Icon highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 py-6 px-6 backdrop-blur-sm sm:gap-10"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c41e3a] text-white shadow-lg shadow-[#c41e3a]/30">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-white sm:text-sm">{s.title}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#c41e3a] hover:bg-[#a01830]"
            >
              Enquire About Digital Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
