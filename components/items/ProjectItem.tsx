import { motion } from "framer-motion";

export function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
    return (
      <motion.div 
        className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="font-bold text-xl mb-3 text-purple-600 dark:text-purple-400">{title}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-purple-200 dark:bg-purple-600 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </motion.div>
    )
  }