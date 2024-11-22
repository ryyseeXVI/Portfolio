'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { Toaster } from '@/components/ui/toaster'
import { ExperienceItem } from '@/components/items/ExperienceItem'
import { ProjectCard } from '@/components/items/ProjectItem'
import { SkillCard } from '@/components/items/SkillCard'
import ContactForm from '@/components/items/ContactForm'
import { globalStyles } from './styles'
import Header from '@/components/items/Header'
import { SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '../types/data'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [projectFilter, setProjectFilter] = useState('all') // Ajout du state pour le filtre

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 min-h-screen font-sans transition-colors duration-200">
      <style jsx global>{globalStyles}</style>
      <Header activeSection={activeSection} />
      <main>
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Matthieu BOUSQUET
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junior Developper | EPITECH STUDENT
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#about"
                className="inline-block bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 cursor-pointer"
              >
                Learn more
                <ChevronDown className="inline ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About me
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am a passionate 19-year-old developer, currently in my 3rd year at Epitech Marseille.
              My journey has allowed me to gain solid experience in various programming languages
              and frameworks. I am constantly looking for new challenges to push my limits
              and create innovative solutions.
            </motion.p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center max-w-4xl mx-auto">
              {SKILLS_DATA.map((skill) => (
                <SkillCard 
                  key={skill.title}
                  title={skill.title} 
                  level={skill.level} 
                  logo={<skill.icon size={32} />} 
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-400"></div>
              {EXPERIENCE_DATA.map((experience) => (
                <ExperienceItem 
                  key={experience.title}
                  date={experience.date}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>

            <div className="flex justify-center mb-8">
              <select
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
                className="px-4 py-2 rounded-md bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="all">All Projects</option>
                <option value="school">School Projects</option>
                <option value="personal">Personal Projects</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS_DATA.filter(project => {
                if (projectFilter === 'all') return true;
                if (projectFilter === 'school') return project.tags.includes('School Project');
                if (projectFilter === 'personal') return project.tags.includes('Personal Project');
                return true;
              }).map((project) => (
                <ProjectCard 
                  key={project.title}
                  title={project.title} 
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            <div className="w-full mt-8">
              <ContactForm />
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-8">
              <h3 className="text-2xl font-semibold mb-4 mt-8">Find me on</h3>
              <div className="flex flex-col space-y-6">
                <a 
                  href="https://github.com/ryyseeXVI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  <SiGithub size={30} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/matthieu-b-8070a7262/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  <SiLinkedin size={30} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/egocoree/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  <SiInstagram size={30} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Toaster />
      <footer className="bg-white dark:bg-gray-900 text-center p-6 transition-colors duration-200">
        <p>&copy; 2024 Matthieu BOUSQUET. All rights reserved.</p>
      </footer>
    </div>
  )
}
