import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              ante vel est.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-white hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter icon */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook icon */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Instagram icon */}
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
``;
