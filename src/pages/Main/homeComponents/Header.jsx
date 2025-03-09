import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuArrowLeftFromLine } from "react-icons/lu";

export default function BestSellers() {
  const products = [
    { img: "./images/svgs/header/steam.svg", title: "گیفت کارت ۵ دلاری استیم", price: "۱۲۵۰۰۰ تومان", discount: "٪۵ تخفیف" },
    { img: "./images/svgs/header/google-play.svg", title: "گیف کارت گوگل پلی استور 10 دلار", price: "۱۲۵۰۰۰ تومان" },
    { img: "./images/svgs/header/ituns.svg", title: "گیف کارت اپل استور 100 دلار", price: "۱۲۵۰۰۰ تومان", discount: "٪۵ تخفیف" },
    { img: "./images/svgs/header/amazon.svg", title: "گیف کارت آمازون 10 دلار", price: "۱۲۵۰۰۰ تومان", fastDelivery: "تحویل فوری" },
    { img: "./images/svgs/header/play.svg", title: "گیف کارت پلی استیشن 100 دلار", price: "۱۲۵۰۰۰ تومان" },
    { img: "./images/svgs/header/xbox.svg", title: "گیف کارت ایکس باکس 100 دلار", price: "۱۲۵۰۰۰ تومان" }
  ];

  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-[20px] col-span-4 2xl:col-span-3">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full">
            {["./images/cat.png", "./images/cat.png", "./images/cat.png"].map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} loading="lazy" className="rounded-xl w-full" alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-base-200 rounded-xl col-span-4 2xl:col-span-1 p-4">
          <h1 className=" flex items-center text-xl mb-4">
            <LuArrowLeftFromLine size={30} className="ml-3" />
            <span>پرفروش ترین های این هفته</span>
          </h1>
          {products.map((product, index) => (
            <div key={index} className="p-4 mb-3 text-sm flex items-center  rounded-xl shadow-md ">
              <img src={product.img} alt="icon" className="w-10 h-10" />
              <div className="p-3">
                <h1 className="flex items-center gap-2">
                  {product.title}
                  {product.discount && <span className="bg-rose-500  text-xs px-2 rounded-3xl">{product.discount}</span>}
                  {product.fastDelivery && <span className="bg-green-600  text-xs px-2 rounded-3xl">{product.fastDelivery}</span>}
                </h1>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
