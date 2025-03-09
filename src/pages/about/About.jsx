import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CiMail } from "react-icons/ci";
import { BsHourglassBottom } from "react-icons/bs";
export default function About() {
  return (
    <>
    <Navbar />
      <div className="dark:bg-transparent  p-6 my-10 dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          <div className="bg-red-500  p-8 rounded-2xl flex items-center justify-center lg:w-1/4">
            <h1 className="text-3xl font-bold">لوگو</h1>
          </div>

          <div className="flex flex-col gap-6 lg:w-3/4 dark:text-white">
            <div className="dark:bg-transparent p-6 rounded-2xl border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">درباره ما</h2>
                <CiMail size={60} className="text-red-400 text-xl"></CiMail>
              </div>
              <p className=" text-sm leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>

            <div className="dark:bg-transparent p-6 rounded-2xl border border-gray-700 dark:text-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">آمارهای دوست داشتنی ما</h2>
                <BsHourglassBottom size={60} className="text-red-400 text-xl">⏳</BsHourglassBottom>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold">+100</h3>
                  <p className=" text-sm">محصول متنوع برایش ما</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">+100</h3>
                  <p className=" text-sm">مشتری راضی و خوشحال</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">+100</h3>
                  <p className=" text-sm">
                    خرید موفق توسط کاربران
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">+100</h3>
                  <p className=" text-sm">
                    خرید موفق توسط کاربران
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
