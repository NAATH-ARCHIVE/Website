import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Preserve Your Heritage?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of communities already preserving their cultural heritage with Naath Archive.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}