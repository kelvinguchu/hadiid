"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

interface InfoBlockProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly content: React.ReactNode;
  readonly delay?: number;
  readonly isInView: boolean;
}

function InfoBlock({
  icon,
  title,
  content,
  delay = 0,
  isInView,
}: InfoBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className='flex gap-4 items-start group'>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors'>
        {icon}
      </motion.div>
      <div>
        <h4 className='font-semibold text-foreground mb-1'>{title}</h4>
        <div className='text-muted-foreground'>{content}</div>
      </div>
    </motion.div>
  );
}

export function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { id: "facebook", icon: FaFacebookF, href: "#", label: "Facebook" },
    { id: "twitter", icon: FaTwitter, href: "#", label: "Twitter" },
    { id: "linkedin", icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { id: "instagram", icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className='h-full'>
      <Card className='h-full border-0 shadow-xl bg-linear-to-br from-card to-card/80'>
        <CardContent className='p-6 md:p-8 h-full flex flex-col'>
          <div className='w-12 h-1 bg-primary mb-4' />
          <h3 className='text-2xl font-bold font-poppins mb-2'>
            Contact <span className='text-primary'>Information</span>
          </h3>

          <div className='space-y-6'>
            <InfoBlock
              icon={<FaMapMarkerAlt className='h-5 w-5 text-primary' />}
              title='Our Workshop'
              isInView={isInView}
              delay={0.1}
              content={
                <>
                  Kampala Road, Industrial Area,
                  <br />
                  Nairobi, Kenya
                </>
              }
            />

            <InfoBlock
              icon={<FaPhone className='h-5 w-5 text-primary' />}
              title='Call Us'
              isInView={isInView}
              delay={0.2}
              content={
                <div className='flex flex-col gap-1'>
                  <a
                    href='tel:0759888333'
                    className='hover:text-primary transition-colors'>
                    0759 888 333
                  </a>
                  <a
                    href='tel:0759999666'
                    className='hover:text-primary transition-colors'>
                    0759 999 666
                  </a>
                </div>
              }
            />

            <InfoBlock
              icon={<FaEnvelope className='h-5 w-5 text-primary' />}
              title='Email Us'
              isInView={isInView}
              delay={0.3}
              content={
                <a
                  href='mailto:inquiries@hadiidindustries.com'
                  className='hover:text-primary transition-colors'>
                  inquiries@hadiidindustries.com
                </a>
              }
            />

            <InfoBlock
              icon={<FaClock className='h-5 w-5 text-primary' />}
              title='Working Hours'
              isInView={isInView}
              delay={0.4}
              content={
                <>
                  Mon - Fri: 8:00 AM - 6:00 PM
                  <br />
                  Sat: 8:00 AM - 1:00 PM
                </>
              }
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-8 pt-8 border-t border-border'>
            <p className='text-sm text-muted-foreground mb-4'>
              Follow us on social media
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300'>
                  <social.icon className='h-4 w-4' />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
