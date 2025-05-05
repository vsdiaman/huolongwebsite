import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <section id="contact" className="my-12">
        <h3 className="text-xl text-huolongRed font-pixel mb-4">Contact</h3>
        <p className="mb-4 font-pixel">Sign up for updates:</p>

        <form
          action="https://formspree.io/f/xvgaarze"
          method="POST"
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="subject"
            placeholder="Title"
            className="border border-huolongRed p-2 rounded-md focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className="border border-huolongRed p-2 rounded-md h-32 resize-none focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-huolongRed text-white py-2 px-4 rounded hover:opacity-90 transition font-pixel"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
