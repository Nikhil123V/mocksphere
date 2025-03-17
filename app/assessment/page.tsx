"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AssessmentPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState<string | null>(null)

  interface Answers {
    experience?: string
    preference?: string
  }

  const handleAnswerChange = (question: string, answer: string) => {
    setAnswers((prevAnswers: Answers) => ({ ...prevAnswers, [question]: answer }))
  }

  const handleSubmit = async () => {
    // Simulate AI processing
    const recommendation = await getRecommendation(answers)
    setResult(recommendation)
  }

  const getRecommendation = async (answers: Answers): Promise<string> => {
    // Simulate AI processing logic
    if (answers.preference === "AI") {
      return "AI Mock Interview"
    } else if (answers.preference === "video") {
      return "Video Meetings"
    } else {
      return "Person-to-Person"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {result ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Your Recommended Interview Type
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">{result}</p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href={
                result === "AI Mock Interview" ? "https://ai-mock-interview-two-dun.vercel.app/" :
                result === "Video Meetings" ? "https://connect-hub-jxr2.vercel.app/" :
                "https://connect-hub-jxr2.vercel.app/"
              }>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Take the Assessment
            </h1>
            {step === 1 && (
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">What is your experience level?</p>
                <Button onClick={() => { handleAnswerChange("experience", "beginner"); setStep(2) }}>Beginner</Button>
                <Button onClick={() => { handleAnswerChange("experience", "intermediate"); setStep(2) }}>Intermediate</Button>
                <Button onClick={() => { handleAnswerChange("experience", "advanced"); setStep(2) }}>Advanced</Button>
              </div>
            )}
            {step === 2 && (
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">What type of interview do you prefer?</p>
                <Button onClick={() => { handleAnswerChange("preference", "AI"); handleSubmit() }}>AI Mock Interview</Button>
                <Button onClick={() => { handleAnswerChange("preference", "video"); handleSubmit() }}>Video Meetings</Button>
                <Button onClick={() => { handleAnswerChange("preference", "person"); handleSubmit() }}>Person-to-Person</Button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}