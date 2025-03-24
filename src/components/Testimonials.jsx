import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Naath Archive has helped us preserve our community's stories for future generations.",
    author: "Nyaneg Gatluak",
    role: "Community Leader"
  },
  {
    quote: "An incredible platform that makes cultural preservation accessible to everyone.",
    author: "Pual Bayoch",
    role: "Heritage Curator"
  },
  {
    quote: "The collaborative features have brought our community closer together.",
    author: "Buay Reath",
    role: "Cultural Researcher"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}