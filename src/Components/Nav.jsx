import { useState } from "react";
import { List } from "phosphor-react";
import Logo from "../assets/logo.svg";
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="border-b border-gray-800 bg-gray-900 py-2">
        <div className=" my-2 flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          <img
            src={Logo}
            alt="logo"
            className="w-40 animate-pulse
    
            "
          />

          <List
            color="white "
            width={30}
            height={30}
            className="lg:hidden block  h-6  w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className=" mt-6  lg:mt-0 text-base text-gray-400 lg:flex block justify-between ">
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}