const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials bg-rose-500 w-full h-[100px] flex justify-between items-center">
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-between items-center flex-wrap">
            <div className="title">
              <h1 className="text-3xl text-white">
                ما را در شبکه اجتماعی دنبال کنید
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#" aria-label="YouTube">
                <img
                  className="bg-rose-300 p-2 rounded-lg"
                  src="./images/svgs/icons/youtube.svg"
                  alt="YouTube Icon"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  className="bg-rose-300 p-3 rounded-lg"
                  src="./images/svgs/icons/twitter.svg"
                  alt="Twitter Icon"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  className="bg-rose-300 p-2 rounded-lg"
                  src="./images/svgs/icons/instagram.svg"
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              لوگو
            </h3>
            <p className="mt-4">📞 ۲۶۵۱۵۶۴۶۵۸۴</p>
            <p>📍 مشهد، خیابان فلان، نبش فلان</p>
            <h4 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              عضویت در خبرنامه
            </h4>
            <div className="mt-4 flex bg-white p-2 rounded-lg">
              <input
                type="email"
                className="p-2 flex-1 rounded-r-md"
                placeholder="آدرس ایمیل شما..."
              />
              <button className="bg-rose-500 text-white px-4 py-2 rounded-l-md">
                ارسال
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              خدمات و اکانت‌ها
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded"></span> گیفت کارت Steam
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded"></span> گیفت کارت Amazon
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded"></span> گیفت کارت Apple
              </li>
              {/* Repeated items can be removed or optimized */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              کالاهای دیجیتال
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded"></span> گیفت کارت Steam
              </li>
              {/* Repeated items can be removed or optimized */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              نمادها
            </h3>
            <div className="flex gap-2 mt-4 gap-4">
              <img src="./images/svgs/footer/enemad.svg" alt="Enemad Icon" />
              <img src="./images/svgs/footer/zarinpal.svg" alt="Zarinpal Icon" />
            </div>
            <h4 className="text-lg font-bold border-b-4 border-rose-500 w-30 rounded pb-1">
              ارتباط با ما
            </h4>
            <div className="flex justify-evenly items-center mt-4 bg-white p-2 rounded">
              <a href="#" aria-label="Whatsapp">
                <img src="./images/svgs/footer/whatsapp.svg" alt="WhatsApp Icon" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src="./images/svgs/footer/youtube.svg" alt="YouTube Icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="./images/svgs/footer/twitter.svg" alt="Twitter Icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="./images/svgs/footer/instagram.svg" alt="Instagram Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
