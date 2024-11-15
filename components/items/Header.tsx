'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Matthieu B
        </motion.h1>

        <nav className={`${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 p-4' : 'hidden'} md:block md:static md:bg-transparent md:p-0`}>
          <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block text-center md:inline cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600 dark:text-purple-400' : ''
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button>Language (WIP)</Button>
          <ThemeToggle />
          <Button onClick={toggleMenu} className="md:hidden text-gray-900 dark:text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  )
}
