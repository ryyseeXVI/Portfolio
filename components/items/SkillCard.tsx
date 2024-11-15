import { ReactNode } from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

export function SkillCard({ title, level, logo }: { title: string; level: string; logo: ReactNode }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <Card className="bg-gray-200 dark:bg-gray-700 p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center">
          <div className="w-12 h-12 mb-4 ml-4">{logo}</div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">{level}</p>
        </Card>
      </motion.div>
    );
  }