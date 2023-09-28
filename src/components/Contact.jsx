"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handlecChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlesSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Oshri",
          from_email: form.email,
          to_email: "oshri19970@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: theme,
        });
        // alert("Your message has been sent successfully");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went worng,try again later! ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: theme,
        });
      });
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="mx-auto flex w-full max-w-[1240px]  flex-col justify-center px-2 py-16 ">
        <h1 className="text-blue mx-auto mb-2 py-4 uppercase tracking-widest text-bluep">
          Get in touch
        </h1>
        <form
          ref={formRef}
          onSubmit={handlesSubmit}
          className=" bord mx-auto mt-12 flex w-[95%] max-w-[768px] flex-col gap-8 p-4 shadow-2xl shadow-blue-500/20"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-bluep">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              placeholder="What's your name"
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-bluep outline-none"
              onChange={handlecChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-bluep">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              placeholder="What's your email"
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-bluep outline-none"
              onChange={handlecChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-bluep">Your Message</span>
            <textarea
              rows="5"
              name="message"
              required
              value={form.message}
              placeholder="Write your message here"
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-bluep outline-none"
              onChange={handlecChange}
            />
          </label>
          <button
            type="submit"
            className={`  mb-2 mr-2 rounded-lg bg-gradient-to-r from-bluep to-blueLight px-5 py-2.5 text-center text-sm font-medium shadow-none hover:bg-gradient-to-br focus:outline-none 
          `}
          >
            {loading ? "Sending..." : "Send Now!"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
