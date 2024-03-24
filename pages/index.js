import Image from "next/image";
import Beanner from "@/components/Beanner";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  const hot = [
    {
      id: "1",
      name: "ดชมวิว ทะเลหมอกเขาศูนย์",
      details:
        "ใครว่าทางใต้ไม่มีหมอก งานนี้เราขอพามาปักหมุดเที่ยวกันที่ ทะเลหมอกเขาศูนย์ ไปดูวิวสวยๆ ของทะเลหมอกในยามเช้า ค่ะ ยิ่งเป็นช่วงหน้าฝนแล้ว จะเห็นทะเลหมอกได้อย่างชัดเจนมากยิ่งขึ้นค่ะ เป็นจุดชมวิวสวยๆ ในนครศรีธรรมราช ที่ทำให้เราไดเห็นวิวแบบ 360 องศาเลยค่ะ",
      img: "https://cms.dmpcdn.com/travel/2022/04/19/b5eed2d0-bf96-11ec-8eff-316a49d6958a_webp_original.jpg",
    },
    {
      id: "2",
      name: "หาดท้องหยี",
      details:
        "หาดท้องหยี เป็นชายหาดสวย ที่มีกิจกรรมให้ทำมากมาย ไม่ว่าจะเป็น เล่นวอลเล่ย์บอลชายหาด ตกปลา ตกหมึก ดำน้ำตื้น เป็นต้น ยิ่งถ้าใครได้นั่งเรือออกไปทางตอนใต้ของอ่าว ก็เห็นแนวปะการังสวยๆ ที่อุดมสมบูรณ์มากๆ อีกด้วยค่ะ เลยมีฝูงปลามากมายเลย หรือใครอยากจะดำน้ำตื้นดูท้องทะเลสวยๆ ก็ดีย์มากๆ เหมือนกันค่ะ",
      img: "https://cms.dmpcdn.com/travel/2022/04/19/f70a7f70-bf97-11ec-9776-bb6ea2fd0518_webp_original.jpg",
    },
  ];

  const hit = [
    {
      id: "1",
      name: "น้ำตกกรุงชิง",
      details:
        "น้ำตกกรุงชิง ตั้งอยู่ในอุทยานแห่งชาติเขาหลวง ของ นครศรีธรรมราช ที่นี่มีความอุดมสมบูรณ์ของธรรมชาติสูงมาก เป็นป่าดิบชื้นที่แน่นทึบตั้งแต่ราบต่ำถึงเชิงเขา และเป็นแหล่งดูนกที่น่าสนใจที่สุดแห่งหนึ่งของภาคใต้เลยทีเดียว ด้วยความสูงของน้ำตกมากถึง 7 ชั้น แต่ชั้นที่โดดเด่นที่สุด คือ ชั้นที่ 2 เพราะจะมีสายน้ำไหลลัดเลาะเลียบหน้าผาหินลงมาอย่างสวยงามนั่นเองค่ะ",
      img: "https://cms.dmpcdn.com/travel/2022/04/19/7f008470-bf97-11ec-9776-bb6ea2fd0518_webp_original.jpg",
    },
    {
      id: "2",
      name: "น้ำตกท่าแพ",
      details: "ไปสูดไอดิน กลิ่นหญ้า รายล้อมด้วยต้นไม้เขียวชอุ่ม และสายน้ำเย็นๆ ที่ น้ำตกท่าแพ ซึ่งตั้งอยู่ใน อุทยานแห่งชาติเขาหลวง ค่ะ ที่นี่เป็นน้ำตกที่สวยงดงามมากๆ มีทั้งหมด 10 ชั้นด้วยกัน แต่สามารถลงเล่นน้ำได้ที่ชั้น 3 เท่านั้นค่ะ นอกจากนี้ ที่นี่ยังมีเส้นทางเดินศึกษาธรรมชาติ ให้สายเที่ยวทุกคนได้สัมผัสธรรมชาติอย่างใกล้ชิดอีกด้วยค่ะ",
      img: "https://cms.dmpcdn.com/travel/2022/04/19/57c683b0-bf96-11ec-8eff-316a49d6958a_webp_original.jpg",
    },
    {
      id: "3",
      name: " ถ้ำเขาวังทอง",
      details:
        "  ถ้ำเขาวังทอง ที่เที่ยวธรรมชาติในอำเภอขนอม ที่สวยงาม ภายในถ้ำนั้น จะมีหินงอก หินย้อย มีรูปร่างต่างๆ ตามแต่จินตนาการกันไป ซึ่งจุดไฮไลท์ของการไปชมหินงอกหินย้อยก็คือ หินเจ้าแม่กวนอิม หินไดโนเสาร์ และ หินเจดีย์พระธาตุ ค่ะ อีกทั้งในช่วงหน้าฝน เราจะสามารถเห็นน้ำที่มาจากด้านนอกไหลลงภายในถ้ำ เหมือนกับเกิดฝนตกภายในถ้ำเลยทีเดียว",
      img: "https://cms.dmpcdn.com/travel/2022/04/19/3939ed60-bf96-11ec-b538-73498e79c864_webp_original.jpg",
    },
  ];

  return (
    <Layout>
      <div>
        <Beanner />
      </div>

      <div className=" flex justify-center">
        <ul className=" grid-cols-1 lg:grid-cols-2 grid">
          {hot.map((item, index) => (
            <li key={index} className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg m-6 lg:m-10">
              <Image
                width={1000}
                height={100} 
                alt={item.name}
                src={item.img}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t h-full from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time
                    dateTime="2022-10-10"
                    className="block text-สเ text-white/90"
                  >
                    สถานที่เนะนำ
                  </time>

                  <Link href="/travel">
                    <h3 className="mt-0.5 text-lg text-white">{item.name}</h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {item.details}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <ul className="grid-cols-1  lg:grid-cols-3 grid">
          {hit.map((item, index) => (
            <li key={index} className=" my-1 mx-2 ">
              <Link href="/travel" className="group  h-full relative block bg-black m-1 rounded-3xl">
                <Image
                  width={1000}
                  height={100}
                  alt={item.name}
                  src={item.img}
                  className="absolute inset-0 h-full  rounded-3xl w-full object-cover bg-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    น่าไปเที่ยว
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {item.name}
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">{item.details}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
