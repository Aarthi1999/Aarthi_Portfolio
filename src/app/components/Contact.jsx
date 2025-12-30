"use client";

import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaHandshake, FaInstagram } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import OverlayLoader from "./OverlayLoader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const inputStyle =
    "bg-white rounded-sm w-md p-3 text-primary placeholder:text-primary/40 h-8";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (result.ok) {
      toast.success("Message sent! Thanks for reaching out");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send Message.");
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <Toaster position="top-right" />
      <OverlayLoader show={loading} />
      <h1 className="text-2xl font-bold flex gap-3 items-center ">
        <FaPaperPlane className="w-5" /> Let's Talk !
      </h1>
      <div className="flex flex-row w-full">
        <form className="py-6 flex gap-3 flex-col">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className={inputStyle}
            value={formData.name}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className={inputStyle}
            value={formData.email}
          />
          <input
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className={inputStyle}
            value={formData.subject}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className={`${inputStyle} h-30`}
            value={formData.message}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-linear-to-b from-[#006edc] to-[#62a2f3] 
        cursor-pointer text-white text-sm w-fit py-2 px-4 mt-2 font-bold rounded-2xl"
              onClick={handleSubmit}
            >
              Send message
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center w-full gap-3 px-3">
          <p className="text-3xl cabin">
            Let’s build something together{" "}
            <FaHandshake className="inline-block w-12 h-12" />
          </p>
          <p className="text-base text-center">
            Open to freelance work and collaboration opportunities.
          </p>
          <div className="flex gap-4">
            <a href= "https://www.linkedin.com/in/aarthi-tamilselvan-763077210/" target="_blank"><SiLinkedin /></a>
            <a href="https://github.com/Aarthi1999" target="_blank"><SiGithub /></a>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
