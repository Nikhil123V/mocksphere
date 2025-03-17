"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Plus, Settings, User, Video } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function VideoMeetingsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Video Meetings</h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Connect with interviewers or peers through high-quality video
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
                  <div className="flex justify-between items-center">
                    <CardTitle>Upcoming Meetings</CardTitle>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-1" /> New
                    </Button>
                  </div>
                  <CardDescription>Your scheduled video sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MeetingItem
                    title="Mock Interview: Frontend"
                    time="Today, 4:00 PM"
                    participants="John Doe"
                    active={true}
                  />
                  <MeetingItem title="Technical Assessment" time="Tomorrow, 10:30 AM" participants="Sarah Johnson" />
                  <MeetingItem title="Career Coaching" time="Mar 16, 2025, 2:00 PM" participants="Michael Brown" />
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
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="mr-2 h-4 w-4" /> Start Instant Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" /> Audio/Video Settings
                  </Button>
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
              <Card className="h-full">
                <CardHeader className="border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Meeting Room</CardTitle>
                      <CardDescription>Join your current meeting or prepare for your next one</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Next meeting in: 1h 23m
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center p-6 text-center">
                    <Video className="h-16 w-16 text-slate-400 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      Ready to join your meeting?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md">
                      Your upcoming interview with John Doe is scheduled for today at 4:00 PM. You can join the meeting
                      now to test your audio and video.
                    </p>
                    <div className="flex gap-3">
                      <Button className="bg-purple-600 hover:bg-purple-700">Join Meeting</Button>
                      <Button variant="outline">Test Audio & Video</Button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Meeting Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500 dark:text-slate-400">Topic:</span>
                            <span className="font-medium text-slate-900 dark:text-white">Mock Interview: Frontend</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 dark:text-slate-400">Time:</span>
                            <span className="font-medium text-slate-900 dark:text-white">Today, 4:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 dark:text-slate-400">Duration:</span>
                            <span className="font-medium text-slate-900 dark:text-white">45 minutes</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Interviewer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-3">
                            <User className="h-6 w-6 text-slate-500" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">John Doe</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Senior Frontend Developer</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MeetingItemProps {
  title: string
  time: string
  participants: string
  active?: boolean
}

function MeetingItem({ title, time, participants, active }: MeetingItemProps) {
  return (
    <div
      className={`p-3 rounded-md border ${
        active
          ? "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-900/20"
          : "border-slate-200 dark:border-slate-700"
      } hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors`}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="font-medium text-slate-900 dark:text-white flex items-center">
            {title}
            {active && (
              <span className="ml-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                Today
              </span>
            )}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{time}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300 mt-1 flex items-center">
            <User className="h-3 w-3 mr-1" /> {participants}
          </div>
        </div>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Video className="h-4 w-4 text-slate-500" />
        </Button>
      </div>
    </div>
  )
}

