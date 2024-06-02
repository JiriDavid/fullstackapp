import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="mt-0">
      {/* nav up bar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/queentech/image/upload/v1692021184/profile/brokang1_1_zmaurb.svg"
            alt="logo"
            className="h-20 w-20"
          />
        </div>
        <div className="flex-none gap-8">
          {/* notification */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoIosNotificationsOutline size={25} />
                <span className="badge badge-primary badge-xs indicator-item"></span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* chat */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <BsChatDots size={25} />
                <span className="badge badge-primary badge-sm indicator-item">
                  5
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-accent btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* nav below bar */}
      <div className="800px:navbar hidden bg-base-100">
        <div className="navbar-start w-1/3">
          <a className="btn btn-accent text-xl">All Categories</a>
        </div>
        <div className="navbar-center flex-1 hidden lg:flex">
          <div className="relative w-full">
            <input className="input w-full input-bordered rounded-full" />
            <BiSearch
              className="text-grey-400 absolute top-3 right-3"
              size={25}
            />
          </div>
        </div>
        <div className="navbar-end w-1/3">
          <a className="btn btn-neutral">Sell Your Items</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
