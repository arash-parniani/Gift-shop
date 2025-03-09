import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-between  items-center flex-col m-8">
          <h1 className="text-5xl dark:text-white">
            از هر کجای دنیا با ما در ارتباط باشید
          </h1>
          <div className="flex mt-8">
            <div className="first-box border-3 border-white rounded-xl">
              <div className="flex gap-3">
                <div className="bg-[#F6F6F6] dark:bg-[#3a3940] w-[50px] h-[50px] flex items-end  justify-center rounded-b-2xl">
                  <IoNewspaperOutline
                    size={25}
                    className="dark:text-red-500 mb-3"
                  />
                </div>
                <h1 className="text-3xl  dark:text-white">راه های ارتباطی</h1>
              </div>
              <ul className="flex flex-col mt-8 my-4 mx-7 gap-6">
                <a className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <FaInstagram size={40} className="dark:text-red-500 ml-3" />
                    اینستاگرام :
                  </div>
                  <div className="flex">
                    <p className="text-2xl">felanchiz@</p>
                  </div>
                </a>
                <li className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <FaTelegramPlane size={40} className="dark:text-red-500 ml-3" />
                    تلگرام :
                  </div>
                  <div className="flex">
                    <a className="text-2xl">felanchiz@</a>
                  </div>
                </li>
                <li className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <MdOutlineMail size={40} className="dark:text-red-500 ml-3" />
                    ایمیل :
                  </div>
                  <div className="flex">
                    <p className="text-2xl">info@pouyan.com</p>
                  </div>
                </li>
                <li className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <MdOutlineMail size={40} className="dark:text-red-500 ml-3" />
                    تلفن تماس :
                  </div>
                  <div className="flex">
                    <p className="text-2xl">021 - 54254145</p>
                  </div>
                </li>
                <li className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <TfiLocationPin size={40} className="dark:text-red-500 ml-3" />
                    ادرس :
                  </div>
                  <div className="flex">
                    <p className="text-2xl">info@pouyan.com</p>
                  </div>
                </li>
                <li className="flex items-center bg-white  dark:text-white h-[56px] rounded-xl dark:bg-[#3a3940] py-10 px-10">
                  <div className="flex text-3xl ml-8">
                    <MdAccessTime size={40} className="dark:text-red-500 ml-3" />
                    ساعات کاری :
                  </div>
                  <div className="flex">
                    <p className="text-2xl">8صبح الی 10 شب</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
