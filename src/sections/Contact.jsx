import React, { useState, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import ShinyText from "../components/ShinyText";
import emailjs from "@emailjs/browser";
import ContactExperience from "../components/Models/Contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      //Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false); //Always stop loadiong, even on error
    }
  };
  return (
    <section id="contact" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch - Let's Connect!"
          sub="📧 Contact Information"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label
                    className="text-gray-700 dark:text-white-50"
                    htmlFor="name"
                  >
                    Your name
                  </label>
                  <input
                    className="dark:bg-gray-700 bg-white-50"
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-white-50"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="dark:bg-gray-700 bg-white-50"
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-white-50"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="dark:bg-gray-700 bg-white-50"
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <ShinyText text={loading ? "Sending..." : "Send Message"} className="text" />
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                <div></div>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7  rounded-xl min-h-96">
            <div className="w-full h-full bg-[#E4F0FBFF]  dark:bg-[#1a1a1a] hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
