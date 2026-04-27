import { motion } from 'framer-motion'
import { Code2, Database, Brain, Zap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with React, TypeScript, and modern web technologies',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Integrating LLMs (Gemini 2.0) for intelligent decision-making in trading systems',
    },
    {
      icon: Database,
      title: 'Blockchain & Crypto',
      description: 'Developing cross-exchange arbitrage bots and automated trading systems',
    },
    {
      icon: Zap,
      title: 'Real-Time Systems',
      description: 'Creating high-performance async systems with WebSockets and background engines',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-300 space-y-4"
            >
              <p className="text-lg">
                I'm a passionate full-stack developer with expertise in building intelligent systems that combine AI, blockchain, and modern web technologies.
              </p>
              <p className="text-lg">
                My recent work includes developing <strong>ArbPro</strong>, an enterprise-grade AI-powered cryptocurrency arbitrage system with a 4-tier LLM multi-agent architecture using Gemini 2.0.
              </p>
              <p className="text-lg">
                I specialize in creating high-performance, scalable applications with React, TypeScript, Python, and real-time trading systems using WebSockets and async architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-gray-400 space-y-2">
                <p><strong>Education:</strong> Currently pursuing studies in Enterprise Application Development</p>
                <p><strong>Internships:</strong> CodeAlpha - Cybersecurity & Front-End Development</p>
                <p><strong>Location:</strong> Pakistan</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Mr-Saad1" className="text-blue-400 hover:text-blue-300">@Mr-Saad1</a></p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}