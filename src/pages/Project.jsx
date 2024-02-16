import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <footer className="bg-gradient-to-t from-slate-700 via-slate-400 to-transparent mt-10 p-10">
        <div className="container mx-auto text-center font-bold ">
          <p className="text-lg text-gray-700">
            © 2024 Samsan Tech. All rights reserved.
          </p>

          <div className="mt-4">
            <p className="text-white">Contact Us:</p>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="mailto:info@samsantech.com"
                  className="text-white hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-white hover:underline">
                  Phone
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/samsantech"
                  className="text-white hover:underline">
                  Twitter
                </a>
              </li>
              {/* Add more contact options as needed */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Project
