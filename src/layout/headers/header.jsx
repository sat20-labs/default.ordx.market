import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';
import { useLanguage } from "../../components/context/LanguageContext";
import black_logo from "../../../public/assets/img/logo/logo-black.png" 

const hero_content = {
    login_btn: "Login",
    sign_up_btn: "Connect",
    logout_btn: "Logout",
}
const {login_btn, sign_up_btn, logout_btn}  = hero_content

const HeaderOne = () => {
  const {sticky} = useSticky()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang, toggleLang } = useLanguage();

  return (
    <>
      <header className="h-20">
        <div className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 bg-transparent border-b border-zinc-800 ${sticky ? "bg-zinc-950/95 shadow-lg" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link className="block" href="/">
                  <Image 
                    className={`${sticky ? "hidden" : "block"}`}
                    src={black_logo} 
                    alt="Ordx Market" 
                  />
                  <Image 
                    className={`${sticky ? "block" : "hidden"}`}
                    src={black_logo} 
                    alt="Ordx Market" 
                  />
                </Link>
              </div>
              
              {/* Navigation - Desktop */}
              <div className="hidden lg:block flex-grow">
                <nav className="flex justify-center">
                  <NavMenu />
                </nav>
              </div>
              
              {/* Right buttons */}
              <div className="flex items-center space-x-4">
  
                {/* Language Switch Button */}
                <button
                  onClick={toggleLang}
                  className="inline-flex items-center px-3 py-2 rounded bg-fuchsia-600/80 text-white text-sm hover:bg-gray-600 transition"
                  aria-label="Switch Language"
                >
                  {lang === "zh" ? "English" : "中文"}
                </button>
                {/* Mobile menu button */}
                <button 
                  className="lg:hidden text-white p-2"
                  onClick={() => setSidebarOpen(true)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderOne;