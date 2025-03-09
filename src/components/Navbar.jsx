
import { HiOutlineBell } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";

//components
import SwapTheme from './daisyui/SwapTheme'
import Drawer from './daisyui/Drawer'

// Toats
import { Flip, ToastContainer, toast } from "react-toastify";

//Link
import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 mt-4 not-dark:text-slate-700 z-0">
      {/* ToatsContainer */}
      <ToastContainer 
      autoClose={2000}
      rtl={true}
      transition={Flip}
      />
      <div className="container mx-auto">
        {/* Start First Header */}
        <div className="flex justify-between items-center hidden sm:flex">
          <div className="relative">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs pl-10"
              placeholder="جستجوی محصول"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IoMdSearch size={25} />
            </span>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="flex items-center rounded-xl bg-base-200 p-2">
              <img
                src="./images/flagiran.png"
                alt="Iran Flag"
                />
              فارسی | تومان
            </div>
            <div className="flex items-center justify-center gap-4 h-[44px] w-[165px] rounded-xl bg-base-200">
              09331809897
              <TbPhoneCall size={30} />
            </div>
          </div>
        </div>
        {/* Mobile First Header */}
        <div className="flex justify-between sm:hidden">
          <img src="./images/svgs/header/logo.svg" alt="Logo" className="m-3" />
          <div className="flex items-center rounded-lg overflow-hidden bg-base-200 m-3">
            <input
              type="text"
              className="p-2 outline-none flex-1 "
              placeholder="جستجوی محصول"
            />
            <span className="p-2 ">
              <img src="./images/svgs/header/search.svg" alt="Search Icon" />
            </span>
          </div>
        </div>
        {/* End First Header */}
        {/* Start Second Header */}
        <div className="flex justify-between mt-5 bg-base-200 relative rounded-xl">
          <div className="xl:hidden bg-base-300 p-3 m-5 rounded-xl cursor-pointer" id="brger">
            <Drawer />
          </div>
          <ul className="py-4 mr-4 hidden xl:flex items-center">
            <li>
              <p className="w-[70px] h-[36px] bg-base-300 rounded-xl"></p>
            </li>
            <p className="bg-base-400 w-1 h-[30px] mx-8"></p>
            <ul className="flex gap-4">
              <li>
                <Link to="/" >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/giftcart">گیفت کارت ها</Link>
              </li>
              <li>
                <Link to="/about">درباره ما</Link>
              </li>
              <li>
                <Link to="/contact">تماس با ما</Link>
              </li>
            </ul>
          </ul>
          <ul className="py-4 ml-4 flex items-center gap-4">
            <li className="bg-base-300 p-3 rounded-xl cursor-pointer">
              <SwapTheme />
            </li>
            <li className="bg-base-300 p-3 rounded-xl cursor-pointer relative" onClick={() => toast.warn('شما هیچ پیغامی ندارید')}>
              <span className="absolute top-1 right-1 inline-flex size-3 rounded-full bg-rose-500"></span>
              <span className="absolute top-1 right-1 inline-flex size-3 rounded-full bg-rose-500 animate-ping"></span>
              <HiOutlineBell className=" text-2xl sm:text-3xl" />
            </li>
            <li className="bg-base-300 p-3 rounded-xl border border-rose-500 cursor-pointer">
              <FaRegHeart className=" text-2xl sm:text-3xl" />
            </li>
            <li className="bg-base-300 p-3 rounded-xl cursor-pointer">
              <CgShoppingBag  className=" text-2xl sm:text-3xl" onClick={() => toast.info('سبد خرید شما خالی است')} />
            </li>
            <p className="hidden sm:flex bg-base-400 w-1 h-[30px] mx-4"></p>
            <li>
              <Link to='/login' className="hidden sm:flex [138px] h-[44px] bg-base-300 rounded-xl  flex items-center justify-between p-5 cursor-pointer">
                ورود / عضویت
                <CiUser size={25} className="mr-2 sm:text-3xl" />
              </Link>
              <p className=" sm:hidden [138px] h-[44px] bg-base-300 rounded-xl  flex items-center justify-between p-5">
                <img src="./images/svgs/header/person.svg" alt="Person Icon" />
              </p>
            </li>
          </ul>
        </div>
        {/* End Second Header */}
      </div>
    </nav>
  );
};

export default Navbar;