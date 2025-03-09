import { CiHeart } from "react-icons/ci";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function Discount() {
  const giftCards = [
    {
      id: 1,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 20 دلاری",
      oldPrice: "تومان 456,000",
      newPrice: "تومان 256,000",
      discount: "۵٪ تخفیف",
      labels: ["ویژه", "تحویل فوری", "تخفیف دار"],
      timeLeft: "2:24:29",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
    {
      id: 2,
      imgSrc: "./images/ituns.card.jpg",
      title: "گیفت کارت گوگل پلی 30 دلاری",
      oldPrice: "تومان 600,000",
      newPrice: "تومان 400,000",
      discount: "۱۰٪ تخفیف",
      labels: ["ویژه", "تخفیف دار", "تحویل فوری"],
      timeLeft: "1:45:20",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="container mx-auto my-10">
        <div className="my-6">
          <ul className="overflow-x-auto whitespace-nowrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-9">
            {giftCards.map((card) => (
              <li
                className=" p-5 rounded-xl flex flex-col items-center shadow-md border border-black "
                key={card.id}
              >
                <img
                  src={card.imgSrc}
                  className="w-[224px] h-[303px]"
                  alt="Gift Card"
                />
                <div className="content  ">
                  <a href="#">{card.title}</a>
                  <p></p>
                  <p className="flex flex-col items-end text-sm">
                    <a href="#" className="text-rose-500 line-through">
                      {card.oldPrice}
                    </a>
                    <a href="#">{card.newPrice}</a>
                  </p>
                  <span className="text-white bg-rose-500 rounded-xl px-2">
                    {card.discount}
                  </span>
                  <div className="color-box mt-2 text-white">
                    {card.labels.map((label, index) => (
                      <span
                        key={index}
                        className={`mx-1 px-2 rounded-lg ${
                          label === "ویژه"
                            ? "bg-violet-900"
                            : label === "تحویل فوری"
                            ? "bg-green-400"
                            : "bg-rose-500"
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="bg-rose-500 text-white flex mt-2 p-3 justify-center text-lg gap-2 rounded-lg hover:bg-rose-500"
                  >
                    {card.timeLeft}
                    <img src="./images/svgs/icons/watch.svg" alt="watch" />
                  </a>
                  <div className="shoping-cart flex justify-between gap-2 mt-2 p-3">
                    <a href="#" className=" flex p-3 rounded-lg ">
                      <CiHeart size={30} />
                    </a>
                    <a
                      href="#"
                      className=" flex p-3 justify-center text-lg gap-2 rounded-lg bg-rose-400"
                    >
                      افزودن به سبد خرید
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
