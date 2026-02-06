"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { navLinks, productCategories } from "@/data/dummy";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get Quote", href: "/contact" },
];

const social = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1a1a2e] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className="block w-fit" aria-label="Zidan Graphics - Home">
              <Image
                src="/zidan-logo.png"
                alt="Zidan Graphics"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Premium printing and branding solutions for businesses and events. Quality, speed, and value.
            </p>
            <div className="mt-4 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Products</h4>
            <ul className="mt-3 space-y-2">
              {productCategories.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#c41e3a]" />
                <span>Shop No 3 Opp Fakhruddin Plaza, Langertoli, Patna 04</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#c41e3a]" />
                <a href="tel:+918083955264" className="hover:text-white">
                  8083955264
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#c41e3a]" />
                <a href="mailto:zidaan.graphic@gmail.com" className="hover:text-white">
                  zidaan.graphic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zidan Graphics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
