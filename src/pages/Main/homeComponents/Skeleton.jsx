



export default function Skeletonr() {
  return (
    <div className="m-4 mx-auto grid grid-cols-12 gap-4">
    <div
      className="col-span-12 sm:col-span-4 h-[206px] sm:h-auto row-span-2 rounded-lg skeleton"
      ></div>
    <div
      className="col-span-12 sm:col-span-4 h-[206px] rounded-xl skeleton"
      ></div>
    <div
      className="col-span-12 sm:col-span-4 h-[206px] rounded-xl skeleton"
      ></div>
    <div
      className="col-span-12 sm:col-span-8 h-[206px] rounded-xl skeleton"
      ></div>
  </div>
  )
}
