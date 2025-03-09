import { FaUser, FaWallet, FaHeart, FaTicketAlt, FaSignOutAlt, FaSun, FaCheckCircle } from "react-icons/fa";


export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar - DaisyUI Drawer */}
      <div className="drawer md:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-6">
          {/* Toggle Button */}
          <label htmlFor="dashboard-drawer" className="btn btn-error md:hidden w-fit">
            ☰ 
          </label>
          <h2 className="text-xl font-bold mb-4">داشبورد کاربری</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
              <FaTicketAlt className="text-3xl text-red-400" />
              <p className="text-2xl font-semibold mt-2">22</p>
              <p className="text-sm text-gray-400">تیکت‌های شما</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
              <FaSun className="text-3xl text-orange-400" />
              <p className="text-2xl font-semibold mt-2">5</p>
              <p className="text-sm text-gray-400">سفارشات در حال انجام</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
              <FaCheckCircle className="text-3xl text-green-500" />
              <p className="text-2xl font-semibold mt-2">10</p>
              <p className="text-sm text-gray-400">سفارشات انجام شده</p>
            </div>
          </div>
          <div>
            {/* Recent Orders */}
            <h3 className="text-lg font-semibold mb-2">سفارشات اخیر</h3>
            <ul className="space-y-2">
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 1</span>
                <span className="text-orange-400">در حال انجام</span>
              </li>
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 2</span>
                <span className="text-green-500">انجام شده</span>
              </li>
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 3</span>
                <span className="text-orange-400">در حال انجام</span>
              </li>
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 2</span>
                <span className="text-green-500">انجام شده</span>
              </li>
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 3</span>
                <span className="text-green-500">انجام شده</span>
              </li>
              <li className="flex justify-between bg-gray-800 p-2 rounded-lg">
                <span>سفارش 4</span>
                <span className="text-green-500">انجام شده</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="menu p-4 w-64 bg-gray-900 flex flex-col justify-between min-h-full">
            <div>
              <h2 className="text-red-400 text-lg mb-4">داشبورد کاربری</h2>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
                <FaUser />
                <span>اطلاعات حساب کاربری</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
                <FaWallet />
                <span>کیف پول من</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
                <FaHeart />
                <span>علاقه‌مندی‌ها</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
                <FaTicketAlt />
                <span>تیکت‌ها</span>
              </div>
            </div>
            <button className="flex items-center gap-3 p-2 bg-red-500 hover:bg-red-600 rounded-lg text-white w-full">
              <FaSignOutAlt className="text-xl" />
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
