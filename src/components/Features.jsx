import { motion } from "framer-motion"
import { Archive, Shield, Users, Globe } from "lucide-react"

const features = [
  {
    icon: <Archive className="h-6 w-6" />,
    title: "Digital Preservation",
    description: "Securely store and preserve cultural artifacts, documents, and oral histories in digital format."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Storage",
    description: "Enterprise-grade security ensures your cultural heritage is protected for generations to come."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Collaboration",
    description: "Work together with community members to document and preserve shared cultural heritage."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Access",
    description: "Share your cultural heritage with the world while maintaining control over access and permissions."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Naath Archive?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}