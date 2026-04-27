import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'ArbPro - AI Arbitrage Bot',
      description: 'Enterprise-grade cryptocurrency arbitrage system with 4-tier LLM multi-agent architecture, real-time trading execution, and AI-powered decision making.',
      tech: ['Python', 'TypeScript', 'FastAPI', 'React', 'Gemini 2.0', 'CCXT'],
      github: 'https://github.com/Mr-Saad1/ArbitrageBotFYP',
      image: '🤖',
      highlights: [
        '4-Tier LLM Multi-Agent System',
        'Non-blocking async architecture',
        'Real-time WebSocket streaming',
        'SQLite WAL-mode database',
      ],
    },
    {
      title: 'Crypto Arbitrage Bot',
      description: 'Automated trading bot scanning multiple crypto exchanges for price differences and executing profitable trades with email notifications.',
      tech: ['Python', 'CCXT', 'Binance', 'Coinbase', 'Kraken'],
      github: 'https://github.com/Mr-Saad1/crypto-arbitrage-bot',
      image: '💰',
      highlights: [
        'Multi-exchange price monitoring',
        'Automated trade execution',
        'Email alert system',
        '24/7 deployment ready',
      ],
    },
    {
      title: 'CodeAlpha Cybersecurity Tasks',
      description: 'Internship project covering advanced cybersecurity topics including network security, encryption, and vulnerability assessment.',
      tech: ['Python', 'Security', 'Network Analysis'],
      github: 'https://github.com/Mr-Saad1/CodeAlpha_CyberSecurity_Tasks',
      image: '🔐',
      highlights: [
        'Network security protocols',
        'Encryption algorithms',
        'Vulnerability testing',
        'Security best practices',
      ],
    },
    {
      title: 'CodeAlpha Front-End Tasks',
      description: 'Internship deliverables showcasing modern front-end development with responsive design, animations, and interactive components.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Mr-Saad1/CodeAlpha_Front-End_tasks',
      image: '🎨',
      highlights: [
        'Responsive layouts',
        'Interactive components',
        'CSS animations',
        'Modern UI patterns',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="text-5xl mb-4">{project.image}</div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-400">• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}