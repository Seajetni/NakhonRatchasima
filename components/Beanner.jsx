import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Beanner() {

        const contant = {
            detail : ` เมืองคอน จังหวัดนครศรีธรรมราช เมืองอันยิ่งใหญ่ของ ภาคใต้ ถ้าใครเคยได้ได้รู้มา ก็จะทราบดีกว่าที่นี่มีความเป็นมาตั้งแต่ในสมัยโบราณแล้ว และก็มีความเป็นมาอย่างยาวนาน เลยพาทุกคนไปรู้ลึกสืบ ประวัติของนครศรีธรรมราช กันว่าเมื่อก่อนนั้นเป็นมาอย่างไรบ้าง เเละมีสถานที่ท่องเที่ยวที่ไหนบ้าง ค่ะ😉.`
        }


  return (
    <div
      className="  relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Phimai_%28III%29.jpg/1920px-Phimai_%28III%29.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-white/75 "></div>

      <div className="  relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="text-3xl font-extrabold items-center justify-center flex flex-col sm:text-5xl">

            <p className="block font-extrabold "> นครราชสีมา </p>
          </div>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
           {contant.detail}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center  justify-center">
            <Link
              href="#"
              className="block w-full rounded   bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-indigo-600 sm:w-auto"
            >
              สถานที่ท่องเที่ยว
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium  text-indigo-500 shadow hover:-indigo-800 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              ประวัติเเละความเป็นมา
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
