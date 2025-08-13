import React from "react";

const services = [
  {
    title: "Web Development",
    subtitle: "Custom websites tailored to your needs",
    description:
      "We build modern, responsive websites with the latest technologies to ensure your business stands out online. From simple landing pages to complex web applications, we deliver quality solutions.",
    icon: "🌐",
  },
  {
    title: "Digital Marketing",
    subtitle: "Grow your brand and reach your audience",
    description:
      "Our digital marketing strategies help increase your brand visibility, engage customers, and drive sales through targeted campaigns, social media management, and content creation.",
    icon: "📈",
  },
  {
    title: "SEO Optimization",
    subtitle: "Boost your search engine ranking",
    description:
      "Improve your website’s ranking on search engines with our expert SEO services. We use proven techniques to increase organic traffic and enhance your online presence.",
    icon: "🔍",
  },
];

const ServiceCard = ({ title, subtitle, description, icon }) => {
  return (
    <div className="bg-white hover:shadow-xl/20 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between max-w-sm text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <h4 className="text-lg text-gray-600 font-medium mt-2 mb-4">{subtitle}</h4>
      <p className="text-gray-700 mb-6 flex-grow">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        At BIMFROX, we offer a range of web solutions designed to help your business grow and succeed in the digital world.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
