import React from "react";
import { motion } from "framer-motion";
motion;
const services = [
  {
    title: "Web Development",
    subtitle: "Custom Websites, Crafted for Impact",
    description:
      "We design and develop modern, responsive websites that reflect your brand identity and deliver seamless user experiences. From single landing pages to complex web applications, our solutions are built with the latest technologies to make your business stand out online.",
    icon: "🌐",
  },
  {
    title: "App Development",
    subtitle: "Mobile Apps that Scale with You",
    description:
      "From Android to iOS, we create high-performing, user-friendly mobile applications tailored to your business goals. Whether it’s an e-commerce app, service-based app, or custom business solution, we ensure smooth performance, intuitive design, and scalable architecture.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    subtitle: "Strategies that Drive Growth",
    description:
      "Our digital marketing services help you grow your brand, connect with your audience, and boost conversions. Through data-driven campaigns, social media management, and engaging content creation, we make sure your business reaches the right people at the right time.",
    icon: "📈",
  },
  {
    title: "SEO Optimization",
    subtitle: "Rank Higher. Reach Further.",
    description:
      "We enhance your online visibility with proven SEO techniques that improve your search engine rankings and drive organic traffic. Our goal is to help your business appear where it matters most — right in front of your potential customers.",
    icon: "🔍",
  },
  {
    title: "UI/UX Design",
    subtitle: "Beautiful & Intuitive Experiences",
    description:
      "We craft sleek, user-friendly interfaces that delight your users and strengthen your brand identity. Our designs focus on usability, accessibility, and aesthetics to ensure every interaction feels effortless and engaging.",
    icon: "🎨",
  },
];

const ServiceCard = ({ title, subtitle, description, icon }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="bg-white/70 backdrop-blur-md border border-gray-200 hover:border-green-500 rounded-2xl shadow-md hover:shadow-2xl p-8 flex flex-col text-center relative overflow-hidden group"
    >
      {/* Decorative hover glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Headings */}
      <h3 className="relative z-10 text-2xl font-bold text-gray-900">
        {title}
      </h3>
      <h4 className="relative z-10 text-lg text-green-700 font-medium mt-2 mb-4">
        {subtitle}
      </h4>

      {/* Description */}
      <p className="relative z-10 text-gray-700 leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 max-w-7xl mx-auto"
      aria-labelledby="services-heading"
    >
      {/* Section Heading */}
      <header className="text-center mb-16">
        <h2
          id="services-heading"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug"
        >
          🚀 Our <span className="text-green-800">Services</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          At <strong>BIMFROX</strong>, we provide{" "}
          <em>web development, app development, digital marketing, and SEO
            optimization</em> to help your business grow and succeed in the
          digital world.
        </p>
      </header>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ServiceCard
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
