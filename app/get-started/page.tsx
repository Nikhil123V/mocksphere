"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Bot, Check, Users, Video } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Get Started with Interview So N
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Choose the interview experience that's right for you
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 text-purple-600">
                  <Bot className="h-12 w-12" />
                </div>
                <CardTitle>AI Mock Interview</CardTitle>
                <CardDescription>Practice with our AI interviewer that adapts to your responses</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Features:</h3>
                  <ul className="space-y-2">
                    <FeatureItem text="24/7 availability" />
                    <FeatureItem text="Personalized feedback" />
                    <FeatureItem text="Industry-specific questions" />
                    <FeatureItem text="Performance analytics" />
                    <FeatureItem text="Unlimited practice sessions" />
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="https://ai-mock-interview-two-dun.vercel.app/">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full flex flex-col border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10">
              <CardHeader>
                <div className="mb-4 text-purple-600">
                  <Video className="h-12 w-12" />
                </div>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Connect with interviewers through our high-quality video platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Features:</h3>
                  <ul className="space-y-2">
                    <FeatureItem text="HD video quality" />
                    <FeatureItem text="Screen sharing" />
                    <FeatureItem text="Interview recording" />
                    <FeatureItem text="Calendar integration" />
                    <FeatureItem text="Instant or scheduled meetings" />
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="https://connect-hub-jxr2.vercel.app/">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 text-purple-600">
                  <Users className="h-12 w-12" />
                </div>
                <CardTitle>Person-to-Person</CardTitle>
                <CardDescription>Schedule mock interviews with professionals in your field</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Features:</h3>
                  <ul className="space-y-2">
                    <FeatureItem text="Industry experts" />
                    <FeatureItem text="Detailed feedback" />
                    <FeatureItem text="Realistic interview scenarios" />
                    <FeatureItem text="Career advice" />
                    <FeatureItem text="Follow-up sessions" />
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/peer-interview">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Not sure which option is right for you?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Take our quick assessment to get a personalized recommendation based on your goals and experience level.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/assessment">Take Assessment</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

interface FeatureItemProps {
  text: string
}

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-1 bg-green-100 dark:bg-green-900 rounded-full p-0.5">
        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
      </div>
      <span className="text-slate-700 dark:text-slate-300">{text}</span>
    </li>
  )
}