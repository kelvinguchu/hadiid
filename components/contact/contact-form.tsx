"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView } from "motion/react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { id: "bus-quote", label: "Bus Body Quote" },
  { id: "trailer-quote", label: "Trailer Quote" },
  { id: "truck-fabrication", label: "Truck Fabrication" },
  { id: "accident-repair", label: "Accident Repair" },
  { id: "specialized", label: "Specialized Fabrication" },
  { id: "general", label: "General Question" },
];

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Card className='h-full border-0 shadow-xl'>
          <CardContent className='p-8 flex flex-col items-center justify-center text-center min-h-96'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className='w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6'>
              <FaCheckCircle className='w-10 h-10 text-green-600 dark:text-green-400' />
            </motion.div>
            <h3 className='text-2xl font-bold font-poppins mb-3'>Thank You!</h3>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='h-full'>
      <Card className='h-full border-0 shadow-xl'>
        <CardContent className='p-6 md:p-8 h-full flex flex-col'>
          <div className='w-12 h-1 bg-primary mb-4' />
          <h3 className='text-2xl font-bold font-poppins mb-2'>
            Send Us a <span className='text-primary'>Message</span>
          </h3>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm'>
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='space-y-2'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                placeholder='John Doe'
                {...register("name")}
                className={`h-12 rounded-xl ${
                  errors.name ? "border-destructive" : ""
                }`}
              />
              {errors.name && (
                <p className='text-destructive text-sm'>
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className='space-y-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                {...register("email")}
                className={`h-12 rounded-xl ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && (
                <p className='text-destructive text-sm'>
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className='space-y-2'>
              <Label htmlFor='inquiry-type'>Inquiry Type</Label>
              <Select onValueChange={(value) => setValue("inquiryType", value)}>
                <SelectTrigger
                  className={`h-12 rounded-xl ${
                    errors.inquiryType ? "border-destructive" : ""
                  }`}>
                  <SelectValue placeholder='Select an inquiry type' />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type.id} value={type.label}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.inquiryType && (
                <p className='text-destructive text-sm'>
                  {errors.inquiryType.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className='space-y-2'>
              <Label htmlFor='message'>Your Message</Label>
              <Textarea
                id='message'
                rows={5}
                placeholder='Hello, I would like to inquire about...'
                {...register("message")}
                className={`rounded-xl resize-none ${
                  errors.message ? "border-destructive" : ""
                }`}
              />
              {errors.message && (
                <p className='text-destructive text-sm'>
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}>
              <Button
                type='submit'
                size='lg'
                className='w-full h-12 rounded-xl text-base group shadow-lg shadow-primary/25'
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <ImSpinner2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className='ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
