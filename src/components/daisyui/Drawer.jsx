export default function Drawer() {
  return (
    <div className="drawer mt-1 z-100">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">

        <label htmlFor="my-drawer-4" className=" swap swap-rotate w-10">
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>صفحه اصلی</a>
          </li>
          <li>
            <a>گیفت کارت ها</a>
          </li>
          <li>
            <a>بلاگ </a>
          </li>
          <li>
            <a>درباره ما</a>
          </li>
          <li>
            <a>تماس با ما</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
