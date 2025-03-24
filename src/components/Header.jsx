import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { WaitingListDialog } from "./WaitingListDialog"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Naath Archive" className="h-8 w-8" />
          <span className="text-xl font-bold" style={{ color: '#b36f3f' }}>Naath Archive</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">How It Works</a>
          <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Testimonials</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline">Sign In</Button>
          <WaitingListDialog>
            <Button>Get Started</Button>
          </WaitingListDialog>
        </div>
      </div>
    </motion.header>
  )
}