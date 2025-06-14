"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, SearchIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center w-full h-16 px-6 border-b bg-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="mr-8">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 12.5H12.5V27.5H9.5V12.5ZM3.5 17H6.5V23H3.5V17ZM15.5 5H18.5V32H15.5V5ZM21.5 8H24.5V35H21.5V8ZM27.5 12.5H30.5V27.5H27.5V12.5ZM33.5 17H36.5V23H33.5V17Z" fill="#0E121B" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 font-medium text-[16px] leading-6">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/workers">Workers</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      {/* Right side actions */}
      <div className="ml-auto me-4 flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <input className="border border-orange-300 rounded-md py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" placeholder="Discover more" value={search} onChange={(e) => setSearch(e.target.value)} />
          <SearchIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* Create Button */}
        <button className="flex font-medium bg-black text-sm text-white p-2 shadow-[0px_1px_2px_rgba(27,28,29,0.48),_0px_0px_0px_1px_#242628] rounded-[10px] hover:bg-gray-900">Create +</button>

        {/* Flag Icon */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z" fill="white" />
          <g clipPath="url(#clip0_21434_55598)">
            <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" fill="#D80027" />
            <path d="M15.4727 16.0859L16.3359 18.7422H19.1289L16.8711 20.3867L17.7344 23.043L15.4727 21.4023L13.2109 23.043L14.0781 20.3867L11.8164 18.7422H14.6094L15.4727 16.0859Z" fill="#FFDA44" />
            <path d="M21.8555 25.4883L21.1953 24.6758L20.2188 25.0547L20.7852 24.1758L20.125 23.3594L21.1367 23.6289L21.707 22.75L21.7617 23.7969L22.7773 24.0664L21.7969 24.4414L21.8555 25.4883Z" fill="#FFDA44" />
            <path d="M23.168 23.1055L23.4805 22.1055L22.625 21.5L23.6719 21.4844L23.9805 20.4844L24.3203 21.4766L25.3672 21.4648L24.5273 22.0898L24.8633 23.082L24.0078 22.4766L23.168 23.1055Z" fill="#FFDA44" />
            <path d="M24.9375 17.3398L24.4766 18.2812L25.2266 19.0117L24.1914 18.8633L23.7305 19.8008L23.5508 18.7695L22.5117 18.6211L23.4414 18.1328L23.2617 17.0977L24.0117 17.8281L24.9375 17.3398Z" fill="#FFDA44" />
            <path d="M21.8828 14.4883L21.8047 15.5313L22.7773 15.9258L21.7578 16.1758L21.6836 17.2227L21.1328 16.332L20.1133 16.582L20.7891 15.7813L20.2344 14.8945L21.207 15.2891L21.8828 14.4883Z" fill="#FFDA44" />
          </g>
          <defs>
            <clipPath id="clip0_21434_55598">
              <rect width="20" height="20" fill="white" transform="translate(10 10)" />
            </clipPath>
          </defs>
        </svg>

        {/* Notification Icon */}
        <div className="relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z" fill="white" />
            <path d="M26 23.75H27.5V25.25H12.5V23.75H14V18.5C14 16.9087 14.6321 15.3826 15.7574 14.2574C16.8826 13.1321 18.4087 12.5 20 12.5C21.5913 12.5 23.1174 13.1321 24.2426 14.2574C25.3679 15.3826 26 16.9087 26 18.5V23.75ZM24.5 23.75V18.5C24.5 17.3065 24.0259 16.1619 23.182 15.318C22.3381 14.4741 21.1935 14 20 14C18.8065 14 17.6619 14.4741 16.818 15.318C15.9741 16.1619 15.5 17.3065 15.5 18.5V23.75H24.5ZM17.75 26.75H22.25V28.25H17.75V26.75Z" fill="#525866" />
            <g filter="url(#filter0_d_21434_55599)">
              <circle cx="26" cy="14" r="2" fill="#FB3748" />
              <circle cx="26" cy="14" r="3" stroke="white" strokeWidth="2" />
            </g>
            <defs>
              <filter id="filter0_d_21434_55599" x="20" y="9" width="12" height="12" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21434_55599" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21434_55599" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Account Dropdown with <img> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex items-center gap-1 text-sm font-medium focus:outline-none border p-1 rounded-[10px]">
              <img src="https://i.pravatar.cc/150?img=32" alt="avatar" className="w-7 h-7 rounded-full object-cover" />
              <p className="text-[14px] leading-5 font-medium text-[#0E121B]">Account</p>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border rounded shadow-md mt-2 p-4 border">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
