"use client";

import { MapPin, Phone, Mail, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We will get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "C0, Penthouse Estate, Lugbe, Abuja.",
      href: "https://maps.google.com",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+234-810-266-7924",
      href: "tel:+2348102667924",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "contact@m1media.net",
      href: "mailto:contact@m1media.net",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Get in Touch
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">
            Let's Create Something Great!
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to transform your organization with technology solutions?
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={idx}
                href={info.href}
                className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">
                  {info.label}
                </h3>
                <p className="text-slate-50 font-semibold text-lg mb-4">
                  {info.value}
                </p>

                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-cyan-400 text-sm group-hover:gap-3 transition-all">
                  <span>Connect</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="relative p-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

          <div className="relative z-10 space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-slate-50">
                Send us a message
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact our team to discuss how M1 Media can help your
                organization achieve digital transformation and operational
                excellence. We're ready to partner with you on your technology
                journey.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="bg-slate-800/50 border-cyan-500/30 text-slate-50 placeholder:text-slate-400 focus:border-cyan-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-slate-800/50 border-cyan-500/30 text-slate-50 placeholder:text-slate-400 focus:border-cyan-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Phone Number (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="bg-slate-800/50 border-cyan-500/30 text-slate-50 placeholder:text-slate-400 focus:border-cyan-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project or how we can help..."
                          className="bg-slate-800/50 border-cyan-500/30 text-slate-50 placeholder:text-slate-400 focus:border-cyan-500 min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-cyan-500/10 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} M1 Media. Trusted Technology Solutions
            for Modern Organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
