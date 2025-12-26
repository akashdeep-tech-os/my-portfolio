import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";  // <-- FIXED
import profileImg from "../assets/profile.avif";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to Know more about my background and passion
        </p>

        {/* Image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount:0.2 }}
              className="w-full h-full object-cover"
              src={profileImg}
              alt="Profile"
            />
          </div>
          <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount:0.2 }}
              className="md:w-1/2">

                <div className="rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                    <p className="text-gray-300 mb-6">Dynamic and results-driven Python Developer with hands-on experience in backend development, full-stack web applications, and system automation. Skilled in building scalable Django/Django REST Framework applications, integrating APIs, designing relational databases, and developing secure authentication and role-based access systems. Experienced in creating backend modules for device configuration, internal automation, and camera-related operations within enterprise environments.</p>
                    <p className="text-gray-300 mb-6">Strong foundation in React, JavaScript, Python, SQL, PostgreSQL, and modern development tools. Proven ability to collaborate with teams, lead projects, and deliver production-ready applications, including a full-stack real estate listing platform and AI-powered assistant. Adept at building user-friendly dashboards, optimizing system workflows, and leveraging APIs to improve functionality and performance.</p>
                    <p className="text-gray-300 mb-12">A dedicated and quick-learning engineer with solid academic credentials and diverse project experience, seeking opportunities to contribute to impactful software solutions.</p>
                    {/* Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            aboutInfo.map((data,index)=>(
                                <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                                    <div className="text-purple text-4xl">
                                        <data.icon />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                                    <p className="text-gray-400">{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
              </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
