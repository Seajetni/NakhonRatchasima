import React from "react";
import Link from "next/link";

export default function Footer({ homeRef, scrollTo }) {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <button
            onClick={() => scrollTo(homeRef)}
            className="inline-block rounded-full  bg-indigo-600 p-2 text-white shadow transition hover:bg-indigo-400  sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center    text-indigo-500  text-xl  lg:justify-start">
            จังหวัดนครศรีธรรมราช
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              เมืองคอน จังหวัดนครศรีธรรมราช เมืองอันยิ่งใหญ่ของ ภาคใต้
              ถ้าใครเคยได้ได้รู้มา
              ก็จะทราบดีกว่าที่นี่มีความเป็นมาตั้งแต่ในสมัยโบราณแล้ว
              และก็มีความเป็นมาอย่างยาวนาน เลยพาทุกคนไปรู้ลึกสืบ
              ประวัติของนครศรีธรรมราช กันว่าเมื่อก่อนนั้นเป็นมาอย่างไรบ้าง
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/travel"
              >
                {" "}
                สถานที่ท่องเที่ยว{" "}
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/history"
              >
                {" "}
                ประวัติเเละความเป็นมา{" "}
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2567. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
