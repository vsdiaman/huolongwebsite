import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy;2025 Huolong Studios, Brazil. All Rights Reserved.</p>
        {/* <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </p> */}
        <div className="mt-4">
          <a
            href="https://www.instagram.com/vitor.diamantino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-pink-500 mx-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vitordiamantino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-700 mx-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/5538988645180"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 mx-2"
          >
          <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
