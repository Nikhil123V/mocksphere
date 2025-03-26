"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Users, Video } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 relative">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <Image
          src={'/logo.jpg'}
          alt="Interview So N"
          width={120}
          height={50}
          className="rounded-2xl shadow-lg w-20 h-auto md:w-30 md:h-auto lg:w-40 lg:h-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="w-full h-auto mb-6 justify-center flex"> 
            <Image
              src={'/hero-logo.jpeg'}
              alt="Interview o N"
              
              width={200}
              height={200}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Ace Your Next Interview with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              MockSphere
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
            Practice, connect, and perfect your interview skills with our comprehensive platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/get-started">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Features</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to prepare for your next interview
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Mock Interview */}
            <FeatureCard
              icon={<Bot className="h-10 w-10 text-purple-600" />}
              title="AI Mock Interview"
              description="Practice with our AI interviewer that adapts to your responses and provides real-time feedback."
              link="https://ai-mock-interview-two-dun.vercel.app/"
              delay={0.1}
            />

            {/* Video Meetings */}
            <FeatureCard
              icon={<Video className="h-10 w-10 text-purple-600" />}
              title="Video Meetings"
              description="Connect with interviewers or peers through our high-quality video platform."
              link="https://connect-hub-jxr2.vercel.app/"
              delay={0.2}
            />

            {/* Person-to-Person */}
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="Person-to-Person"
              description="Schedule mock interviews with professionals in your field for personalized feedback."
              link="/peer-interview"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Get started in just a few simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Choose Your Mode"
              description="Select from AI interview, video meetings, or person-to-person sessions."
              delay={0.1}
            />
            <StepCard
              number="02"
              title="Customize Your Experience"
              description="Set your industry, experience level, and specific interview focus."
              delay={0.2}
            />
            <StepCard
              number="03"
              title="Practice & Improve"
              description="Get feedback, review your performance, and track your progress over time."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ace Your Next Interview?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of job seekers who have improved their interview skills with Interview So N.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link href="/get-started">Get Started Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  delay: number
}

function FeatureCard({ icon, title, description, link, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200 dark:border-slate-700"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <Button asChild variant="link" className="p-0 text-purple-600 dark:text-purple-400">
        <Link href={link}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  )
}

interface StepCardProps {
  number: string
  title: string
  description: string
  delay: number
}

function StepCard({ number, title, description, delay }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
    >
      <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  )
}
