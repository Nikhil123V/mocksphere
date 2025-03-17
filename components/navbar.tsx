"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Interview So N
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/ai-interview"
            className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            AI Interview
          </Link>
          <Link
            href="/video-meetings"
            className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Video Meetings
          </Link>
          <Link
            href="/peer-interview"
            className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Peer Interview
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/ai-interview"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Interview
            </Link>
            <Link
              href="/video-meetings"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Video Meetings
            </Link>
            <Link
              href="/peer-interview"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Peer Interview
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

