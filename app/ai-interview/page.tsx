"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Bot, Briefcase, Code, Cpu, FileText, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AIInterviewPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">AI Mock Interview</h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Practice with our AI interviewer and receive instant feedback
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Interview Settings</CardTitle>
                  <CardDescription>Customize your interview experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="role">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="role">Role</TabsTrigger>
                      <TabsTrigger value="level">Level</TabsTrigger>
                      <TabsTrigger value="focus">Focus</TabsTrigger>
                    </TabsList>
                    <TabsContent value="role" className="space-y-4">
                      <InterviewOption icon={<Code />} label="Software Engineer" />
                      <InterviewOption icon={<Briefcase />} label="Product Manager" />
                      <InterviewOption icon={<Cpu />} label="Data Scientist" />
                      <InterviewOption icon={<FileText />} label="Custom Role" />
                    </TabsContent>
                    <TabsContent value="level" className="space-y-4">
                      <InterviewOption icon={<FileText />} label="Entry Level" />
                      <InterviewOption icon={<FileText />} label="Mid Level" />
                      <InterviewOption icon={<FileText />} label="Senior Level" />
                    </TabsContent>
                    <TabsContent value="focus" className="space-y-4">
                      <InterviewOption icon={<FileText />} label="Technical Skills" />
                      <InterviewOption icon={<FileText />} label="Behavioral" />
                      <InterviewOption icon={<FileText />} label="Problem Solving" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Interview History</CardTitle>
                  <CardDescription>Your recent practice sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <HistoryItem title="Software Engineer Interview" date="Today, 2:30 PM" score="85/100" />
                  <HistoryItem title="Behavioral Questions" date="Yesterday, 10:15 AM" score="92/100" />
                  <HistoryItem title="Data Structures & Algorithms" date="Mar 12, 2025" score="78/100" />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 text-purple-600 mr-2" />
                    <CardTitle>Interview Assistant</CardTitle>
                  </div>
                  <CardDescription>Your AI interviewer will ask questions and provide feedback</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto p-0">
                  <div className="p-4 space-y-4 h-[500px] overflow-y-auto">
                    <ChatMessage
                      isBot={true}
                      message="Hello! I'm your AI interview assistant. Today, I'll be conducting a mock interview for a Software Engineer position. Are you ready to begin?"
                    />
                    <ChatMessage isBot={false} message="Yes, I'm ready to start the interview." />
                    <ChatMessage
                      isBot={true}
                      message="Great! Let's start with a common question. Can you tell me about a challenging project you worked on and how you overcame the obstacles you faced?"
                    />
                    <ChatMessage
                      isBot={false}
                      message="In my previous role, I worked on a real-time data processing system that had performance issues. The system was processing millions of events per day but was experiencing significant latency..."
                    />
                    <ChatMessage
                      isBot={true}
                      message="That's a good example. You've highlighted the problem clearly. Could you elaborate more on the specific technical solutions you implemented and how you measured the success of your changes?"
                    />
                  </div>
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your response..."
                      className="flex-grow px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface InterviewOptionProps {
  icon: React.ReactNode
  label: string
}

function InterviewOption({ icon, label }: InterviewOptionProps) {
  return (
    <div className="flex items-center p-3 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
      <div className="mr-3 text-purple-600">{icon}</div>
      <span className="text-slate-900 dark:text-white">{label}</span>
    </div>
  )
}

interface HistoryItemProps {
  title: string
  date: string
  score: string
}

function HistoryItem({ title, date, score }: HistoryItemProps) {
  return (
    <div className="flex justify-between items-center p-3 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
      <div>
        <div className="font-medium text-slate-900 dark:text-white">{title}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{date}</div>
      </div>
      <div className="text-green-600 font-medium">{score}</div>
    </div>
  )
}

interface ChatMessageProps {
  isBot: boolean
  message: string
}

function ChatMessage({ isBot, message }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-tl-none"
            : "bg-purple-600 text-white rounded-tr-none"
        }`}
      >
        {message}
      </div>
    </div>
  )
}

