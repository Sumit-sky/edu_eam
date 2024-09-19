import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-12">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">PRODUCTS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Mock Interview{" "}
                <span className="bg-purple-500 text-xs px-2 py-1 rounded-full ml-2">
                  New
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cloud Labs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Skill Paths
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Assessments
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">TRENDING TOPICS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Learn to Code
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Tech Interview Prep
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Generative AI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                GitHub Students Scholarship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Early Access Courses
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cheatsheets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Answers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers{" "}
                <span className="bg-green-500 text-xs px-2 py-1 rounded-full ml-2">
                  Hiring
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Press
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col-reverse sm:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Edu Eam, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
