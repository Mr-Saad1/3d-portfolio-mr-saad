import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js'],
    },
    {
      category: 'Backend',
      skills: ['Python', 'FastAPI', 'SQLite', 'WebSockets', 'Node.js', 'REST APIs'],
    },
    {
      category: 'AI & ML',
      skills: ['Gemini 2.0', 'LLM Integration', 'Multi-Agent Systems', 'Prompt Engineering'],
    },
    {
      category: 'Blockchain & Trading',
      skills: ['CCXT', 'Binance API', 'Bybit API', 'Crypto Trading', 'Arbitrage Systems'],
    },
    {
      category: 'Security',
      skills: ['Network Security', 'Encryption', 'Vulnerability Assessment', 'API Security'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vite', 'Docker', 'Netlify', 'PythonAnywhere'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}