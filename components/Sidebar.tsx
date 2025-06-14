"use client"

import type React from "react"
  import { useState } from "react"
  import { ChevronRight } from "lucide-react"
  
  interface SidebarItem {
    name: string
icon: React.ReactNode
  hasSubmenu?: boolean
}

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Services")

  const sidebarItems: SidebarItem[] = [
    {
      name: "Orders",
      icon: (
        <div className="w-5 h-5 flex items-center justify-center">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3337 9.99984C18.3337 14.5998 14.6003 18.3332 10.0003 18.3332C5.40033 18.3332 1.66699 14.5998 1.66699 9.99984C1.66699 5.39984 5.40033 1.6665 10.0003 1.6665C14.6003 1.6665 18.3337 5.39984 18.3337 9.99984Z" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0914 12.65L10.5081 11.1083C10.0581 10.8416 9.69141 10.2 9.69141 9.67497V6.2583" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </div>
      ),
    },
    {
      name: "Billing",
      icon: (
        <div className="w-5 h-5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_22053_21715)">
              <path d="M1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.5426 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 8.66659 17.7866 7.5938 17.372 6.59286C16.9574 5.59193 16.3497 4.68245 15.5836 3.91637C14.8175 3.15029 13.9081 2.5426 12.9071 2.12799C11.9062 1.71339 10.8334 1.5 9.75 1.5C8.66659 1.5 7.5938 1.71339 6.59286 2.12799C5.59193 2.5426 4.68245 3.15029 3.91637 3.91637C3.15029 4.68245 2.5426 5.59193 2.12799 6.59286C1.71339 7.5938 1.5 8.66659 1.5 9.75Z" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 10.8335H12.5" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 6.6665L10 10.4165" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 6.6665L10 10.4165V14.1665" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_22053_21715">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
      ),
    },
    {
      name: "Services",
      icon: (
        <div className="w-5 h-5 flex items-center justify-center">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.8999H21V5.6999H3V3.8999ZM4.8 7.4999H19.2V9.2999H4.8V7.4999ZM8.4 11.0999H21V12.8999H8.4V11.0999ZM10.2 14.6999H17.4V16.4999H10.2V14.6999ZM8.4 18.2999H13.8V20.0999H8.4V18.2999Z" fill="#0E121B"/>
</svg>

        </div>
      ),
      hasSubmenu: true,
    },
  ]

  return (
    <aside className="ms-16 w-[240px] max-w-[270px] bg-white shadow-md h-[calc(100vh-64px)] sticky top-16 border-r-2">
      <div className="p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors group ${
                activeItem === item.name
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`${activeItem === item.name ? "text-gray-700" : "text-gray-400"}`}>{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {item.hasSubmenu && (
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeItem === item.name ? "text-gray-600" : "text-gray-400"
                  }`}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
