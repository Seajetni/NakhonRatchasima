import Layout from "@/components/Layout";
import React from "react";
import Image from 'next/image'
export default function Travel() {
  const tarvel = [
    {
        id: "1" ,
        name : "จุดชมวิว ทะเลหมอกเขาศูนย์",
        details: ` ใครว่าทางใต้ไม่มีหมอก งานนี้เราขอพามาปักหมุดเที่ยวกันที่ ทะเลหมอกเขาศูนย์ ไปดูวิวสวยๆ ของทะเลหมอกในยามเช้า ค่ะ ยิ่งเป็นช่วงหน้าฝนแล้ว จะเห็นทะเลหมอกได้อย่างชัดเจนมากยิ่งขึ้นค่ะ เป็นจุดชมวิวสวยๆ ในนครศรีธรรมราช ที่ทำให้เราไดเห็นวิวแบบ 360 องศาเลยค่ะ`,
        img: `https://cms.dmpcdn.com/travel/2022/04/19/b5eed2d0-bf96-11ec-8eff-316a49d6958a_webp_original.jpg`,
    },
    {
      id: "2",
      name: "วัดพระมหาธาตุวรมหาวิหาร",
      details: `   วัดพระมหาธาตุวรมหาวิหาร หรือ ที่ชาวนครศรีธรรมราชนั้นเรียกกันว่า วัดพระธาตุ เป็นโบราณสถานศักดิ์สิทธิ์ และเป็นศูนย์รวมจิตใจของชาวเมืองนครศรีธรรมราชมาช้านานค่ะ

            วัดสร้างขึ้นในปี พ.ศ.854 โดยเจ้าชายทนทกุมาร และพระนางเหมชาลา ชาวสิงหล จุดเด่นของวัดพระมหาธาตุวรมหาวิหารอยู่ที่ พระบรมธาตุเจดีย์ ซึ่งเป็นเป็นที่บรรจุพระบรมสารีริกธาตุของพระพุทธเจ้า เจดีย์องค์เดิมเป็นเจดีย์แบบศรีวิชัย คล้ายเจดีย์กิริเวเทระ ในเมืองโบโลนนารุวะ ประเทศศรีลังกาค่ะ
            `,
      img:  "https://cms.dmpcdn.com/travel/2022/04/19/d8f9b030-bf94-11ec-8eff-316a49d6958a_webp_original.jpg" ,
    },
    {
        id: "3",
        name: "ไอ้ไข่ วัดเจดีย์",
        details: `   คงไม่มีใครที่ไม่รู้จัก ไอ้ไข่ วัดเจดีย์ สิ่งศักดิ์สิทธิ์ ที่ชาวนครฯ นับถือ บูชา และมีชื่อเสียงมากๆ ในจังหวัดนครศรีธรรมราช ว่ากันว่าวัดเจดีย์แห่งนี้สร้างมาแล้วกว่า 1,000 ปี และเป็นวัดร้างมาก่อน แต่สิ่งที่ทำให้วัดมีชื่อเสียงโด่งดังไปทั่วประเทศนั้นก็คือ ไอ้ไข่ หรือ ตาไข่ รูปไม้แกะสลักของเด็กชาย อายุประมาณ 10 ขวบ ที่ตั้งอยู่ในศาลาวัดเจดีย์ค่ะ โดยเชื่อกันว่ามีวิญญาณศักดิ์สิทธิ์สถิตอยู่ และอำนวยพรให้ประสบความสำเร็จตามที่ตั้งใจนั่นเอง`,
        img: "https://cms.dmpcdn.com/travel/2022/04/19/2fa15fa0-bf95-11ec-8eff-316a49d6958a_webp_original.jpg"
    },
    {
        id: "4",
        name: "หมู่บ้านคีรีวง",
        details: `    หมู่บ้านคีรีวง เป็นหมู่บ้านเก่าแก่ ที่ตั้งอยู่ท่ามกลางภูเขา เป็นธรรมชาติ และเงียบสงบ ความมีเสน่ห์ของที่นี่ก็คือ ชุมชนที่นี่จะมีวิถีชีวิตที่เป็นแบบเครือญาติ และมีความเป็นกันเอง เหมือนเราได้ไปเที่ยวบ้านลุง บ้านป้า บ้านยาย ในชนบทช่วงวันหยุดนั่นเองค่ะ  นอกจากนี้ ที่นี่ก็ยังเป็นชุมชนต้นแบบในการจัดการธุรกิจท่องเที่ยวเชิงนิเวศอีกด้วย โดยใช้ความมีส่วนร่วมกันของคนในชุมชน จัดการท่องเที่ยวเชิงอนุรักษ์ และได้รับรางวัลยอดเยี่ยมอุตสาหกรรมท่องเที่ยว ประจำปี 2541 (Thailand Tourism Awards) อีกด้วยค่ะ สิ่งที่ห้ามพลาดเลยก็คือ สะพานบ้านคีรีวง เรียกได้ว่าเป็นเหมือนจุดแลนด์มาร์คที่ไม่ว่าใครก็ต้องมาถ่ายรูปกัน`,
        img: "https://cms.dmpcdn.com/travel/2022/04/19/48e0ff20-bf95-11ec-8eff-316a49d6958a_webp_original.jpg"
    },
    {
        id: "5",
        name: "หาดสิชล",
        details: "พูดถึง หาดขนอม ไปแล้ว ก็ต้องไม่พลาดที่จะพูดถึง หาดสิชล ด้วยค่ะ เพราะที่นี่ก็เป็นทะเลอีกแห่งที่เป็นที่เที่ยวยอดฮิตของนครศรีธรรมราช มีน้ำทะเลใสๆ หาดทรายขาว โค้งอ่าวที่สวยงาม และที่สำคัญ มีความสงบเงียบ เหมาะกับการลงเล่นน้ำมากๆ ค่ะ อีกทั้งบริเวณหาดสิชล ยังมีที่พัก รีสอร์ท ที่สวยงาม และเหมาะกับการมานอนชิล พักผ่อนริมทะเลนั่นเอง",
        img: "https://cms.dmpcdn.com/travel/2020/09/02/31cd9040-ed0b-11ea-9c8c-5fe0b989e003_original.JPG"
    },
    {
        id: "6",
        name: "ตลาดร้อยปีปากพนัง" ,
        details : ` ตลาดร้อยปีปากพนัง เป็นตลาดที่มีประวัติยาวนานมากว่าร้อยปีค่ะ ตั้งอยู่ติดกับแม่น้ำปากพนัง และเป็นแหล่งเศรษฐกิจสำคัญของนครศรีธรรมราชอีกด้วย แน่นอนว่า เราก็จะได้เห็นอาหารทะเลสดๆ ได้ที่นี่มากมาย มีเรือประมงผ่านอยู่เป็นประจำ อีกทั้งยังเป็นตลาดสำหรับซื้อของฝากของที่ระลึกจากทะเลมากมาย` ,
        img: "https://cms.dmpcdn.com/travel/2022/04/19/f127c330-bf95-11ec-82a0-c5df90ee4d4f_webp_original.jpg"
    },
    {
        id: "7" ,
        name: "พิพิธภัณฑ์เมืองนครศรีธรรมราช",
        details: "  พิพิธภัณฑ์เมืองนครศรีธรรมราช ตั้งอยู่ภายในสวนสาธารณะสมเด็จพระศรีนครินทร์ 84 (ทุ่งท่าลาด) ค่ะ ภายในพิพิธภัณ์ฑฯ จัดแสดงเกี่ยวกับเมืองนครศรีธรรมราช ตั้งแต่ยุคก่อนประวัติศาสตร์ จนถึงยุคปัจจุบัน เล่าเรื่องราวของความสำคัญในฐานะของเมืองท่า และเหตุการณ์สำคัญๆ ของจังหวัดนั่นเองค่ะ",
        img: "https://k7w3n7p2.rocketcdn.me/wp-content/uploads/2022/09/City-Museum-Nakhon-Si-Thammarat-1.jpg"
    },
    {
        id: "8" ,
        name: " ถ้ำเขาวังทอง" ,
        details: `   ถ้ำเขาวังทอง ที่เที่ยวธรรมชาติในอำเภอขนอม ที่สวยงาม ภายในถ้ำนั้น จะมีหินงอก หินย้อย มีรูปร่างต่างๆ ตามแต่จินตนาการกันไป ซึ่งจุดไฮไลท์ของการไปชมหินงอกหินย้อยก็คือ หินเจ้าแม่กวนอิม หินไดโนเสาร์ และ หินเจดีย์พระธาตุ ค่ะ อีกทั้งในช่วงหน้าฝน เราจะสามารถเห็นน้ำที่มาจากด้านนอกไหลลงภายในถ้ำ เหมือนกับเกิดฝนตกภายในถ้ำเลยทีเดียว`,
        img: "https://cms.dmpcdn.com/travel/2022/04/19/3939ed60-bf96-11ec-b538-73498e79c864_webp_original.jpg"
    },
    {
        id: "9",
        name : "น้ำตกท่าแพ",
        details: `ไปสูดไอดิน กลิ่นหญ้า รายล้อมด้วยต้นไม้เขียวชอุ่ม และสายน้ำเย็นๆ ที่ น้ำตกท่าแพ ซึ่งตั้งอยู่ใน อุทยานแห่งชาติเขาหลวง ค่ะ ที่นี่เป็นน้ำตกที่สวยงดงามมากๆ มีทั้งหมด 10 ชั้นด้วยกัน แต่สามารถลงเล่นน้ำได้ที่ชั้น 3 เท่านั้นค่ะ นอกจากนี้ ที่นี่ยังมีเส้นทางเดินศึกษาธรรมชาติ ให้สายเที่ยวทุกคนได้สัมผัสธรรมชาติอย่างใกล้ชิดอีกด้วยค่ะ`,
        img: `https://cms.dmpcdn.com/travel/2022/04/19/57c683b0-bf96-11ec-8eff-316a49d6958a_webp_original.jpg`,
    },
    {
        id: "10",
        name: "หาดขนอม",
        details: `หาดขนอม หรือ อุทยานแห่งชาติหาดขนอม-หมู่เกาะทะเลใต้ เป็นชายหาดที่สวยงาม และเป็นสถานที่ท่องเที่ยวยอดฮิตของคนนครศรีธรรมราชค่ะ ที่นี่เป็นหาดทรายที่ยื่นยาวออกไปในทะเลคู่กับทิวสน มีปะการังสวยงาม
        อีกทั้งหาดขนอมยังสามารถแบ่งออกได้หลายหาด ทั้ง หาดหน้าด่าน หาดทรายยาวสลับโขดหิน และริมฝั่งขนอมจะมีชายหาดอื่นๆ อยู่อีกหลายแห่ง จึงเหมาะกับการมาเล่นน้ำ ชมปะการังมากๆ อีกทั้งยังเป็น จุดชม โลมาสีชมพู อีกด้วย`,
        img: "https://cms.dmpcdn.com/travel/2022/04/19/6726a160-bf95-11ec-934c-57fe49ea7d46_webp_original.jpg"
    },

  ];

  return (
    <Layout>
      <div className=" ">
        <div className="flex justify-center mt-10">
          <h1 className=" text-3xl bg-indigo-600 p-4 text-white rounded-3xl">
            เที่ยวที่ไหนกันนนนนดี? 😸
          </h1>
        </div>
        <div>
          {tarvel.map((item, index) => (
            <div key={index} className="mx-auto max-w-screen-xl px-4 py-8  ">
              <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
                <div
                  className={`   shadow-2xl  relative h-64 overflow-hidden  rounded-3xl ${
                    index % 3 ===  1 ? "lg:order-last" : ""
                  } sm:h-80 lg:h-full`}
                >
                  <Image
                    width={500}
                    height={60}
                    alt=""
                    src={item.img}
                    className="absolute inset-0 h-full w-full object-cover   "
                  />
                </div>

                <div className="lg:py-24">



                  <h3 className="text-2xl  font-semibold sm:text-2xl text-gray-800">
                   {item.id} .  {item.name}
                  </h3>
                  <p className="mt-4 ">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
}
