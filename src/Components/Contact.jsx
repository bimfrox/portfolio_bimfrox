import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    title: "",
    budget: "",
  });

  const services = [
    "Web Development",
    "Digital Marketing",
    "SEO Optimization",
    "App Development",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 1: Send to admin
    emailjs
      .sendForm(
        "service_t0mvmbn",
        "template_p33z5m9",
        form.current,
        "T5MsppqQ7p94tU_da"
      )
      .then((result) => {
        console.log("Admin message sent:", result.text);

        // Step 2: Auto-reply to user
        emailjs
          .send(
            "service_t0mvmbn",
            "template_p33z5m9",
            {
              name: formData.name,
              email: formData.email,
              title: formData.title,
            },
            "T5MsppqQ7p94tU_da"
          )
          .then((res) => {
            console.log("Auto-reply sent:", res.text);
          })
          .catch((err) => {
            console.error("Auto-reply failed:", err.text);
          });

        // Reset form and show toast
        setFormData({
          name: "",
          number: "",
          email: "",
          title: "",
          budget: "",
        });

        toast.success("Thank you for contacting us! We’ll get back to you soon.");
      })
      .catch((error) => {
        console.error("Message failed:", error.text);
        toast.error("Failed to send. Please try again later.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mb-20 mt-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Ex. Rahul Chaursiya"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            placeholder="Ex. 1234567890"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Service Type</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Budget</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., ₹10,000 - ₹50,000"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded hover:bg-emerald-900 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Toast Message Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
