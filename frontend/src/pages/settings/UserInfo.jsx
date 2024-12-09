import React from "react";

const UserInfo = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* User Info Card */}
          <div className="mb-8 bg-white dark:bg-gray-900 shadow rounded-lg">
            <div className="p-6 lg:flex lg:items-center">
              {/* Avatar */}
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="User Avatar"
                  className="rounded-lg w-full max-w-xs mx-auto"
                />
              </div>
              {/* Info Section */}
              <div className="lg:w-2/3 lg:pl-10">
                <div className="bg-secondary dark:bg-gray-700 py-4 px-6 rounded text-white mb-4">
                  <h3 className="text-2xl font-bold mb-1 dark:text-gray-100">
                    John Mark Doe Kyzer
                  </h3>
                  <span className="text-primary font-medium dark:text-gray-400">
                    Coach
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      Position:
                    </span>{" "}
                    Coach
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      Experience:
                    </span>{" "}
                    10 Years
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      Email:
                    </span>{" "}
                    edith@mail.com
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      Website:
                    </span>{" "}
                    <a
                      href="#"
                      className="text-blue-500 dark:text-blue-400 underline"
                    >
                      www.example.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      Phone:
                    </span>{" "}
                    507-541-4567
                  </li>
                </ul>
                {/* Social Links */}
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8 bg-white dark:bg-gray-900 shadow rounded-lg p-6">
            <h4 className="text-xl font-semibold text-primary dark:text-gray-100 mb-4">
              About Me
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Edith is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
