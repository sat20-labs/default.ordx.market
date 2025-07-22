import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";
import { Icon } from '@iconify/react';
import { useLanguage } from "../../components/context/LanguageContext";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const { locale } = useLanguage();
  
  // 切换移动菜单的开关状态
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  
  return (
    <>
      <nav>
        <ul className="space-y-1">
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              <Link href={menu.link}>
                <li className="relative border-b border-zinc-800 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-800 transition">
                  <span className="block text-zinc-400 hover:text-purple-400 transition-colors text-base font-medium">
                    {locale.menu[menu.key]}
                  </span>
                  <Icon icon="lucide:chevrons-right" className="inline-block text-zinc-400 mr-2" />
                </li>
              </Link>
           
              {/* {menu.has_dropdown ? (
                <li className="relative border-b border-zinc-800 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={menu.link}
                      className="block text-zinc-400 hover:text-green-400 transition-colors text-base font-medium"
                    >
                      
                      {locale.menu[menu.key]}
                    </Link>
                    <button
                      className={`w-8 h-8 flex items-center justify-center text-white hover:text-green-400 transition-colors ${
                        navTitle === menu.title ? "rotate-45" : ""
                      }`}
                      onClick={() => openMobileMenu(menu.title)}
                      aria-label="Toggle submenu"
                    >
                      <Icon icon="lucide:chevrons-right" className="inline-block mr-2" />
                    </button>
                  </div>
                  
               
                  <ul
                    className={`pl-4 mt-2 space-y-2 ${
                      navTitle === menu.title ? "block" : "hidden"
                    }`}
                  >
                    {menu.sub_menus?.map((sub, i) => (
                      <li key={i}>
                        <Link 
                          href={sub.link}
                          className="block py-1 text-gray-300 hover:text-green-400 transition-colors text-sm"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li>
                  <Link 
                    href={menu.link}
                    className="block py-1 text-white hover:text-green-400 transition-colors text-base font-medium"
                  >
                    {locale.menu[menu.key]}
                  </Link>
                </li>
              )} */}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
