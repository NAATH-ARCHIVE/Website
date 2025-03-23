import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Preserve Your Cultural Heritage
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Join Naath Archive to digitally preserve and share your community's stories, traditions, and artifacts for future generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">Start Archiving</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </motion.div>
      </div>
    </section>
  )
}