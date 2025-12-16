"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Portfolio" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50'>
      {/* Top bar - always visible */}
      <div className='hidden lg:block bg-primary text-primary-foreground text-sm'>
        <div className='container mx-auto py-2.5 flex justify-between items-center'>
          <div className='flex items-center gap-8'>
            <a
              href='tel:+254759888333'
              className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <div className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'>
                <HiPhone className='h-3.5 w-3.5' />
              </div>
              <span className='font-medium'>0759 888 333</span>
            </a>
            <a
              href='mailto:inquiries@hadiidindustries.com'
              className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <div className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'>
                <HiMail className='h-3.5 w-3.5' />
              </div>
              <span>inquiries@hadiidindustries.com</span>
            </a>
          </div>
          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'>
                <HiLocationMarker className='h-3.5 w-3.5' />
              </div>
              <span>Kampala Road, Nairobi</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'>
                <FaClock className='h-3 w-3' />
              </div>
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={cn(
          "bg-background border-b transition-all duration-200 ",
          isScrolled
            ? "shadow-md border-border"
            : "border-transparent"
        )}>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logo.png'
              alt='Hadiid Industries'
              width={225}
              height={75}
              className='h-15 w-auto'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center gap-0.5'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-full",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className='hidden lg:flex items-center gap-3'>
            <Button
              variant='outline'
              size='sm'
              className='rounded-full px-5 border-primary/30 text-primary hover:bg-primary/5 hover:text-primary'
              asChild>
              <Link href='/contact-us'>Get a Quote</Link>
            </Button>
            <Button size='sm' className='rounded-full px-5 gap-2' asChild>
              <Link href='tel:+254759888333'>
                <HiPhone className='h-4 w-4' />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className='lg:hidden'>
                <button className='p-2 rounded-full hover:bg-accent transition-colors'>
                <HiMenu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
                </button>
            </SheetTrigger>
            <SheetContent side='right' className='w-80 p-0'>
              <div className='flex flex-col h-full'>
                {/* Mobile Menu Header */}
                <div className='flex items-center justify-between p-5 border-b bg-muted/30'>
                  <Link href='/'>
                    <Image
                      src='/images/favicon.png'
                      alt='Hadiid Industries'
                      width={180}
                      height={60}
                      className='h-12 w-auto'
                    />
                  </Link>
                </div>

                {/* Mobile Menu Links */}
                <nav className='flex-1 py-4'>
                  <ul className='space-y-1 px-3'>
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200",
                              pathname === link.href
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-accent"
                            )}>
                            {link.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile contact info */}
                <div className='px-5 py-4 border-t border-border bg-muted/30 space-y-3'>
                  <a
                    href='tel:+254759888333'
                    className='flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors'>
                    <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                      <HiPhone className='h-4 w-4 text-primary' />
                    </div>
                    <span className='font-medium'>0759 888 333</span>
                  </a>
                  <a
                    href='mailto:inquiries@hadiidindustries.com'
                    className='flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors'>
                    <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                      <HiMail className='h-4 w-4 text-primary' />
                    </div>
                    <span>inquiries@hadiidindustries.com</span>
                  </a>
                </div>

                {/* Mobile Menu Actions */}
                <div className='p-5 border-t space-y-3'>
                  <SheetClose asChild>
                    <Button className='w-full rounded-full gap-2' asChild>
                      <Link href='tel:+254759888333'>
                        <HiPhone className='h-4 w-4' />
                        Call Now
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant='outline'
                      className='w-full rounded-full'
                      asChild>
                      <Link href='/contact-us'>Request a Quote</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
