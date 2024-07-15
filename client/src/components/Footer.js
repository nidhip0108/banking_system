import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6" style={{ backgroundColor: '#3345A1' }} >

      <div>
        <div className="flex flex-wrap justify-center">
          <div className="mt-6">
            <a href="" target="_blank" style={{ marginRight: '16px' }} >
              <i className="flex fab fa-instagram"></i>
            </a>
            <a href="" target="_blank" style={{ marginRight: '16px' }} >
              <i className="flex fab fa-linkedin"></i>
            </a>

            <a href="" target="_blank" style={{ marginRight: '16px' }} >
              <i className="flex fab fa-github"></i>
            </a>
          </div>

        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              PRIVACY POLICY ABOUT US
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
