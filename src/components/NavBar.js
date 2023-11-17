import React from "react";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex  sm:p-5 p-2 flex-row   items-start  md:justify-start  justify-between  ">
          <a class="flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0  ">
            <span class="ml-3 sm:text-xl text-base">AIPatrn</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-start sm:text-xs text-[9px] font-semibold    font-sans text-gray-500 ">
            <div className="grid grid-cols-2  ">
              <a class="mr-5 hover:text-gray-900 mt-1 text-black">Home page</a>
              <a class="mr-5 hover:text-gray-900 mt-1">About us</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Generator</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Features</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Pricing-plan</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Collection-2023</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Blog - News</a>
              <a class="mr-5 hover:text-gray-900 mt-1">Career</a>
            </div>
            <div className="flex justify-start">
              <button class="inline-flex items-center sm:text-xs text-[9px]  border-1  py-1 px-3 focus:outline-none hover:bg-gray-200   mt-4 md:mt-0 ml-5 rounded-2xl border  border-gray-500">
                Menu
                <img
                  src="/dropdown.svg"
                  alt="dropdown"
                  height={10}
                  width={10}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
