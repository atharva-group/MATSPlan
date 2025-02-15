/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Roboto_Mono, Work_Sans } from 'next/font/google'

interface TypeWriterProps {
  text: string;
  delay?: number;
}

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono'
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans'
})

const TypeWriter = ({ text, delay = 0 }: TypeWriterProps) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={robotoMono.className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`flex flex-col min-h-screen ${workSans.className}`}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <header className="bg-white text-black shadow-md relative z-10 h-14 sm:h-16">
        <nav className="container mx-auto h-full flex justify-between items-center px-4">
          <Link href="/" className={`text-2xl sm:text-3xl font-bold ${robotoMono.className}`}>MATSPlan</Link>
          {/* Mobile menu button */}
          <Button variant="ghost" className="p-1 sm:hidden text-black" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="#home" className="hover:underline text-black">Home</Link>
            <Link href="#about" className="hover:underline text-black">About</Link>
            <Link href="#services" className="hover:underline text-black">Services</Link>
            <Link href="#contact" className="hover:underline text-black">Contact</Link>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-primary text-primary-foreground absolute top-full left-0 right-0 shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="#home" className="hover:underline" onClick={toggleMobileMenu}>Home</Link>
              <Link href="#about" className="hover:underline" onClick={toggleMobileMenu}>About</Link>
              <Link href="#services" className="hover:underline" onClick={toggleMobileMenu}>Services</Link>
              <Link href="#contact" className="hover:underline" onClick={toggleMobileMenu}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side content */}
              <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
                <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${robotoMono.className}`}>
                  MATSPlan
                </h1>
                <p className="text-lg sm:text-xl mb-6">
                  <TypeWriter text="End to End Construction Solutions at your Fingertips" delay={0.2} />
                </p>
                <div>
                  <Button size="lg" className="font-mono text-lg">Get Started</Button>
                </div>
              </div>

              {/* Right side image */}
              <div className="flex justify-center md:w-1/2 border-1 border-gray rounded-lg">
                <Image
                  src="/home/banner.png"
                  alt="Building interior structure"
                  width={600}
                  height={600}
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
                <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${robotoMono.className}`}>About Us</h2>
                <p className="text-lg sm:text-xl mb-6">
                  At MATSPlan, we deliver precise cost estimation, advanced BIM services, and takeoff solutions. Our mission is to help construction teams optimize budgets, enhance collaboration, and minimize waste.
                </p>
                <p className="text-lg sm:text-xl">
                  With years of experience, our team specializes in providing detailed takeoff reports, cost analysis, and cutting-edge BIM services for residential, commercial, and infrastructure projects. Alongside cost estimation, we also provide construction solutions for your projects.
                </p>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center">
                <Image
                  src="/home/2.png"
                  alt="Industrial facility"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center ${robotoMono.className}`}>Our Services</h2>
            <div className="space-y-20">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 pr-8">
                  <h3 className={`text-2xl sm:text-3xl font-semibold mb-4 ${robotoMono.className}`}>Material Takeoff & Cost Estimation</h3>
                  <p className="text-lg sm:text-xl mb-4">
                    We provide detailed material takeoffs and cost estimations, helping you optimize your project budget and reduce waste. Our expert team uses advanced tools to ensure accuracy and efficiency.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl">
                    <li>Precise quantity calculations</li>
                    <li>Detailed cost breakdowns</li>
                    <li>Waste reduction strategies</li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                  <Image
                    src="/home/est.png"
                    alt="Wireframe 3D model"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2">
                  <h3 className={`text-2xl sm:text-3xl font-semibold mb-4 ${robotoMono.className}`}>Building Information Modeling (BIM)</h3>
                  <p className="text-lg sm:text-xl mb-4">
                    Our BIM services facilitate better project visualization, collaboration, and decision-making throughout the construction lifecycle. We create detailed 3D models that integrate all aspects of your project.
                  </p>
                  <ul className="list-disc ml-4 space-y-2 text-lg sm:text-xl">
                    <li>3D modeling and visualization</li>
                    <li>Clash detection and resolution</li>
                    <li>Project lifecycle management</li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <Image
                    src="/home/1.png"
                    alt="Render vs BIM model"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center ${robotoMono.className}`}>Contact Us</h2>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-base sm:text-lg mb-6">We're here to help with your cost estimation and BIM needs. Fill out the form and we'll get back to you as soon as possible.</p>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfKMZRZVO6-OZhZpuSNkOWD_3uV8PiVG2-9wA6TIRr2hIEDAg/viewform?embedded=true" 
                  width="100%" 
                  height="684" 
                  className="border-0"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center">
                <Image
                  src="/home/contact.png"
                  alt="Contact us"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${robotoMono.className}`}>MATSPlan</h3>
              <p>Revolutionizing construction with precision estimation and BIM excellence.</p>
            </div>
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${robotoMono.className}`}>Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#home" className="hover:underline">Home</Link></li>
                <li><Link href="#about" className="hover:underline">About</Link></li>
                <li><Link href="#services" className="hover:underline">Services</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${robotoMono.className}`}>Contact Info</h4>
              <p>7389052014</p>
              <p>info@matsplan.com</p>
              <p>Civil Lines, Nagpur MH</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MATSPlan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
