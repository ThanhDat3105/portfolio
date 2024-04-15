import React, { useContext, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MyContext } from "../../../contexts/MyContext";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<any>();
  const { setRefContact } = useContext(MyContext);

  useEffect(() => {
    setRefContact(contactRef);
  }, []);

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm("service_p61ogni", "template_sxuncpq", formRef.current, {
        publicKey: "EoAR0KJxAjbYkw4s2",
      })
      .then(
        (result) => {
          toast.success("submitted successfully");
          console.log(result);
        },
        (error) => {
          console.log(error);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div ref={contactRef} className="contact pt-60 pb-32">
      <div className="container_all">
        <div className="content_contact flex gap-5">
          <div className="contact_me text-white w-1/2">
            <h1 className="mb-5 text-3xl font-bold">
              Contact <span className="text-[#00ccd6]">Me</span>
            </h1>
            <div className="flex flex-col gap-5 text-start">
              <p className="text-lg font-semibold">Let's Work Together</p>
              <p className="text-gray-400">
                Please contact me via the email and phone number below, or fill
                out the form next to it and send it to me. I eagerly await the
                opportunity to connect.
              </p>
              <div className="address flex flex-col gap-2">
                <div className="email flex gap-2 items-center">
                  <IoMdSend className="text-[#00ccd6]" />
                  <p>caothanhdat02003@gmail.com</p>
                </div>
                <div className="phone flex gap-2 items-center">
                  <FaPhoneAlt className="text-[#00ccd6]" />
                  <p>0902659770</p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col gap-3 w-1/2"
            onSubmit={sendEmail}
            ref={formRef}
          >
            <input
              className="py-2 px-1 focus-visible:outline-none rounded-lg"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
            />
            <input
              className="py-2 px-1 focus-visible:outline-none rounded-lg"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
            />
            <textarea
              className="py-2 px-1 focus-visible:outline-none rounded-lg"
              name="message"
              cols={30}
              rows={5}
              placeholder="Enter Your Message"
            />
            <button
              value="Send"
              type="submit"
              className="bg-[#00ccd6] hover:bg-[#00cbd6a1] hover:text-white duration-300 py-3 rounded-3xl text-black text-[14px] font-semibold mt-5 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
