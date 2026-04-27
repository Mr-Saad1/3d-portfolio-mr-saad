import { motion } from 'framer-motion'
import { Mail, Github } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@Mr-Saad1',
      link: 'https://github.com/Mr-Saad1',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Contact via GitHub',
      link: 'https://github.com/Mr-Saad1',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{ y: -5 }}
              >
                <method.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{method.label}</h3>
                <p className="text-gray-400">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://github.com/Mr-Saad1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}