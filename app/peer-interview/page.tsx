"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Filter, Search, Star, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PeerInterviewPage() {
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
              Person-to-Person Mock Interviews
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Connect with professionals and peers for realistic interview practice
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
                  <CardTitle>Find Interviewers</CardTitle>
                  <CardDescription>Connect with professionals in your field</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by skill, industry, or name..."
                        className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Filters</span>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Filter className="h-3 w-3 mr-1" /> Filter
                    </Button>
                  </div>

                  <Tabs defaultValue="recommended">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="recommended">Top</TabsTrigger>
                      <TabsTrigger value="industry">Industry</TabsTrigger>
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recommended" className="space-y-4">
                      <InterviewerCard
                        name="Emily Chen"
                        role="Senior Product Manager"
                        company="TechCorp"
                        rating={4.9}
                        reviews={124}
                        available={true}
                      />
                      <InterviewerCard
                        name="David Wilson"
                        role="Software Engineer"
                        company="InnovateTech"
                        rating={4.7}
                        reviews={89}
                        available={true}
                      />
                      <InterviewerCard
                        name="Sarah Johnson"
                        role="UX Designer"
                        company="DesignHub"
                        rating={4.8}
                        reviews={56}
                      />
                    </TabsContent>
                    <TabsContent value="industry" className="space-y-4">
                      <InterviewerCard
                        name="Michael Brown"
                        role="Data Scientist"
                        company="DataCorp"
                        rating={4.6}
                        reviews={72}
                        available={true}
                      />
                      <InterviewerCard
                        name="Jessica Lee"
                        role="Marketing Manager"
                        company="BrandBoost"
                        rating={4.5}
                        reviews={43}
                      />
                    </TabsContent>
                    <TabsContent value="recent" className="space-y-4">
                      <InterviewerCard
                        name="Robert Taylor"
                        role="Frontend Developer"
                        company="WebWorks"
                        rating={4.4}
                        reviews={38}
                        available={true}
                      />
                      <InterviewerCard
                        name="Amanda Garcia"
                        role="HR Specialist"
                        company="TalentFirst"
                        rating={4.9}
                        reviews={112}
                      />
                    </TabsContent>
                  </Tabs>
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
                      <CardTitle>Interviewer Profile</CardTitle>
                      <CardDescription>View details and schedule a session</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                        <User className="h-24 w-24 text-slate-400" />
                      </div>

                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Emily Chen</h3>
                        <p className="text-slate-600 dark:text-slate-300">Senior Product Manager</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">TechCorp</p>

                        <div className="flex items-center justify-center md:justify-start mt-2">
                          <div className="flex items-center text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">4.9 (124 reviews)</span>
                        </div>

                        <div className="mt-4">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">Schedule Interview</Button>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">About</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Product leader with 8+ years of experience at top tech companies. I specialize in helping
                        candidates prepare for product management interviews, with expertise in product strategy,
                        execution, and leadership.
                      </p>

                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Expertise</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                          Product Strategy
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                          User Research
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                          Roadmapping
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                          Stakeholder Management
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                          Technical Product Management
                        </span>
                      </div>

                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Availability</h3>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        <Button variant="outline" className="text-sm">
                          Mon
                        </Button>
                        <Button variant="outline" className="text-sm">
                          Tue
                        </Button>
                        <Button
                          variant="outline"
                          className="text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
                        >
                          Wed
                        </Button>
                        <Button variant="outline" className="text-sm">
                          Thu
                        </Button>
                        <Button
                          variant="outline"
                          className="text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
                        >
                          Fri
                        </Button>
                        <Button variant="outline" className="text-sm">
                          Sat
                        </Button>
                        <Button variant="outline" className="text-sm">
                          Sun
                        </Button>
                      </div>

                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Reviews</h3>
                      <div className="space-y-3">
                        <ReviewCard
                          name="Alex Thompson"
                          date="Mar 10, 2025"
                          rating={5}
                          comment="Emily provided excellent feedback on my product case study. Her insights helped me land a PM role at a top tech company!"
                        />
                        <ReviewCard
                          name="Jennifer Wu"
                          date="Mar 5, 2025"
                          rating={5}
                          comment="Very thorough and professional. Emily's questions were challenging but realistic, and her feedback was actionable."
                        />
                      </div>
                    </div>
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

interface InterviewerCardProps {
  name: string
  role: string
  company: string
  rating: number
  reviews: number
  available?: boolean
}

function InterviewerCard({ name, role, company, rating, reviews, available }: InterviewerCardProps) {
  return (
    <div className="p-3 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
          <User className="h-6 w-6 text-slate-500" />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <div className="font-medium text-slate-900 dark:text-white">{name}</div>
            {available && (
              <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                Available
              </span>
            )}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{role}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{company}</div>
          <div className="flex items-center mt-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs text-slate-600 dark:text-slate-300 ml-1">
              {rating} ({reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ReviewCardProps {
  name: string
  date: string
  rating: number
  comment: string
}

function ReviewCard({ name, date, rating, comment }: ReviewCardProps) {
  return (
    <div className="p-3 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
      <div className="flex justify-between items-start mb-2">
        <div className="font-medium text-slate-900 dark:text-white">{name}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{date}</div>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < rating ? "text-yellow-500 fill-current" : "text-slate-300"}`} />
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{comment}</p>
    </div>
  )
}

