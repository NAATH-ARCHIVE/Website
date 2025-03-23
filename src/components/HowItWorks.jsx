import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account and set up your community profile."
  },
  {
    number: "02",
    title: "Upload Content",
    description: "Start uploading your cultural artifacts, stories, and documents."
  },
  {
    number: "03",
    title: "Organize",
    description: "Categorize and tag your content for easy discovery."
  },
  {
    number: "04",
    title: "Share",
    description: "Share your heritage with your community and the world."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}