"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiClock,
  HiXCircle,
} from "react-icons/hi";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
];

const contactInfo = [
  {
    id: "address",
    icon: HiLocationMarker,
    text: "Kampala road, Nairobi, Kenya",
  },
  { id: "phone", icon: HiPhone, text: "0759 888 333 / 0759 999 666" },
  { id: "email", icon: HiMail, text: "inquiries@hadiidindustries.com" },
];

const openingHours = [
  { id: "weekdays", icon: HiClock, text: "Mon - Fri: 8:00 AM - 5:00 PM" },
  { id: "saturday", icon: HiClock, text: "Saturday: 8:00 AM - 1:00 PM" },
  { id: "sunday", icon: HiXCircle, text: "Sunday: Closed" },
];

export function Footer() {
  return (
    <footer className='bg-[#0a0a0a] text-muted-foreground'>
      <div className='container mx-auto px-4 pt-4 md:pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Logo & Description */}
          <div className='space-y-4'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='Hadiid Industries Logo'
                width={270}
                height={90}
                className='h-18 w-auto'
              />
            </Link>
            <p className='text-sm leading-relaxed'>
              Your trusted partner in vehicle body building, fabrication, and
              repairs. We combine modern technology with expert craftsmanship to
              deliver unmatched quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold uppercase text-sm mb-5'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold uppercase text-sm mb-5'>
              Contact Info
            </h3>
            <ul className='space-y-3'>
              {contactInfo.map((item) => (
                <li key={item.id} className='flex items-start gap-3 text-sm'>
                  <item.icon className='h-5 w-5 shrink-0 mt-0.5' />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className='text-white font-semibold uppercase text-sm mb-5'>
              Opening Hours
            </h3>
            <ul className='space-y-3'>
              {openingHours.map((item) => (
                <li key={item.id} className='flex items-start gap-3 text-sm'>
                  <item.icon className='h-5 w-5 shrink-0 mt-0.5' />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='bg-[#0f0f0f] py-5 text-center text-sm'>
        <p>
          © {new Date().getFullYear()} HADIID INDUSTRIES LTD. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
