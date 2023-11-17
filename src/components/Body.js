import React from "react";

const Content = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col  w-full mb-4">
            <h1 class="sm:text-base text-xs font-medium title-font mb-2 text-gray-400">
              Revolutionize Your
            </h1>
            <h1 class="sm:text-6xl text-xl font-medium title-font  text-black">
              Creative Projects with
            </h1>
            <h1 class="sm:text-6xl text-xl font-medium title-font  text-black">
              the Ultimate AI-Powered
            </h1>
            <h1 className="sm:text-6xl text-xl font-medium title-font text-black  flex   ">
              Pattern
              <span className="flex ">
                {" "}
                <button className="uppercase text-white bg-black sm:text-xs text-[6px] sm:ml-5 ml-2 rounded-full sm:p-2 p-1 py-0 sm:h-10 h-4 sm:mt-4 mt-2 px-2 mb-5 flex items-center">
                  start generating
                </button>{" "}
                <span className="text-gray-400 sm:text-sm sm:ml-5 ml-2 text-xs sm:pt-2 pt-0  ">
                  {" "}
                  <div className=" sm:text-sm text-[9px]">
                    The Next generation
                  </div>
                  <div className="text-black  sm:text-sm text-[9px] ">
                    Production
                    <span className="text-gray-400 sm:text-sm text-[9px]">
                      {" "}
                      for Designers
                    </span>
                  </div>
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/4 ">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://th.bing.com/th/id/R.3dd53cb9321009aba9599662b989d48f?rik=cW7xcX4FC7H4wg&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f09-2016%2f29-abstract-photography-by-armandoraggeri.preview.jpg&ehk=SQcdgBGR6qiuSs8IHEyOakJbEODZzRdjJn84CzGhyzE%3d&risl=&pid=ImgRaw&r=0"
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/4">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://th.bing.com/th/id/R.808c937e31b0f3c424c7e3934d58f9b2?rik=0AjEuqjs5dN%2bWA&pid=ImgRaw&r=0"
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 w-full md:w-2/4">
              <div class="h-full   border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://th.bing.com/th/id/R.c0f37a9dfbea6691c7779c3392462c07?rik=z64jGIYqxObV%2bg&riu=http%3a%2f%2fwww.adobetutorialz.com%2fcontent_images%2fAdobePhotoshop%2fART-D%2ftutorial361%2f27.jpg&ehk=pzr%2f2AqWJY16URaN7VUUiGuhmkxhieosritoT%2ftMHH4%3d&risl=&pid=ImgRaw&r=0"
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
