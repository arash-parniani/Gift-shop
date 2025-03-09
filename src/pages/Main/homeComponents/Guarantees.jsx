import { GrStatusGood } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";

export default function Guarantees() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        <div className="grid justify-items-center p-8 gap-4 shadow m-10 rounded-xl">
            <GrStatusGood size={50} />
          <h1>تضمین اصالت کالا</h1>
        </div>
        <div className="grid justify-items-center p-8 gap-4 shadow m-10 rounded-xl">
            <RiMoneyDollarCircleLine size={50} />
          <h1>خرید اسان ایمن</h1>
        </div>
        <div className="grid justify-items-center p-8 gap-4 shadow m-10 rounded-xl">
            <FaBox size={50 } />
          <h1>تحویل سریع و انی</h1>
        </div>
        <div className="grid justify-items-center p-8 gap-4 shadow m-10 rounded-xl">
            <CiHeadphones size={50} />
          <h1>پشتیبانی سریع تلفنی</h1>
        </div>
        <div className="grid justify-items-center p-8 gap-4 shadow m-10 rounded-xl">
            <CiWallet size={50} />
          <h1>ضمانت عودت وجه</h1>
        </div>
      </div>
    );
  }
  