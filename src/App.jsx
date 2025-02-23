import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function App() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">AI-Powered</span><br />
          Business Automation
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Transform your business with cutting-edge AI solutions that streamline operations and boost productivity
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: 'Process Automation',
                description: 'Automate repetitive tasks and workflows with AI-powered solutions'
              },
              {
                title: 'Smart Analytics',
                description: 'Gain valuable insights with advanced data analytics and AI predictions'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored AI solutions designed specifically for your business needs'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">Get started with our AI solutions today and stay ahead of the competition</p>
            <button className="btn-primary">Contact Us</button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
