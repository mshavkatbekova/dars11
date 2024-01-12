import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleChange = (e) => {
    console.log(e);
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="pl-[22px] pr-6 bg-carbon-blue  text-white bg-logo-bg bg-no-repeat bg-left lg:bg-top  bg-[length:72px_72px] lg:bg-[length:103px_103px] flex justify-between items-center lg:flex-col lg:px-0 lg:pt-[33.5px] lg:pb-6 lg:pr-0 lg:rounded-tr-[20px] lg:rounded-br-[20px]">
      <img src="./assets/logo.svg" alt="" />
      <div className="flex lg:flex-col lg:justify-center">
        <div className="border-r-2 lg:border-r-0 lg:border-b-[1px] border-[#494E6E] py-6 lg:p-0 flex lg:justify-center items-center lg:pb-7 pr-6">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              checked={theme === "dark" ? false : true}
              onChange={handleChange}
            />

            {/* sun icon */}
            <img
              src="./assets/icon-sun.svg"
              alt="moon svg icon"
              width={20}
              height={20}
              className="swap-on fill-current "
            />

            {/* moon icon */}
            <img
              src="./assets/icon-moon.svg"
              alt="moon svg icon"
              width={20}
              height={20}
              className="swap-off fill-current "
            />
          </label>
        </div>
        <div className="py-6 lg:p-0 pl-6 lg:py-6 lg:px-8">
          <img
            src="./assets/image-avatar.jpg"
            alt="avatar image"
            width={28}
            height={26}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
