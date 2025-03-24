import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { WaitingListDialog } from "./WaitingListDialog"
import { LearnMoreDialog } from "./LearnMoreDialog"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: '#10172a' }}
        >
          Preserve Your Cultural Heritage
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join Naath Archive to digitally preserve and share your community's stories, traditions, and artifacts for future generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <WaitingListDialog>
            <Button size="lg">Start Archiving</Button>
          </WaitingListDialog>
          <LearnMoreDialog>
            <Button size="lg" variant="outline">Learn More</Button>
          </LearnMoreDialog>
        </motion.div>
      </div>
    </section>
  )
}