import { motion } from 'framer-motion'

export function ExperienceItem({ date, title, company, description }: { date: string; title: string; company: string; description: string }) {
    return (
      <motion.div 
        className="mb-8 flex justify-between items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="order-1 w-5/12"></div>
        <div className="z-10 flex items-center order-1 bg-purple-400 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">{date[0]}</h1>
        </div>
        <div className="order-1 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="font-bold text-purple-600 dark:text-purple-400 text-xl">{title}</h3>
          <h4 className="font-semibold text-lg mb-2">{company}</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
        </div>
      </motion.div>
    )
  }