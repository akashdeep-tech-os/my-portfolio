import React from 'react'
import { motion } from 'framer-motion'
import { skills } from "../assets/assets"; // icons, title, description, tags, level (0-100)

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' }
  }
}

const card = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

const iconFloat = {
  animate: { y: [0, -6, 0], rotate: [0, 6, 0, -6, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
}

const Skills = () => {
  return (
    <motion.section
      id='skills'
      className='py-20 bg-dark-100'
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      <div className='container mx-auto px-6'>
        <motion.h2 className='text-3xl font-bold text-center mb-4' variants={card}>
          My <span className='text-purple'>Skills</span>
        </motion.h2>

        <motion.p className='text-gray-400 text-center max-w-2xl mx-auto mb-16' variants={card}>
          Technologies I work with to bring ideas to life
        </motion.p>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto' variants={container}>
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title + index}
              className='bg-dark-300 rounded-2xl p-6 hover:shadow-xl cursor-pointer focus-within:ring-2 focus-within:ring-purple-500 outline-none'
              variants={card}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 30px rgba(0,0,0,0.45)' }}
              whileTap={{ scale: 0.995 }}
              tabIndex={0}
              aria-labelledby={`skill-${index}-title`}
            >
              <div className='flex items-center mb-4'>
                <motion.div className='w-12 h-12 mr-4 flex items-center justify-center text-purple' animate={iconFloat.animate} transition={iconFloat.transition}>
                  <skill.icon className='w-10 h-10' aria-hidden />
                </motion.div>

                <div className='flex-1'>
                  <h3 id={`skill-${index}-title`} className='text-xl font-semibold'>{skill.title}</h3>
                  <p className='text-gray-400 text-sm'>{skill.description}</p>
                </div>
              </div>

              {/* animated proficiency bar if `level` provided (0-100) */}
              {typeof skill.level === 'number' ? (
                <div className='mb-4'>
                  <div className='w-full h-2 bg-dark-400 rounded-full overflow-hidden'>
                    <motion.div
                      className='h-full rounded-full'
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                      style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      role='progressbar'
                    />
                  </div>
                  <div className='text-xs text-gray-400 mt-2 flex justify-between'>
                    <span>{skill.level}%</span>
                    <span className='italic'>{skill.experience || ''}</span>
                  </div>
                </div>
              ) : null}

              <div className='flex flex-wrap gap-2 mb-2'>
                {skill.tags.map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full text-sm select-none' title={tech}>{tech}</span>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <button
                  className='text-sm px-3 py-1 rounded-md bg-transparent border border-white/8 hover:bg-white/4 transition'
                  onClick={() => { /* optional: open modal or filter by skill */ }}
                  aria-label={`Learn more about ${skill.title}`}
                >
                  Learn more
                </button>

                <motion.span
                  className='text-xs text-gray-400'
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3 + index * 0.2, repeat: Infinity }}
                >
                  {skill.level ? (skill.level > 80 ? 'Expert' : skill.level > 50 ? 'Proficient' : 'Intermediate') : ''}
                </motion.span>
              </div>

            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
