"use client";

export default function NavCard() {

  return (
    <div className="flex flex-row justify-center items-center pt-10 space-x-11 h-full">
      {/* <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6"></div> */}
      <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-20 relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          {/* <p className="font-dm text-sm font-medium text-gray-600">Read My Disclourse</p> */}
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">Read My Disclourse</h4>
        </div>
      </div>
      <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-opacity-20 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
  <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
      <span className="flex items-center text-brand-500 dark:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          {/* <p className="font-dm text-sm font-medium text-gray-600">Earnings</p> */}
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">Make an Offer</h4>
        </div>
      </div>
    </div>
    // Remove the closing </div> tag

    // <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
    //   <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    //       <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    //     </svg>
    //   </a>
    //   <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
    //   <div className="h-auto overflow-hidden">
    //     <div className="h-44 overflow-hidden relative">
    //       <img src="https://picsum.photos/400/400" alt="" />
    //     </div>
    //   </div>
    //   <div className="bg-white py-4 px-3">
    //     <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
    //     <div className="flex justify-between items-center">
    //       <p className="text-xs text-gray-400">
    //       Lorem, ipsum dolor sit amet
    //     </p>
    //     <div className="relative z-40 flex items-center gap-2">
    //       <a className="text-orange-600 hover:text-blue-500" href="">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    //         </svg>
    //       </a>
    //       <a className="text-orange-600 hover:text-blue-500" href="">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    //         <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    //       </svg>
    //       </a>
    //     </div>
    //     </div>
    //   </div>
    // </div>
  );
}
