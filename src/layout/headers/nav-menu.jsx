import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useLanguage } from "../../components/context/LanguageContext";

const NavMenu = () => {
  const { locale } = useLanguage();

  return (
    <>
      <ul className="flex space-x-8 py-2 px-4">
        {menu_data.map((menu_item, i) => (
          <li key={i} className="relative group">
            <Link 
              href={menu_item.link} 
              className="text-zinc-200 hover:text-sky-400 py-2 transition-colors duration-300 text-base sm:text-lg font-medium"
            >
              {locale.menu[menu_item.key]}
            </Link>
            {/* 如果需要下拉菜单，可以取消注释下方代码
            {menu_item.has_dropdown && (
              <ul className="absolute left-0 top-full mt-2 py-2 bg-zinc-800 rounded-lg shadow-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <Link 
                      href={sub_menu.link}
                      className="block px-4 py-2 text-white hover:bg-zinc-700 hover:text-green-400 transition-colors"
                    >
                      {sub_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
