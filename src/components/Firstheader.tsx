import React from "react";
import { LuCircleAlert } from "react-icons/lu"
import { FaCheck } from "react-icons/fa6";

function Firstheader() {
  return (
    <header className="flex justify-between px-10 py-3 text-white bg-[#272343] font-sans sm:flex-col md:flex-row sm:items-center sm:gap-y-3">
      <span className="flex items-center gap-2">
       <FaCheck />
       <p>Free shipping on all orders over $50</p>
       </span>
      <ul className="flex gap-7">
        <li>
        <select className="bg-[#272343]">
          <option>Eng</option>
          <option>Urdu</option>
          <option>Hindi</option>
          <option>Italian</option>
        </select>
        </li>
        <li><a href="/faqs">Faqs</a></li>
        <li className="flex items-center gap-3">
        <LuCircleAlert />
          Need Help
          </li>
      </ul>
    </header>
  );
}

export default Firstheader;
