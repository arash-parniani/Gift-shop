import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-rose- dark:text-white">
          ورود به حساب کاربری
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              نام کاربری
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              رمز عبور
            </label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-600 transition mb-10"
          >
            ورود
          </button>
          <Link
            to="/"
            className="text-sky-300 p-3 hover:text-sky-800 underline"
          >
            بازگشت به صفحه اصلی
          </Link>
          <Link
            to="/signup"
            className="text-sky-300 p-3 hover:text-sky-800 underline"
          >
            ساخت حساب کاربری
          </Link>
        </form>
      </div>
    </div>
  );
}
