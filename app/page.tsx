"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Gift, Shield, Sparkles, Star, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as Variants;

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const particleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    x: [0, Math.random() * 200 - 100],
    y: [0, Math.random() * 200 - 100],
    transition: {
      duration: 3 + Math.random() * 2,
      delay: i * 0.1,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    },
  }),
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 8 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        />
      ))}
    </div>
  );
};

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/blink.png" alt="Blink" width={32} height={32} />
            <span className="text-xl font-bold text-foreground">Blink</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="sm" className="rounded-full">
              <Link href="/dashboard">Try Blink</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <section
        ref={heroRef}
        className="relative bg-black text-white overflow-hidden"
      >
        <FloatingParticles />
        <motion.div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0.4, y: parallaxY, scale: parallaxScale }}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
          >
            <Image
              src="/large-golden-bitcoin-coin-with-intricate-details-o.jpg"
              alt="Bitcoin"
              width={900}
              height={900}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative container mx-auto px-4 py-32 md:py-40 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            Bitcoin in a <span className="text-primary italic">Blink</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance"
          >
            Send, receive, and gift Bitcoin instantly with Blink. Experience the
            future of digital currency with our fast, secure, and user-friendly
            app.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pointer-events-auto"
            >
              <Button size="lg" className="text-base rounded-lg">
                Get Started
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pointer-events-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-base rounded-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="features"
        className="container mx-auto px-4 py-20 bg-background"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
          >
            Why Choose Blink?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-balance"
          >
            Blink offers a seamless Bitcoin experience with top-notch security,
            lightning-fast transactions, and the ability to gift Bitcoin to
            friends and family.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeUp}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Secure Transactions</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Your Bitcoin is protected with advanced security measures,
                ensuring safe and reliable transactions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Instant Payments</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Send and receive Bitcoin instantly, anywhere in the world, with
                our lightning-fast payment network.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Gift className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Bitcoin Gifting</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Share the gift of Bitcoin with loved ones. Blink makes it easy
                to send Bitcoin as a thoughtful and modern gift.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        className="container mx-auto px-4 py-20 bg-muted/30"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-muted-foreground text-center mb-16 text-balance"
          >
            Getting started with Blink is as easy as one, two, three.
          </motion.p>
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Download the App</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get Blink on your iOS or Android device from the App Store or
                  Google Play.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fund Your Wallet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add Bitcoin to your wallet securely using your preferred
                  payment method.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Start Transacting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're all set! Send, receive, and gift Bitcoin with ease and
                  confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="container mx-auto px-4 py-20 bg-background"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
          >
            Loved by Users Worldwide
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-muted-foreground text-center mb-16 text-balance"
          >
            Don't just take our word for it. Here's what our users have to say
            about Blink.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
                    "Blink has revolutionized how I handle Bitcoin. It's
                    incredibly fast and secure, making transactions a breeze."
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-primary/20 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Sarah</p>
                      <p className="text-xs text-muted-foreground">
                        Bitcoin Enthusiast
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
                    "I love the gifting feature! It's the perfect way to
                    introduce friends and family to Bitcoin."
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-accent/20 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Mark</p>
                      <p className="text-xs text-muted-foreground">
                        Early Adopter
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
                    "The user interface is so intuitive. I was able to start
                    using Blink right away without any issues."
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-primary/30 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Emily</p>
                      <p className="text-xs text-muted-foreground">New User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-primary border-0 text-white overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <CardContent className="pt-16 pb-16 text-center px-8 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    Ready to Experience Blink?
                  </h2>
                  <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto text-balance">
                    Join thousands of users who trust Blink for their Bitcoin
                    transactions.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-base rounded-full bg-white text-primary hover:bg-white/90 relative overflow-hidden group"
                    >
                      <motion.span
                        className="relative z-10 flex items-center gap-2"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        Get Started Now
                      </motion.span>
                      <motion.span
                        className="absolute inset-0 flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="h-4 w-4" />
                        Get Started Now
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/blink.png" alt="Blink" width={24} height={24} />
              <span className="text-lg font-bold">Blink</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            © 2025 Blink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
