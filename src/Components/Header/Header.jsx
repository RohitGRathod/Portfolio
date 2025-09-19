import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navItem = [
    { title: "Home", slug: "/" },
    { title: "About Me", slug: "/about" },
    { title: "Skills", slug: "/skills" },
    { title: "Projects", slug: "/projects" },
    { title: "Contact Me", slug: "/contact-me" },
  ];

  const navigate = useNavigate();
  const handleOnNavigate = (slug) => {
    navigate(slug);
  };

  return (
    <header className="w-full sticky top-4 z-50 flex justify-center">
      <nav
        className="bg-gray-900/40 backdrop-blur-md shadow-lg 
        rounded-2xl px-6 py-3 flex items-center justify-center w-full"
      >
        <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 text-gray-200 font-semibold">
          {navItem.map((item) => (
            <li key={item.title}>
              <button
                onClick={() => handleOnNavigate(item.slug)}
                className="px-4 py-2 rounded-lg transition 
                  hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 
                  hover:text-white cursor-pointer"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
