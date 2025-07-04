import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { sendEmail } from "../api/emailService"; // import your API function
import strongest from "../assets/strongest.png";
import { MdSend } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";
import ph from "../assets/icons/PH.svg";
import "../App.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const email = "dagodemarcgeraldarante@gmail.com";
  const num = "9155942709";

  const handleSendEmail = (e) => {
    e.preventDefault();
    sendEmail(form)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setMessage("");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#090040] to-[#471396] min-h-screen flex flex-col justify-center items-center px-4"
    >
      <div
        className="flex flex-col bg-gradient-to-b from-[#090040]
       to-[#471396] justify-center items-center border-[#090040] 
       border-4 w-100 h-100 rounded-2xl p-4 
       shadow-[0_0_20px_rgba(59,130,246,0.8)]"
      >
        <img
          src={strongest}
          alt="strongone"
          className="flex w-24 h-24 object-cover rounded-full mb-8 border-green-500 border-4"
        />
        <h1 className="text-white">{email}</h1>
        <h2 className="text-white flex items-center gap-2">
          <img src={ph} alt="ph" className="w-7 h-7" />
          63+ {num}
        </h2>
        !
        <form
          ref={form}
          onSubmit={handleSendEmail}
          className="flex flex-col w-80 mt-2 gap-4 text-white"
        >
          <input type="hidden" name="to_email" value={email} />
          <textarea
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-20 rounded-2xl border bg-transparent px-4 py-2 resize-none align-top"
            required
          />
          <div className="flex justify-between items-center">
            <label htmlFor="file" className="cursor-pointer">
              <FaPaperclip className="w-6 h-6 text-white hover:text-blue-500" />
            </label>
            <input type="file" id="file" name="file" className="hidden" />
            <button type="submit">
              <MdSend className="w-7 h-7 hover:text-blue-700 transform hover:scale-110 active:scale-90 duration-75 cursor-pointer" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
