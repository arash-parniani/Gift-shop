import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-rose-500 dark:text-white">
          ثبت‌نام حساب کاربری
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
              ایمیل
            </label>
            <input
              type="email"
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
            ثبت‌نام
          </button>
          <Link
            to="/login"
            className="text-sky-300 p-3 hover:text-sky-800 underline"
          >
            قبلاً ثبت‌نام کرده‌اید؟ ورود
          </Link>
        </form>
      </div>
    </div>
  );
}
