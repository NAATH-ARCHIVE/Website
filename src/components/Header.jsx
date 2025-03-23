import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Naath Archive" className="h-8 w-8" />
          <span className="text-xl font-bold">Naath Archive</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}