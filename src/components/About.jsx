import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Experience in React, Angular, and modern CSS frameworks",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Proficient in Node.js, Express, and RESTful APIs",
    },
    {
      icon: FaMobile,
      title: "Mobile Development",
      description:
        "Learning React Native and Flutter for cross-platform development",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Skilled in MongoDB, SQL Server, and database optimization",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                As a current Full-Stack Development student, I'm passionate
                about crafting innovative web and mobile solutions. Through my
                studies, I've developed a strong foundation in React, Node.js,
                Java, etc. I'm eager to continue learning and growing as a
                developer.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, i'm all about staying on top of the latest
                gadgets, strategizing in video games, listening to music and
                finding my zen with Buddhist mantras.
              </p>
            </div>
            <div className="relative">
              <div className="bg-blue-500/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🎓 Fullstack Developer Student</li>
                  <li>💼 Former lawyer, in career transition</li>
                  <li>🗣️ Natural-born communicator</li>
                  <li>📚 Continuous Learner</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center text-white mb-12">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <skill.icon className="text-4xl text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
